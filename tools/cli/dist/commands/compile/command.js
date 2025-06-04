import { __awaiter } from "tslib";
import { spawn } from "node:child_process";
import path from 'node:path';
import { createRequire } from 'node:module';
import fs from 'node:fs';
import fsExtra from "fs-extra";
import copyfiles from 'copyfiles';
import chalk from 'chalk';
import { glob } from 'glob';
import chokidar from 'chokidar';
export default {
    command: 'compile',
    describe: 'Compile Package',
    builder: {
        watch: {
            type: 'boolean',
            default: false,
            describe: 'Watch mode',
        },
        clean: {
            type: 'boolean',
            default: true,
            describe: 'Clean old dist',
        },
    },
    handler: (argv) => __awaiter(void 0, void 0, void 0, function* () {
        const packageJson = fsExtra.readJSONSync(path.resolve(process.cwd(), 'package.json'));
        if (packageJson.name === '@gepick/monorepo') {
            try {
                if (argv.clean) {
                    const child = spawn('gepick', ['clean'], { stdio: 'inherit', shell: true });
                    child.on('close', (code) => __awaiter(void 0, void 0, void 0, function* () {
                        if (code === 0) {
                            yield handleCompileRoot(path.resolve("tsconfig.json"));
                            // eslint-disable-next-line no-console
                            console.log(chalk.green('🎉 Successfully compiled all packages'));
                        }
                    }));
                }
                else {
                    yield handleCompileRoot(path.resolve("tsconfig.json"));
                    // eslint-disable-next-line no-console
                    console.log(chalk.green('🎉 Successfully compiled all packages'));
                }
            }
            catch (error) {
                console.error(chalk.red(`❌ Compilation failed: ${error.message}`));
                process.exit(1);
            }
        }
        else {
            handleCompilePackage(packageJson.name, argv);
        }
    }),
};
function handleCompileRoot(tsPath) {
    return __awaiter(this, void 0, void 0, function* () {
        if (fsExtra.existsSync(tsPath)) {
            const tsconfig = fsExtra.readJSONSync(tsPath);
            const refs = tsconfig.references;
            const basicDirs = glob.sync(`packages/basic/*`, { cwd: process.cwd() });
            const lcDirs = glob.sync(`packages/leetcode/*`, { cwd: process.cwd() });
            const toolsDirs = glob.sync(`tools/*`, { cwd: process.cwd() });
            const mockDirs = glob.sync(`mock/*`, { cwd: process.cwd() });
            const basicPackages = getPackageNames(basicDirs, refs, "./packages/basic/");
            const aiPackages = getPackageNames(lcDirs, refs, "./packages/leetcode/");
            const toolsPackages = getPackageNames(toolsDirs, refs, "./tools/");
            const mockPackages = getPackageNames(mockDirs, refs, "./mock/");
            const allPackages = [...basicPackages, ...aiPackages, ...toolsPackages, ...mockPackages];
            // Process packages sequentially
            for (const pkgName of allPackages) {
                yield new Promise((resolve, reject) => {
                    const args = ['run', 'build', '--scope', pkgName, '--include-dependencies'];
                    const child = spawn('lerna', args, { stdio: 'inherit', shell: true });
                    child.on('close', (code) => {
                        if (code === 0) {
                            // eslint-disable-next-line no-console
                            console.log(chalk.green(`✅ Successfully compiled ${pkgName}`));
                            // Copy CSS files if they exist
                            const srcStylePath = path.resolve(process.cwd(), 'src/browser/style');
                            if (fs.existsSync(srcStylePath)) {
                                copyfiles([`src/browser/style/**/*`, `dist/browser`], { up: 2 }, (err) => {
                                    if (err) {
                                        console.warn(chalk.red(`❌ Error copying style files: ${err.message}`));
                                    }
                                    resolve();
                                });
                            }
                            else {
                                resolve();
                            }
                        }
                        else {
                            reject(new Error(`Failed to compile package ${pkgName} with code ${code}`));
                        }
                    });
                    child.on('error', (err) => {
                        reject(new Error(`Failed to compile package ${pkgName}: ${err.message}`));
                    });
                });
            }
        }
        else {
            throw new Error(`tsconfig ${tsPath} not found.`);
        }
    });
}
function getPackageNames(pkgDir, refs, prefix) {
    const pkgs = pkgDir.map(pkg => refs.filter(ref => ref.path.includes(pkg))).flat().map((pkg) => {
        return `@gepick/${pkg.path.split(prefix)[1]}`;
    });
    return pkgs;
}
function handleCompilePackage(packageName, argv) {
    const args = ['-b'];
    if (argv.watch) {
        args.push('--watch');
    }
    const require = createRequire(import.meta.url);
    const tscPath = path.resolve(require.resolve('typescript'), '../../bin/tsc');
    const child = spawn(tscPath, args, { stdio: "inherit", shell: true });
    child.on('close', (code) => {
        if (code === 0) {
            // eslint-disable-next-line no-console
            console.log(chalk.green(`✅ Successfully compiled ${packageName}`));
            // Copy CSS files if they exist
            const srcStylePath = path.resolve(process.cwd(), 'src/browser/style');
            if (fs.existsSync(srcStylePath)) {
                copyfiles([`src/browser/style/**/*`, `dist/browser`], { up: 2 }, (err) => {
                    if (err) {
                        console.warn(chalk.red(`❌ Error copying style files: ${err.message}`));
                    }
                });
            }
        }
        else {
            throw new Error(`Failed to compile package ${packageName} with code ${code}`);
        }
    });
    child.on('error', (err) => {
        console.error(`Failed to compile package ${packageName}: ${err.message}`);
    });
    // Watch CSS files in dev mode
    if (argv.watch) {
        // Copy CSS files if they exist
        const srcStylePath = path.resolve(process.cwd(), 'src/browser/style');
        if (fs.existsSync(srcStylePath)) {
            copyfiles([`src/browser/style/**/*`, `dist/browser`], { up: 2 }, (err) => {
                if (err) {
                    console.warn(chalk.red(`❌ Error copying style files: ${err.message}`));
                }
            });
        }
        if (fs.existsSync(srcStylePath)) {
            let copyTimeout = null;
            const watcher = chokidar.watch(srcStylePath, {
                ignored: /(^|[/\\])\../, // ignore dotfiles
                persistent: true,
                awaitWriteFinish: {
                    stabilityThreshold: 300,
                    pollInterval: 100,
                },
            });
            watcher.on('change', (path) => {
                // eslint-disable-next-line no-console
                console.log(chalk.blue(`🔄 CSS file changed: ${path}`));
                // Clear previous timeout if exists
                if (copyTimeout) {
                    clearTimeout(copyTimeout);
                }
                // Set new timeout
                copyTimeout = setTimeout(() => {
                    copyfiles([`src/browser/style/**/*`, `dist/browser`], { up: 2 }, (err) => {
                        if (err) {
                            console.warn(chalk.red(`❌ Error copying style files: ${err.message}`));
                        }
                        // eslint-disable-next-line style/max-statements-per-line
                    });
                    copyTimeout = null;
                }, 300); // 300ms debounce
            });
            // Clean up watcher when process exits
            process.on('SIGINT', () => {
                if (copyTimeout) {
                    clearTimeout(copyTimeout);
                }
                watcher.close();
                process.exit();
            });
        }
    }
}
//# sourceMappingURL=command.js.map
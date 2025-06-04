import { __awaiter } from "tslib";
import { spawn } from "node:child_process";
import path from "node:path";
import { createRequire } from "node:module";
import fsExtra from 'fs-extra';
import { startVitest } from 'vitest/node';
import { glob } from 'glob';
export default {
    command: 'test',
    describe: 'test Package',
    builder: {
        env: {
            type: 'string',
            default: "all",
            describe: 'env to test',
            choices: ["common", "browser", "node", "all"],
            alias: 'e',
        },
        watch: {
            type: 'boolean',
            default: true,
            describe: "watch test",
            alias: 'w',
        },
    },
    handler: (argv) => __awaiter(void 0, void 0, void 0, function* () {
        const require = createRequire(import.meta.url);
        const vitestCli = path.resolve(require.resolve('vitest').split("index.cjs")[0], './vitest.mjs');
        const curPackage = process.cwd();
        const packageJson = fsExtra.readJSONSync(`${curPackage}/package.json`);
        let vitest;
        if (packageJson.name === '@gepick/monorepo') {
            const watch = argv.watch;
            const env = argv.env;
            if (env !== 'all') {
                const envs = {
                    browser: 'jsdom',
                    common: 'node',
                    node: 'node',
                };
                const testDirs = glob.sync(`packages/{basic,ai}/*/src/${env}`, { cwd: curPackage });
                const testConfigs = testDirs.map((dir) => ({
                    test: {
                        name: `${dir.slice(0, dir.indexOf(`/src/${env}`)).replace(/^.*packages/, '@gepick')}`,
                        dir,
                        environment: envs[env],
                    },
                }));
                vitest = yield startVitest('test', [], {
                    watch,
                    passWithNoTests: true,
                    globals: true,
                    workspace: [
                        ...testConfigs,
                    ],
                });
            }
            else {
                vitest = yield startVitest('test', [], {
                    workspace: [
                        "packages/{basic,ai}/*",
                        {
                            test: {
                                dir: 'src/browser',
                                environment: 'jsdom',
                            },
                        },
                        {
                            test: {
                                dir: "src/common",
                                environment: 'node',
                            },
                        },
                        {
                            test: {
                                dir: "src/node",
                                environment: 'node',
                            },
                        },
                    ],
                });
            }
            if (vitest && !argv.watch) {
                yield vitest.close();
            }
        }
        else {
            const args = ['--config', `${curPackage}/vitest.config.ts`];
            const env = argv.env;
            if (argv.env && argv.env !== 'all') {
                args.push('--project', env);
            }
            if (fsExtra.existsSync(`${curPackage}/vitest.config.ts`)) {
                spawn(vitestCli, args, { stdio: 'inherit', shell: true });
            }
        }
    }),
};
//# sourceMappingURL=command.js.map
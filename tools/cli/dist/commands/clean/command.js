import { __awaiter } from "tslib";
/* eslint-disable no-console */
import path from "node:path";
import { rimraf } from 'rimraf';
import chalk from 'chalk';
import { glob } from 'glob';
export default {
    command: 'clean',
    describe: 'Clean Package(s)',
    builder: {
        target: {
            type: 'string',
            describe: 'Target package to clean',
        },
    },
    handler: (argv) => {
        const target = argv.target;
        const pathsToDelete = [];
        if (['client', 'server', 'debug'].includes(target)) {
            pathsToDelete.push(...[
                `apps/${target}/tsconfig.tsbuildinfo`,
                `apps/${target}/dist`,
                `apps/${target}/lib`,
            ]);
        }
        if (pathsToDelete.length === 0) {
            pathsToDelete.push(...[
                'apps/**/dist',
                'packages/basic/**/dist',
                'packages/leetcode/**/dist',
                'mock/**/dist',
            ]);
        }
        cleanFiles(pathsToDelete);
        function cleanFiles(files) {
            files.forEach((pattern) => __awaiter(this, void 0, void 0, function* () {
                pattern = path.join(process.cwd(), pattern);
                const files = glob.sync(pattern, { cwd: process.cwd() });
                try {
                    if (files.length === 0)
                        return;
                    yield rimraf(pattern, { glob: true });
                    files.forEach((file) => {
                        console.log(chalk.green(`✅ Successfully Deleted ${file}`));
                    });
                }
                catch (err) {
                    console.warn(chalk.red(`❌ Error clean files: ${err.message}`));
                }
            }));
        }
    },
};
//# sourceMappingURL=command.js.map
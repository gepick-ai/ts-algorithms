import { __awaiter } from "tslib";
/* eslint-disable no-console */
import { spawn } from "node:child_process";
import chalk from 'chalk';
export default {
    command: 'build',
    describe: 'Build Package',
    builder: {
        target: {
            type: 'string',
            describe: 'Target package to compile',
        },
    },
    handler: (argv) => __awaiter(void 0, void 0, void 0, function* () {
        const target = argv.target;
        const args = ['run', 'build', '--scope', `@gepick/${target}`, '--include-dependencies'];
        const child = spawn('lerna', args, { stdio: 'inherit', shell: true });
        child.on('close', (code) => {
            if (code !== 0) {
                console.error(chalk.red(`✖ lerna process exited with code ${code}`));
            }
            else {
                console.log(chalk.green('✔ Compile command executed successfully.'));
            }
        });
    }),
};
//# sourceMappingURL=command.js.map
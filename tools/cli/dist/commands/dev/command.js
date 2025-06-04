import { __awaiter } from "tslib";
import { spawn } from "node:child_process";
export default {
    command: 'dev',
    describe: 'dev Package',
    builder: {
        target: {
            type: 'string',
            demandOption: true,
            describe: 'Target package to compile',
        },
    },
    handler: (argv) => __awaiter(void 0, void 0, void 0, function* () {
        const target = argv.target;
        const args = ['run', 'dev', '--scope', `@gepick/${target}`];
        spawn('lerna', args, { stdio: 'inherit', shell: true });
    }),
};
//# sourceMappingURL=command.js.map
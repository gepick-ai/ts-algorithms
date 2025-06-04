import { __awaiter } from "tslib";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from 'node:url';
import yargs from 'yargs';
import { findUp } from 'find-up';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
export function setupCommands(cli) {
    return __awaiter(this, void 0, void 0, function* () {
        const cmds = yield Promise.all([
            import("./commands/clean/command"),
            import("./commands/compile/command"),
            import("./commands/build/command"),
            import("./commands/dev/command"),
            import("./commands/test/command"),
        ]);
        cmds.forEach(cmd => cli.command(cmd.default));
    });
}
export function gepickCli() {
    return __awaiter(this, void 0, void 0, function* () {
        const pkgJsonPath = yield findUp('package.json', { cwd: __dirname });
        if (!pkgJsonPath) {
            throw new Error('Could not find package.json');
        }
        const { version } = yield fs.promises.readFile(pkgJsonPath, 'utf8').then(JSON.parse);
        const cli = yargs(process.argv.slice(2)).scriptName('gepick').version(version);
        yield setupCommands(cli);
        cli
            .parserConfiguration({
            'unknown-options-as-args': true,
        })
            .strictCommands()
            .demandCommand(1, 'Please run a command')
            .fail((msg, err, cli) => {
            process.exitCode = 1;
            if (err) {
                // One of the handlers threw an error:
                console.error(err);
            }
            else {
                // Yargs detected a problem with commands and/or arguments while parsing:
                cli.showHelp();
                console.error(msg);
            }
        })
            .parse();
    });
}
process.on('unhandledRejection', (reason) => {
    throw reason;
});
process.on('uncaughtException', (error) => {
    if (error) {
        console.error('Uncaught Exception: ', error.toString());
        if (error.stack) {
            console.error(error.stack);
        }
    }
    process.exit(1);
});
gepickCli();
//# sourceMappingURL=index.js.map
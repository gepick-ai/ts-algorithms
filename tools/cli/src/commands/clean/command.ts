/* eslint-disable no-console */
import path from "node:path";
import { CommandModule } from 'yargs';
import { rimraf } from 'rimraf';
import chalk from 'chalk';
import { glob } from 'glob';

export default <CommandModule>{
  command: 'clean',
  describe: 'Clean Package(s)',
  builder: {
    target: {
      type: 'string',
      describe: 'Target package to clean',
    },
  },
  handler: (argv) => {
    const target = argv.target as string;
    const pathsToDelete = [];

    if (['client', 'server'].includes(target)) {
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

    function cleanFiles(files: string[]) {
      files.forEach(async (pattern) => {
        pattern = path.join(process.cwd(), pattern);
        const files = glob.sync(pattern, { cwd: process.cwd() });

        try {
          if (files.length === 0)
            return;
          await rimraf(pattern, { glob: true });

          files.forEach((file) => {
            console.log(chalk.green(`✅ Successfully Deleted ${file}`));
          });
        }
        catch (err) {
          console.warn(chalk.red(`❌ Error clean files: ${(err as Error).message}`));
        }
      },
      );
    }
  },
};

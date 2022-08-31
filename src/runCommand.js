/**
 * @see https://stackabuse.com/executing-shell-commands-with-node-js/
 * @see https://www.freecodecamp.org/news/node-js-child-processes-everything-you-need-to-know-e69498fe970a/
 * @see https://nodejs.org/en/knowledge/child-processes/how-to-spawn-a-child-process/
 */
const { exec } = require("child_process");

/**
 * Run the command in parallel shell
 * @param { string } command
 * @returns { boolean } was executed
 */
function runCommand(command = "echo 'command'") {
	exec(command, (error, stdout, stderr) => {
		if (error) {
			console.error(`Failed to execute the command: ${command}`);
			console.error(`error: ${error.message}`);
			throw error;
			// return false;
		}
		if (stderr) {
			console.log(`stderr: ${stderr}`);
			return;
		}
		console.log(`stdout: ${stdout}`);
		return true;
	});
	/**
	 * @example
	 * ```
	 * 	{
	 * 		const command = "npx npx-node-cli";
	 * 		const sucessefull = runCommand(command);
	 * 		if (!sucessefull) { process.exit(-1); }
	 * 	}
	 * ```
	 */
}

module.exports = runCommand;

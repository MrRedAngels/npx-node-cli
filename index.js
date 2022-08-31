#!/usr/bin/env node
console.log("My executer command");

const init = require("./src/init.js");
const cli = require("./src/cli.js");
const log = require("./src/log.js");
const runCommand = require("./src/runCommand.js");

const inputs = cli.args;
const flags = cli.optsWithGlobals();
const { clear, debug } = flags;

(async () => {
	init({ clear });
	debug && log(flags);
	inputs.includes("help") && cli.help();

	// TODO: Call command here
})();

const { program } = require("commander");

{
	// const { Command } = require("commander");
	// const program = new Command();
}

const package_default = require("./getPackage")();
const { name, description, version } = package_default;

program
	.name(name)
	.description(description)
	.version(version, "-v", "output the current version");

/**
 * @see {@link helpers/program-command} for more options
 */
program
	.option("-c, --clear", "clear the terminal before running", false)
	.option("-d, --debug", "output extra debugging", true)
	.option("-n-d, --no-debug", "output extra debugging");

program.parse();

// program.option("--new", "description of new option");

module.exports = program;

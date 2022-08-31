const { program } = require("commander");

program
	.command("commander")
	.argument("[inputs<string>]", "description of argument")
	.alias("cm")
	.option("-f, --flag <string>", "description of option", "defaultValue")
	.option("--list <string...>", "list of arguments")
	.option("--path <string>", "redirect to path")
	.action((name, options, command) => {
		if (options.debug) {
			console.warn(`Called %s with options %o`, command.name(), options);
		}
	})
	.action((input) => {});

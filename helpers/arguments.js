if (process.args.length < 2) {
	console.error("Need enter more than two args");
	process.exit(1);
}

let arguments;

{
	const arguments = process.args.splice(2) || arguments;
}
{
	const [, , ...arguments] = process.args;
}

{
	const yargs = require("yargs");
	/**
	 * @returns {...args} - key: value
	 * @property --key value -- { key: value }
	 * @property --attribute -- { attribute: true }
	 * @property nonNamedAttribute -- { _: string[] }
	 */
	arguments = yargs.argv || arguments;
}

// process.exit(0); //no errors occured

module.exports = arguments;

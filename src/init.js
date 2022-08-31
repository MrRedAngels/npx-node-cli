const welcome = require("cli-welcome");
const unhandled = require("cli-handle-unhandled");
const package_default = require("./getPackage")();

module.exports = ({ clear = false }, package = package_default) => {
	const { name, description, version } = package;
	unhandled();
	welcome({
		title: name,
		tagLine: `by Marcelo Anjos`,
		description: description,
		version: version,
		bgColor: "#36BB09",
		color: "#000000",
		bold: true,
		clear,
	});
};

const path = require("path");

function getPackage() {
	try {
		// process.cwd();
		const package_root = require(path.resolve("package.json"));
		return package_root;
	} catch (error) {
		console.error("No package found");
		console.error(error);
	}
	/**
	 * @param { name, description, version }
	 */
	const package_npx = require("./../package.json");

	package.name = package.name ?? "Empty name";
	package.description = package.description ?? "No description avaliable.";
	package.version = package.version ?? "0.0.0";

	return package_npx;
}

module.exports = getPackage;

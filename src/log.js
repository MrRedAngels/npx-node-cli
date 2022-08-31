const alert = require("cli-alerts");

module.exports = (info) => {
	alert({
		type: `warning`,
		name: `DEBUG LOG`,
		msg: `debugging`,
	});
	console.log(info);
	console.log(
		"---------------------------------------------------------------------------------"
	);
	console.log();
};

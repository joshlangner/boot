/* 
	BOOT
	v 0.1
	by @joshlangner
*/

// Node modules
var fs = require('fs'),
	os = require('os'),
	spawn = require('child_process').spawn;

// colors!
var cc = {
	red: '\u001b[31m',
	yellow: '\u001b[33m',
	green: '\u001b[32m',
	blue: '\u001b[34m', // blah... too dark
	magenta: '\u001b[35m',
	cyan: '\u001b[36m',
	reset: '\u001b[0m'
}

// WIP
function watch() {
	// fs.watchFile
	// npm : watch
	// npm : node-watch
}

// WIP
function convert(o) {
	if (os.platform() == 'win32') {
		return o;
	}
}

var apps = {};

(function init() {
	// get boot target from command line
	var target = process.argv[2] || null;
	console.log(cc.cyan + 'Initating ' + target + cc.reset);

	if (!target) {
		console.log('ERROR: Please specify a configuration to boot.')
		return false;
	} else {
		fs.readFile('configs/'+target+'.json', function(err, data) {
			if (err) {
				console.log(cc.red + 'Sorry, no configuration exists for "' + target +'"' + cc.reset);
				console.log(cc.red + err + cc.reset);
				// throw err;
			} else {
				apps = JSON.parse(data).apps;
				boot(apps, target);
			}
		});
	}
})();

function boot(apps, target) {
	var PLATFORM = {},
		appsArray = Object.keys(apps),
		appIndex = appsArray.length,
		i = 0;

	function start() {
		var a = apps[appsArray[i]],
		delay = a.config.delay;

		console.log(cc.cyan + 'Booting ' + a.app + cc.reset);
		PLATFORM[a] = spawn(a.config.exec, a.config.args, {
			cwd: a.config.path
		});

		PLATFORM[a].stdout.on('data', function(data) {
			console.log(cc.cyan + '//' + a.app + cc.reset);
			console.log(''+data);
		})
		PLATFORM[a].stdout.on('exit', function(exitcode) {
			console.log(cc.red + a.app + ' stopped. Code: ' + exitcode + cc.reset);
		})

		i++;
		if (i < appIndex) {
			setTimeout(start, delay);
		} else {
			console.log(cc.cyan + target + ' loaded' + cc.reset);
		}
	}

	start();
}
Boot
=======

### Status: Under development

Boot is a mini application that will startup, restart, and stop the specified configurations of projects with **a single, simple command**. It is intended for use with node.js-based apps alongside secondary and tertiary services / processes such as Mongo or Redis, and may work for a variety of other command-line apps or scripts that need to run together, e.g. PhantomJS, ImageMagick, Apache, etc.


## Features

* Boot an entire environment with a single command
* Consolidate console outputs into single terminal windows and / or log files
* Designed for node.js, but can work with a variety of other environments (e.g. Java, PHP etc.)
* Target specific components to boot or reboot *coming soon*
* Supports different operating system environments (e.g. Windows vs Linux) *coming soon*
* Hot-boot a component or environment upon changes (a form of 'auto-deploy') *coming soon*

## Instructions

#### Step 1: Create your JSON config file inside the configs folder and save it as a `myapp.json` file. See "sample.json.sample" as an example. 

*NOTICE: When booting multiple apps, the script will boot them in the order that they appear in the file.*

Each app configuration looks like this:

```json
{	"app": "mongodb",
	"config": {
		"path": "c:\\mongodb\\bin",
		"exec": "mongod.exe",
		"args": ["--dbpath", "c:\\mongodb\\data"],
		"delay": 5000
	}
}
```


* `app` - Human-readable name of the app, for output in the console.
* `path` - Absolute path to the directory in which the script is to be executed
* `exec` - The program or base command to execute
* `args` - An array of arguments to be applied to exec command. In the example above, this would appear as `mongod.exe --dbpath c:\mongodb\data` when executed. 
* `delay` - how much time before the next app comes up.


#### Step 2: Then from the command line, boot your config:
```
D:\boot> node boot myapp
```
This will boot the 'myapp.json' app. To terminate the config, simply "CTRL-C" and all processes will terminate.

Boot
=======

### Status: Under development

Boot is a mini application that will boot, reboot, and stop the specified configurations of projects. It includes support for secondary and tertiary services / processes such as Mongo or Redis.

## Features

* Boot an entire environment with a single command
* Target specific components to boot or reboot
* Consolidate console outputs into single terminal windows and / or log files
* Automatically adjusts for operating system environments (e.g. Windows vs Linux)
* Designed for node.js, but can work with a variety of other environments (e.g. Java, PHP etc.)
* Hot-boot a component or environment upon changes (a form of 'auto-deploy')

Key Instructions
------------
Create your config file inside the configs folder. From the command line, you just need to run:

```
node boot [myapp]
```
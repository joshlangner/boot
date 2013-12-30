Boot
=======

### Status: Under development

Boot is a mini application that will boot, reboot, and stop the specified configurations of projects. It includes support for secondary and tertiary services / processes such as Mongo or Redis.

## Features

* Boot an entire environment with a single command
* Consolidate console outputs into single terminal windows and / or log files
* Designed for node.js, but can work with a variety of other environments (e.g. Java, PHP etc.)
* Target specific components to boot or reboot [coming soon]
* Supports different operating system environments (e.g. Windows vs Linux) [coming soon]
* Hot-boot a component or environment upon changes (a form of 'auto-deploy') [coming soon]

Key Instructions
------------
Create your config file inside the configs folder. Then from the command line, boot your config:

```
D:\> node boot [myapp]
```
To terminate the config, simply "CTRL-C" and all processes will terminate.
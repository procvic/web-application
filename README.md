# Procvic.cz

## Technology behind

This application is quite simple SPA client built with these technologies:

* AngularJS
* Bootstrap
* Font Awesome
* Grunt
* Bower
* SASS

There is also quite a lot of plugins or modules in use. Names of all 3<sup>rd</sup> party libraries will be listed after
the initial version will be tagged.

## Getting started

_Considering that you have **npm** and **Ruby** installed on your machine._

Install **Bower** on your machine to get all used libraries and plugins running this command:

```bash
npm install bower
```
_Probably **sudo** required_

Now you should install all dependencies using Bower.

```bash
bower update
```

Install **GruntJS** on your machine (the best option is to install it globally):

```bash
npm install -g grunt
```

From the project's directory where the [package.json][] file is located, install **GruntJS** plugins running 
this command:

```bash
npm update
```

Then you will be able to use `grunt` command to build application. After completed, new build will be saved in _build_ 
folder.

**Note: You have to manually change the base href option to "/".**
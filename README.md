# grunt-task-file

> Run a grunt task over a single file

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-task-file --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-task-file');
```

## The "file" task

### Overview

There are many tasks in grunt which run over your source files ([jshint](https://github.com/gruntjs/grunt-contrib-jshint), 
[less](https://github.com/gruntjs/grunt-contrib-less), ...) To run those tasks you need to provide the source files
which will be affected by the tasks, and you have to do it inside grunt config. However, there are some scenarios where 
you would like to run the task only over a file and don't want to modify the existing grunt configuration. Grunt file comes
to the rescue.

The only thing you need to do is run the file task, specifying the underlying task you want to run and the target file of the task.

### Usage Examples

Imagine you want to run `jshint` task over only one file. What you have to do is only run in console:
```shell
grunt file:jshint --file some-file.js
```
without changing anything in Grunt configuration. This won't affect other configuration targets for the underlying task.

It is possible to set specific configuration for the underlying task, when running it over a single file. To do so,
in the config, a `file` target must be specified.
```js
grunt.initConfig({
  jshint: {
    options: {
      curly: true,
      eqeqeq: true,
      eqnull: true,
      browser: true,
      globals: {
        jQuery: true
      },
    },
    all: { // Default task for all files
      files: {
        src: ['**/*.js']
      }
    },
    file: { // Custom task for one file. 
      options: { // You can modify some options when running the task over a single file
        curly: false 
      }
      // It is not needed to specify files, as it will be done from the shell
    }
```


## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
* v0.1.0 Initial version

/*
 * grunt-file
 * https://github.com/jalopez/grunt-file
 *
 * Copyright (c) 2015 Javier López Pardo
 * Licensed under the APACHE license.
 */

'use strict';

module.exports = function(grunt) {
  grunt.registerMultiTask('file', 'Run a grunt task over a single file. Use: >grunt file:[task] --file [filepath]',
    function(taskName) {
      var filename = grunt.option('file');
      grunt.config.set(taskName + '.file.src', [filename]);
      grunt.log.writeln('Running grunt taskName:file over ' + filename);
      grunt.task.run(taskName + ':file');
    }
  );

};

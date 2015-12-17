/*
 * grunt-task-file
 * https://github.com/jalopez/grunt-task-file
 *
 * Copyright (c) 2015 Javier López Pardo
 * Licensed under the APACHE license.
 */

'use strict';

module.exports = function(grunt) {
  grunt.registerTask('file', 'Run a grunt task over a single file. Use: >grunt file:[task] --file [filepath]',
    function(taskName) {
      var filename = grunt.option('file');
      grunt.config.set(taskName + '.file.src', [filename]);
      grunt.log.writeln('Running ' + 'grunt '.green + taskName.green + ':file'.green + ' over ' + filename.green);
      grunt.task.run(taskName + ':file');
    }
  );

};

var path = require('path');

module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    babel: {
      options: {
      },
      dist: {
        expand: true,
        cwd: 'src',
        src: ['**/*.js', '!**/__tests__/**'],
        dest: './'
      }
    }
  });

  // Default task(s).
  grunt.registerTask('default', []);
};
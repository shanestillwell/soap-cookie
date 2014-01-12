module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    bump: {
      options: {
        pushTo: 'origin',
        publishNpm: true
      }
    },
  });

  grunt.registerTask('default', 'mochaTest');

  /**
   * We only want to run tests at this point, not coverage
   */
  grunt.registerTask('test', ['watch:test']);

};

module.exports = function (grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    cwd: '../.',
    nodemon: {
      debug: {
        options: {
          nodeArgs: ['--debug']
        }
      },
      watch: ['./client/src/app/test.js', './server/app.js', './server/lib/**/*']
    }
  });

  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-stylus');
  grunt.loadNpmTasks('grunt-nodemon');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-concurrent');
  grunt.loadNpmTasks('grunt-node-inspector');

  grunt.registerTask('compile', ['browserify', 'stylus']);
  // grunt.registerTask('default', ['compile']);
  grunt.registerTask('default', ['nodemon']);
};

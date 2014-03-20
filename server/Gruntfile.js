module.exports = function (grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    browserify: {
      main: {
        files: {
          '../client/build/scripts.js': '../client/entry.js',
        },
      },
    },

    nodemon: {
      main: {},
      debug: {
        options: {
          nodeArgs: ['--debug']
        }
      }
    },

    watch: {
      app: {
        files: ['./lib/**/*', '../client/src/**/*'],
        tasks: ['browserify'],
        options: {
          interrupt: true
        }
      },
      styles: {
        files: 'assets/stylesheets/**/*',
        tasks: ['stylus'],
        options: {
          interrupt: true
        }
      }
    },

    concurrent: {
      main: {
        tasks: ['nodemon', 'watch'],
        options: {
          logConcurrentOutput: true
        }
      },

      debug: {
        tasks: ['nodemon:debug', 'watch', 'node-inspector'],
        options: {
          logConcurrentOutput: true
        }
      }
    },

    'node-inspector': {
      main: {}
    }
  });

  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-stylus');
  grunt.loadNpmTasks('grunt-nodemon');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-concurrent');
  grunt.loadNpmTasks('grunt-node-inspector');

  grunt.registerTask('compile', ['browserify', 'stylus']);
  grunt.registerTask('server', ['browserify', 'concurrent']);
  grunt.registerTask('default', ['browserify', 'concurrent:debug']);
};

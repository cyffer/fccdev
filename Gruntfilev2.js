module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
          all: {
               files: 'tribute.html',
             options: {
                    livereload: true
                }
            }
            },
            options: {
                'spawn': true,
                'interrupt': false,
                'debounceDelay': 500,
                'interval': 100,
                'event': 'all',
                'reload': false,
                'forever': true,
                'dateFormat': null,
                'atBegin': false,
                'livereload': false,
                'cwd': process.cwd(),
                'livereloadOnError': true
            }
        },
        connect: {
            task: {
                src: ['source'], 
                dest: 'destination'
            },
            options: {
                'port': 8000,
                'protocol': 'http',
                'hostname': '0.0.0.0',
                'base': '.',
                'directory': null,
                'keepalive': false,
                'debug': false,
                'livereload': false,
                'open': false,
                'useAvailablePort': false,
                'onCreateServer': null,
                'middleware': []
            }
        }
    });

      // grunt-open will open your browser at the project's URL
    open: {
      all: {
        // Gets the port from the connect configuration
        path: 'http://localhost:<%= express.all.options.port%>'
      }
    }
  });

  // Creates the `server` task
  grunt.registerTask('server', [
    'express',
    'open',
    'watch'
  ]);



    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');

    grunt.registerTask('default', ['watch', 'connect']);
};
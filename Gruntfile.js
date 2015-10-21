module.exports = function(grunt){
    grunt.initConfig({
        coffee: {
            compile: {
                files: {
                    'toggleForm.js': 'coffee/toggleForm.js.coffee'
                }
            }
        },
        uglify: {
          build: {
            files: {
              'toggleForm.min.js': ['toggleForm.js']
            }
          }
        }
    })

    grunt.loadNpmTasks('grunt-contrib-coffee');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.registerTask('default', ['coffee', 'uglify']);
}

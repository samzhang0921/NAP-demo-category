module.exports = function(grunt){
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
    

  grunt.initConfig({
//    less: {
//      build: {
//        files: {
//          'public/build/style.css': 'public/less/style.less'
//        }
//      }
//    },
    sass: {
         build: {
                options: {
//                    sourceMap: true,
//                    outputStyle: 'expanded'
                },
                files: {
                    'public/build/style.css': 'public/css/style.scss'
                }
            },
    
    },
    uglify: {
      build: {
        files: {
          'public/build/build-min.js': 'public/javascripts/build/build.js'
        }
      }
    },
    concat: {
      options: {
        separator: ';',
      },
      build: {
        src: ['public/javascripts/main.js','public/javascripts/leftNav.js'],
        dest: 'public/javascripts/build/build.js',
      },
    },
      
    jshint: {
            files: ['Gruntfile.js', 'public/javascripts/**/*.js'],
            options: {
                    globals: {
                    jQuery: true
                }
            }
    },
      
    watch:{
         sass: {
                files: ['public/css/**/*.scss'],
                tasks: ['sass:build']
            },
        
        js: {
                files: ['Gruntfile.js', 'public/javascripts/**/*.js'],
                tasks: ['jshint', 'concat:build', 'uglify:build']
            },
    }
  });

  grunt.registerTask('default', ['sass', 'concat', 'uglify','watch','jshint']);
};

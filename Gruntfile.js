module.exports = function(grunt){
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.initConfig({
    less: {
      build: {
        files: {
          'public/build/style.css': 'public/less/style.less'
        }
      }
    },
    sass: {
      target: {
        files: {
          'public/build/style.css': 'public/css/style.scss'
        }
      }
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
    watch:{
         sass: {
                files: ['src/scss/**/*.scss'],
                tasks: ['sass:build',]
            },
    }
  });

  grunt.registerTask('default', ['less', 'concat', 'uglify','watch']);
};

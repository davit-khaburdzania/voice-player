module.exports = function (grunt) {
  grunt.initConfig({
    jshint: {
      all: [
        'routes/*.js',
        'public/js/*.js'
      ],
      options: {
        curly: true,
        eqeqeq: true,
        expr: true,
        indent: 2,
        quotmark: 'single',
        trailing: true,
        funcscope: true,
        asi: false,
        boss: true,
        unused: false,
        eqnull: false,
        es5: false,
        node: true,
        forin: false,
        onevar: true,
        evil: true,
        immed: false,
        laxbreak: false,
        laxcomma: true,
        noarg: true,
        newcap: true,
        strict: true,
        noempty: true,
        plusplus: false,
        undef: false,
        sub: true,
        white: false,
        loopfunc: true,
        globals: {
          APP_PATH: true
        }
      }
    },
    sass: {
      dist: {
        files: {
          'public/css/main.css': 'public/scss/main.scss'
        }
      }
    },
    watch: {
      sass: {
        files: 'public/scss/*.scss',
        tasks: 'sass'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
};



module.exports=function(grunt) {



  grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),

     //The grunt task senario
      cssmin: {
        target: {
          files: [{
            expand: true,
            cwd: 'css',
            src: ['*.css', '!*.min.css'],
            dest: 'css',
            ext: '.min.css'
          }]
        }
      }

  });
  //loading the grunt task plugin
 grunt.loadNpmTasks('grunt-contrib-cssmin');
};

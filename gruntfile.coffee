module.exports = (grunt) ->
  
  grunt.initConfig
    pkg: grunt.file.readJSON('package.json')
    coffee:
      compile:
        options:
          banner: '/*! <%= pkg.name %> <%= pkg.version %> */\n'
          join: yes
        files:
          'lib/<%= pkg.name %>.js': [
            'src/<%= pkg.name %>.coffee'
          ]
    bumpup: 'package.json'
    watch:
      coffeescripts:
        files: [
          'src/<%= pkg.name %>.coffee'
        ]
        tasks: ['coffee']
        options:
          livereload: true

  grunt.loadNpmTasks 'grunt-contrib-coffee'
  grunt.loadNpmTasks 'grunt-contrib-watch'
  grunt.loadNpmTasks 'grunt-bumpup'

  grunt.registerTask 'default', ['watch']
  grunt.registerTask 'release', ['bump', 'coffee']

  grunt.registerTask 'bump', (type) ->
    type = if type then type else 'patch'
    grunt.task.run "bumpup:#{type}"

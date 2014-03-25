'use strict';

module.exports = function(grunt) {

    require('load-grunt-tasks')(grunt); // load all grunt tasks

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        jshint: {
            options: {
                jshintrc: '.jshintrc',
                reporter: require('jshint-stylish')
            },
            all: [
                'app.js',
                'config.js',
                'Gruntfile.js',
                'controllers/{,*/}*.js',
                'routes/{,*/}*.js'
            ]
        },

        express: {
            options: {
                port: process.env.PORT || 9000
            },
            dev: {
                options: {
                    script: 'app.js'
                }
            }
        },

        watch: {
            emberTemplates: {
                files: 'public/js/templates/**/*.hbs',
                tasks: ['emberTemplates'],
                options: {
                    livereload: true
                }
            },
            jade: {
                files: ['views/**'],
                options: {
                    livereload: true,
                },
            },

            css: {
                files: ['public/css/**'],
                options: {
                    livereload: true
                }
            },

            js: {
                files: ['public/js/**'],
                options: {
                    livereload: true
                }
            },

            express: {
                files: [
                    'app.js',
                    'config.js',
                    'controllers/**',
                    'routes/**'
                ],
                tasks: ['express:dev'],
                options: {
                    spawn: false,
                    livereload: true
                }
            }
        },

        open: {
            server: {
                url: 'http://localhost:<%= express.options.port %>'
            }
        },

        emberTemplates: {
            options: {
                templateName: function(sourceFile) {
                    var templatePath = 'public/js/templates/';
                    return sourceFile.replace(templatePath, '');
                }
            },
            compile: {
                files: {
                    'public/js/templates/compiled-templates.js': 'public/js/templates/{,*/}*.hbs'
                }
            }
        },

        shell: {
            mongo: {
                command: 'ulimit -n 2048 && mongod --fork --logpath db/mongodb.log --dbpath db/'
            }
        }

    });

    grunt.registerTask('default', [
        'shell:mongo',
        'emberTemplates',
        'express',
        // 'open',
        'watch'
    ]);

};
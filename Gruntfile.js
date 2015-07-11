module.exports = function(grunt) {

    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        useminPrepare: {
            html: 'src/index.html',
            options: {
                dest: 'build'
            }
        },
        usemin: {
            html:['build/index.html']
        },
        copy: {
            html: {
                src: 'src/index.html',
                dest: 'build/index.html'
            }
        },
        sass: {
            dist: {
                options: {
                    sourcemap: 'none',
                    style: 'compressed'
                },
                files: {
                    'build/css/styles.css' : 'src/sass/styles.scss'
                }
            }
        },
        jshint: {
            files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
            options: {
                globals: {
                    jQuery: true
                }
            }
        },
        cssmin: {
            build: {
                files: {'build/css/styles.css': ['build/css/styles.css']}
            }
        },
        watch: {
            files: ['<%= jshint.files %>'],
            tasks: ['jshint']
        },
        clean: {
            before: ['build'],
            after: ['.tmp', '.sass-cache']
        },
        ngtemplates: {
            app: {
                cwd: 'src',
                src: 'app/**/templates/**.html',
                dest: '.tmp/templates.js',
                options: {
                    htmlmin: { collapseWhitespace: true, collapseBooleanAttributes: true },
                    usemin: 'build/js/scripts.js'
                }
            }
        }
    });

    grunt.registerTask('default', [
        'clean:before',
        'jshint',
        'copy:html',
        'sass',
        'cssmin',
        'useminPrepare',
        'ngtemplates',
        'concat',
        'uglify',
        'usemin',
        'clean:after'
    ]);

};
"use strict";

module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            files: '<config:lint.files>',
            tasks: 'default'
        },
        mochaTest: {
            test: {
                options: {
                    reporter: process.env.TEST_REPORTER || 'spec',
                    timeout: 240000
                },
                src: ['test/**/*.js']
            }
        },
        jshint: {
            files: ['GruntFile.js', 'lib/**/*.js', 'test/**/*.js'],
            options: {jshintrc: ".jshintrc"}
        }
    });

    // Add our custom tasks.
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-mocha-test');

    // Default task.
    grunt.registerTask('default', ['jshint', 'mochaTest']);

};

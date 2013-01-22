module.exports = function(grunt) {
    'use strict';

// Project configuration.
grunt.initConfig({
    meta : {
        src   : ['src/**/*.js', '!src/thirdparty/**', '!src/extensions/**/unittest-files/**/*.js'],
        specs : 'test/headless/**/*.js'
    },
    watch: {
        test : {
            files: ['<%= meta.src %>','<%= meta.specs %>'],
            tasks: 'test'
        }
    },
    jasmine : {
        src : 'brackets.js',
        options : {
            specs : '<%= meta.specs %>',
            vendor : [
                'src/thirdparty/jquery-1.7.js',
                'src/thirdparty/CodeMirror2/lib/codemirror.js'
            ],
            template : require('grunt-template-jasmine-requirejs'),
            templateOptions: {
                requireConfig : {
                    baseUrl: 'src',
                    paths: {
                        "test" : "test",
                        "perf" : "test/perf",
                        "spec" : "test/spec",
                        "text" : "thirdparty/text",
                        "i18n" : "thirdparty/i18n"
                    }
                }
            }
        }
    },
    jshint: {
        all: [
            'Gruntfile.js',
            '<%= meta.src %>',
            '<%= meta.specs %>'
        ],
        options: {
            jshintrc: '.jshintrc'
        }
    }
});

grunt.loadNpmTasks('grunt-contrib-jasmine');
grunt.loadNpmTasks('grunt-contrib-jshint');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-template-jasmine-requirejs');

grunt.registerTask('test', ['jshint', 'jasmine']);

// Default task.
grunt.registerTask('default', ['test']);
};
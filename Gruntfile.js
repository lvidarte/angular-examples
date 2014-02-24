'use strict';

module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-contrib-connect');

    grunt.initConfig({
        connect: {
            server: {
                options: {
                    port: 5000,
                    hostname: 'localhost',
                    base: 'public',
                    keepalive: true,
                }
            }
        }
    })

    grunt.registerTask('serve', function(target) {
        grunt.task.run(['connect:server']);
    });
};

// Karma configuration
// Generated on Sat Jul 18 2015 14:53:37 GMT+0200 (Střední Evropa (letní čas))

module.exports = function (config) {
    config.set({

            // base path that will be used to resolve all patterns (eg. files, exclude)
            basePath: './',


            // frameworks to use
            // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
            frameworks: ['jasmine'],


            // list of files / patterns to load in the browser
            files: [
                'bower_components/angular/angular.js',
                'bower_components/angular-mocks/angular-mocks.js',
                'bower_components/angular-ui-router/release/angular-ui-router.js',
                'bower_components/angular-bootstrap/ui-bootstrap.js',
                'bower_components/angular-loading-bar/build/loading-bar.js',
                'bower_components/ngstorage/ngStorage.js',
                'bower_components/angular-messages/angular-messages.js',
                'bower_components/angular-svg-round-progressbar/build/roundProgress.js',
                'src/app/app.js',
                'src/app/**/*.module.js',
                'src/app/**/*.js',
                'src/common/**/*.js',
                'tests/unit/**/*.js'
            ],


            // list of files to exclude
            exclude: [],


            // preprocess matching files before serving them to the browser
            // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
            preprocessors: {},


            // test results reporter to use
            // possible values: 'dots', 'progress'
            // available reporters: https://npmjs.org/browse/keyword/karma-reporter
            reporters: ['progress'],


            // web server port
            port: 9876,


            // enable / disable colors in the output (reporters and logs)
            colors: true,


            // level of logging
            // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
            logLevel: config.LOG_INFO,


            // enable / disable watching file and executing tests whenever any file changes
            autoWatch: false,


            // start these browsers
            // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
            browsers: ['Chrome', 'Firefox'],


            plugins: [
                'karma-jasmine',
                'karma-chrome-launcher',
                'karma-firefox-launcher',
                'angular-mocks'
            ],


            // Continuous Integration mode
            // if true, Karma captures browsers, runs the tests and exits
            singleRun: false
        }
    )
};

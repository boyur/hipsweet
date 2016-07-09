'use strict';

var gulp = require('gulp'),
	browserSync = require('browser-sync'),
	reload = browserSync.reload;

var config = {
		server: {
			baseDir: "."
		},
		open: false
	};

gulp.task('webserver', function () {
	browserSync(config);
});

gulp.task('default', function() {
    // place code for your default task here
});
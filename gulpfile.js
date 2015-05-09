var gulp = require('gulp');
var gulpCopy = require('gulp-copy');
var gutil = require('gulp-util');
var nodemon = require('gulp-nodemon');
var webpack = require('gulp-webpack-build');
var path = require('path');
var del = require('del');
var gutil = require('gulp-util');
var webpackConfigPathProd = './webpack.config.prod.js';
var webpackConfigPathDev = './webpack.config.dev.js';

gulp.task('default', ['nodemon:app']);

gulp.task('nodemon:app', ['webpack:dev'], function () {
    nodemon({
      script: './start.js',
      ignore: ['build/**'],
      ext: 'js'
    });
});

gulp.task('build', ['webpack:prod']);

gulp.task('webpack:prod', ['copy'], function() {
    gulp.src(path.resolve(webpackConfigPathProd))
        .pipe(webpack.compile());
});

gulp.task('webpack:dev', ['copy'], function(cb) {
    gulp.src(path.resolve(webpackConfigPathDev))
        .pipe(webpack.compile(cb))
});

gulp.task('copy', ['clean'], function (cb) {
    gulp.src('images/**')
        .pipe(gulpCopy('build/assets/'))
        .on('end', cb);
});

gulp.task('clean', function (cb) {
    del(['build'], cb);
});

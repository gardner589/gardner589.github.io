/*jslint node: true */
'use strict';

const gulp = require('gulp');
const uglify = require('gulp-uglify');
const gulpSequence = require('gulp-sequence');
const rename = require('gulp-rename');
const sourcemaps = require('gulp-sourcemaps');
const browserify = require('browserify');
const babelify = require('babelify');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const vueify = require('vueify');


gulp.task('scripts', () => {

  return ['main.js'].map( entry => {
    return browserify({
      entries: ['js/' + entry],
      transform: [ vueify, [babelify, { presets: ['env']}] ]
    })
    .bundle()
    .pipe( source(entry) )
    .pipe( rename({extname: '.min.js'}) )
    .pipe( buffer() )
    .pipe( sourcemaps.init({loadmaps: true}) )
    .pipe( uglify() )
    .pipe( sourcemaps.write('./') )
    .pipe( gulp.dest( './js/compiled') )
  })

});

gulp.task('watch', function () {

  gulp.watch(['js/*.js', 'js/Components/*.vue'], () => {
    gulpSequence('scripts')((err) => {
      if (err) console.log(err);
    });
  });

});

gulp.task('default', ['scripts']);

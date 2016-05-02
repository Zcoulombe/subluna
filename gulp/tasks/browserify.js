var gulp        = require('gulp'),
    sourcemaps  = require('gulp-sourcemaps'),
    uglify      = require('gulp-uglify'),
    source      = require('vinyl-source-stream'),
    browserify  = require('browserify')

module.exports = function (){
  // Bundle dependancies into a single file
  return browserify('src/subluna.js')
    .bundle()
    .pipe(source('subluna.js'))
    .pipe(gulp.dest('build'))
}

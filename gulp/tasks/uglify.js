var gulp        = require('gulp'),
    gutil       = require('gulp-util'),
    sourcemaps  = require('gulp-sourcemaps'),
    uglify      = require('gulp-uglify'),
    source      = require('vinyl-source-stream'),
    buffer      = require('vinyl-buffer'),
    browserify  = require('browserify');

module.exports = function (){
  // Bundle dependancies into a single file
  return browserify('src/subluna.js')
    .bundle()
    .pipe(source('subluna.min.js'))
    .pipe(buffer())
    // Create uglified version with source map
    .pipe(sourcemaps.init({loadMaps: true}))
      .pipe(uglify())
      .on('error',gutil.log)
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('build'));
}

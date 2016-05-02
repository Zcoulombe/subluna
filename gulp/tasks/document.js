var gulp    = require('gulp'),
    gulit   = require('gulp-util'),
    markdox = require('gulp-markdox'),
    concat  = require('gulp-concat');

module.exports = function(){
  return gulp.src("./src/*.js")
      .pipe(markdox())
      .pipe(concat("doc.md"))
      .on('error',gulit.log)
    .pipe(gulp.dest("./doc"));
}

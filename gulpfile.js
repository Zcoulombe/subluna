var gulp = require('./gulp')([
  "test",
  'browserify',
  'uglify',
  'document'
]);

gulp.task('build',['browserify','uglify','document']);
gulp.task('default',['build']);

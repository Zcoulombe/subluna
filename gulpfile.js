var gulp = require('./gulp')([
  "test",
  'browserify',
  'uglify'
]);

gulp.task('build',['browserify','uglify']);
gulp.task('default',['build']);

var gulp = require('gulp');
var gulpNgConfig = require('gulp-ng-config');
var b2v = require('buffer-to-vinyl');

gulp.task('env:prod', function() {
  var json = JSON.stringify({
    'baseParams': {
      apiUrl: 'https://bags-api.zoltu.com/api/',
    }
  });
  return createConst(json);
});

gulp.task('env:dev', function() {
  var json = JSON.stringify({
    'baseParams': {
      apiUrl: 'https://bags-api-test.zoltu.com/api/',
    }
  });
  return createConst(json);
});

gulp.task('env:local', function() {
  var json = JSON.stringify({
    'baseParams': {
      apiUrl: 'https://bags-api-test.zoltu.com/api/',
    }
  });
  return createConst(json);
});

function createConst(json) {
  return b2v.stream(new Buffer(json), 'baseParams.constant.js')
  .pipe(gulpNgConfig('envConst'))
  .pipe(gulp.dest('src/app/constants'));
}
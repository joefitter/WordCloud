'use strict';

import gulp from 'gulp';

gulp.task('api', () => {
  return gulp.src('./api/**/*')
    .pipe(gulp.dest('./dist/api'));
});

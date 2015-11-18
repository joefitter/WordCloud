'use strict';

import gulp from 'gulp';

gulp.task('test', [
  'lint',
  'mocha'
]);

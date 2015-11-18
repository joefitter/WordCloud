'use strict';

import gulp from 'gulp';

gulp.task('build', [
  'clean',
  'html',
  'api',
  'styles',
  'scripts',
  'test'
]);

'use strict';

import gulp from 'gulp';

gulp.task('build', [
  'html',
  'api',
  'styles',
  'scripts',
  'test'
]);

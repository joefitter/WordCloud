'use strict';

import gulp from 'gulp';
import jshint from 'gulp-jshint';
import jscs from 'gulp-jscs';
import stylish from 'jshint-stylish';
import { lint as config } from '../config';

gulp.task('jshint', () => {
  return gulp.src(config.src)
    .pipe(jshint())
    .pipe(jshint.reporter(stylish))
    .pipe(jshint.reporter('fail'));
});

gulp.task('jscs', () => {
  return gulp.src(config.src)
    .pipe(jscs())
    .pipe(jscs.reporter())
    .pipe(jscs.reporter('fail'));
});

gulp.task('lint', [
  'jscs',
  'jshint'
]);

'use strict';

import gulp from 'gulp';
import sass from 'gulp-sass';
import { sass as config } from '../config';
import { reload } from 'browser-sync';

gulp.task('copy-styles', ['clean'], () => {
  return gulp.src('./src/*.css')
    .pipe(gulp.dest('./dist'));
});

gulp.task('styles', ['copy-styles', 'sass']);

gulp.task('sass', () => {
  gulp.src(config.src)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(config.dest))
    .pipe(reload({ stream: true }));
});

'use strict';

import gulp from 'gulp';
import sass from 'gulp-sass';
import sourcemaps from 'gulp-sourcemaps';
import { sass as config } from '../config';
import { reload } from 'browser-sync';

gulp.task('styles', ['sass']);

gulp.task('sass', () => {
  gulp.src(config.src)
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'compressed'})
      .on('error', sass.logError))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(config.dest))
    .pipe(reload({ stream: true }));
});

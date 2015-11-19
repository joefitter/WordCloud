'use strict';

import gulp from 'gulp';
import { html as config } from '../config';
import { reload } from 'browser-sync';

gulp.task('html', () => {
  return gulp.src(config.src)
    .pipe(gulp.dest(config.dest))
    .pipe(reload({ stream: true }));
});

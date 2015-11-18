'use strict';

import gulp from 'gulp';
import mocha from 'gulp-mocha';
import { mocha as config } from '../config';

gulp.task('mocha', () => {
  return gulp.src(config.src, config.options)
    .pipe(mocha({ reporter: 'spec' }));
});

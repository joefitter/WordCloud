'use strict';

import gulp from 'gulp';
import browserSync from 'browser-sync';
import { watch as config } from '../config';
import bundler from '../helpers/bundler';

gulp.task('watch', ['build'], cb => {
  browserSync({
    server: {
      baseDir: 'dist'
    }
  });

  bundler(true).on('update', () => {
    gulp.start('scripts');
  });
  gulp.watch('./src/*.html', ['html']);
  gulp.watch('./src/**/*.scss', ['sass']);
});

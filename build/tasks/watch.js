'use strict';

import gulp from 'gulp';
import browserSync from 'browser-sync';
import { watch as config } from '../config';
import bundler from '../helpers/bundler';

gulp.task('setEnvToDev', cb => {
  process.env.BROWSERIFYSWAP_ENV = 'dev';
  cb();
});

gulp.task('watch', ['setEnvToDev', 'build'], cb => {
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

'use strict';

import gulp from 'gulp';
import { scripts as config } from '../config';
import sourcemaps from 'gulp-sourcemaps';
import buffer from 'vinyl-buffer';
import source from 'vinyl-source-stream';
import gutil from 'gulp-util';
import { reload } from 'browser-sync';
import bundler from '../helpers/bundler';

const handleErrors = (...args) => {
  delete args[0].stream;
  gutil.log.apply(null, args);
  this.emit('end');
};

function bundle(cb, watch) {
  return bundler(watch).bundle()
    .on('error', handleErrors)
    .pipe(source(config.source))
    .pipe(buffer())
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(config.dest))
    .on('end', cb)
    .pipe(reload({ stream: true }));
}

gulp.task('scripts', cb => {
  process.env.BROWSERIFYSWAP_ENV = 'dist';
  bundle(cb, true);
});

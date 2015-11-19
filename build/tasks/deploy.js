'use strict';

import gulp from 'gulp';
import ftp from 'vinyl-ftp';
import gutil from 'gulp-util';
import config from '../_creds';

gulp.task('deploy', () => {
  const conn = ftp.create({
    host: config.host,
    user: config.user,
    password: config.password,
    parallel: config.parallel,
    log: gutil.log
  });

  return gulp.src(config.src, { buffer: false, dot: true })
    .pipe(conn.newer(config.dest))
    .pipe(conn.dest(config.dest));
});

'use strict';

import _ from 'lodash';
import watchify from 'watchify';
import browserify from 'browserify';
import { bundler as config } from '../config';

export default _.memoize(watch => {
  const options = {
    debug: true
  };

  if (watch) {
    _.extend(options, watchify.args);
  }

  let b = browserify(config.src, options);

  if (watch) {
    b = watchify(b);
  }

  return b;
});

'use strict';

import { Application } from 'orchestra';
import LayoutView from './layout-view';

export default Application.extend({
  initialize(options = {}) {
    this.layout = new LayoutView({
      config: options.config
    });
    this.layout.render();
  }
});

'use strict';

import { Router } from 'orchestra';
import Route from './route';
import Topics from './topics';

export default Router.extend({
  routes: {
    topics: 'index',
    'topics/:id': 'index'
  },

  initialize(options = {}) {
    this.container = options.container;
    this.config = options.config;
    this.topics = new Topics();
  },

  index(id) {
    if (this.indexRoute) {
      this.indexRoute.showItem(id);
    } else {
      this.indexRoute = new Route({
        id,
        config: this.config,
        container: this.container,
        collection: this.topics
      });
      return this.indexRoute;
    }
  }
});

'use strict';

import { Router } from 'orchestra';
import Route from './route';
import Topics from './topics';

export default Router.extend({
  routes: {
    '': 'index',
    topics: 'index',
    'topics/:id': 'index'
  },

  initialize(options = {}) {

    // instance of Marionette.Region
    this.container = options.container;

    // obj
    this.config = options.config;
    this.topics = new Topics();
  },

  index(id) {

    // if already loaded index route and word cloud
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

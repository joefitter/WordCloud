//
// #wordcloud/src/wordcloud/route.js
//
'use strict';

import { Route, history } from 'orchestra';
import TopicsView from './collection-view';
import MetaService from '../meta/service';
import nprogress from 'nprogress';

export default Route.extend({
  initialize(options = {}) {

    // instance of Marionette.Region
    this.container = options.container;

    // instance of Backbone.Collection
    this.collection = options.collection;

    // obj
    this.config = options.config;

    // string
    this.id = options.id;
  },

  showMeta(id) {
    if (!id) {
      return;
    }

    const model = this.collection.find(model => model.get('id') === id);

    if (!model) {
      return;
    }

    // returns Promise
    MetaService.request('display', model)
      .catch(err => {
        console.error(err);
        throw err;
      });
  },

  fetch() {
    nprogress.start();

    // show meta on collection updated if id is set
    this.collection.fetch()
      .done(() => {
        nprogress.done();
        if (this.id) {
          this.showMeta(this.id);
        }
      });
  },

  render() {
    const topicsView = new TopicsView({
      collection: this.collection,
      config: this.config
    });

    // fired on topic click, this is bubbled from childview
    this.listenTo(topicsView, 'childview:item:clicked', this.updateUrlAndShowMeta);

    this.container.show(topicsView);
  },

  updateUrlAndShowMeta(view) {
    const id = view.model.get('id');

    /*
     * update url but don't re-init index route,
     * this prevents wordcloud recalculating
     * when a word is clicked
     */
    history.navigate(`topics/${id}`, {
      trigger: false
    });
    this.showMeta(id);
  },

  // cleanup view & region
  destroy() {
    this.container.empty();
  }
});

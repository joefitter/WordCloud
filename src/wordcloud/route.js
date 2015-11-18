'use strict';

import { Route, history } from 'orchestra';
import TopicsView from './collection-view';
import MetaService from '../meta/service';

export default Route.extend({
  initialize(options = {}) {
    this.container = options.container;
    this.collection = options.collection;
    this.config = options.config;
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

    MetaService.request('display', model)
      .catch(err => {
        console.error(err);
        throw err;
      });
  },

  fetch() {
    this.collection.fetch()
      .done(() => {
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

    this.listenTo(topicsView, 'childview:item:clicked', this.updateUrlAndShowMeta);

    this.container.show(topicsView);
  },

  updateUrlAndShowMeta(view) {
    const id = view.model.get('id');
    history.navigate(`topics/${id}`, {
      trigger: false
    });
    this.showMeta(id);
  },

  destroy() {
    this.container.empty();
  }
});

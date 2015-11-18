'use strict';

import { Service } from 'orchestra';
import View from './view';
import Model from '../wordcloud/topic';

const MetaService = Service.extend({

  setup(options = {}) {
    this.container = options.container;
  },

  requests: {
    display: 'display'
  },

  start() {
    const view = new View({
      model: new Model()
    });
    this.container.show(view);
  },

  display(model) {
    const viewModel = this.container.currentView.model;
    model = model.toJSON();

    viewModel.set({
      label: model.label,
      volume: model.volume,
      positive: model.positive,
      neutral: model.neutral,
      negative: model.negative
    });
  }
});

export default new MetaService();

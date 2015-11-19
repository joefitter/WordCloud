'use strict';

import { ItemView } from 'orchestra';
import template from './template.hbs';

export default ItemView.extend({
  template,

  // bootstrap styles
  className: 'panel panel-default',

  bindings: {

    // selector          model.attribute
    '[data-ref=label]': 'label',
    '[data-ref=volume]': 'volume',
    '[data-ref=positive]': 'positive',
    '[data-ref=neutral]': 'neutral',
    '[data-ref=negative]': 'negative'
  },

  onShow() {

    // init Backbone.Stickit
    this.stickit();
    this.$el.fadeIn();
  },

  onDestroy() {

    // clean up Backbone.Stickit
    this.unstickit();
  }
});

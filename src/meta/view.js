'use strict';

import { ItemView } from 'orchestra';
import template from './template.hbs';

export default ItemView.extend({
  template,

  className: 'panel panel-default',

  bindings: {
    '[data-ref=label]': 'label',
    '[data-ref=volume]': 'volume',
    '[data-ref=positive]': 'positive',
    '[data-ref=neutral]': 'neutral',
    '[data-ref=negative]': 'negative'
  },

  onShow() {
    this.stickit();
    this.$el.fadeIn();
  },

  onDestroy() {
    this.unstickit();
  }
});

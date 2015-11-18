'use strict';

import { LayoutView } from 'orchestra';
import template from './template.hbs';

export default LayoutView.extend({
  template,

  initialize(options = {}) {
    this.config = options.config || {};
    this.el = this.config.el;
  },

  el: '#app',

  regions: {
    wordcloud: '#wordcloud',
    meta: '#meta'
  }
});

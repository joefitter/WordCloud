//
// #wordcloud/src/application/layout-view.js
//
'use strict';

import { LayoutView } from 'orchestra';
import template from './template.hbs';

export default LayoutView.extend({
  template,

  el: '#app',

  regions: {
    wordcloud: '#wordcloud',
    meta: '#meta'
  }
});

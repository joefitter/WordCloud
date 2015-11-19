//
// #wordcloud/src/wordcloud/item-view.js
//
'use strict';

import { _, ItemView } from 'orchestra';
import svgMixin from '../mixins/svg-view';
import template from './item-template.hbs';

let viewProps = {
  template,

  tagName: 'text',

  attributes() {
    const sentiment = this.model.get('sentimentScore');
    let fill = this.options.config.colours.grey;

    if (sentiment > 60) {
      fill = this.options.config.colours.green;
    }

    if (sentiment < 40) {
      fill = this.options.config.colours.red;
    }

    return {
      fill,
      'text-anchor': 'middle',
    };
  },

  triggers: {
    click: 'item:clicked'
  }
};

viewProps = _.merge(viewProps, svgMixin);

export default ItemView.extend(viewProps);

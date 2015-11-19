//
// #wordcloud/src/application/application.js
//
'use strict';

import { Application } from 'orchestra';
import LayoutView from './layout-view';

export default Application.extend({
  initialize() {
    this.layout = new LayoutView();

    // render the layout to init component regions
    this.layout.render();
  }
});

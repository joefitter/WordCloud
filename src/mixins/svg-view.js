//
// #wordcloud/src/mixins/svg-view.js
//
'use strict';

import { _ } from 'orchestra';

/**
 * This mixin is needed in order for SVG elements to be used
 * as the root element in a Marionette/Backbone View.
 * Backbone.View._ensureElement doesn't include the namespacing
 * necessary for rendering SVG elements
 **/
export default {

  namespace: 'http://www.w3.org/2000/svg',

  _ensureElement() {
    if (!this.el) {
      const attrs = _.extend({}, _.result(this, 'attributes'));

      if (this.id) {
        attrs.id = _.result(this, 'id');
      }

      if (this.className) {
        attrs['class'] = _.result(this, 'className');
      }

      const el = window.document.createElementNS(_.result(this, 'namespace'), _.result(this, 'tagName'));

      _.each(attrs, (value, key) => el.setAttributeNS(null, key, value));

      this.setElement(el, true);
    } else {
      this.setElement(_.result(this, 'el'), false);
    }
  }

};

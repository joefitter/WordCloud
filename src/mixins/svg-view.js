'use strict';

import { _ } from 'orchestra';

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

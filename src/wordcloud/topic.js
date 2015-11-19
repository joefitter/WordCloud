//
// #wordcloud/src/wordcloud/topic.js
//
'use strict';

import { Model } from 'orchestra';

export default Model.extend({
  defaults: {
    label: '',
    volume: 0,
    positive: 0,
    negative: 0,
    neutral: 0
  },

  parse(data) {

    // set sentiment values directly
    for (var key in data.sentiment) {
      if (data.sentiment.hasOwnProperty(key)) {
        data[key] = data.sentiment[key];
      }
    }

    return data;
  }
});

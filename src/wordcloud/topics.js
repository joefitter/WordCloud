//
// #wordcloud/src/wordcloud/topics.js
//
'use strict';

import { Collection } from 'orchestra';
import Topic from './topic';

export default Collection.extend({
  url: '/api/topics.json',

  model: Topic,

  comparator: 'sentimentScore',

  parse(data) {

    // data is contained within `topics`
    return data.topics;
  }
});

'use strict';

describe('wordcloud/topics', function() {
  beforeEach(function() {

    this.Collection = proxyquire('../../src/wordcloud/topics.js', {
      './topic': {},
    });

    this.collection = new this.Collection();
  });

  describe('#parse', function() {
    var rtn;

    beforeEach(function() {
      var data = {
        topics: 'topics'
      };
      rtn = this.collection.parse(data);
    });

    it('should return the topics property', function() {
      expect(rtn).to.be.equal('topics');
    });
  });
});

//
// #wordcloud/test/unit/wordcloud/topic-spec.js
//
'use strict';

describe('wordcloud/topic', function() {
  beforeEach(function() {

    this.Model = proxyquire('../../src/wordcloud/topic.js', {});

    this.model = new this.Model();
  });

  describe('#parse', function() {
    var data;
    beforeEach(function() {
      data = {
        sentiment: {
          positive: 5,
          neutral: 1,
          negative: 2
        }
      };
      this.model.parse(data);
    });

    it('should set positive property on the passed object', function() {
      expect(data).to.have.property('positive', 5);
    });

    it('should set neutral property on the passed object', function() {
      expect(data).to.have.property('neutral', 1);
    });

    it('should set negative property on the passed object', function() {
      expect(data).to.have.property('negative', 2);
    });
  });

});

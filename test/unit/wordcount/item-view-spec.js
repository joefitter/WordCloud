//
// #wordcloud/test/unit/wordcount/item-view-spec.js
//
'use strict';

describe('wordcount/item-view', function() {
  beforeEach(function() {

    this.View = proxyquire('../../src/wordcloud/item-view.js', {
      '../svgMixin': {},
    });

    this.view = new this.View({
      model: new Orchestra.Model(),
      config: {
        colours: {
          grey: 'grey',
          green: 'green',
          red: 'red'
        }
      }
    });
  });

  describe('#attributes', function() {

    it('should return a fill of grey if sentimentScore is 50', function() {
      this.view.model.set('sentimentScore', 50);
      var attrs = this.view.attributes();
      expect(attrs.fill).to.be.equal('grey');
    });

    it('should return a fill of green if sentimentScore is 65', function() {
      this.view.model.set('sentimentScore', 65);
      var attrs = this.view.attributes();
      expect(attrs.fill).to.be.equal('green');
    });

    it('should return a fill of red if sentimentScore is 20', function() {
      this.view.model.set('sentimentScore', 20);
      var attrs = this.view.attributes();
      expect(attrs.fill).to.be.equal('red');
    });
  });
});

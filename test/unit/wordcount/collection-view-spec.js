'use strict';

describe('wordcloud/collection-view', function() {
  beforeEach(function() {
    this.start = stub();
    this.View = proxyquire('../../src/wordcloud/collection-view.js', {
      './item-view': {},
      '../mixins/svg-mixin': {},
      'd3-cloud': stub().returns({
        size: stub().returns({
          words: stub().returns({
            padding: stub().returns({
              rotate: stub().returns({
                fontSize: stub().returns({
                  on: stub().returns({
                    start: this.start
                  })
                })
              })
            })
          })
        })
      })
    });

    this.view = new this.View({
      config: {}
    });
  });

  describe('#initialize', function() {
    it('should set a config object on the instance', function() {
      expect(this.view).to.have.property('config');
    });
  });

  describe('#calculateLayout', function() {
    beforeEach(function() {
      this.view.collection = new Orchestra.Collection();
      this.view.calculateLayout();
    });

    it('should set a layout property on the instance', function() {
      expect(this.view).to.have.property('layout');
    });

    it('should have called start on the layout', function() {
      expect(this.start).to.have.been.calledOnce;
    });
  });

  describe('#draw', function() {
    beforeEach(function() {
      this.view.layout = {
        size: stub().returns([50, 50])
      };

      this.view.draw();
    });

    it('should not error when called', function() {
      expect(true).to.be.equal(true);
    });
  });
});

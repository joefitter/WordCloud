'use strict';

describe('application/layout-view', function() {
  beforeEach(function() {
    this.Controller = proxyquire('../../src/application/layout-view.js', {});

    this.view = new this.Controller();
  });

  describe('#initialize', function() {
    beforeEach(function() {
      this.view.initialize();
    });

    it('should have set up a wordcloud region', function() {
      expect(this.view).to.have.property('wordcloud');
    });

    it('should have set up a meta region', function() {
      expect(this.view).to.have.property('meta');
    });
  });
});

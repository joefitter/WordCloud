'use strict';

describe('application/layout-view', function() {
  beforeEach(function() {
    this.Controller = proxyquire('../../src/application/layout-view.js', {});

    this.module = new this.Controller();
  });

  describe('#initialize', function() {
    beforeEach(function() {
      this.module.initialize({
        config: {
          el: 'test'
        }
      });
    });

    it('should create set an el property', function() {
      expect(this.module).to.have.property('el', 'test');
    });

    it('should have set up a wordcloud region', function() {
      expect(this.module).to.have.property('wordcloud');
    });

    it('should have set up a meta region', function() {
      expect(this.module).to.have.property('meta');
    });
  });
});

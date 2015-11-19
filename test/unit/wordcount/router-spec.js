//
// #wordcloud/test/unit/wordcloud/router-spec.js
//
'use strict';

describe('wordcloud/router', function() {
  beforeEach(function() {
    this.route = stub().returns({
      showItem: stub()
    });
    this.topics = stub();

    this.Router = proxyquire('../../src/wordcloud/router.js', {
      './route': this.route,
      './topics': this.topics
    });

    this.router = new this.Router();
  });

  describe('#initialize', function() {
    beforeEach(function() {
      this.router.initialize({
        container: 'container',
        config: 'config'
      });
    });

    it('should attach a container to the instance', function() {
      expect(this.router).to.have.property('container', 'container');
    });

    it('should attach a config object to the instance', function() {
      expect(this.router).to.have.property('config', 'config');
    });

    it('should instantiate a collection', function() {
      expect(this.topics).to.have.been.calledWithNew;
    });
  });

  describe('#index', function() {
    beforeEach(function() {
      this.router.index();
    });

    it('should have instantiated a new route', function() {
      expect(this.route).to.have.been.calledWithNew.and.calledOnce;
    });

    it('should not have called showItem', function() {
      expect(this.route().showItem).not.to.have.been.called;
    });

    it('should not instantiate a new route on second call', function() {
      this.router.index();
      expect(this.route).not.to.have.been.calledTwice;
    });

    it('should have called showItem', function() {
      this.router.index();
      expect(this.route().showItem).to.have.been.called;
    });
  });
});

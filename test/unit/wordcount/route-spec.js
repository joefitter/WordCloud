//
// #wordcloud/test/unit/wordcloud/route-spec.js
//
'use strict';

describe('wordcloud/route', function() {
  beforeEach(function() {

    this.metaService = {
      request: stub().returns({
        catch: stub()
      })
    };

    this.view = stub();

    this.Route = proxyquire('../../src/wordcloud/route.js', {
      './collection-view': this.view,
      '../meta/service': this.metaService
    });

    this.route = new this.Route();
  });

  describe('#initialize', function() {
    beforeEach(function() {
      this.route.initialize({
        container: 'container',
        collection: 'collection',
        config: 'config',
        id: 'id'
      });
    });

    it('should set a container on the instance', function() {
      expect(this.route).to.have.property('container', 'container');
    });

    it('should set a collection on the instance', function() {
      expect(this.route).to.have.property('collection', 'collection');
    });

    it('should set a config on the instance', function() {
      expect(this.route).to.have.property('config', 'config');
    });

    it('should set a id on the instance', function() {
      expect(this.route).to.have.property('id', 'id');
    });
  });

  describe('#showMeta', function() {
    beforeEach(function() {
      this.route.collection = new Orchestra.Collection([{id: 1}, {id: 2}]);
    });

    it('should return undefined if id isn\'t passed', function() {
      expect(this.route.showMeta()).to.be.equal(undefined);
    });

    it('should return undefined if id isn\'t found in collection', function() {
      expect(this.route.showMeta(3)).to.be.equal(undefined);
    });

    it('should call MetaService if model is found', function() {
      this.route.showMeta(2);
      expect(this.metaService.request).to.have.been.calledOnce.and.calledWith('display');
    });
  });

  describe('#fetch', function() {
    beforeEach(function() {
      this.route.id = 2;
      this.route.collection = {
        fetch: stub().returns({done: function(callback) {callback();}}),
        find: stub().returns(undefined)
      };
    });

    it('should call fetch on the collection', function() {
      this.route.fetch();
      expect(this.route.collection.fetch).to.have.been.calledOnce;
    });

    it('should call showMeta if an id is set', function() {
      this.route.showMeta = stub();
      this.route.fetch();
      expect(this.route.showMeta).to.have.been.calledOnce;
    });
  });

  describe('#render', function() {
    beforeEach(function() {
      this.route.container = {
        show: stub()
      };
      this.route.render();
    });

    it('should instantiate the view', function() {
      expect(this.view).to.have.been.calledWithNew;
    });

    it('should have called show on the container', function() {
      expect(this.route.container.show).to.have.been.calledOnce;
    });
  });

  describe('#updateUrlAndShowMeta', function() {
    beforeEach(function() {
      var view = {
        model: {
          get: stub().returns(1)
        }
      };
      this.route.showMeta = stub();
      this.route.updateUrlAndShowMeta(view);
    });

    it('should call showMeta with the id', function() {
      expect(this.route.showMeta).to.have.been.calledOnce.and.calledWith(1);
    });
  });

  describe('#destroy', function() {
    beforeEach(function() {
      this.route.container = {
        empty: stub()
      };
      this.route.destroy();
    });

    it('should call empty on the container', function() {
      expect(this.route.container.empty).to.have.been.calledOnce;
    });
  });
});

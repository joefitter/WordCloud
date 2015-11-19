//
// #wordcloud/test/unit/meta/view-spec.js
//
'use strict';

describe('meta/view', function() {
  beforeEach(function() {
    this.layoutView = { render: stub() };
    this.LayoutView = stub().returns(this.layoutView);

    this.View = proxyquire('../../src/meta/view.js', {});

    this.view = new this.View();
  });

  describe('#instance', function() {
    it('should have a bindings hash', function() {
      expect(this.view).to.have.property('bindings');
    });

    it('should have a className string of `panel panel-default`', function() {
      expect(this.view).to.have.property('className', 'panel panel-default');
    });
  });

});

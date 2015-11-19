//
// #wordcloud/test/unit/mixins/svg-view-spec.js
//
'use strict';

describe('mixins/svg-view', function() {
  beforeEach(function() {
    this.layoutView = { render: stub() };
    this.LayoutView = stub().returns(this.layoutView);

    this.mixin = proxyquire('../../src/mixins/svg-view.js', {});
  });

  describe('#properties', function() {
    it('should have a namespace property set to `http://www.w3.org/2000/svg`', function() {
      expect(this.mixin).to.have.property('namespace', 'http://www.w3.org/2000/svg');
    });

    it('should have an _ensureElement method', function() {
      expect(this.mixin).to.have.property('_ensureElement');
    });
  });

  describe('#_ensureElement', function() {
    beforeEach(function() {
      this.mixin.setElement = stub();
      this.mixin.tagName = 'svg';
      this.mixin._ensureElement();
    });

    it('should have called setElement', function() {
      expect(this.mixin.setElement).to.have.been.calledOnce;
    });
  });
});

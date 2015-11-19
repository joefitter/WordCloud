//
// #wordcloud/test/unit/meta/service-spec.js
//
'use strict';

describe('meta/service', function() {
  beforeEach(function() {
    this.view = { render: stub() };
    this.View = stub().returns(this.layoutView);

    this.container = {
      show: stub()
    };

    this.Model = stub();

    this.service = proxyquire('../../src/meta/service.js', {
      './view': this.View,
      '../wordcloud/topic': this.Model
    });
  });

  describe('#setup', function() {
    beforeEach(function() {
      this.service.setup({
        container: this.container
      });
    });

    it('should set a container on the instance', function() {
      expect(this.service).to.have.property('container', this.container);
    });

    describe('#start', function() {
      beforeEach(function() {
        this.service.start();
      });

      it('should have called show on the container', function() {
        expect(this.service.container.show).to.have.been.calledOnce;
      });

      it('should have created a view', function() {
        expect(this.View).to.have.been.calledOnce;
      });
    });

    describe('#display', function() {
      beforeEach(function() {
        var model = new Orchestra.Model({
          label: 'label',
          volume: 10,
          positive: 5,
          neutral: 3,
          negative: 2
        });

        this.service.container.currentView = {
          model: new Orchestra.Model()
        };

        this.service.display(model);
      });

      it('should set the given properties on the container\'s view\'s model', function() {
        var model = this.service.container.currentView.model;
        expect(model.get('label')).to.equal('label');
        expect(model.get('volume')).to.equal(10);
        expect(model.get('positive')).to.equal(5);
        expect(model.get('neutral')).to.equal(3);
        expect(model.get('negative')).to.equal(2);
      });
    });
  });
});

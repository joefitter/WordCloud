'use strict';

import { _, CollectionView } from 'orchestra';
import TopicView from './item-view';
import svgMixin from '../mixins/svg-view';
import cloud from 'd3-cloud';

let viewProps = {

  childView: TopicView,

  tagName: 'g',

  initialize(options = {}) {
    this.config = options.config || {};
    this.listenTo(this.collection, 'update', this.calculateLayout);
  },

  childViewOptions() {
    return {
      config: this.config
    };
  },

  calculateLayout() {
    this.layout = cloud()
      .size([800, 600])
      .words(this.collection.map(model => {
        return {
          model,
          text: model.get('label'),
          size: Math.pow(model.get('sentimentScore'), 0.8)
        };
      }))
      .padding(5)
      .rotate(() => Math.floor(Math.random() * 2) * 90)
      .fontSize(model => model.size)
      .on('end', this.draw.bind(this));
    this.layout.start();
  },

  draw(words) {
    this.$el.attr('transform', `translate(${this.layout.size()[0] / 2}, ${this.layout.size()[1] / 2})`);

    _.each(words, word => {
      const view = this.children.findByModel(word.model);
      const $el = view.$el;
      $el.css('font-size', `${word.size}px`)
        .attr('transform', `translate(${word.x}, ${word.y})rotate(${word.rotate})`);
    });
  }
};

viewProps = _.merge(viewProps, svgMixin);

export default CollectionView.extend(viewProps);

'use strict';

import { _, CollectionView } from 'orchestra';
import TopicView from './item-view';
import svgMixin from '../mixins/svg-view';
import { scale, min, max } from 'd3';
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
    // use sentiment score to calculate text size scale.
    const sentiments = this.collection.pluck('sentimentScore');

    const textSize = scale.pow()
      .domain([min(sentiments), max(sentiments)])
      .range([this.config.minFontSize, this.config.maxFontSize]);

    this.layout = cloud()
      .size([this.config.width, this.config.height])
      .words(this.collection.map(model => {
        return {
          model,
          text: model.get('label'),
          size: textSize(model.get('sentimentScore'))
        };
      }))
      .padding(this.config.padding)

      // 0 or 90
      .rotate(() => Math.floor(Math.random() * 2) * 90)
      .fontSize(model => model.size)
      .on('end', this.draw.bind(this));
    this.layout.start();
  },

  draw(words) {
    // move group into middle
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

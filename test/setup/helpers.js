//
// #wordcloud/test/setup/helpers.js
//
'use strict';

var _ = require('lodash');
var Orchestra = require('orchestra');
var handlebars = require('handlebars');
var fs = require('fs');

before(function() {
  global._ = _;
  global.Orchestra = Orchestra;
  global.handlebars = handlebars;

  // compile handlebars templates
  require.extensions['.hbs'] = function(module, filename) {
    module.exports = handlebars.compile(fs.readFileSync(filename).toString());
  };
});

beforeEach(function() {

  // make stub() and spy() globally available for testing
  this.sinon = sinon.sandbox.create();
  global.stub = this.sinon.stub.bind(this.sinon);
  global.spy  = this.sinon.spy.bind(this.sinon);
});

afterEach(function() {
  this.sinon.restore();
  Orchestra.history.stop();
});

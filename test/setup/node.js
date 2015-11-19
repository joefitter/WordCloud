//
// #wordcloud/test/setup/node.js
//
'use strict';

// Set up JSDom for browser like environment in node
if (!global.document || !global.window) {
  require('babel/register');

  var jsdom = require('jsdom').jsdom;

  global.document = jsdom('<html><head><script></script></head><body></body></html>', null, {
    FetchExternalResources: ['script'],
    ProcessExternalResources: ['script'],
    MutationEvents: '2.0',
    QuerySelector: false
  });

  global.window = document.parentWindow;
  global.navigator = global.window.navigator;
  global.location = global.window.location;
}

// proxyquire to be used to stub dependencies.
var proxyquire = require('proxyquire').noCallThru();

// testing framework
var sinon = require('sinon');
var chai = require('chai');
var sinonChai = require('sinon-chai');

chai.use(sinonChai);

global.sinon = sinon;
global.expect = chai.expect;
global.proxyquire = proxyquire;

'use strict';

const dest = './dist';
const src = './src';
const test = './test';

const clean = {
  src: dest
};

const html = {
  dest,
  src: `${src}/index.html`
};

const scripts = {
  dest,
  source: 'bundle.js'
};

const bundler = {
  src: `${src}/main.js`
};

const sass = {
  dest,
  src: `${src}/main.scss`,
};

const lint = {
  src: [
    `${src}/**/*.js`,
    `${test}/**/*.js`
  ]
};

const mocha = {
  src: [
    `${test}/setup/node.js`,
    `${test}/setup/helpers.js`,
    `${test}/unit/**/*-spec.js`
  ]
};

export {
  clean,
  html,
  scripts,
  bundler,
  lint,
  mocha,
  sass
};

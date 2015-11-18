'use strict';

import { history } from 'orchestra';
import Application from './application/application';
import config from './config';

import WordcloudRouter from './wordcloud/router';

import MetaService from './meta/service';

const app = new Application({
  config: config.app
});

MetaService.setup({
  container: app.layout.meta
});

app.wordcloud = new WordcloudRouter({
  container: app.layout.wordcloud,
  config: config.wordcloud
});

app.wordcloud.on('error', (router, err) => console.error(err));

history.start();

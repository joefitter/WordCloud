'use strict';

import { history } from 'orchestra';
import Application from './application/application';
import config from './config';

import WordcloudRouter from './wordcloud/router';

import MetaService from './meta/service';

const app = new Application();

MetaService.setup({
  container: app.layout.meta
});

app.wordcloud = new WordcloudRouter({
  container: app.layout.wordcloud,
  config: config.wordcloud
});

// display errors
app.wordcloud.on('error', (router, err) => console.error(err));

// start router(s)
history.start();

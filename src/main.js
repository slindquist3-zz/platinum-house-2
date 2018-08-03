// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import MQ from 'vue-match-media/src';

import App from './App';
import router from './router';
import store from './store/store';

// import { CommonBands, MediaQueries } from 'vue-media-queries';

Vue.use(MQ);

// const mediaQueries = new MediaQueries({
//   bands: CommonBands.Bulma
// });

// Vue.use(mediaQueries);

require('./assets/sass/main.scss');

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>',
  mq: {
    tablet: '(max-width: 769px)',
    desktop: '(max-width: 1088px)',
    widescreen: '(max-width: 1280px)',
    fullhd: '(min-width: 1472px)'
  }
  // mediaQueries: mediaQueries,
  // mixins: [CommonBands.Bulma.mixin]
});

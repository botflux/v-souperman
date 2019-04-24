import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import Title1 from './components/typography/Title-1.vue'
import Subtitle1 from './components/typography/Subtitle-1.vue'
import BaseRow from './components/structure/BaseRow.vue'
import Column from './components/structure/Column.vue'
import TwoColumns from './components/structure/TwoColumns.vue'
import Title2 from './components/typography/Title-2.vue'
import Text from './components/typography/Text.vue'
import Image from './components/media/BaseImage.vue'
import VueResponsiveImage from 'vue-responsive-image'
import './fontloader'
import VueLazyLoader from 'vue-lazyload'
import Loading from './assets/placeholder.jpg'
import Nprogress from 'vue-nprogress'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faFacebook, faInstagram)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false
Vue.use(VueLazyLoader, {
  preload: 1.3,
  loading: Loading
})
Vue.use(Nprogress,  {
  router: true,
  http: true,
  color: '#ffaa00',
})

Vue.component('vue-responsive-image', VueResponsiveImage)
Vue.component('title-1', Title1)
Vue.component('subtitle-1', Subtitle1)
Vue.component('column', Column)
Vue.component('two-columns', TwoColumns)
Vue.component('title-2', Title2)
Vue.component('b-text', Text)
Vue.component('b-img', Image)
Vue.component('b-row', BaseRow)

new Vue({
  router,
  store,
  nprogress: new Nprogress(),
  render: h => h(App)
}).$mount('#app')

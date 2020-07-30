import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'

// animate.css
import animated from 'animate.css'
Vue.use(animated)

//scroll to
import VueScrollTo from 'vue-scrollto'
Vue.use(VueScrollTo);

// bootstrap
import "jquery"
import "bootstrap"
import "bootstrap/dist/css/bootstrap.css"

//font awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(fas, fab, far)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
  created () {
    if (sessionStorage.redirect) {
      const redirect = sessionStorage.redirect
      delete sessionStorage.redirect
      this.$router.push(redirect)
    }
  }
}).$mount('#app')

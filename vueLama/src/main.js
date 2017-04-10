import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import { routes } from './routes'

Vue.use(VueRouter)

const router = new VueRouter({
  routes
})

export const eventBus = new Vue({
  methods: {
    logMessage (message) {
      this.$emit('messageWithEventBus1', message)
    },
    closeModal () {
      this.$emit('closingModal')
    }
  }
})

new Vue({ // eslint-disable-line no-new
  el: '#app',
  router,
  render: h => h(App)
})

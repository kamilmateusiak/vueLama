import Vue from 'vue'
import App from './App.vue'

export const eventBus = new Vue({
  methods: {
    logMessage (message) {
      this.$emit('messageWithEventBus1', message)
    }
  }
})

new Vue({ // eslint-disable-line no-new
  el: '#app',
  render: h => h(App)
})

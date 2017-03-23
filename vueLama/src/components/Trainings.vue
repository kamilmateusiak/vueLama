<template>
  <div class="col-xs-12 col-sm-8 col-sm-offset-2">
    <training-modal :fnChangeMessage="changeMessage"></training-modal>
    <h1>Home</h1>
    <single-training v-for="training in trainings" :key="training.id" :training="training"></single-training>
  </div>
</template>

<script>
  import trainings from '../mock'
  import SingleTraining from './SingleTraining.vue'
  import TrainingModal from './TrainingModal.vue'
  import { eventBus } from '../main'

  export default {
    data () {
      return {
        trainings,
        message: 'wiadomość do zmiany w komponencie TrainingModal'
      }
    },
    components: {
      SingleTraining,
      TrainingModal
    },
    /**
     * lifecycle hook komponentu
     * https://vuejs.org/v2/api/#Options-Lifecycle-Hooks
     */
    created () {
      /**
       * nasłuchujemy czy eventBus wyemitował jakiś event
       */
      eventBus.$on('messageWithEventBus1', function (message) {
        console.log(message)
      })
      /**
       * nasłuchujemy czy eventBus wyemitował jakiś event drugą metodą
       */
      eventBus.$on('messageWithEventBus2', function (message) {
        console.log(message)
      })
    },
    /**
     * inny lifecycle hook komponentu
     */
    mounted () {
      /**
       * log wiadomości do zmiany w komponencie TrainingModal
       */
      console.log(this.message)
    },
    methods: {
      changeMessage () {
        this.message = 'zmieniona wiadomość, metoda zmiany danych w innym komponencie bez użycia eventów'
        console.log(this.message)
      }
    }
  }
</script>

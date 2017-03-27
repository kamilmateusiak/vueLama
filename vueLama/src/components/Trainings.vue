<template>
  <div class="col-xs-12 col-sm-8 col-sm-offset-2">
    <transition name="slide" type="animation">
      <training-modal v-if="modalShow" :training="chosenTraining" @closingModal="closeModal"></training-modal>
    </transition>
    <h1>Home</h1>
    <single-training
            v-for="training in trainings"
            :key="training.id"
            :training="training"
            @trainingWasChosen="chooseTraining"
    ></single-training>
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
        chosenTraining: {},
        modalShow: false,
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
      eventBus.$on('trainingWasStarted', () => {
        this.modalShow = false
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
      },
      chooseTraining (data) {
        this.modalShow = true
        this.chosenTraining = data
      },
      closeModal () {
        this.modalShow = false
      }
    }
  }
</script>

<style>
  .slide-enter {
    opacity: 0;
  }
  .slide-enter-active {
    animation: slide-in 1s ease-out forwards;
    transition: opacity .5s;
  }
  .slide-leave {
    opacity: 0;
  }
  .slide-leave-active {
    animation: slide-out 1s ease-out forwards;
    transition: opacity .5s;
  }

  @keyframes slide-in {
    from {
      transform: translateY(30px);
    }
    to {
      transform: translateY(0)
    }
  }
  @keyframes slide-out {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(30px)
    }
  }
</style>

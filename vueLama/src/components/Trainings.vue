<template>
  <div class="col-xs-12 col-sm-8 col-sm-offset-2">
    <h1>Home</h1>
    <single-training v-for="training in trainings" :key="training.id" :training="training"></single-training>
  </div>
</template>

<script>
  import trainings from '../mock'
  import SingleTraining from './SingleTraining.vue'
  import TrainingModal from './TrainingModal.vue'

  export default {
    data () {
      return {
        trainings
      }
    },
    components: {
      SingleTraining,
      TrainingModal
    }
  }
</script>

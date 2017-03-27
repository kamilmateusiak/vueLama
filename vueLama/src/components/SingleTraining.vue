<template>
  <div class="col-xs-6">
    <div class="panel panel-primary">
      <div class="panel-heading">{{ training.name }}</div>
      <div class="panel-body">
        <p>{{ training.description }}</p>
        <button class="btn btn-primary center-block" @click="chooseTraining">Wybierz</button>
      </div>
    </div>
  </div>
</template>

<script>
  /**
   * import nowej intancji Vue - eventBus
   */
  import { eventBus } from '../main'

  export default {
    props: ['training'],
    methods: {
      /**
       * funkcja korzystająca ze zdefiniowanej metody w eventBus
       */
      chooseTraining () {
        this.$emit('trainingWasChosen', this.training)
        console.log(eventBus)
      }
    }
  }
</script>

<style>

</style>

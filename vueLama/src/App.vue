<template>
  <div class="wrapper">
    <div class="containter">
      <trainings></trainings>
      <workout></workout>
      <workout-summary></workout-summary>
    </div>
  </div>
</template>

<script>
  import Trainings from './components/Trainings.vue'
  import Workout from './components/Workout.vue'
  import Summary from './components/Summary.vue'

  export default {
    name: 'app',
    methods: {

    },
    components: {
      Trainings,
      Workout,
      WorkoutSummary: Summary
    }
  }
</script>

<style>
  .wrapper {
    background-color: #ffd700;
    overflow: hidden;
  }
</style>

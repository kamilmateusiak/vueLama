<template>
  <div class="wrapper">
    <div class="containter">
      <router-view></router-view>


      <!--<trainings></trainings>-->
      <!--&lt;!&ndash; nasłuchujemy czy z komponentu został wyemitowany event, w $event mamy dane które przesyłamy &ndash;&gt;-->
      <!--<workout @messageWithEventEmit="getMessage($event)"></workout>-->
      <!--<workout-summary></workout-summary>-->
    </div>
  </div>
</template>

<script>
  import Trainings from './components/Trainings.vue'
  import Workout from './components/Workout.vue'
  import Summary from './components/Summary.vue'

  export default {
    name: 'app',
    components: {
      Trainings,
      Workout,
      WorkoutSummary: Summary
    },
    methods: {
      getMessage (message) {
        console.log(message)
      }
    }
  }
</script>

<style>
  .wrapper {
    background-color: #ffd700;
    overflow: hidden;
    min-height: 100vh;
  }
</style>

<template>
  <div class="col-xs-12 col-sm-8 col-sm-offset-2">
    <exercise-modal v-if="showModal" :exercise="chosenExercise"></exercise-modal>
    <h1>Workout</h1>
    <div class="row" style="margin-bottom: 20px;">
      <div class="col-xs-9">
        <div class="progress">
          <div class="progress-bar"
               role="progressbar"
               :aria-valuenow="weightProgress"
               aria-valuemin="0"
               aria-valuemax="100"
               :style="{width: weightProgress + '%'}"
               v-text="`${weightProgress}%`">
          </div>
        </div>
      </div>
      <div class="col-xs-3 text-center">
        <div class="col-xs-6">
          <label>Minuty</label>
          <div>{{ timer.minutes }}</div>
        </div>
        <div class="col-xs-6">
          <label>Sekundy</label>
          <div>{{ timer.seconds }}</div>
        </div>
      </div>
    </div>
    <div class="col-xs-8 col-xs-offset-2">
      <div class="panel panel-primary">
        <div class="panel-heading">{{ training.name }}</div>
        <div class="list-group">
          <li class="list-group-item" v-for="exercise in training.exercises" v-on:click="openModal(exercise)">{{ exercise.name }}</li>
        </div>
      </div>
      <div class="col-xs-12">
        <button class="btn btn-primary center-block" @click="finishWorkout">Zakończ</button>
      </div>
    </div>
  </div>
</template>

<script>
  import ExerciseModal from './ExerciseModal.vue'
  import { eventBus } from '../main'

  export default {
    data () {
      return {
        training: {},
        timeGoal: 0,
        weightGoal: 0,
        trainingStatus: false,
        timer: {
          minutes: 0,
          seconds: 0,
          interval: null
        },
        showModal: false,
        chosenExercise: {}
      }
    },
    computed: {
      weightProgress () {
        let weightSum = 0
        if (typeof this.training.exercises !== 'undefined') {
          this.training.exercises.forEach((exercise) => {
            exercise.sets.forEach((exerciseSet) => {
              weightSum += exerciseSet.weight * exerciseSet.reps
            })
          })
          return (weightSum / this.weightGoal) * 100
        }
        return 0
      }
    },
    watch: {
      trainingStatus () {
        if (this.trainingStatus) {
          this.timer.interval = setInterval(() => {
            this.timer.seconds++
            if (this.timer.seconds === 60) {
              this.timer.minutes++
              this.timer.seconds = 0
            }
          }, 1000)
        } else {
          clearInterval(this.timer.interval)
        }
      }
    },
    created () {
      eventBus.$on('trainingWasStarted', (data) => {
        this.training = data.training
        this.timeGoal = data.timeGoal
        this.weightGoal = data.weightGoal
        this.trainingStatus = true
      })
      eventBus.$on('closingModal', () => {
        this.showModal = false
      })
    },
    components: {
      ExerciseModal
    },
    methods: {
      /**
       * przekazywanie danych za pomocą emitowania eventu
       */
      sendMessage () {
        let message = 'przekazywanie danych za pomocą emitowania eventu'
        this.$emit('messageWithEventEmit', message)
      },
      finishWorkout () {
        this.trainingStatus = false
      },
      openModal (exercise) {
        this.chosenExercise = exercise
        this.showModal = true
      }
    }
  }
</script>

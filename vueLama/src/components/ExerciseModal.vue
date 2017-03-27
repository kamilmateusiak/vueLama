<template>
  <div class="modal fade bs-example-modal-sm in" style="display: block;" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel">
    <div class="modal-dialog modal-md" role="document">
      <div class="modal-content" style="padding: 10px">
        <button type="button" class="close" aria-label="Close" @click="closeModal"><span aria-hidden="true">&times;</span></button>
        <h4>{{ exercise.name }}</h4>
        <div class="col-xs-12" v-if="sets > 0">
          <div class="col-xs-2 text-center">Numer</div>
          <div class="col-xs-5 text-center">
            Powtórzenia
          </div>
          <div class="col-xs-5 text-center">
            Ciężar
          </div>
        </div>
        <exercise-input-group v-if="exercise.sets"
                              v-for="(exerciseSet, index) in exercise.sets"
                              :key="index"
                              :exerciseSet="exerciseSet">
        </exercise-input-group>
        <button class="btn btn-primary center-block" @click="addSet">Dodaj serię</button>
        <!--<button class="btn btn-primary center-block" @click="saveExercise">Zapisz</button>-->
      </div>
    </div>
  </div>
</template>

<script>
  import ExerciseInputGroup from './ExeciseInputGroup.vue'
  import { eventBus } from '../main'

  export default {
    props: {
      exercise: Object
    },
    data () {
      return {
        sets: this.exercise.sets
      }
    },
    methods: {
      closeModal () {
        eventBus.closeModal()
      },
      addSet () {
        this.sets.push({reps: 0, weight: 0})
      }
//      saveExercise () {
//        eventBus.$emit('exerciseWasSaved')
//      }
    },
    components: {
      ExerciseInputGroup
    }
  }
</script>

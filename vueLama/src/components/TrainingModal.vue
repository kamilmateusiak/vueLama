<template>
  <div class="modal fade bs-example-modal-sm in" style="display: block;" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel">
    <div class="modal-dialog modal-md" role="document">
      <div class="modal-content" style="padding: 10px; overflow: hidden;">
        <button type="button" class="close" aria-label="Close" @click="closeModal"><span aria-hidden="true">&times;</span></button>
        <div class="col-xs-8 col-xs-offset-2">
          <div class="panel panel-primary">
            <div class="panel-heading">{{ training.name }}</div>
            <div class="panel-body">
              <p>{{ training.description }}</p>
            </div>
            <div class="list-group">
              <li class="list-group-item" v-for="exercise in training.exercises">{{ exercise.name }}</li>
            </div>
          </div>

          <form class="form-inline col-xs-12" style="margin-bottom: 30px;">
            <h3>Cele</h3>
            <div class="form-group">
              <label class="control-label">Czas</label>
              <input class="form-control" type="text" v-model="timeGoal" placeholder="Podaj w minutach">
            </div>
            <div class="form-group">
              <label class="control-label">Ciężar</label>
              <input class="form-control" type="number" v-model="weightGoal" placeholder="Podaj ilość w kg">
            </div>
          </form>
        </div>
        <div class="col-xs-12">
          <button class="btn btn-primary center-block" v-on:click="startTraining">Rozpocznij trening</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { eventBus } from '../main'

  export default {
    props: {
      training: {
        type: Object
      }
    },
    data () {
      return {
        timeGoal: 0,
        weightGoal: 0
      }
    },
    methods: {
      closeModal () {
        this.$emit('closingModal')
      },
      startTraining () {
        eventBus.$emit('trainingWasStarted', {
          training: this.training,
          timeGoal: this.timeGoal,
          weightGoal: this.weightGoal
        })
      }
    }
  }
</script>

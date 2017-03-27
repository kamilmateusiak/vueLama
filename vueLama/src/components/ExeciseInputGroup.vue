<template>
  <div class="col-xs-12">
    <div class="col-xs-2 text-center">
      #1
    </div>
    <div class="col-xs-5">
      <div class="input-group">
        <span class="input-group-addon exercise-btn--plus" @click="increase('reps')"><i class="glyphicon glyphicon-plus"></i></span>
        <input type="number" class="form-control text-center" v-model="exerciseSet.reps">
        <span class="input-group-addon exercise-btn--minus" @click="decrease('reps')"><i class="glyphicon glyphicon-minus"></i></span>
      </div>
    </div>
    <div class="col-xs-5">
      <div class="input-group">
        <span class="input-group-addon exercise-btn--plus" @click="increase('weight')"><i class="glyphicon glyphicon-plus"></i></span>
        <input type="number" class="form-control text-center" v-model="exerciseSet.weight">
        <span class="input-group-addon exercise-btn--minus" @click="decrease('weight')"><i class="glyphicon glyphicon-minus"></i></span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      exerciseSet: Object
    },
    watch: {
      exerciseSet: function () {
        if (typeof exerciseSet !== 'undefined') {
          this.reps = this.exerciseSet.reps
          this.weight = this.exerciseSet.weight
        }
      }
    },
    methods: {
      increase (type) {
        if (type === 'reps') {
          this.exerciseSet.reps++
        } else {
          this.exerciseSet.weight++
        }
      },
      decrease (type) {
        if (type === 'reps') {
          this.exerciseSet.reps--
        } else {
          this.exerciseSet.weight--
        }
      }
    }
  }
</script>

<style>
  .exercise-btn--plus {
    color: #fff;
    background-color: green;
  }
  .exercise-btn--minus {
    color: #fff;
    background-color: red;
  }
</style>

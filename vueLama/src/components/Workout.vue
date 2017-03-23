<template>
  <div class="col-xs-12 col-sm-8 col-sm-offset-2">
    <exercise-modal></exercise-modal>
    <h1>Training</h1>
    <div class="row" style="margin-bottom: 20px;">
      <div class="col-xs-9">
        <div class="progress">
          <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%;">
            60%
          </div>
        </div>
      </div>
      <div class="col-xs-3 text-center">
        <div class="col-xs-6">
          <label>Minuty</label>
          <div>20</div>
        </div>
        <div class="col-xs-6">
          <label>Sekundy</label>
          <div>34</div>
        </div>
      </div>
    </div>
    <div class="col-xs-8 col-xs-offset-2">
      <div class="panel panel-primary">
        <div class="panel-heading">Zestaw 1</div>
        <div class="list-group">
          <li class="list-group-item">Cwiczenie 1</li>
          <li class="list-group-item">Cwiczenie 2</li>
          <li class="list-group-item">Cwiczenie 3</li>
        </div>
      </div>
      <div class="col-xs-12">
        <button class="btn btn-primary center-block">Zakończ</button>
      </div>
    </div>
  </div>
</template>

<script>
  import ExerciseModal from './ExerciseModal.vue'

  export default {
    components: {
      ExerciseModal
    }
  }
</script>

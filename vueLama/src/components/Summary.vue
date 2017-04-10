<template>
  <div class="col-xs-12 col-sm-8 col-sm-offset-2">
    <h1>Summary</h1>
    <table class="table table-bordered table-hover text-center" style="background-color: #fff; max-width: 600px; margin: 20px auto">
      <thead>
      <tr>
        <th>Ćw</th>
        <th>Powtórzenia</th>
        <th>Ciężar łącznie</th>
        <th>Max</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <th>Ćwiczenie 1</th>
        <td>24</td>
        <td>300kg</td>
        <td>30kg</td>
      </tr>
      <tr>
        <th>Ćwiczenie 2</th>
        <td>40</td>
        <td>400kg</td>
        <td>20kg</td>
      </tr>
      <tr>
        <th>Ćwiczenie 3</th>
        <td>8</td>
        <td>100kg</td>
        <td>10kg</td>
      </tr>
      </tbody>
    </table>
    <div class="alert alert-danger center-block" role="alert" style="max-width: 400px;">
      <b>Cel: </b>80% - słabo!
    </div>
    <div class="alert alert-success center-block" role="alert" style="max-width: 400px;">
      <b>Czas: </b>40 minut - lepiej niż założyłeś, nice!
    </div>
    <button class="btn btn-primary center-block" @click="sendMessage">Wróć do strony głównej</button>
  </div>
</template>

<script>
  import { eventBus } from '../main'

  export default {
    methods: {
      /**
       * przesyłanie danych bez konieczności tworzenia w eventBus metod
       */
      sendMessage () {
        let message = 'eventBus i druga metoda przekazywania danych z jego pomocą'
        eventBus.$emit('messageWithEventBus2', message)
        this.$router.push('/')
      }
    }
  }
</script>

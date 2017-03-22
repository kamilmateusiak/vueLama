<template>
  <div class="wrapper" style="background-color: #ffd700; overflow: hidden;">
    <div class="containter">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2">
        <h1>Home</h1>
        <div class="col-xs-6">
          <div class="panel panel-primary">
            <div class="panel-heading">Zestaw 1</div>
            <div class="panel-body">
              <p>Opis</p>
              <button class="btn btn-primary">Wybierz</button>
              <button class="btn btn-primary">Edytuj</button>
              <button class="btn btn-primary">Usuń</button>
            </div>
          </div>
        </div>
        <div class="col-xs-6">
          <div class="panel panel-primary">
            <div class="panel-heading">Zestaw 2</div>
            <div class="panel-body">
              <p>Opis</p>
              <button class="btn btn-primary">Wybierz</button>
              <button class="btn btn-primary">Edytuj</button>
              <button class="btn btn-primary">Usuń</button>
            </div>
          </div>
        </div>
        <div class="col-xs-6">
          <div class="panel panel-primary">
            <div class="panel-heading">Zestaw 3</div>
            <div class="panel-body">
              <p>Opis</p>
              <button class="btn btn-primary">Wybierz</button>
              <button class="btn btn-primary">Edytuj</button>
              <button class="btn btn-primary">Usuń</button>
            </div>
          </div>
        </div>
        <div class="col-xs-6">
          <div class="panel panel-primary">
            <div class="panel-heading">Trening - zestaw wakacyjny</div>
            <div class="panel-body">
              <p>Opis</p>
              <button class="btn btn-primary">Wybierz</button>
              <button class="btn btn-primary">Edytuj</button>
              <button class="btn btn-primary">Usuń</button>
            </div>
          </div>
        </div>
        <div class="col-xs-12">
          <button class="btn btn-primary center-block">Dodaj nowy</button>
        </div>
      </div>

      <div class="col-xs-12 col-sm-8 col-sm-offset-2">
        <h1>Edit</h1>
        <div class="col-xs-8 col-xs-offset-2">
          <div class="panel panel-primary">
            <div class="panel-heading">Zestaw 1</div>
            <div class="panel-body">
              <form>
                <div class="form-group">
                  <label class="control-label">Opis</label>
                  <textarea class="form-control" rows="3">Opis</textarea>
                </div>
                <div class="form-group">
                  <label class="control-label">Ćwiczenia</label>
                  <input class="form-control" value="Cwiczenie 1">
                  <input class="form-control" value="Cwiczenie 2">
                  <button class="btn btn-primary">Dodaj następne ćwiczenie</button>
                </div>
                <button class="center-block btn btn-primary">Zapisz</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xs-12 col-sm-8 col-sm-offset-2">
        <h1>Add new</h1>
        <div class="col-xs-8 col-xs-offset-2">
          <div class="panel panel-primary">
            <div class="panel-body">
              <form>
                <div class="form-group">
                  <label class="control-label">Nazwa</label>
                  <input class="form-control">
                </div>
                <div class="form-group">
                  <label class="control-label">Opis</label>
                  <textarea class="form-control" rows="3"></textarea>
                </div>
                <div class="form-group">
                  <label class="control-label">Ćwiczenia</label>
                  <div>
                    <input class="form-control">
                  </div>
                  <input class="form-control">
                  <button class="btn btn-primary">Dodaj ćwiczenie</button>
                </div>
                <button class="center-block btn btn-primary" type="submit">Zapisz</button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div class="col-xs-12 col-sm-8 col-sm-offset-2">
        <h1>Start</h1>
        <div class="col-xs-8 col-xs-offset-2">
          <div class="panel panel-primary">
            <div class="panel-heading">Zestaw 1</div>
            <div class="panel-body">
              <p>Opis</p>
            </div>
            <div class="list-group">
              <li class="list-group-item">Cwiczenie 1</li>
              <li class="list-group-item">Cwiczenie 2</li>
              <li class="list-group-item">Cwiczenie 3</li>
            </div>
            <button class="btn btn-primary center-block" style="margin-top: 20px; margin-bottom: 20px;">Edytuj</button>
          </div>

          <form class="form-inline col-xs-12" style="margin-bottom: 30px;">
            <h3>Cele</h3>
            <div class="form-group">
              <label class="control-label">Czas</label>
              <input class="form-control" type="text" placeholder="Podaj w minutach">
            </div>
            <div class="form-group">
              <label class="control-label">Ciężar</label>
              <input class="form-control" type="number" placeholder="Podaj ilość w kg">
            </div>
          </form>
        </div>
        <div class="col-xs-12">
          <button class="btn btn-primary center-block">Rozpocznij trening</button>
        </div>
      </div>

      <div class="col-xs-12 col-sm-8 col-sm-offset-2">
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

      <div class="col-xs-12 col-sm-8 col-sm-offset-2">
        <div class="modal fade bs-example-modal-sm in" style="display: none;" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel">
          <div class="modal-dialog modal-md" role="document">
            <div class="modal-content" style="padding: 10px">
              <h4>Ćwiczenie 1</h4>
              <div class="col-xs-12">
                <div class="col-xs-2 text-center">Numer</div>
                <div class="col-xs-5 text-center">
                  Powtórzenia
                </div>
                <div class="col-xs-5 text-center">
                  Ciężar
                </div>
              </div>
              <div class="col-xs-12">
                <div class="col-xs-2 text-center">#1</div>
                <div class="col-xs-5">
                  <div class="input-group">
                    <span class="input-group-addon" style="background-color: green; color: #fff;"><i class="glyphicon glyphicon-plus"></i></span>
                    <input type="number" class="form-control text-center">
                    <span class="input-group-addon" style="background-color: red; color: #fff;"><i class="glyphicon glyphicon-minus"></i></span>
                  </div>
                </div>
                <div class="col-xs-5">
                  <div class="input-group">
                    <span class="input-group-addon" style="background-color: green; color: #fff;"><i class="glyphicon glyphicon-plus"></i></span>
                    <input type="number" class="form-control text-center">
                    <span class="input-group-addon" style="background-color: red; color: #fff;"><i class="glyphicon glyphicon-minus"></i></span>
                  </div>
                </div>
              </div>
              <div class="col-xs-12" style="margin-bottom: 10px; margin-top: 10px;">
                <div class="col-xs-2 text-center">#2</div>
                <div class="col-xs-5">
                  <div class="input-group">
                    <span class="input-group-addon" style="background-color: green; color: #fff;"><i class="glyphicon glyphicon-plus"></i></span>
                    <input type="number" class="form-control text-center">
                    <span class="input-group-addon" style="background-color: red; color: #fff;"><i class="glyphicon glyphicon-minus"></i></span>
                  </div>
                </div>
                <div class="col-xs-5">
                  <div class="input-group">
                    <span class="input-group-addon" style="background-color: green; color: #fff;"><i class="glyphicon glyphicon-plus"></i></span>
                    <input type="number" class="form-control text-center">
                    <span class="input-group-addon" style="background-color: red; color: #fff;"><i class="glyphicon glyphicon-minus"></i></span>
                  </div>
                </div>
              </div>
              <button class="btn btn-primary center-block">Dodaj serię</button>
            </div>
          </div>
        </div>
      </div>
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
        <button class="btn btn-primary center-block">Wróć do strony głównej</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>

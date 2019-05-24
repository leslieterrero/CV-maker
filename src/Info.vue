<template>
  <div class="container">
    <form>
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <h2>Informacion personal</h2>
          <hr>
          <div class="form-group">
            <label for="name">Nombre</label>
            <input type="text" id="name" class="form-control" :v-model="User.name">
          </div>

          <div class="form-group">
            <label for="lastname">Apellido</label>
            <input type="text" id="lastname" class="form-control" v-model="User.lastname">
          </div>
          <div class="form-group">
            <label for="number">Telefono</label>
            <input type="text" id="number" class="form-control" v-model="User.number">
          </div>
          <div class="form-group">
            <label for="email">E-mail</label>
            <input type="text" id="email" class="form-control" v-model="User.email">
          </div>

          <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
              <label for="male">
                <input type="radio" id="male" value="Male" v-model="User.gender"> Masculino
              </label>
              <label for="female">
                <input type="radio" id="female" value="Female" v-model="User.gender"> Femenino
              </label>
            </div>
          </div>
          <label for="fecha">Fecha de nacimiento</label>
          <div class="form-row">
            <select class="form-control col-md-1" v-model="User.dia">
              <option v-for="d in dias" :key="d">{{d}}</option>
            </select>

            <select class="form-control col-md-3" v-model="User.mes">
              <option v-for="m in meses" :key="m">{{m}}</option>
            </select>

            <select class="form-control col-md-2" v-model="User.anio">
              <option v-for="a in anios" :key="a">{{a}}</option>
            </select>
          </div>

          <p></p>
          <h2>Experiencia y Eduacion</h2>
          <hr>
          <div class="form-group">
            <label for="name">Titulo</label>
            <input type="text" id="title" class="form-control" v-model="User.title">
          </div>
          <div class="form-group">
            <label for="github">Link de Github</label>
            <input type="text" id="github" class="form-control" v-model="User.github">
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
          <label for="message">Experiencia</label>
          <br>

          <textarea id="message" rows="5" class="form-control" v-model="User.exp"></textarea>
        </div>
      </div>

      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
          <label for="message">Educacion</label>
          <br>

          <textarea id="message" rows="5" class="form-control" v-model="User.educ"></textarea>
        </div>
      </div>

      <hr>
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <button class="btn btn-primary" @click.prevent="submitted">Submit!</button>
        </div>
      </div>
      <div class="row" v-if="isSubmitted">
        <div>
          {{User.name}}
          {{User.lastname}}
          {{User.number}}
          {{User.title}}
          {{User.gender}}
          {{User.email}}
          {{User.dia}} {{User.mes}} {{User.anio}}
          {{User.github}}
          {{User.exp}}
          {{User.educ}}
        </div>
      </div>
    </form>
  </div>
</template>


<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      User: {
        name: "",
        lastname: "",
        number: "",
        email: "",
        gender: "",
        dia: "",
        mes: "",
        anio: "",
        title: "",
        github: "",
        exp: "",
        educ: ""
      },
      isSubmitted: false,
      anios: [
        "1999",
        "1998",
        "1997",
        "1996",
        "1995",
        "1994",
        "1993",
        "1992",
        "1991",
        "1990"
      ],
      meses: [
        "Enero",
        "Febrero",
        "Marzo",
        "Abril",
        "Mayo",
        "Junio",
        "Julio",
        "Agosto",
        "Septiempre",
        "Octubre",
        "Noviembre",
        "Diciembre"
      ],
      dias: [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "11",
        "12",
        "13",
        "14",
        "15",
        "16",
        "17",
        "18",
        "19",
        "20",
        "21",
        "22",
        "23",
        "24",
        "25",
        "26",
        "27",
        "28",
        "29",
        "30",
        "31"
      ]
    };
  },
 
  methods: {
    setUser() {
      try {
        this.$store.dispatch("setUser", User);
      } catch (error) {
        console.log(error);
      }
    },
    getUser() {
      const response = this.$store.getters("getUser");
      this.User = response;
    }
  },
  //submitted() {
   // this.isSubmitted = true;
 // }
};
</script>

  <style>
</style>
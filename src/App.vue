<template>
  <div>
    <appInfo></appInfo>
  </div>
</template>


<script>
import Info from "./Info.vue";

 import {mapState} from 'vuex';
export default {
 
  computed: {
    ...mapState([
      "name",
      "lastname",
      "number",
      "title",
      "gender",
      "email",
      "dia",
      "mes",
      "anio",
      "github",
      "exp",
      "educ"
    ])
  },
  set(value) {
    this.$store.dispatch(types.UPDATE_NAME, name);
  },
  methods: {
    updateValue(event) {
      this.$store.dispatch(types.UPDATE_NAME, event.target.name);
    }
  },
  components: {
    appInfo: Info
  }
};
</script>

  <style>
</style>
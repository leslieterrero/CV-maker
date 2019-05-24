import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        User:{
        name: '',
        lastname: '',
        number: '',
        email: '',
        gender: '',
        dia: '',
        mes: '',
        anio:'',
        title: '',
        github: '',
        exp: '',
        educ: ''}
    },
    getters:{
     getUser(state){
         return state.User
     }
    },
    mutations:{
     writeUser(state,User){
         state.User = User
     }
    },
    actions:{
     setUser({commit},User){
        commit('writeUser',User)
     }
    }
   })
   
    export const store = new Vuex.Store({})
  
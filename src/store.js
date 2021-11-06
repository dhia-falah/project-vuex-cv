import Vue from "vue";
import Vuex from "vuex";
 
Vue.use(Vuex);
 
export default new Vuex.Store({
  state: {
    listAgenda: [
      { nama: "DHIA FALAH RAHMA WARDANI"},
      {alamat: "Kelurahan Patemon RT02 RW01 GunungPati Kota Semarang"},
      {phone: "+62 858-0330-3044"},
      {email: "dhiafala@gmail.com"},
      {hobi: "Read a book, Swimming, Listening to music, Dance"},
      {sumary: "Senior web developer specializing in fornt end development. <br>Experenced with all stages of the development cycle for <br>dynamic web projects. Well-versed in numerous programming <br>languages including HTML5, PHP OOP, JavaScript, CSS MySQL. <br>Strong bacground in project management and customer relations."},
      {skillHightlight: ""},
      {experience: ""}
    ]
  },
  mutations: {},
  actions: {},
});

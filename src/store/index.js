import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loginAPI: {
      username: "",
      id: "",
      token: "",
    },
    dashboardPrivado: {},
  },
  getters: {},
  mutations: {
    GuardarDataLogin(state, payload) {
      state.loginAPI = payload;
      console.log(state.loginAPI);
    },
    GuardarDashboardPrivado(state, payload) {
      state.dashboardPrivado = payload;
    },
  },
  actions: {
    async Login({ commit }, payload) {
      const datosLogin = payload;
      if (!datosLogin) return;

      const rut = datosLogin.rut;

      // try {
      //   const URL = "https://prueba-vuex.herokuapp.com/api/v1/bdc/users/login";
      //   const config = {
      //     method: "POST",
      //     body: {
      //       username: datosLogin.email,
      //       password: datosLogin.password,
      //     },
      //   };
      //   const req = await axios(URL, config);
      //   console.log(req);
      // } catch (error) {
      //   console.log(error);
      // }
      
      try {
        const URL = "/api/login.json";

        const req = await axios(URL);
        const data = req.data;

        const rutAPI = data.username;

        if (rutAPI === rut) {
          commit("GuardarDataLogin", data);
          return "Si, todo ok!";
        }
        return "No, todo mal";
      } catch (error) {
        console.log();
        return "No, todo mal";
      }
    },
    async DashboardPrivado({ commit }) {
      try {
        const URL = "/api/dashboard.json";

        const req = await axios(URL);
        console.log(req.data);
        commit("GuardarDashboardPrivado", req.data);
      } catch (error) {
        console.log(error);
      }
    },
  },
  modules: {},
});

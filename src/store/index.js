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
  },
  getters: {},
  mutations: {
    GuardarDataLogin(state, payload) {
      state.loginAPI = payload;
      console.log(state.loginAPI);
    },
  },
  actions: {
    async Login({ commit }, payload) {
      const datosLogin = payload;
      if (!datosLogin) return;

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

        commit("GuardarDataLogin", data);
        if (!data) return "No, todo mal";
        return "Si, todo ok!";
      } catch (error) {
        console.log();
        return "No, todo mal";
      }
    },
  },
  modules: {},
});

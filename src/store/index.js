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
    bancos: [], // Esto es un arreglo de objetos
    cartola: [], // Esto es un arreglo de objetos
    fieldsCartola: [
      {
        key: "num_trx",
        label: "N° de Transacción",
      },
      {
        key: "destinatario",
        label: "Destinatario",
      },
      {
        key: "estado",
        label: "Estado",
      },
      {
        key: "actions",
        label: "Acciones",
      },
    ],
  },
  getters: {
    bancosSelect(state) {
      // foods: [ // Necesito un arreglo de string
      //   { text: "Seleccione...", value: null },
      //   "Carrots",
      //   "Beans",
      //   "Tomatoes",
      //   "Corn",
      // ],
      const bancos = state.bancos;
      // const bancosMap = bancos.map(banco => bancos.nombre);
      const bancosMap = bancos.map((banco) => {
        const obj = {
          text: banco.nombre,
          value: banco.id,
        };
        return obj;
      });
      return bancosMap;
    },
  },
  mutations: {
    GuardarDataLogin(state, payload) {
      state.loginAPI = payload;
      console.log(state.loginAPI);
    },
    GuardarDashboardPrivado(state, payload) {
      state.dashboardPrivado = payload;
    },
    GuardarBancos(state, payload) {
      state.bancos = payload;
    },
    GuardarCartola(state, payload) {
      state.cartola = payload;
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
      //       username: datosLogin.rut,
      //       password: datosLogin.password,
      //     },
      //   };
      //   const req = await axios(URL, config);
      //   console.log(req);
      //   commit("GuardarDataLogin", data);
      //   return "Si, todo ok!";
      // } catch (error) {
      //   return "No, todo mal";
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
        // const config = {
        //   method: "",
        //   headers: {
        //     "Authorization": "Bearer " + TOKEN
        //   }
        // };

        // const req = await axios(URL, config);
        const req = await axios(URL);
        console.log(req.data);
        commit("GuardarDashboardPrivado", req.data);
      } catch (error) {
        console.log(error);
      }
    },
    async ObtenerBancos({ commit }) {
      try {
        const URL = "/api/bancos.json";
        const req = await axios(URL);
        if (!req) return;
        const bancos = req.data.bancos;
        commit("GuardarBancos", bancos);
      } catch (error) {
        console.log(error);
      }
    },
    async ObtenerCartola({ commit }) {
      try {
        const URL = "/api/cartola_transf.json";
        const req = await axios(URL);
        if (!req) return;
        const cartola = req.data.transferencias;
        console.log(cartola);
        commit("GuardarCartola", cartola);
      } catch (error) {
        console.log(error);
      }
    },
  },
  modules: {},
});

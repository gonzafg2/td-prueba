<template>
  <div>
    <b-container>
      <b-row>
        <b-col cols="12">
          <h1>Nueva Transferencia</h1>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="12">
          <h2 class="my-5">Cuenta de Destino</h2>
          <b-form-group v-if="bancosSelect" label="Banco:">
            <b-form-select v-model="banco" :options="bancosSelect"></b-form-select>
            <!-- <select v-for="(banco, i) in bancos" :key="i">
              <option :value="banco.id">{{banco.nombre}}</option>
            </select> -->
          </b-form-group>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Transferir",
  data() {
    return {
      banco: ""
    };
  },
  computed: {
    ...mapGetters(["bancosSelect"])
  },
  methods: {
    ...mapActions(["ObtenerBancos"])
  },
  created () {
    this.ObtenerBancos();
  },
};
</script>

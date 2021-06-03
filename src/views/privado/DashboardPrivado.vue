<template>
  <div>
    <b-row>
      <!-- Hero Section -->
      <b-col cols="12">
        <div class="hero-section">
          <div class="hero-section__jumbotron">
            <img src="https://via.placeholder.com/500x200" alt="imagen" class="w-100">
          </div>
          <h1 class="hero-section__titulo">Bienvenido Juan!</h1>
          <h2 class="hero-section__subtitulo">Tienes un monto de 1.000.000</h2>
        </div>
      </b-col>
      <!-- Indicador 1 -->
      <b-col cols="6" v-for="(cupo,i) in dashboardPrivado.cupos" :key="i">
        <div class="indicador indicador--1">
          <b-card no-body class="overflow-hidden" style="max-width: 540px;">
            <b-row no-gutters>
              <b-col md="6">
                <b-card-img src="https://picsum.photos/400/400/?image=20" alt="Image" class="rounded-0"></b-card-img>
              </b-col>
              <b-col md="6">
                <b-card-body class="indicador__titulo" :title="cupo.nombre">
                  <b-card-text>
                    <b-row>
                      <b-col cols="6">
                        <p class="indicador__numero">{{ cupo.utilizado}}</p>
                        <p class="indicador__texto">Utilizado</p>
                      </b-col>
                      <b-col cols="6">
                        <p class="indicador__numero">{{ cupo.disponible }}</p>
                        <p class="indicador__texto indicador__texto--verde">Total</p>
                      </b-col>
                    </b-row>
                  </b-card-text>
                </b-card-body>
              </b-col>
            </b-row>
          </b-card>
        </div>
      </b-col>
    </b-row>
  </div>
</template>


<script>
// import ApexCharts from 'apexcharts';
import {mapState, mapActions} from "vuex";

export default {
  name: "DashboardPrivado",
  created () {
    this.DashboardPrivado();
  },
  computed: {
    ...mapState(["dashboardPrivado"])
  },
  methods: {
    ...mapActions(["DashboardPrivado"])
  },
}
</script>
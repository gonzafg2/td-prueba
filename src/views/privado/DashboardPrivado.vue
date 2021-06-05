<template>
  <div>
    <b-row>
      <!-- Hero Section -->
      <b-col cols="12">
        <div class="hero-section">
          <div class="hero-section__jumbotron">
            <img
              src="https://via.placeholder.com/500x200"
              alt="imagen"
              class="w-100"
            />
          </div>
          <h1 v-if="dashboardPrivado && dashboardPrivado.usuario" class="hero-section__titulo">Bienvenido {{ dashboardPrivado.usuario.nombre }}!</h1>
          <h1 v-else class="hero-section__titulo">Bienvenido Usuario!</h1>
          <h2 v-if="dashboardPrivado && dashboardPrivado.usuario" class="hero-section__subtitulo">{{ dashboardPrivado.usuario.mensaje }}</h2>
          <h2 v-else>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex, eaque! Voluptatem minima nisi amet blanditiis alias repudiandae esse ratione assumenda illum, culpa quam maiores, commodi nulla nemo eum consequuntur ipsa.</h2>
        </div>
      </b-col>
      <!-- Indicador 1 -->
      <template v-if="dashboardPrivado">
        <b-col class="my-5" cols="6" v-for="(cupo, i) in dashboardPrivado.cupos" :key="i">
          <div class="indicador indicador--1">
            <b-card no-body class="overflow-hidden" style="max-width: 540px">
              <b-row no-gutters>
                <b-col md="6">
                  <apexchart
                    type="radialBar"
                    height="150"
                    :options="options"
                    :series="calculo(cupo.utilizado, cupo.disponible)"
                  ></apexchart>
                </b-col>
                <b-col md="6">
                  <b-card-body class="indicador__titulo" :title="cupo.nombre">
                    <b-card-text>
                      <b-row>
                        <b-col cols="6">
                          <p class="indicador__numero">{{ cupo.utilizado }}</p>
                          <p class="indicador__texto">Utilizado</p>
                        </b-col>
                        <b-col cols="6">                                                                                                                                                                                                                                                  
                          <p class="indicador__numero">{{ cupo.disponible }}</p>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
                          <p class="indicador__texto indicador__texto--verde">
                            Total
                          </p>
                        </b-col>
                      </b-row>
                    </b-card-text>
                  </b-card-body>
                </b-col>
              </b-row>
            </b-card>
          </div>
        </b-col>
      </template>
    </b-row>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "DashboardPrivado",
  data() {
    return {
      options: {
        chart: {
          height: 350,
          type: "radialBar",
        },
        plotOptions: {
          radialBar: {
            hollow: {
              size: "60%",
            },
          },
        },
        labels: [""],
      },
    };
  },
  components: {
    //
  },
  created() {
    this.DashboardPrivado();
  },
  computed: {
    ...mapState(["dashboardPrivado"]),
  },
  methods: {
    ...mapActions(["DashboardPrivado"]),
    calculo(uno, dos) {
      return [Math.round(uno / dos * 100)];
    }
  },
};
</script>

<template>
  <div v-if="cartola && fieldsCartola">
    <h1 class="my-5">Cartola Transferencias</h1>
    <div class="row align-items-center">
      <div class="col-4">
        <div>
          <label>Fecha desde</label>
          <b-form-datepicker v-model="value" class="mb-2"></b-form-datepicker>
        </div>
      </div>
      <div class="col-4">
        <div>
          <label>Fecha hasta</label>
          <b-form-datepicker v-model="value" class="mb-2"></b-form-datepicker>
        </div>
      </div>
      <div class="col-4">
        <button class="btn btn-primary">Buscar</button>
      </div>
    </div>

    <b-table striped hover :items="cartola" :fields="fieldsCartola">
      <template #cell(actions)="row">
        <b-button size="sm" @click="row.toggleDetails" variant="primary">
          Ver Detalle
        </b-button>
      </template>
    </b-table>
    <b-pagination
      v-model="currentPage"
      :total-rows="totalRows"
      :per-page="perPage"
      align="fill"
      size="sm"
      class="my-0"
    ></b-pagination>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "Transferencias",
  data() {
    return {
      totalRows: 1,
      currentPage: 1,
      perPage: 5,
    };
  },
  created() {
    this.ObtenerCartola();
  },
  computed: {
    ...mapState(["cartola", "fieldsCartola"]),
  },
  methods: {
    ...mapActions(["ObtenerCartola"]),
  },
};
</script>

<template>
  <div>
    <NavPrivado />
    <b-container fluid>
      <b-row>
        <!-- Breadbrumb -->
        <b-col cols="2"></b-col>
        <b-col cols="10">
          <Breadcrumb class="my-4" />
        </b-col>
        <!-- Sidebar -->
        <b-col cols="2"></b-col>
        <!-- RouterView Vista cambiantes de Privado -->
        <b-col cols="10">
          <router-view />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import NavPrivado from "@/components/privado/NavPrivado.vue";
import Breadcrumb from "@/components/privado/Breadcrumb.vue";

export default {
  name: "LayoutPrivado",
  components: {
    NavPrivado,
    Breadcrumb,
  },
};
</script>

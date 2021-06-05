<template>
  <div>
    <b-container>
      <b-row class="justify-content-center align-items-center">
        <b-col cols="12" class="mb-5">
          <h1 class="text-center my-5">Acceso de Usuarios</h1>
        </b-col>
        <b-col cols="12" md="4" class="border p-5 text-center">
          <b-form-group
            label="RUT:"
            description="Ingresa tu RUT."
            class="mb-4 text-start"
          >
            <b-form-input
              v-model="form.rut"
              type="text"
              placeholder="RUT"
            ></b-form-input>
          </b-form-group>

          <b-form-group
            label="Contraseña:"
            description="Ingresa tu contraseña."
            class="text-start"
          >
            <b-form-input
              v-model="form.password"
              type="password"
              placeholder="Contraseña"
            ></b-form-input>
          </b-form-group>
          <b-button @click="logueo" class="mt-4" variant="success"
            >Ingresar</b-button
          >
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Login",
  data() {
    return {
      form: {
        rut: "",
        password: "",
      },
    };
  },
  methods: {
    ...mapActions(["Login"]),
    async logueo() {
      const datos = this.form;
      if (!datos.rut || !datos.password) return;
      
      const res = await this.Login(datos);

      if (res === "No, todo mal") {
        alert("Login erróneo!");
        return;
      }
      this.$router.push("/privado/dashboard");
    },
  },
};
</script>

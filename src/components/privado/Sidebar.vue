<template>
  <div>
    <ul class="border ps-0">
      <li>
        <b-button to="" variant="light" class="w-100 text-start">
          Cuenta Corriente
        </b-button>
      </li>

      <li>
        <b-button to="" variant="light" class="w-100 text-start">
          Tarjeta de Crédito
        </b-button>
      </li>

      <li>
        <b-button to="" variant="light" class="w-100 text-start">
          Línea de Crédito
        </b-button>
      </li>

      <li>
        <b-button to="" variant="light" class="w-100 text-start">
          Transferencias
        </b-button>
      </li>

      <li>
        <b-button to="" variant="light" class="w-100 text-start">
          Pago de Servicios
        </b-button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
};
</script>

<style lang="scss" scoped>
ul {
  list-style: none;
}
button {
  border-bottom: 1px solid #dee2e6;
}
</style>

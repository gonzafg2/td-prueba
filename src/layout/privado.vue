<template>
  <div>
    <NavPrivado />
    <h1>Entorno Privado</h1>
    <router-view />
    <FooterPrivado />
  </div>
</template>

<script>
export default {
  name: "LayoutPrivado"
}
</script>

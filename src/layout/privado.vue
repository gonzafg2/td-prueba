<template>
  <div>
    <NavPrivado />
    <h1>Este es el layout Privado</h1>
    <router-view />
    <FooterPrivado />
  </div>
</template>

<script>
export default {
  name: "LayoutPrivado"
}
</script>

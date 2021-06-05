<template>
  <b-navbar toggleable="md" type="dark" variant="dark">
    <b-navbar-brand href="#" class="ps-2"
      >Banco Digital de Chile</b-navbar-brand
    >

    <b-navbar-toggle target="navbar-toggle-collapse">
      <template #default="{ expanded }">
        <b-icon v-if="expanded" icon="chevron-bar-up"></b-icon>
        <b-icon v-else icon="chevron-bar-down"></b-icon>
      </template>
    </b-navbar-toggle>

    <b-collapse id="navbar-toggle-collapse" is-nav>
      <b-navbar-nav class="ms-auto pe-2">
        <b-nav-item href="#">Profile</b-nav-item>
        <b-nav-item href="#">Logout</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: "NavPrivado",
};
</script>

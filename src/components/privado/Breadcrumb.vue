<template>
  <b-breadcrumb :items="items"></b-breadcrumb>
</template>

<script>
export default {
  name: "Breadcrumb",
  data() {
    return {
      items: [
        {
          text: "Admin",
          href: "#",
        },
        {
          text: "Manage",
          href: "#",
        },
        {
          text: "Library",
          active: true,
        },
      ],
    };
  },
};
</script>

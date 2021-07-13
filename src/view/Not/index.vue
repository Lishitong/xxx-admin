<template>Not Found Path: {{ path }}</template>

<script>
import { useRoute } from "vue-router";
export default {
  setup() {
    const route = useRoute();
    const path = route.path;
    return {
      path,
    };
  },
};
</script>

<style>
</style>
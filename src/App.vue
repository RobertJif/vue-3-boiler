<script setup lang="ts">
import Counter from "./components/Counter.vue";
import { useRouter } from "vue-router";

console.info("vite import.meta got message:");

const route = useRouter();
console.log("route:");
console.log(route?.currentRoute);
</script>

<template>
  <router-view></router-view>
</template>

<style scoped />

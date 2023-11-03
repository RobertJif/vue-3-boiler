<script setup lang="ts">
import { loadRemoteModule } from "@softarc/native-federation";
import { defineAsyncComponent } from "vue";
import Counter from "./components/Counter.vue";
</script>

<template>
  <div>
    <router-link to="/">
      <button>Home</button>
    </router-link>
    <router-link to="/am">
      <button>AM</button>
    </router-link>
    <router-link to="/she">
      <button>SHE</button>
    </router-link>
  </div>
  <div>
    <RouterView />
  </div>
</template>

<style scoped>
.host .card {
  background: #3178c6;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.4);
  border-radius: 5px;
  margin: 20px 20px 20px 20px;
  width: 250px;
  padding: 20px;
  text-align: center;
  color: white;
  float: left;
}

.host .title {
  margin-top: 10px;
  font-size: 25px;
}

.host svg {
  width: 100px;
  height: 100px;
}

.host path {
  fill: #f6b352;
}
</style>

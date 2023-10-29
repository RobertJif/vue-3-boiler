<script lang="ts" setup>
import layoutStore from '@/stores/layout'
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="fixed top-12 left-0 h-full w-full">
    <div class="relative h-full w-full">
      <!-- Drawer Curtain -->
      <Transition
        enter-active-class="duration-300 ease-out"
        enter-from-class="opacity-0"
        enter-to-class="opacity-5"
        leave-active-class="duration-200 ease-in"
        leave-from-class="opacity-5"
        leave-to-class="opacity-0"
      >
        <div
          v-if="layoutStore.isDrawerOpen"
          class="absolute top-0 left-0 h-full w-full bg-neutral-100 opacity-[0.05]"
          @click="layoutStore.closeDrawer"
        ></div>
      </Transition>
      <!-- Drawer Content -->
      <Transition
        enter-active-class="duration-300 ease-out"
        enter-from-class="-translate-x-full"
        enter-to-class="translate-x-0"
        leave-active-class="duration-200 ease-in"
        leave-from-class="translate-x-0"
        leave-to-class="-translate-x-full"
      >
        <div
          v-if="layoutStore.isDrawerOpen"
          class="absolute top-0 left-0 h-full w-[70%] bg-primary-300 p-2"
        >
          <div class="h-8 bg-black p">
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/game">Game</RouterLink>
          </div>
        </div>
      </Transition>
    </div>
  </div>
</template>

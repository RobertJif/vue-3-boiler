<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" id="x" :class="props.class">
    <line
      x1="256"
      x2="0"
      y1="0"
      y2="256"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="24"
    ></line>
    <line
      x1="256"
      x2="0"
      y1="256"
      y2="0"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="24"
    ></line>
  </svg>
</template>

<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    class?: string
  }>(),
  { class: '' }
)
</script>

<style scoped></style>

<template>
  <svg xmlns="http://www.w3.org/2000/svg" :class="props.class">
    <g transform="translate(-161.787 -794.304)">
      <circle cx="177.787" cy="810.304" r="16" fill="#ffcc0f" fill-rule="evenodd"></circle>
      <g transform="translate(177.926 -561.551) scale(1.08403)">
        <path
          fill="none"
          stroke="#373748"
          stroke-width=".531"
          d="M-2.5 1256.362v17m6-17v17m5.5-11.5H-8m17 6H-8"
        ></path>
        <path
          fill="none"
          stroke="#f55"
          stroke-width=".531"
          d="m-3.953 1269.409-3 3m0-3 3 3M2 1263.363l-3 3m0-3 3 3"
        ></path>
        <circle
          style="isolation: auto; mix-blend-mode: normal"
          cx=".5"
          cy="1270.909"
          r="1.75"
          fill="#5fd38d"
          color="#000"
          overflow="visible"
        ></circle>
        <circle
          cx="6.55"
          cy="1264.862"
          r="1.75"
          fill="#5fd38d"
          color="#000"
          overflow="visible"
          style="isolation: auto; mix-blend-mode: normal"
        ></circle>
      </g>
    </g>
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

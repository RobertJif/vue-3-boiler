<script lang="ts" setup>
import OIcon from '@/components/icons/OIcon.vue'
import { useRoute } from 'vue-router'
import { ref, computed, watch } from 'vue'
import XIcon from '@/components/icons/XIcon.vue'
type PlayerNo = 1 | 2
const route = useRoute()

const grids = ref<Array<TicTacToeMarkType | null>>(
  Array(9).fill(null, 0, 3).fill('O', 4, 6).fill('X', 7, 8)
)

const match: { playerNo: PlayerNo } = {
  playerNo: 1
}

const round = ref<number>(1)
const turn = ref<PlayerNo>(1)

const mark: TicTacToeMarkType = match.playerNo === 1 ? 'O' : 'X'
function handleMarkGrid(gridIndex: number) {
  console.log(gridIndex)
  grids.value[gridIndex] = mark
}

watch(round, (newVal, oldVal) => {
  if (round.value <= 2) {
    return
  }
  console.log(newVal, oldVal)
})
// console.log(route.params.id, grids.value)
</script>

<template>
  <div class="border-2 w-full h-full grid grid-cols-3 grid-rows-3">
    <div
      v-for="(grid, index) in grids"
      :key="index"
      class="border-2 w-full h-full aspect-square flex items-center justify-center"
    >
      <OIcon class="w-24 h-24 fill-success-200" v-if="grid === 'O'" />
      <XIcon class="w-20 h-20 stroke-error-200" v-else-if="grid === 'X'" />
      <div
        class="w-full h-full hover:bg-neutral-200 hover:opacity-30"
        v-else
        @click="() => handleMarkGrid(index)"
      ></div>
      <div class="absolute">
        {{ index }}
      </div>
    </div>
  </div>
</template>

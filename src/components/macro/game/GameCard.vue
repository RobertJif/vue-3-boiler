<script lang="ts" setup>
import { type GameResponseType, GameStatusEnum } from '@/libraries/api-client/useGameListApi'
import { computed } from 'vue'
import authStore from '@/stores/auth'

const props = defineProps<{
  detail: GameResponseType
}>()
const isGameInActive = computed(() => {
  return props.detail.status !== GameStatusEnum.ACTIVE
})
</script>

<template>
  <div class="border-primary-100 border-2 h-24 w-full rounded-md flex relative">
    <div class="flex items-center h-full px-2 w-fit">
      <img class="w-20 h-20" :src="props.detail.gameImagePath" />
    </div>
    <div class="w-full h-full bg-neutral-800 flex-1 p-2 pt-1">
      <div class="flex flex-row justify-between">
        <h1 class="font-bold">{{ props.detail.name }}</h1>
        <RouterLink :to="`/game/${props.detail.code.toLowerCase()}`" v-if="authStore.isLoggedIn">
          <button class="bg-neutral-200 text-neutral-800 font-semibold px-4 rounded-lg">Go</button>
        </RouterLink>
        <button
          v-else
          class="bg-neutral-200 text-neutral-800 font-semibold px-4 rounded-lg"
          @click="authStore.openLoginDialog"
        >
          Go
        </button>
      </div>
      <p class="text-xs text-justify pt-1 line-clamp-3" v-html="props.detail.descriptionHTML"></p>
    </div>
    <div
      class="bg-neutral-900 w-full h-full flex items-center justify-center pb-1 absolute opacity-95"
      v-if="isGameInActive"
    >
      <p class="font-bold uppercase">
        {{ props.detail.status === GameStatusEnum.COMING_SOON ? 'Coming Soon!' : 'Maintenance' }}
      </p>
    </div>
  </div>
</template>

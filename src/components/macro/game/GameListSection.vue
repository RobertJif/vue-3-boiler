<script lang="ts" setup>
import GameCard from './GameCard.vue'
import { useQuery } from '@tanstack/vue-query'

import useGameListApi, { type GameResponseType } from '@/libraries/api-client/useGameListApi'

const { queryFn, queryKey } = useGameListApi()

const {
  data: gameList,
  isLoading,
  isError,
  isSuccess,
  error
} = useQuery<GameResponseType[], HttpRequestErrorType>({
  queryKey,
  queryFn
})
</script>

<template>
  <div class="px-2">
    <div v-if="isLoading" class="skeleton w-full h-24 rounded-md"></div>
    <div v-else class="flex flex-row flex-wrap gap-2">
      <p v-if="isError">{{ error?.all }}</p>
      <p v-else-if="isSuccess && gameList?.length === 0">Games are not available right now</p>
      <GameCard v-else v-for="game in gameList" :key="game.code" :detail="game" />
    </div>
  </div>
</template>

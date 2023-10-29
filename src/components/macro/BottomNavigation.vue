<script lang="ts" setup>
import ProfileIcon from '@/components/icons/ProfileIcon.vue'
import HomeIconVue from '@/components/icons/HomeIcon.vue'
import TopUpIconVue from '@/components/icons/TopUpIcon.vue'
import GameIcon from '@/components/icons/GameIcon.vue'
import TransactionIcon from '@/components/icons/TransactionIcon.vue'
</script>

<template>
  <div
    class="fixed bottom-0 h-14 py-1 px-3 bg-gradient-100 bg-gradient-to-b w-full flex justify-between items-center"
  >
    <RouterLink to="/">
      <HomeIconVue class="w-10 h-10 [&>path]:fill-neutral-100" />
    </RouterLink>
    <RouterLink to="/top-up">
      <TopUpIconVue class="w-10 h-10 [&>path]:fill-neutral-100" />
    </RouterLink>
    <RouterLink to="/game">
      <GameIcon class="w-16 h-16 -mt-3 [&>path]:fill-neutral-100" />
    </RouterLink>
    <RouterLink to="/transaction">
      <TransactionIcon class="w-10 h-10 [&>path]:stroke-neutral-100 [&>path]:fill-neutral-100" />
    </RouterLink>
    <RouterLink to="/profile">
      <ProfileIcon class="w-10 h-10 [&>path]:fill-neutral-100" />
    </RouterLink>
  </div>
</template>

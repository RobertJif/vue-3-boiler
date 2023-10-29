<script setup lang="ts">
import AppBar from '@/components/macro/AppBar.vue'
// import AppDrawer from '@/components/macro/AppDrawer.vue'
import AppBottomNavigation from '@/components/macro/BottomNavigation.vue'
import type { LoginRequestType } from '@/libraries/api-client/useLoginApi'
import LoginDialog from '../macro/LoginDialog.vue'

function onLoginSuccess(userInfo: LoginRequestType) {
  console.log('success from children!', userInfo.username)
}
</script>
<template>
  <AppBar />
  <!-- <AppDrawer /> -->
  <div class="before:h-12 before:w-full before:block after:block after:w-full after:h-14">
    <slot></slot>
  </div>
  <AppBottomNavigation />

  <LoginDialog @on-login-success="onLoginSuccess" />
</template>

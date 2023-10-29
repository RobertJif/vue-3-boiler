<script lang="ts" setup>
import { useField, type BaseInputBinds } from 'vee-validate'

const props = defineProps<{
  label: string
  isDisabled: boolean
  id: string
  error?: string | undefined
  isDirty: boolean
  value: BaseInputBinds
}>()
</script>

<template>
  <label class="block text-neutral-300 text-sm font-bold" :for="props.id" :id="`${props.id}-label`">
    {{ props.label }}
  </label>
  <div class="relative">
    <input
      class="shadow appearance-none border text-neutral-700 rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
      :id="props.id"
      type="text"
      :name="props.id"
    />
    <div
      class="absolute bg-neutral-700 w-full h-full top-0 rounded-md opacity-70"
      v-show="isDisabled"
    ></div>
  </div>
  <span class="">{{ error }}</span>
</template>

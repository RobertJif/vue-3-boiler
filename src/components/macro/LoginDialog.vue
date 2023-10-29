<script lang="ts" setup>
import useLoginApi, {
  type LoginRequestType,
  type LoginResponseType
} from '@/libraries/api-client/useLoginApi'
import authStore from '@/stores/auth'
import { useMutation } from '@tanstack/vue-query'
import { toTypedSchema } from '@vee-validate/yup'
import { useForm } from 'vee-validate'
import { computed } from 'vue'
import { object, string } from 'yup'

const emit = defineEmits<{
  onLoginSuccess: [userInfo: LoginRequestType]
}>()

const validationSchema = toTypedSchema(
  object({
    all: string(),
    username: string().required().min(8).max(16),
    password: string().required().min(8).max(16)
  })
)
const {
  errors: formErrors,
  handleSubmit,
  defineComponentBinds,
  handleReset,
  setErrors
} = useForm({
  validationSchema
})

const elPlusConfig = () => ({
  props: {
    validateEvent: false
  }
})

const username = defineComponentBinds('username', elPlusConfig)
const password = defineComponentBinds('password', elPlusConfig)

// TODO: find way so vue-query can infer the error type from useLoginApi hook
const { mutate, isPending } = useMutation<
  LoginResponseType,
  HttpRequestErrorType<LoginRequestType>,
  LoginRequestType
>(useLoginApi())

const onSubmit = handleSubmit((formValues) => {
  mutate(formValues, {
    onSuccess: (response) => {
      console.log('success! ', response)
      authStore.onLoginSuccess(response)
      emit('onLoginSuccess', formValues)
    },

    onError: (error) => {
      console.log('error! ', error)
      setErrors(error)
    }
  })
})

// watch(username, (next, prev) => {
//   console.log(next, prev)
// })

const isOpen = computed(() => authStore.isLoginDialogOpen && !authStore.isLoggedIn)
</script>

<template>
  <div class="w-full h-full fixed top-0 transition-all" v-show="isOpen">
    <div
      class="bg-gradient-100 bg-gradient-to-b fixed top-1/2 -translate-y-3/4 left-1/2 -translate-x-1/2 font-bold rounded-md flex flex-col gap-4 z-20"
    >
      <form
        class="min-w-[300px] flex flex-col gap-2 relative p-4 pb-6"
        @submit="onSubmit"
        aria-disabled="true"
      >
        <div v-show="formErrors.all">{{ formErrors.all }}</div>
        <el-form-item :error="formErrors.username" label="Username" required>
          <el-input placeholder="Username" v-bind="username" />
        </el-form-item>
        <el-form-item :error="formErrors.password" label="Password" required>
          <el-input placeholder="Password" v-bind="password" />
        </el-form-item>
        <div class="relative mt-2">
          <button
            class="bg-secondary-200 w-full text-neutral-800 font-semibold px-4 py-1 rounded-lg"
            type="submit"
          >
            Login
          </button>
          <div
            class="absolute bg-neutral-700 w-full h-full top-0 rounded-md opacity-70"
            v-show="isPending"
          ></div>
        </div>
        <div class="relative mt-2">
          <button
            class="bg-neutral-100 w-full text-neutral-800 font-semibold px-4 py-1 rounded-lg"
            type="button"
            @click="handleReset"
          >
            Reset
          </button>
          <div
            class="absolute bg-neutral-700 w-full h-full top-0 rounded-md opacity-70"
            v-show="isPending"
          ></div>
        </div>
      </form>
    </div>
    <div
      class="bg-neutral-700 z-10 opacity-80 w-full h-full fixed top-0"
      @click="authStore.closeLoginDialog()"
    ></div>
  </div>
</template>

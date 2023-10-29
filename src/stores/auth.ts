import type { LoginResponseType } from '@/libraries/api-client/useLoginApi'
import {
  getLocalStorage,
  removeLocalStorage,
  setLocalStorage
} from '@/libraries/utils/local-storage'
import { reactive } from 'vue'

interface IAuthStore {
  isLoggedIn: boolean
  isLoginDialogOpen: boolean
  openLoginDialog: () => void
  closeLoginDialog: () => void
  onLoginSuccess: (data: LoginResponseType) => void
  handleLogout: () => void
}

const authStore = reactive<IAuthStore>({
  isLoggedIn: !!getLocalStorage('ACCESS_TOKEN'),
  isLoginDialogOpen: false,
  openLoginDialog() {
    this.isLoginDialogOpen = true
  },
  closeLoginDialog() {
    this.isLoginDialogOpen = false
  },
  onLoginSuccess(data) {
    console.log('handle login', data)
    this.isLoggedIn = true
    this.isLoginDialogOpen = false
    setLocalStorage('ACCESS_TOKEN', data.accessToken)
    setLocalStorage('REFRESH_TOKEN', data.refreshToken)
  },
  handleLogout() {
    this.isLoggedIn = false
    removeLocalStorage('ACCESS_TOKEN')
    removeLocalStorage('REFRESH_TOKEN')
  }
})

export default authStore

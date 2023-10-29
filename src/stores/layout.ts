import { reactive } from 'vue'

interface ILayoutStore {
  isDrawerOpen: boolean
  openDrawer: () => void
  closeDrawer: () => void
}

const layoutStore = reactive<ILayoutStore>({
  isDrawerOpen: false,
  openDrawer() {
    this.isDrawerOpen = true
  },
  closeDrawer() {
    this.isDrawerOpen = false
  }
})

export default layoutStore

const localStorageKeys = ['ACCESS_TOKEN', 'REFRESH_TOKEN'] as const

export type LocalStorageKeyType = (typeof localStorageKeys)[number]

export const setLocalStorage = (key: LocalStorageKeyType, value: any) => {
  if (typeof window !== 'undefined') {
    window.localStorage.setItem(key, value)
  }
}
export const getLocalStorage = (key: LocalStorageKeyType) => {
  if (typeof window !== 'undefined') {
    return window.localStorage.getItem(key)
  }
  return undefined
}
export const removeLocalStorage = (key: LocalStorageKeyType) => {
  if (typeof window !== 'undefined') {
    return window.localStorage.removeItem(key)
  }
}

export function clearLocalStorage() {
  for (let i = 0; i < localStorageKeys.length; i++) {
    removeLocalStorage(localStorageKeys[i])
  }
}

type GlobalKeyConfigType = 'play-api-requestor'
type GlobalKeyManagerType = `${GlobalKeyConfigType}-manager`

type GlobalKeyType = GlobalKeyConfigType | GlobalKeyManagerType

export function getGlobal<T>(key: GlobalKeyType): T {
  return global[key as keyof typeof globalThis] as T
}

export function setGlobal<T>(key: GlobalKeyType, value: T): T {
  Object.defineProperty(globalThis, key, {
    value,
    enumerable: false,
    configurable: true,
    writable: true
  })

  return getGlobal<T>(key)
}

import { getGlobal, setGlobal } from '../libraries/utils/global-storage'

type ConfigKeyType = Parameters<typeof getGlobal>[0]

class ConfigManager<T> {
  key: ConfigKeyType
  constructor(key: ConfigKeyType) {
    this.key = key
  }

  get() {
    return getGlobal<T>(this.key)
  }
}

const getConfigManager = <T>(key: ConfigKeyType) => {
  console.log('get config')
  const manager = getGlobal<ConfigManager<T>>('play-api-requestor-manager')

  if (manager) return manager
  return setGlobal<ConfigManager<T>>(`${key}-manager` as ConfigKeyType, new ConfigManager<T>(key))
}

export default getConfigManager

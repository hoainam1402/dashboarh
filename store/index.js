import configs from '@/configs'

const { appInfo, theme } = configs

const { globalTheme } = theme

// state initial values
const state = () => ({
  appInfo,

  // themes and layout configurations
  globalTheme
})

export default {
  state
}

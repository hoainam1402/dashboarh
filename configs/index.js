import theme from './theme'
import toolbar from './toolbar'
import navigation from './navigation'

export default {
  // app display information
  appInfo: {
    name: process.env.APP_NAME
  },

  // theme configs
  theme,

  // toolbar configs
  toolbar,

  // navigation configs
  navigation,

  // pagination configs
  pagination: {
    itemsPerPage: 10
  }
}

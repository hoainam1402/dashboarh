import en from '@/locales/en.json'
import vi from '@/locales/vi.json'
import theme from '@/configs/theme'

export default {
  lang: {
    locales: {
      en: en.vuetify,
      vi: vi.vuetify
    },
    current: 'vi'
  },
  theme: {
    dark: theme.globalTheme === 'dark',
    options: {
      customProperties: true
    },
    themes: {
      dark: theme.dark,
      light: theme.light
    }
  }
}

import { state } from './state'
import mutations from './mutations'

export default ({
  validateSetLanguage (locale) {
    if (state.locales.includes(locale)) {
      mutations.setLanguage(locale)
    }
  }
})

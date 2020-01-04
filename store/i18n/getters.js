import { state } from './state'

export default ({
  getLocales () {
    return state.locales
  },

  getLocale () {
    return state.locale
  }
})

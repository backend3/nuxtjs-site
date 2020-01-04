import Vue from 'vue'
import { LANGUAGES } from '../../constans'

export default Vue.extend({
  name: 'ManagerLanguage',

  data: () => ({
    languages: [],
    currentLanguage: ''
  }),

  created () {
    this.languages = this.$i18n.availableLocales
    this.currentLanguage = this.getLanguageBrowser()
    this.changeLanguage(this.currentLanguage)
  },

  methods: {
    changeLanguage (language) {
      this.$i18n.locale = language
      this.$store.commit('i18n/setLanguage', this.$i18n.locale)
    },

    getLanguageBrowser () {
      const languageBrowser = window.navigator.language || navigator.browserLanguage
      for (const LANG in LANGUAGES) {
        if (languageBrowser.slice(0, 2) === LANGUAGES[LANG]) {
          return LANGUAGES[LANG]
        }
      }
      return LANGUAGES.EN
    }
  }
})

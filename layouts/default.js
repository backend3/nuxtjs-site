import Vue from 'vue'
import theme from '../storage/theme'

export default Vue.extend({
  name: 'Default',

  computed: {
    themeManager () {
      return theme.state.themeManager
    }
  },

  created () {
    theme.actions.changeStatethemeManager()
  }
})

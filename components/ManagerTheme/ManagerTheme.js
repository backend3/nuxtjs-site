import Vue from 'vue'
import theme from '../../storage/theme'

export default Vue.extend({
  name: 'ManagerTheme',

  methods: {
    changeTheme () {
      theme.actions.changeStatethemeManager(!theme.state.themeManager)
    }
  }
})

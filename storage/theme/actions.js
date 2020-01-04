import mutations from './mutations'

export default ({
  changeStatethemeManager (stateThemeManager) {
    if (stateThemeManager !== undefined) {
      mutations.themeManagerMutation(stateThemeManager)
    } else {
      this.setStateThemeManager()
    }
  },

  setStateThemeManager () {
    mutations.themeManagerMutation(false)
  }
})

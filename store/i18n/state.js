import Vue from 'vue'
import { LANGUAGES } from '../../constans'

export const state = () => ({
  locales: [
    LANGUAGES.EN,
    LANGUAGES.ES
  ],
  locale: LANGUAGES.ES
})

Vue.observable(state)

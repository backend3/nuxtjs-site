import Vue from 'vue'
import Header from '../components/Header/Header.vue'
import Home from '../components/Home/Home.vue'
import Footer from '../components/Footer/Footer.vue'
import ManagerLanguage from '../components/ManagerLanguage/ManagerLanguage.vue'
import ManagerTheme from '../components/ManagerTheme/ManagerTheme.vue'
import Contact from '../components/Contact/index.vue'
import HeaderSocial from '../components/HeaderSocial/HeaderSocial.vue'

Vue.component('header-component', Header)
Vue.component('home-component', Home)
Vue.component('footer-component', Footer)
Vue.component('manager-language', ManagerLanguage)
Vue.component('manager-theme', ManagerTheme)
Vue.component('contact-component', Contact)
Vue.component('HeaderSocial', HeaderSocial)

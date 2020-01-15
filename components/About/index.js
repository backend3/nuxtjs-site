import Vue from 'vue'

export default Vue.extend({
  name: 'About',
  data: () => ({
    title: 'About BITEX PRO',
    text: 'Buy, sell, send and receive your favourite digital assets.',
    button: '',
    img: '',
    classTitle: 'HeaderSocial__Title__About',
    classDescription: 'HeaderSocial__Description__About',
    classImage: '',
    classButton: 'HeaderSocial__Button__About',
    classMain: 'HeaderSocial__About',
    showContactForm: false
  })
})

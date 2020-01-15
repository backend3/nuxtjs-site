import Vue from 'vue'

export default Vue.extend({
  name: 'Contact',
  data: () => ({
    title: 'Contact Us',
    text: '',
    button: '',
    img: '',
    classTitle: 'HeaderSocial__Title__Contact',
    classDescription: 'HeaderSocial__Description__Contact',
    classImage: '',
    classButton: 'HeaderSocial__Button__Contact',
    classMain: 'HeaderSocial__Contact',
    showContactForm: true
  })
})

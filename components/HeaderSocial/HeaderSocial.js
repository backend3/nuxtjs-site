/* eslint-disable no-console */
/* eslint-disable vue/require-prop-types */
/* eslint-disable object-shorthand */
import Vue from 'vue'

export default Vue.extend({
  name: 'HeaderSocial',
  layout: 'default',
  props: ['title', 'text', 'link', 'img', 'classTitle', 'classDescription',
    'classImage', 'classMain', 'classText', 'showContactForm'],
  data: function () {
    return {
      propTitle: this.title,
      propText: this.text,
      propHeaderImage: this.img,
      propLink: this.link,
      propClassTitle: (this.classTitle !== undefined) ? this.classTitle : 'HeaderSocial__Title',
      propclassDescription: (this.classDescription !== undefined) ? this.classDescription : 'HeaderSocial__Description',
      propclassImg: (this.classImage !== undefined) ? this.classImage : 'HeaderSocial__Image',
      propclassButton: (this.classButton !== undefined) ? this.classButton : 'HeaderSocial__Button',
      propclassMain: (this.classMain !== undefined) ? this.classMain : 'HeaderSocial',
      propclassText: (this.classText !== undefined) ? this.classText : 'HeaderSocial__Text',
      propshowContactForm: (this.showContactForm !== undefined) ? this.showContactForm : false
    }
  }
})

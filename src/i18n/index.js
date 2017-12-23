import french from './fr.json'
import english from './en.json'
import VueI18n from 'vue-i18n'
import Vue from 'vue'

Vue.use(VueI18n)

export default new VueI18n({
  locale: 'fr', // set locale
  messages: {
    fr: french,
    en: english
  }
})

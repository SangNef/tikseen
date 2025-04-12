import { createI18n } from 'vue-i18n'
import en from '@landing/locales/en.json'
import vi from '@landing/locales/vi.json'

const messages = {
    en,
    vi,
}

const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: 'vi',
    fallbackLocale: 'en',
    messages,
})

export default i18n
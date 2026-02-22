import { createContext, useContext } from 'react'
import { type Language, type Translations, translations } from '../i18n/translations'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: Translations
}

export const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  setLanguage: () => {},
  t: translations.en,
})

export function useLanguage() {
  return useContext(LanguageContext)
}

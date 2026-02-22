import type { Language } from '../i18n/translations'

/**
 * Maps browser locale to one of our supported languages.
 * Defaults to English when locale is not PT or ES.
 */
export function getPreferredLanguage(): Language {
  if (typeof navigator === 'undefined') return 'en'

  const locale = navigator.language || (navigator.languages && navigator.languages[0]) || 'en'
  const langCode = locale.toLowerCase().split(/[-_]/)[0]

  if (langCode === 'pt') return 'pt'
  if (langCode === 'es') return 'es'
  return 'en'
}

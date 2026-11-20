import enGB from './locales/en-GB'
import enUS from './locales/en-US'
import frFR from './locales/fr-FR'
import koKR from './locales/ko-KR'

export const LOCALES = ['en-GB', 'en-US', 'fr-FR', 'ko-KR'] as const
export type Locale = (typeof LOCALES)[number]
export const DEFAULT_LOCALE: Locale = 'en-US'
export type TextKey = keyof typeof enUS

export const LOCALE_META: Record<Locale, { url: string; label: string; region: string; }> = {
  'en-GB': { url: 'en-gb', label: 'English', region: 'United Kingdom' },
  'en-US': { url: 'en-us', label: 'English', region: 'United States' },
  'fr-FR': { url: 'fr-fr', label: 'Français', region: 'France' },
  'ko-KR': { url: 'ko-kr', label: '한국어', region: '대한민국' },
}

export const texts: Record<Locale, Partial<Record<TextKey, string>>> = {
  'en-US': enUS,
  'en-GB': enGB,
  'fr-FR': frFR,
  'ko-KR': koKR,
}

// Falls back to en-US when the key has no translation in that locale.
export function translate(locale: Locale) {
  return (key: TextKey): string => texts[locale][key] ?? enUS[key]
}
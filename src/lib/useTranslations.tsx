import es from '@/locales/es';
import en from '@/locales/en';

export function getTranslations(locale: string) {
  if (locale === 'en') return en;
  return es;
}

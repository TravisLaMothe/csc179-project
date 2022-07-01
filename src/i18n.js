import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
            description: {
                part1: 'Welcome to Better Health',
                part2: 'Make',
                part3: 'work',
                part4: 'lifestyle',
                part5: 'everything',
                part6: 'awesome!',
                part7: 'Sign In'
            }
        }
      },
      sp: {
        translation: {
            description: {
                part1: 'Bienvenidos a Better Health',
                part2: '¡Haz que',
                part3: 'el trabajo',
                part4: 'el estilo de vida',
                part5: 'todo',
                part6: 'sea increíble!',
                part7: 'Registrarse'
            }
        }
      },
      cn: {
        translation: {
            description: {
                part1: '歡迎來到 Better Health',
                part2: '讓',
                part3: '工作',
                part4: '生活',
                part5: '一切',
                part6: '更好!',
                part7: '登入'
            }
        }
      }
    }
  });

export default i18n;
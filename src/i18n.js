import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import { Language } from "./Languages";
import translationEN from './Translations/en.json';
import translationFR from './Translations/fr.json';

let defaultLanguage = Language.EN;

// the translations
const resources = {
    en: {
        translation: translationEN
    },
    fr: {
        translation: translationFR
    }
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        lng: defaultLanguage,

        keySeparator: ".",

        interpolation: {
            escapeValue: false
        }
    });

export default i18n;
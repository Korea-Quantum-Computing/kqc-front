import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import translationKo from "./ko/translationKo";
import translationEn from "./en/translationEn";

export default i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: "en",
    detection: { order: ["path", "navigator"] },
    resources: {
      ko: {
        translation: translationKo,
      },
      en: {
        translation: translationEn,
      },
    },
  });
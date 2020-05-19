import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import backend from "i18next-xhr-backend";
import detector from "i18next-browser-languagedetector";
import "./Config/en-US.json";
import "./Config/zh-HK.json";
// the translations
// (tip move them in a JSON file and import them)

i18n
  .use(backend)
  .use(detector)
  .use(initReactI18next) // passes i18n down to react-i18next

  .init({
    whitelist: ["en-US", "zh-HK"],
    load: "currentOnly",
    backend: {
      loadPath:
        window.location.protocol +
        "//" +
        window.location.hostname +
        (window.location.port != "" ? ":" + window.location.port : "") +
        "/assets/Config" +
        "/{{lng}}.json",
    },
    ns: ["transiations"],
    fallbackLng: "en-US",
    keySeparator: false, // we do not use keys in form messages.welcome
    debug: true,
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
    react: {
      wait: true,
      nsMode: "failback",
    },
  });

export default i18n;

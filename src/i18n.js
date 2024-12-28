import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          "Логотип": "Logo",
          "Line": "Line",
          "Каталог курсов": "Kurs katalogi",
          "Онлайн курсы": "Online kurslar",
          "Скидки": "Chegirmalar",
          "Компаниям": "Kompaniya",
          "О нас": "Biz haqimizda",
          "Переключить тему": "Toggle Theme",
          "Murojaat uchun": "Murojaat uchun",
          "Адрес": "Manzil",
          "Позвоните нам": "Biz bilan bog'laning",
          "NewLine": "NewLine",
          "Условия обслуживания": "Xizmat shartlari",
          "Политика конфиденциальности": "Maxfiylik siyosati",
          "Файлы Cookies": "Cookies",
          "O’zbekiston Respublikasi,": "O’zbekiston Respublikasi,",
          "Toshkent, Mo’minov ko’chasi,": "Toshkent, Mo’minov ko’chasi,",
          "7/2, Uzinfocom binosi ichida": "7/2, Uzinfocom binosi ichida"
        }
      },
      ru: {
        translation: {
          "Логотип": "Логотип",
          "Line": "Линия",
          "Каталог курсов": "Каталог курсов",
          "Онлайн курсы": "Онлайн курсы",
          "Скидки": "Скидки",
          "Компаниям": "Компаниям",
          "О нас": "О нас",
          "Переключить тему": "Переключить тему",
          "Murojaat uchun": "Обратная связь",
          "Адрес": "Адрес",
          "Позвоните нам": "Позвоните нам",
          "NewLine": "Новая Линия",
          "Условия обслуживания": "Условия обслуживания",
          "Политика конфиденциальности": "Политика конфиденциальности",
          "Файлы Cookies": "Файлы Cookies",
          "O’zbekiston Respublikasi,": "Республика Узбекистан,",
          "Toshkent, Mo’minov ko’chasi,": "Ташкент, улица Муминова,",
          "7/2, Uzinfocom binosi ichida": "7/2, внутри здания Uzinfocom"
        }
      }
    },
    lng: "ru", // Язык по умолчанию
    fallbackLng: "en", // Резервный язык
    interpolation: {
      escapeValue: false // Не экранируем данные, например для HTML
    }
  });

export default i18n;

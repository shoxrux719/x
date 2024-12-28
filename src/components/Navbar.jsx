import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Управление открытием dropdown

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    } else {
      document.documentElement.classList.remove("dark");
      setIsDarkMode(false);
    }

    const storedLanguage = localStorage.getItem("language");
    if (storedLanguage) {
      i18n.changeLanguage(storedLanguage);
    }
  }, [i18n]);

  const toggleTheme = () => {
    const newTheme = isDarkMode ? "light" : "dark";
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark", !isDarkMode);
    localStorage.setItem("theme", newTheme);
  };

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("language", lang);
    setIsDropdownOpen(false); // Закрыть dropdown после выбора языка
  };

  return (
    <nav className="sticky mb-[10px] top-0 left-0 right-0 bg-white dark:bg-black text-black dark:text-white py-4 px-10 flex justify-between items-center z-50">
      {/* Логотип */}

      <div className="flex gap-[27px]">
        <Link to="/" smooth={true} duration={500} className="cursor-pointer">
          <div className="flex items-center gap-9 w-36">
            <img
              src="/img/Group 843.png"
              alt={t("Логотип")}
              className="w-7 h-7"
            />
            <p className="text-[#664DFF] font-bold text-lg tracking-wide flex items-center">
              <span className="text-black dark:text-white">New.</span>Line
            </p>
            <img
              src="/public/img/santa-hat.png"
              alt="Шапка Санты"
              className="absolute top-[16px] left-[96px] w-[15px] santa-hat"
            />
          </div>
        </Link>
      </div>

{/* Меню */}
{/* Меню */}
<ul className="flex gap-12 text-sm font-semibold">
  <li className="menu-item">
    <ScrollLink to="choose-direction" smooth={true} duration={500} className="cursor-pointer">
      {t("Каталог курсов")}
    </ScrollLink>
  </li>
  <li className="menu-item">
    <ScrollLink to="online-courses" smooth={true} duration={500} className="cursor-pointer">
      {t("Онлайн курсы")}
    </ScrollLink>
  </li>
  <li className="menu-item">
    <ScrollLink to="sales" smooth={true} duration={500} className="cursor-pointer">
      {t("Скидки")}
    </ScrollLink>
  </li>
  <li className="menu-item">
    <Link to="company" smooth={true} duration={500} className="cursor-pointer">
      {t("О нас")}
    </Link>
  </li>
  <li className="menu-item">
    <Link to="register" smooth={true} duration={500} className="cursor-pointer">
      {t("Компаниям")}
    </Link>
  </li>
</ul>



      {/* Переключение языка и темы */}
      <div className="flex items-center gap-4 relative">
        {/* Выбор языка */}
        <Link to="/Uz" className="cursor-pointer" onClick={() => changeLanguage("uz")}>Uz</Link>
        <Link to="/" className="cursor-pointer" onClick={() => changeLanguage("ru")}>Ru</Link>

        {/* Переключение темы */}
        <button onClick={toggleTheme} aria-label={t("Переключить тему")}>
          {isDarkMode ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="5"></circle>
              <line x1="12" y1="1" x2="12" y2="3"></line>
              <line x1="12" y1="21" x2="12" y2="23"></line>
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
              <line x1="1" y1="12" x2="3" y2="12"></line>
              <line x1="21" y1="12" x2="23" y2="12"></line>
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="m20.996 11.712l.999-.032a1 1 0 0 0-1.284-.927zm-8.707-8.707l.958.284a1 1 0 0 0-.927-1.284zm8.422 7.748A6 6 0 0 1 19 11v2a8 8 0 0 0 2.28-.33zM19 11a6 6 0 0 1-6-6h-2a8 8 0 0 0 8 8zm-6-6c0-.596.087-1.17.247-1.71l-1.917-.57A8 8 0 0 0 11 5zm-1-1q.13 0 .257.004l.063-1.999A10 10 0 0 0 12 2zm-8 8a8 8 0 0 1 8-8V2C6.477 2 2 6.477 2 12zm8 8a8 8 0 0 1-8-8H2c0 5.523 4.477 10 10 10zm8-8a8 8 0 0 1-8 8v2c5.523 0 10-4.477 10-10zm-.004-.257Q20 11.87 20 12h2q0-.16-.005-.32z"
              />
            </svg>
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

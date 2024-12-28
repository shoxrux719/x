import React from "react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <>
      <footer className="bg-black text-white w-full  px-[135px] pb-[70px] py-8">
        <div className="container mx-auto flex items-center flex-col md:flex-row justify-between  md:items-center px-4">
          {/* Раздел "Murojaat uchun" */}
          <div className="mb-6 md:mb-0">
            <h2 className="text-xl font-bold mb-4 text-[#bec0d3]">{t("Murojaat uchun")}</h2>
            <div className="flex space-x-4">
             <img src="/public/img/fb.png" alt="" />
             <img src="/public/img/insta.png" alt="" />
             <img src="/public/img/twitter.png" alt="" />
             <img src="/public/img/Group 315.png" alt="" />
            </div>
          </div>
          {/* Раздел "Adress" */}
          <div className="mt-[10px] text-[#bec0d3]">
            <h2 className="text-xl font-bold mb-4">{t("Адрес")}</h2>
            <p>{t("O’zbekiston Respublikasi,")}<br />
              {t("Toshkent, Mo’minov ko’chasi,")}<br />
              {t("7/2, Uzinfocom binosi ichida")}</p>
          </div>
          {/* Раздел "Call Us" */}
          <div>
            <h2 className="text-xl font-bold mb-4 text-[#bec0d3]">{t("Позвоните нам")}</h2>
            <p><a href="tel:+998555015353" className="text-[#bec0d3]">+998(55) 501-5353</a></p>
            <p><a href="mailto:info@ustudy.uz" className="text-[#bec0d3]">info@ustudy.uz</a></p>
          </div>
        </div>
      </footer>
      {/* Нижний бар */}
      <div className="w-full h-[52px] bg-black flex justify-between py-[18px] px-[175px]">
        <p className="text-[#77798F] text-[10.53px] font-normal leading-[15.79px] text-left">
          © 2024 {t("NewLine")}
        </p>
        <div className="flex gap-6 ">
          <p className="text-[#bec0d3] text-[10.53px] font-normal leading-[15.79px]">{t("Условия обслуживания")}</p>
          <p className="text-[#77798F] text-[10.53px] font-normal leading-[15.79px]">{t("Политика конфиденциальности")}</p>
          <p className="text-[#77798F] text-[10.53px] font-normal leading-[15.79px]">{t("Файлы Cookies")}</p>
        </div>
      </div>  
    </>
  );
};

export default Footer;

import React from "react";

const Commpany = () => {
  return (
    <div className="p-8 mt-[85px] mb-[223px]">
      <h1 className="text-center text-3xl font-bold text-black dark:text-white mb-10">
      Analitika
      </h1>
      <div className="grid grid-cols-2 gap-8">
        {/* Рейтинг учебных центров */}
        <div className="bg-black p-6 rounded-xl shadow-xl shadow-[#8157ff]">
          <h2 className="text-center text-black dark:text-white text-lg font-semibold mb-4">
          O'quv markazlari reytingi <br />
          (ko'rsatkichlar yig'indisi bo'yicha)
          </h2>
          <img
            src="/public/img/Снимок экрана 2024-12-04 234121.png"
            alt="Рейтинг учебных центров"
            className="w-full h-auto rounded-lg"
          />
        </div>

        {/* Количество подписчиков */}
        <div className="bg-black p-6 rounded-xl shadow-xl shadow-[#8157ff]">
          <h2 className="text-center text-black dark:text-white text-lg font-semibold mb-4">
          Abonentlar soni <br /> o'quv markazlari          </h2>
          <img
            src="/public/img/Снимок экрана 2024-12-04 234049.png"
            alt="Количество подписчиков"
            className="w-full h-auto rounded-lg"
          />
        </div>

        {/* Количество публикаций (всего) */}
        <div className="bg-black p-6 rounded-xl shadow-xl shadow-[#8157ff]">
          <h2 className="text-center text-black dark:text-white text-lg font-semibold mb-4">
          Nashrlar soni <br /> o'quv markazlari (jami)
          </h2>
          <img
            src="/public/img/Снимок экрана 2024-12-04 233633.png"
            alt="Количество публикаций"
            className="w-full h-auto rounded-lg"
          />
        </div>

        {/* Количество публикаций за ноябрь */}
        <div className="bg-black p-6 rounded-xl shadow-xl shadow-[#8157ff]">
          <h2 className="text-center text-black dark:text-white text-lg font-semibold mb-4">
          Nashrlar soni <br /> 2024-yil noyabr          </h2>
          <img
            src="/public/img/Снимок экрана 2024-12-04 233634.png"
            alt="Публикации за ноябрь"
            className="w-full h-auto rounded-lg"
          />
        </div>

        {/* Среднее количество лайков */}
        <div className="bg-black p-6 rounded-xl shadow-xl shadow-[#8157ff]">
          <h2 className="text-center text-black dark:text-white text-lg font-semibold mb-4">
          2024-yil noyabri uchun oʻrtacha yoqtirishlar soni <br />          </h2>
          <img
            src="/public/img/Снимок экрана 2024-12-04 233635.png"
            alt="Среднее количество лайков"
            className="w-full h-auto rounded-lg"
          />
        </div>

        {/* Расположение активности в комментариях */}
        <div className="bg-black p-6 rounded-xl shadow-xl shadow-[#8157ff]">
          <h2 className="text-center text-black dark:text-white text-lg font-semibold mb-4">
          2024-yil noyabri uchun <br /> sharhlardagi faoliyat joylashuvi          </h2>
          <img
            src="/public/img/Снимок экрана 2024-12-04 233636.png"
            alt="Активность в комментариях"
            className="w-full h-auto rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Commpany;

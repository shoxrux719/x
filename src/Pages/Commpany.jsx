import React from "react";
import SubscriptionCard from "../components/SubscriptionCard";
import NumberOfSubscribers from "../components/NumberOfSubscribers";


const Commpany = () => {
  return (
    <div className="p-8 mt-[85px] mb-[223px]">
      <h1 className="text-center text-3xl font-bold text-black dark:text-white mb-10">
        Аналитика
      </h1>
      <div className="grid grid-cols-2 gap-8">
        {/* Рейтинг учебных центров */}
        <div className="bg-black rounded-xl shadow-md shadow-[#8157ff]">
          <SubscriptionCard  />
        </div>

        {/* Количество подписчиков */}
        <div className="bg-black  rounded-xl shadow-xl shadow-[#8157ff]">
         <NumberOfSubscribers />
        </div>

        {/* Количество публикаций (всего) */}
        <div className="bg-black p-6 rounded-xl shadow-xl shadow-[#8157ff]">
          <h2 className="text-center text-black dark:text-white text-lg font-semibold mb-4">
            Количество публикаций <br /> учебных центров (всего)
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
            Количество публикаций <br /> за ноябрь 2024 года
          </h2>
          <img
            src="/public/img/Снимок экрана 2024-12-04 233634.png"
            alt="Публикации за ноябрь"
            className="w-full h-auto rounded-lg"
          />
        </div>

        {/* Среднее количество лайков */}
        <div className="bg-black p-6 rounded-xl shadow-xl shadow-[#8157ff]">
          <h2 className="text-center text-black dark:text-white text-lg font-semibold mb-4">
            Среднее количество лайков <br /> за ноябрь 2024 года
          </h2>
          <img
            src="/public/img/Снимок экрана 2024-12-04 233635.png"
            alt="Среднее количество лайков"
            className="w-full h-auto rounded-lg"
          />
        </div>

        {/* Расположение активности в комментариях */}
        <div className="bg-black p-6 rounded-xl shadow-xl shadow-[#8157ff]">
          <h2 className="text-center text-black dark:text-white text-lg font-semibold mb-4">
            Расположение активности в комментариях <br /> за ноябрь 2024 года
          </h2>
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

import React from "react";
import SubscriptionCard from "../components/SubscriptionCard";
import NumberOfSubscribers from "../components/NumberOfSubscribers";
import ACopy from "../components/A";

const Commpany = () => {
  return (
    <div className="p-8 mt-[85px] mb-[223px]">
      <h1 className="text-center text-3xl font-bold text-black dark:text-white mb-10">
        Аналитика
      </h1>

      <div className="bg-black mb-[100px] rounded-xl shadow-xl shadow-[#8157ff]">
        <ACopy />
      </div>



      {/* Количество подписчиков */}
      <div className="bg-black  rounded-xl shadow-xl shadow-[#8157ff]">
        <NumberOfSubscribers />
      </div>

      {/* Количество публикаций (всего) */}


      {/* Количество публикаций за ноябрь */}


      {/* Среднее количество лайков */}

    </div>

  );
};

export default Commpany;

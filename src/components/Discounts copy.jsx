// Discounts.jsx
import React from "react";

const DiscountsRu = () => {
  return (
   <>
   <div>
    <h2 className=" text-[40.24px] font-bold leading-[48.29px] text-center dark:text-white mb-[30px]">Скидки и акции</h2>

    <div className="flex gap-[12px] mb-[12px]">
        <img src="/public/img/691566350_466073568_18062906935811564_550340278490241328_n 1.png" alt="" />
        <img src="/public/img/image 339.png" alt="" />
        <div>
            <img className="mb-[44px]" src="/public/img/Rectangle 13.png" alt="" />
            <p className="text-[15.4px] font-medium leading-[20.79px] text-left mb-[24px] dark:text-white"> Успей записатся!</p>
            <p className=" text-[10.26px] font-medium leading-[12.73px] tracking-[0.01em] text-left dark:text-white">Интересующихся информационными <br />технологиями в наших академиях ждет <br />незабываемая неделя</p>
        </div>
    </div>
   </div>

   <div className="bg-[#4824AC] w-[1170px] h-[236px] flex items-center justify-center gap-[20px] rounded-[15px]">
  <p className="text-[35.93px] pl-[35px] font-semibold leading-[38.49px] tracking-[-0.03em] text-left text-white">
  Записывайся на курсы в декабре
  </p>
  <img className="w-[238px] h-[170px]" src="/public/img/image 319.png" alt="" />
  <img className="w-[198px] h-[198px]" src="/public/img/image 341.png" alt="" />
  <img
    className="w-[198px] h-[198px]"
    src="/public/img/691566350_466844990_18207356182289513_6278838894015873379_n 1.png"
    alt=""
  />
  <img className="w-[198px] h-[198px]" src="/public/img/image 340.png" alt="" />
</div>

   </>
  );
};

export default DiscountsRu;
import React from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import Discounts from "../components/Discounts";
import Register from "./AboutUs";

const CompanyUz = ({ isDarkMode }) => {
  return (
    <>
      <div
        style={{
          backgroundImage: `url('/public/img/company.png')`,
          width: '1440px',
          height: '440px',
        
        }}
        className=""
      >

        <h2 className="text-[41px] font-bold leading-[49.2px] text-center text-[#C9C3C3]  pt-[52px]">Biz iste'dodni buyuklikka <br /> o'zgartiramiz</h2>
        <p className=" text-[18.05px] font-normal leading-[28.88px] text-center text-[#C9C3C3] pt-[14px]">New line меняет жизни, организации и целые страны посредством <br />
          повышения квалификации в области цифровых технологий, <br />
          развивая необходимые навыки для завоевания будущего.</p>


      </div>

      <div className="h-[780px] flex gap-[85px] mt-[73px] ml-[135px] mb-[73px] ">
        <div className="flex flex-col">
          <p className=" text-[40.61px] font-bold leading-[48.73px]  text-black dark:text-white text-center pb-[70px]">Достижение результатов, <br /> которые расширяют <br /> возможности учащихся <br /> и организаций</p>
          <p className="text-[18.05px] font-normal leading-[30.68px] text-left text-black dark:text-white">
            методология Newline масштабируемая на глобальном <br />
            уровне, решая проблему нехватки цифровых <br />
            специалистов, которая сказывается на росте, <br />
            производительности и инновациях. Мы сотрудничаем с <br />
            предприятиями и высокомотивированными <br />
            индивидуумами для создания персонализированного <br />
            пути трансформации талантов с помощью нашей <br />
            Платформы цифровых компетенций. <br />
            Наш эксклюзивный контент создается совместно с <br />
            лидерами отрасли и постоянно совершенствуется. <br />
            Каждая программа Newline тщательно сфокусирована, <br />
            исключая неопределенность при выборе подходящего <br />
            курса. Проекты выходят далеко за пределы пошаговых <br />
            инструкций, развивая критическое мышление, <br />
            необходимое для релевантности на рабочем месте.
          </p>
        </div>
        <img src="/public/img/image 358.png" alt="" />
      </div>

      <div className="bg-[#F1F0F0] pb-[38px]">
        <p className="text-[40.61px] font-bold leading-[48.73px] pt-[34px] text-center ">В Newline мы создаем будущее <br /> в сфере технологий</p>
        <p className="text-[18.05px] font-normal leading-[28.88px] text-center mt-[16px]">Мы предоставляем актуальное и передовое техническое образование, которое <br /> помогает людям и организациям раскрыть свой потенциал.</p>

        <div className="flex justify-center items-center mt-[45px] mb-[37px] gap-6">
          <div className="w-[275px] h-[395px] bg-[#270A77] p-[18px] rounded-3xl" >
            <img src="/public/img/image 360.png" alt="" />
            <p className="text-xl font-bold leading-8 text-left text-[#C1F009]">Будьте одержимы <br /> результатом</p>
            <p className="text-[18.05px] font-normal leading-[27.07px] text-left text-[#FDFDFD] mb-4">Сосредоточьте наши <br />
              действия вокруг наших <br />
              клиентов и учащихся. <br />
              Черпайте мотивацию из <br />
              измеримых результатов и <br />
              руководствуйтесь ими</p>
          </div>

          <div className="w-[275px] h-[395px] bg-[#270A77] p-[18px] rounded-3xl" >
            <img src="/public/img/image.png" alt="" />
            <p className="text-xl font-bold leading-8 text-left text-[#BA8BF1]">Будьте одержимы <br /> результатом</p>
            <p className="text-[18.05px] font-normal leading-[27.07px] text-left text-[#FDFDFD] mb-4">Сосредоточьте наши <br />
              Станьте сторонником <br />
              непрерывного обучения, <br />
              ставьте под сомнение <br />
              устоявшиеся нормы и <br />
              поощряйте конструктивные <br />
              дискуссии, чтобы создать <br />
              атмосферу инноваций </p>
          </div>

          <div className="w-[275px] h-[395px] bg-[#270A77] p-[18px] rounded-3xl" >
            <img src="/public/img/image (1).png" alt="" />
            <p className="text-xl font-bold leading-8 text-left text-[#00B796]">Берите инициативу <br /> на себя</p>
            <p className="text-[18.05px] font-normal leading-[27.07px] text-left text-[#FDFDFD] mb-4">Сосредоточьте наши <br />
              Дайте себе и другим <br />
              возможность высказывать  <br />
              свое мнение, принимать <br />
              обоснованные риски, <br />
              внедрять инновации и <br />
              принимать перемены. </p>
          </div>

          <div className="w-[275px] h-[395px] bg-[#270A77] p-[18px] rounded-3xl" >
            <img src="/public/img/image (2).png" alt="" />
            <p className="text-xl font-bold leading-8 text-left text-[#799FF8]">Цените помощь</p>
            <p className="text-[18.05px] font-normal leading-[27.07px] text-left text-[#FDFDFD] mb-4">Сосредоточьте наши <br />
              Сотрудничайте c <br />
              сочувствием, уважением и <br />
              доверием. Отмечайте <br />
              незаметную работу,<br />
              которая делает победы <br />
              возможными </p>
          </div>
        </div>

      </div>

      <div className="flex gap-[67px] ml-[135px] mb-[290px]">
        <div>

          <p className="text-[40.61px] font-bold leading-[48.73px] pt-[63px] pb-[28px]  text-black dark:text-white text-center">Социальное влияние</p>
          <p className=" text-[18.05px] font-bold leading-[28.88px] pb-[23px] text-black dark:text-white text-left">Newline стремится создавать будущее в сфере <br />
            технологий.</p>
          <p className="dark:text-white">Мы сотрудничаем с людьми, организациями и <br />
            государством, которые заинтересованы в <br />
            повышении квалификации для подготовки к <br />
            будущему. Таким образом, мы способствуем <br />
            положительным карьерным изменениям для <br />
            отдельных учащихся, масштабной цифровой <br />
            трансформации для организаций и значимым <br />
            экономическим изменениям для правительств по <br /> всему миру.</p>
        </div>

        <div style={{
          backgroundImage: `url('/img/image 361.png')`,
          width: '620px',
          height: '496px',
          backgroundSize: '',
          backgroundPosition: 'center',
        }} className="grid grid-cols-2 w-[502px] h-[358px] gap-[18px] rounded-[24px] pt-[63px] ">
          <div className="w-[242px] h-[170px] bg-[#270a77] rounded-[24px]"><p className="text-[68px] font-bold leading-[81.6px] text-center text-white">14</p><p className="text-[18.05px] font-bold leading-[28.88px] text-center text-white">IT Академии</p></div>
          <div className="w-[242px] h-[170px] bg-[#270a77] rounded-[24px]"><p className="text-[68px] font-bold leading-[81.6px] text-center text-white">8</p><p className="text-[18.05px] font-bold leading-[28.88px] text-center text-white">Направления
            курсов</p></div>
          <div className="w-[242px] h-[170px] bg-[#270a77] rounded-[24px]"><p className="text-[68px] font-bold leading-[81.6px] text-center text-white">14</p><p className="text-[18.05px] font-bold leading-[28.88px] text-center text-white">IT Академии</p></div>
          <div className="w-[242px] h-[170px] bg-[#270a77] rounded-[24px]"><p className="text-[68px] font-bold leading-[81.6px] text-center text-white">14</p><p className="text-[18.05px] font-bold leading-[28.88px] text-center text-white">IT Академии</p></div>
        </div>
        
      </div>
      
    </>
  );
};

export default CompanyUz;
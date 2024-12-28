import React from "react";
import { Link } from "react-router-dom";

const ONlineCourses = () => {
  return (
    <div className="text-center max-w-[1640px] h-[442px] dark:bg-[#F1F0F0] bg-[#161616] mt-[180px] mb-[105px] mx-auto overflow-hidden">
      <h1 className="text-3xl text-white dark:text-black font-bold pt-[40px] mb-8">
        Каталог IT Академии
      </h1>

      <div class="slider">
        <div class="slides-track">
          <div class="slide">
            <Link to="https://najottalim.uz/">
              <img src="/public/img/NAJOT-TALIM.png" alt="" />
            </Link>
          </div>
          <div class="slide">
            <Link to="">
              <img src="/public/img/HAADLC.png" alt="" />
            </Link>
          </div>
          <div class="slide">
            <img src="/public/img/MOHIRDEV.png" alt="" />
          </div>
          <div class="slide">
            <Link>
              <img src="/public/img/PROWEB.png" alt="" />
            </Link>
          </div>
          <div class="slide">
            <Link>
              <img src="/public/img/SPACE-ACADEMY.png" alt="" />
            </Link>
          </div>
          <div class="slide">
            <Link>
              <img src="/public/img/LETS-ANIMATE.png" alt="" />
            </Link>
          </div>
          <div class="slide">
            <Link href="https://ustudy.uz/oz">
              <img className="cursor-pointer" src="/public/img/USTUDY.png" alt="" />
            </Link>
          </div>
          <div class="slide">
            <Link>
              <img src="/public/img/ASTRUM.png" alt="" />
            </Link>
          </div>
          <div class="slide">
            <Link>
              <img src="/public/img/TEHNIKUM.png" alt="" />
            </Link>
          </div>
          <div class="slide">
            <Link>
              <img src="/public/img/STEP-ACADEMY.png" alt="" />
            </Link>
          </div>
          <div class="slide">
            <Link>
              <img src="/public/img/PDP-ACADEMY.png" alt="" />
            </Link>
          </div>
          <div class="slide">
            <Link>
              <img src="/public/img/KADIROV-DEV.png" alt="" />
            </Link>
          </div>
          <div class="slide">
            <Link>
              <img src="/public/img/IT-ACADEMY.png" alt="" />
            </Link>
          </div>
          <div class="slide">
            <Link>
              <img src="/public/img/IT-BLIM.png" alt="" />
            </Link>
          </div>
        </div>
      </div>


      <div class="slider">
        <div class="slides-track2">
          <div class="slide">
            <Link>
              <img src="/public/img/NAJOT-TALIM.png" alt="" />
            </Link>
          </div>
          <div class="slide">
            <Link>
              <img src="/public/img/HAADLC.png" alt="" />
            </Link>
          </div>
          <div class="slide">
            <Link>
              <img src="/public/img/MOHIRDEV.png" alt="" />
            </Link>
          </div>
          <div class="slide">
            <Link>
              <img src="/public/img/PROWEB.png" alt="" />
            </Link>
          </div>
          <div class="slide">
            <Link>
              <img src="/public/img/SPACE-ACADEMY.png" alt="" />
            </Link>
          </div>
          <div class="slide">
            <Link>
              <img src="/public/img/LETS-ANIMATE.png" alt="" />
            </Link>
          </div>
          <div class="slide">
            <Link>
              <img src="/public/img/USTUDY.png" alt="" />
            </Link>
          </div>
          <div class="slide">
            <Link>
              <img src="/public/img/ASTRUM.png" alt="" />
            </Link>
          </div>
          <div class="slide">
            <Link>
              <img src="/public/img/TEHNIKUM.png" alt="" />
            </Link>
          </div>
          <div class="slide">
            <Link>
              <img src="/public/img/STEP-ACADEMY.png" alt="" />
            </Link>
          </div>
          <div class="slide">
            <Link>
              <img src="/public/img/PDP-ACADEMY.png" alt="" />
            </Link>
          </div>
          <div class="slide">
            <Link>
              <img src="/public/img/KADIROV-DEV.png" alt="" />
            </Link>
          </div>
          <div class="slide">
            <Link>
              <img src="/public/img/IT-ACADEMY.png" alt="" />
            </Link>
          </div>
          <div class="slide">
            <Link>
              <img src="/public/img/IT-BLIM.png" alt="" />
            </Link>
          </div>
        </div>
      </div>


    </div>
  );
};

export default ONlineCourses;

import React from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

const ChooseDirection = ({ isDarkMode }) => {
    return (
        <>
            {/* Верхний блок с заголовком и кнопкой */}
            
            <div className="h-[810px] w-[1290px]  relative rounded-[50px] bg-custom-gradient dark:bg-custom-gradient-light   dark:text-white text-black pl-[97px] flex gap-[216px] ">
                <div>
                    <img className="absolute w-[200px]" src="/public/img/Purple Confetti 2.png" alt="" />
                    <h1 className=" text-[57px] font-bold leading-[68.4px] text-left mt-32">
                        Найди себя и новую <br />
                        профессию в New.line
                    </h1>
                    <p className=" w-[477.75px] h-[58px] gap-0 opacity-[0px] left-[13.5px] top-[168.75px] pt-[33px] pb-[101px]">
                        Экосистема, в которую входят онлайн-платформа <br />
                        для обучения программированию
                    </p>
                  
                    <ScrollLink  to="RegistrationForm" smooth={true} duration={500} className="cursor-pointer p-[10px] mt-[10px] text-white bg-slate-900 rounded-full border-8 border-transparent border-purple-500 transition-all duration-300 shadow-[0px_0px_10px_0px_#7744FFB2]">
                    {("Записатся на курсы")}
                    </ScrollLink>

                </div>
                <img className="absolute  left-[390px]" src="/public/img/9716652 копия 1.png" alt="" />
                <img className="w-[173px] h-[183px] absolute top-[360px] right-[-0px]" src="/public/img/image 353.png" alt="" />
            </div>


            <section id="Catalog">

                <div className="absolute top-[700px] right-[159px] flex gap-[20px] ">
                    <div className="grid grid-rows-1     gap-4 h-[642px]">
                        <Link to="/front">
                            <img src="/public/img/card (16).png" alt="" />
                        </Link>

                        <Link to="/graphic">
                            <img src="/public/img/card (17).png" alt="" />
                        </Link>

                        <Link to="/smm">
                            <img src="/public/img/card (18).png" alt="" />
                        </Link>
                    </div>

                    <div className="relative grid h-[642px] mt-2">
                        <Link>
                            <img src="/public/img/card (19).png" alt="" />
                        </Link>

                        <div className="absolute top-[215px] left-[108px]">

                            <Link>
                                <img src="/public/img/Sphere (1).png" alt="" />
                            </Link>
                        </div>

                        <div className="flex gap-5" >
                            <Link to="/motion">
                                <img src="/public/img/card (22).png" alt="" />
                            </Link>

                            <Link  to="/netbackend">
                                <img src="/public/img/Group 854 (1).png" alt="" />
                            </Link>
                        </div>
                    </div>

                    <div className="grid grid-rows-1 mb">
                        <Link to="/cybersecuritu">
                            <img className="mb-[10px] mt-3" src="/public/img/card (20).png" alt="" />
                        </Link>
                        <Link to="/ai">

                            <div>
                                <img className="absolute top-[207px]" src="/public/img/Group 853 (1).png" alt="" />
                            </div>
                        </Link>

                        <Link to="/python">
                            <img className="mb-1" src="/public/img/Group 855 (1).png " alt="" />
                        </Link>
                    </div>
                </div>
            </section>



        </>
    );
};

export default ChooseDirection;

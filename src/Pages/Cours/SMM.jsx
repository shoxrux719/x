import React from 'react'
import { Link } from 'react-router-dom'
import { Link as ScrollLink } from 'react-scroll'
import RegistrationForm from '../AboutUs'

const SMM = ({ isDarkMode }) => {
  return (
    <>
      <main>
        {/* Главный баннер */}
        <section className='relative'>
          <div
            style={{
              background: 'linear-gradient(to right, to botttom, #000000, #090924, #240A2F)',
            }}
            className="flex h-[600px] items-center gap-[190px] bg-black mx-auto px-4 pl-[119px] text-center animate-fadeInUp container"
          >
            <p className='font-medium flex gap-[10px] text-[74.81px] text-left text-white leading-[112.22px]'>
              SMM
              <span>курсы</span>
            </p>
            <div
              className='bg-cover bg-center w-[864.85px] h-[484.05px] animate-scaleIn'
              style={{
                backgroundImage: "url('/public/img/Smm.png')"
              }}
            ></div>
          </div>
        </section>

        {/* Описание профессии */}
        <section className='bg-purple-600 my-6 ml-[68px] rounded-[17.96px] w-[1300px] h-[228.18px] text-white animate-fadeIn'>
          <div className='mx-auto px-12 container'>
            <h2 className='font-bold text-2xl'>
              Cоциальные медиа
            </h2>
            <p className='mt-4'>
              SMM (Social Media Marketing) - направление в маркетинге, которое основывается на продвижении бренда в соцсетях. <br />
              Вы научитесь разрабатывать УТП (уникальное торговое предложение), слоган, оффер и воронку продаж, а также освоите <br /> копирайтинг и создание публикаций
            </p>

          </div>
        </section>
        <section className='bg-white h-[300px]'>
          <p className='pt-6 pl-[119px] font-semibold text-[34.41px] text-left leading-[51.62px]; @apply'>
            Подробнее о курсе
          </p>
          <div className='text-right pr-[145px]'>
            <p className='text-right  pb-6 font-medium text-[17.96px] leading-[26.93px] @apply'>
              Курс SMM - это идеальный выбор для тех, кто хочет стать экспертом в <br /> области продвижения бренда в социальных сетях.
            </p>
            <p className='text-right font-medium text-[17.96px] leading-[26.93px]; @apply'>
              Курс SMM поможет вам развить навыки создания стратегий в социальных <br />
              медиа, работе с различными платформами, создания вирусного контента и <br />
              привлечения аудитории. За время обучения вы освоите все необходимые <br />
              навыки и знания, начиная от создания стратегии SMM, заканчивая работой с <br />
              нейросетью и освоением блока мобилографии
            </p>
          </div>
        </section>

        <section>
          <div>
            <div className='bg-[#F6F6F6CC]'>
              <div className='mx-auto container'>
                <h1 className='font-semibold text-[34.41px] pt-[27px] pl-[122px] pb-[100px] text-left text-black leading-[51.62px]'>
                  Найдите свою  <br />
                  IT Академию
                </h1>
              </div>
              <div className='relative mr-auto h-[1060px] bg-black py-[40px] mb-[165px] ml-auto w-[1200px] m'>
                <p className='pb-6 font-bold text-[40.4px] text-center text-white leading-[48.48px]'>
                  Анализ
                </p>
                <div>
                  <p className='top-[21px] left-[40%] absolute mb-[38px]'></p>
                  <div className='top-[10%] left-[2%] absolute'>
                    <table className='border-white bg-black mt-[65px] ml-[50px] border text-white'>
                      <tr>
                        <th></th>
                        <th className='border-white p-[20px] border'>
                          IT Академии
                        </th>
                        <th className='border-white p-[20px] border'>
                          Длительность курса
                        </th>
                        <th className='border-white p-[20px] border'>
                          Количество уроков
                        </th>
                        <th className='border-white p-[20px] border'>
                          СТОИМОСТЬ ОБУЧЕНИЯ
                        </th>
                        <th className='border-white p-[20px] border'>
                          Рассрочка на 12 месяцов
                        </th>
                      </tr>
                      <tr>
                        <th className='border-white p-[10px border'>01</th>
                        <th className='border-white border'>
                          <Link to="https://mohirdev.uz/">
                            <img src="/public/img/MOHIRDEV.png" alt="" />
                          </Link>
                        </th>
                        <th className='border-white border'>3-9 месяцев</th>
                        <th className='border-white border'></th>
                        <th className='border-white border'>2 000 000</th>
                        <th className='border-white border'></th>
                      </tr>
                      <tr>
                        <th className='border-white p-[10px] border'>02</th>
                        <th className='border-white border text-center'>
                          <Link to="https://najottalim.uz/?srsltid=AfmBOoqm_F2U2MMQRr_aV3xZsOAwCAVapZ0Or7CEZ-G7HrCCO_gRUz0w">
                            <img src="/public/img/NAJOT-TALIM.png" alt="" />
                          </Link>
                        </th>
                        <th className='border-white border text-center'>
                          4 месяцев
                        </th>
                        <th className='border-white border text-center'>
                          48  урока
                        </th>
                        <th className='border-white border text-center'>
                          2 000 000
                        </th>
                        <th className='border-white border text-center'></th>
                      </tr>
                      <tr>
                        <th className='border-white p-[10px] border'>04</th>
                        <th className='border-white border'>
                          <Link to="https://proweb.uz/urok/?utm_source=google&utm_source=google&utm_medium=cpa&utm_campaign=search-proweb-main&utm_content=674917148616&utm_term=proweb.uz_b_&gad_source=1&gclid=Cj0KCQjw99e4BhDiARIsAISE7P9u-6kxCTW1iyeF0ZB2aSl1BFLhVP9oKn5QPq-FYnlO5CwIkI9GzjAaAjgcEALw_wcB">
                            <img src="/public/img/PROWEB.png" alt="" />
                          </Link>
                        </th>
                        <th className='border-white p-[20px] border'>4 месяцев</th>
                        <th className='border-white p-[20px] border'>32 урока</th>
                        <th className='border-white p-[20px] border'>1 650 000</th>
                        <th className='border-white p-[20px] border'>461 460</th>
                      </tr>
                      <tr>
                        <th className='border-white p-[10px] border'>06</th>
                        <th className='border-white border'>
                          <Link to="https://tehnikum.school/">
                            <img src="/public/img/TEHNIKUM.png" alt="" />
                          </Link>
                        </th>
                        <th className='border-white p-[20px] border'>2 месяцев</th>
                        <th className='border-white p-[20px] border'></th>
                        <th className='border-white p-[20px] border'></th>
                        <th className='border-white p-[20px] border'>588 750</th>
                      </tr>
                      <tr>
                        <th className='border-white p-[10px] border'>06</th>
                        <th className='border-white  border'>
                          <Link to="https://space-academy.uz/">
                            <img src="/public/img/SPACE-ACADEMY.png" alt="" />
                          </Link>
                        </th>
                        <th className='border-white p-[20px] border'>3 месяцев</th>
                        <th className='border-white p-[20px] border'>36 урока</th>
                        <th className='border-white p-[20px] border'>2.000.000</th>
                        <th className='border-white p-[20px] border'></th>
                      </tr>



                      <tr>
                        <th className='border-white p-[10px] border'>06</th>
                        <th className='border-white p-[45px] border'>

                        </th>
                        <th className='border-white p-[20px] border'></th>
                        <th className='border-white p-[20px] border'></th>
                        <th className='border-white p-[20px] border'></th>
                        <th className='border-white p-[20px] border'></th>
                      </tr>
                      <tr>
                        <th className='border-white p-[10px] border'>07</th>
                        <th className='border-white p-[45px] border'>

                        </th>
                        <th className='border-white p-[20px] border'></th>
                        <th className='border-white p-[20px] border'></th>
                        <th className='border-white p-[20px] border'></th>
                        <th className='border-white p-[20px] border'></th>
                      </tr>
                      <tr>
                        <th className='border-white p-[10px] border'>08</th>
                        <th className='border-white p-[45px] border'>

                        </th>
                        <th className='border-white p-[20px] border'></th>
                        <th className='border-white p-[20px] border'></th>
                        <th className='border-white p-[20px] border'></th>
                        <th className='border-white p-[20px] border'></th>
                      </tr>
                      <tr>
                        <th className='border-white p-[10px] border'>09</th>
                        <th className='border-white p-[45px] border'>

                        </th>
                        <th className='border-white p-[20px] border'></th>
                        <th className='border-white p-[20px] border'></th>
                        <th className='border-white p-[20px] border'></th>
                        <th className='border-white p-[20px] border'></th>
                      </tr>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <RegistrationForm />
      </main>

      {/* Кастомные анимации */}
    </>
  )
}

export default SMM

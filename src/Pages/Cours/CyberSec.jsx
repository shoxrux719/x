import React from 'react'
import { Link } from 'react-router-dom'
import { Link as ScrollLink } from 'react-scroll'
import RegistrationForm from '../AboutUs'

const CyberSecurity = ({ isDarkMode }) => {
  return (
    <>
      <main>
        {/* Главный баннер */}
        <section className='relative'>
          <div
            style={{
              background: 'linear-gradient(to right, to botttom, #000000, #090924, #240A2F)',
            }}
            className="flex h-[600px] items-center gap-[192px] bg-black mx-auto px-4 pl-[119px] text-center animate-fadeInUp container"
          >
            <p className='text-[60px] font-medium text-white leading-[87.85px] text-left'>
              Специалист по <br />
              КИБЕРБЕЗОПАСНОСТИ
            </p>
            <div
              className='bg-cover bg-center right-1 w-[864.85px] h-[484.05px] animate-scaleIn'
              style={{
                backgroundImage: "url('/public/img/Cyber.png')",
                position: "absolute"

              }}
            ></div>
          </div>
        </section>

        {/* Описание профессии */}
        <section className='bg-purple-600 my-6 ml-[68px] rounded-[17.96px] w-[1300px] h-[228.18px] text-white animate-fadeIn'>
          <div className='mx-auto px-12 container'>
            <h2 className='font-bold text-2xl'>
              CТАНЬТЕ ЩИТОМ В МИРЕ DIGITAL ДАННЫХ
            </h2>
            <p className='mt-4'>
              Введение в кибербезопасность» является широким ознакомительным курсом и охватывает основные знания в области <br />
              кибербезопасности, включая базовые понятия кибербезопасности, основы криптографии, контроля доступа, сетевой и компьютерной <br />
              безопасности, раскрывает основные типы угроз информационной безопасности, а также методы и способы противодействия им. Курс <br />
              подойдет всем желающим достигнуть базового понимания основ данной сферы.
            </p>

          </div>
        </section>
        <section className='bg-white h-[300px]'>
          <p className='pt-6 pl-[119px] font-semibold text-[34.41px] text-left leading-[51.62px]; @apply'>
            Подробнее о курсе
          </p>
          <div className='text-right pr-[145px]'>
            <p className='text-right  pb-6 font-medium text-[17.96px] leading-[26.93px] @apply'>
              Этот курс станет шагом к успешной карьере в области фронтенд разработки, <br />
              обеспечивая не только знания, но и реальные навыки, применимые в <br />
              профессиональной деятельности. <br />
              Защитить цифровой мир помогают пентестеры
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
                          <Link to={'https://ustudy.uz/oz'}>
                            <img src="/public/img/USTUDY.png" alt="" />
                          </Link>
                        </th>
                        <th className='border-white border'>2 месяцев</th>
                        <th className='border-white border'></th>
                        <th className='border-white border'>2 000 000</th>
                        <th className='border-white border'></th>
                      </tr>
                      <tr>
                        <th className='border-white p-[10px] border'>02</th>
                        <th className='border-white border text-center'>
                          <Link to="https://www.haad.ai/">
                            <img src="/public/img/HAADLC.png" alt="" />
                          </Link>
                        </th>
                        <th className='border-white border text-center'>
                          10 месяцев
                        </th>
                        <th className='border-white border text-center'>
                          64  урока
                        </th>
                        <th className='border-white border text-center'>
                          2 600 000
                        </th>
                        <th className='border-white border text-center'>
                          1 560 000
                        </th>
                      </tr>
                      <tr>
                        <th className='border-white p-[10px] border'>03</th>
                        <th className='border-white border'>
                          <Link to="https://tehnikum.school/">
                            <img src="/public/img/TEHNIKUM.png" alt="" />
                          </Link>
                        </th>
                        <th className='border-white border'>6 месяцев</th>
                        <th className='border-white border'>5- уроков</th>
                        <th className='border-white border'></th>
                        <th className='border-white border'>2 300 000</th>
                      </tr>
                      <tr>
                        <th className='border-white p-[10px] border'>04</th>
                        <th className='border-white p-[45px] border'>

                        </th>
                        <th className='border-white p-[20px] border'></th>
                        <th className='border-white p-[20px] border'></th>
                        <th className='border-white p-[20px] border'></th>
                        <th className='border-white p-[20px] border'></th>
                      </tr>
                      <tr>
                        <th className='border-white p-[10px] border'>05</th>
                        <th className='border-white p-[45px] border'>

                        </th>
                        <th className='border-white p-[20px] border'></th>
                        <th className='border-white p-[20px] border'></th>
                        <th className='border-white p-[20px] border'></th>
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

export default CyberSecurity

import React from 'react'
import { Link } from 'react-router-dom'
import { Link as ScrollLink } from 'react-scroll'
import RegistrationForm from '../AboutUs'

const Motion = ({ isDarkMode }) => {
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
            <p className='font-medium flex gap-[10px] text-[74.81px] text-left text-white '>
            Motion <span>Design</span> 
            </p>
            <div
              className='bg-cover bg-center w-[864.85px] h-[484.05px] animate-scaleIn'
              style={{
                backgroundImage: "url('/public/img/motion.png')"
              }}
            ></div>
          </div>
        </section>

        {/* Описание профессии */}
        <section className='bg-purple-600 my-6 ml-[68px] rounded-[17.96px] w-[1300px] h-[228.18px] text-white animate-fadeIn'>
          <div className='mx-auto px-12 container'>
            <h2 className='font-bold text-2xl'>
            Овладейте новой профессией для старта карьеры в IT.            </h2>
            <p className='mt-4'>
            Motion Design — это направление, открытое человеку с любым профессиональным бэкграундом. Чтобы стать мotion-дизайнером — <br />
             достаточно быть целеустремленным и иметь время для учебы и прокачки полученных знаний.
            </p>
            
          </div>
        </section>
        <section className='bg-white h-[300px]'>
          <p className='pt-6 pl-[119px] font-semibold text-[34.41px] text-left leading-[51.62px]; @apply'>
            Подробнее о курсе
          </p>
          <div className='text-right pr-[145px]'>
            <p className='text-right  pb-6 font-medium text-[17.96px] leading-[26.93px] @apply'>
            Motion Designer разрабатывает графику для рекламы, телевидения, роликов <br />
             и заставок на Youtube. Он принимает участие в создании клипов и <br />
              компьютерных игр. Талантливые специалисты нужны в этой сфере <br />
               постоянно, поэтому не будет сложностей с трудоустройством.
            </p>
            <p className='text-right font-medium text-[17.96px] leading-[26.93px]; @apply'>
            Творчество и креатив в повседневных задачах. Здесь ценится <br />
             нестандартное мышление и оригинальный подход к работе. Вы будете <br />
              сотрудничать с крупными компаниями, работать с арт-проектами, <br />
               ежедневно сталкиваться новыми интересными вызовами.
            </p>
          </div>
        </section>

        <section>
          <div>
            <div className='bg-black'>
              <div className='mx-auto container'>
                <h1 className='font-semibold text-[34.41px] pt-[27px] pl-[122px] pb-[100px] text-left text-white dark:text-black leading-[51.62px]'>
                Найдите свою  <br />
                IT Академию
                </h1>
              </div>
              <div className='relative mr-auto mb-[165px] ml-auto w-[1200px] m'>
                <p className='pb-6 font-bold text-[40.4px] text-center text-white leading-[48.48px]'>
                  Анализ
                </p>
                <img className='w-[1200px] h-[700px]' alt='' />
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
                          <p>Najot Ta'lim</p>
                        </th>
                        <th className='border-white border'>5 месяцев</th>
                        <th className='border-white border'></th>
                        <th className='border-white border'>2 000 000</th>
                        <th className='border-white border'></th>
                      </tr>
                      <tr>
                        <th className='border-white p-[10px] border'>02</th>
                        <th className='border-white border text-center'>
                          <p>PDP Academy</p>
                        </th>
                        <th className='border-white border text-center'>
                          месяцев
                        </th>
                        <th className='border-white border text-center'>
                          72 урока
                        </th>
                        <th className='border-white border text-center'>
                          1 500 000
                        </th>
                        <th className='border-white border text-center'></th>
                      </tr>
                      <tr>
                        <th className='border-white p-[10px] border'>3</th>
                        <th className='border-white border'>
                          <p>Mohirdev</p>
                        </th>
                        <th className='border-white border'>3-9 месяцев</th>
                        <th className='border-white border'></th>
                        <th className='border-white border'>2 000 000</th>
                        <th className='border-white border'></th>
                      </tr>
                      <tr>
                        <th className='border-white p-[10px] border'>04</th>
                        <th className='border-white'>
                          <p>PROWEB</p>
                        </th>
                        <th className='border-white p-[18px] border'>
                          10 месяцев
                        </th>
                        <th className='border-white p-[18px] border'>
                          80 урока
                        </th>
                        <th className='border-white p-[18px] border'>
                          1 600 000
                        </th>
                        <th className='border-white p-[18px] border'></th>
                      </tr>
                      <tr>
                        <th className='border-white p-[10px] border'>05</th>
                        <th className='border-white border'>
                          <p>Tehnikum</p>
                        </th>
                        <th className='border-white border'>4 месяцев</th>
                        <th className='border-white border'>50 уроков</th>
                        <th className='border-white border'></th>
                        <th className='border-white border'>985 000</th>
                      </tr>
                      <tr>
                        <th className='border-white p-[10px] border'>06</th>
                        <th className='border-white p-[20px] border'>Astrum</th>
                        <th className='border-white p-[20px] border'></th>
                        <th className='border-white p-[20px] border'></th>
                        <th className='border-white p-[20px] border'></th>
                        <th className='border-white p-[20px] border'></th>
                      </tr>
                      <tr>
                        <th className='p-[10px] border borer-white'>07</th>
                        <th className='p-[20px] border borer-white'>
                          Step Academy
                        </th>
                        <th className='p-[20px] border borer-white'></th>
                        <th className='p-[20px] border borer-white'></th>
                        <th className='p-[20px] border borer-white'></th>
                        <th className='p-[20px] border borer-white'></th>
                      </tr>
                      <tr>
                        <th className='border-white p-[10px] border'>08</th>
                        <th className='border-white p-[20px] border'>
                          IT Academy
                        </th>
                        <th className='border-white p-[20px] border'></th>
                        <th className='border-white p-[20px] border'></th>
                        <th className='border-white p-[20px] border'></th>
                        <th className='border-white p-[20px] border'></th>
                      </tr>
                      <tr>
                        <th className='border-white p-[10px] border'>09</th>
                        <th className='border-white p-[20px] border'>
                          U Study
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

export default Motion

import React from 'react'
import { Link } from 'react-router-dom'
import { Link as ScrollLink } from 'react-scroll'

const GraphicUz = ({ isDarkMode }) => {
  return (
    <>
      <main>
        {/* Главный баннер */}
        <section className='relative'>
        <div
  style={{
    background: 'linear-gradient(to right, to botttom, #000000, #090924, #240A2F)',
  }}
  className="flex h-[600px] items-center gap-[192px] bg-custom-background mx-auto px-4 pl-[119px] text-center animate-fadeInUp container"
>
            <p className='font-medium text-[74.81px] text-left text-white leading-[112.22px]'>
            Grafik<br />
            dizayn
            </p>
            <div
              className='bg-cover bg-center w-[864.85px] h-[484.05px] animate-scaleIn'
              style={{
                backgroundImage: "url('/public/img/Graphic.png')"
              }}
            ></div>
          </div>
        </section>

        {/* Описание профессии */}
        <section className='bg-purple-600 my-6 ml-[68px] rounded-[17.96px] w-[1300px] h-[228.18px] text-white animate-fadeIn'>
          <div className='mx-auto px-12 container'>
            <h2 className='font-bold text-2xl'>
            Siz raqamli dunyoda ijodkorlik va ijodkorlikni o'rganasiz          </h2>
            <p className='mt-4'>
            Grafik dizayn - bu nimanidir ixtiro qilishni yaxshi ko'radigan yosh va ijodiy odamlar uchun ideal tanlovdir <br />
            yangi, mantiq va uslubni birlashtirgan. Ushbu kursda siz kompozitsiya, ranglar nazariyasi kabi dizaynning barcha asoslarini o'zlashtirasiz<br />
            va yorug'lik va boshqalar.
            </p>
           
          </div>
        </section>
        <section className='bg-white h-[300px]'>
          <p className='pt-6 pl-[119px] font-semibold text-[34.41px] text-left leading-[51.62px]; @apply'>
          Kurs haqida batafsil
          </p>
          <div className='text-right pr-[145px]'>
            <p className='text-right  pb-6 font-medium text-[17.96px] leading-[26.93px] @apply'>
            Ushbu kursda siz Figma grafik muharririni, shuningdek <br />
            Photoshopning eng kuchli va moslashuvchan vositasi bilan ishlashni o'rganing
            </p>
            <p className='text-right font-medium text-[17.96px] leading-[26.93px]; @apply'>
            Bundan tashqari, kurs Illustrator va vektor muharrirlarini ham o'z ichiga oladi<br />
            CorelDraw, u bilan ishlashda siz brending, identifikatsiya va <br />
            mahsulotlarni chop etish uchun tayyorlash
            </p>
          </div>
        </section>

        <section>
          <div>
            <div className='bg-black'>
              <div className='mx-auto container'>
                <h1 className='font-semibold text-[34.41px] pt-[27px] pl-[122px] pb-[100px] text-left text-white dark:text-black leading-[51.62px]'>
                O'zingiznikini toping  <br />
                IT akademiyasi
                </h1>
              </div>
              <div className='relative mr-auto mb-[165px] ml-auto w-[1200px] m'>
                <p className='pb-6 font-bold text-[40.4px] text-center text-white leading-[48.48px]'>
                Tahlil
                </p>
                <img className='w-[1200px] h-[700px]' alt='' />
                <div>
                  <p className='top-[21px] left-[40%] absolute mb-[38px]'></p>
                  <div className='top-[10%] left-[2%] absolute'>
                    <table className='border-white bg-black mt-[65px] ml-[50px] border text-white'>
                      <tr>
                        <th></th>
                        <th className='border-white p-[20px] border'>
                        IT akademiyasi
                        </th>
                        <th className='border-white p-[20px] border'>
                        Kurs davomiyligi
                        </th>
                        <th className='border-white p-[20px] border'>
                        Darslar soni
                        </th>
                        <th className='border-white p-[20px] border'>
                        TA'LIM XARAJATLARI
                        </th>
                        <th className='border-white p-[20px] border'>
                        12 oyga bo'lib to'lash rejasi
                        </th>
                      </tr>
                      <tr>
                        <th className='border-white p-[10px border'>01</th>
                        <th className='border-white border'>
                          <p>Najot Ta'lim</p>
                        </th>
                        <th className='border-white border'>6 oy</th>
                        <th className='border-white border'>  72 dars</th>
                        <th className='border-white border'>1 350 000</th>
                        <th className='border-white border'></th>
                      </tr>
                      <tr>
                        <th className='border-white p-[10px] border'>02</th>
                        <th className='border-white border text-center'>
                          <p>PDP Academy</p>
                        </th>
                        <th className='border-white border text-center'>
                         4 oygacha
                        </th>
                        <th className='border-white border text-center'>
                           
                        </th>
                        <th className='border-white border text-center'>
                          2 000 000
                        </th>
                        <th className='border-white border text-center'></th>
                      </tr>
                      <tr>
                        <th className='border-white p-[10px] border'>3</th>
                        <th className='border-white border'>
                          <p>Mohirdev</p>
                        </th>
                        <th className='border-white border'>4 oygacha</th>
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
                          10 oygacha
                        </th>
                        <th className='border-white p-[18px] border'>
                          80 dars
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
                        <th className='border-white border'>4 oygacha</th>
                        <th className='border-white border'>50 dars</th>
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

        {/* Форма записи */}
      </main>

      {/* Кастомные анимации */}
    </>
  )
}

export default GraphicUz

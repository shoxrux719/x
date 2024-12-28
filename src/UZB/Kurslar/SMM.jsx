import React from 'react'
import { Link } from 'react-router-dom'
import { Link as ScrollLink } from 'react-scroll'


const SMMUz = ({ isDarkMode }) => {
  return (
    <>
      <main>
        {/* Главный баннер */}
        <section className='relative'>
        <div
  style={{
    background: 'linear-gradient(to right, to botttom, #000000, #090924, #240A2F)',
  }}
  className="flex h-[600px] items-center gap-[190px] bg-custom-background mx-auto px-4 pl-[119px] text-center animate-fadeInUp container"
>
            <p className='font-medium flex gap-[10px] text-[74.81px] text-left text-white leading-[112.22px]'>
            SMM 
            <span>kurslari</span>
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
            Ijtimoiy tarmoqlar
            </h2>
            <p className='mt-4'>
            SMM (Ijtimoiy Media Marketing) - ijtimoiy tarmoqlarda brendni ilgari surishga asoslangan marketing yo'nalishi. <br />
            Siz USP (noyob sotish taklifi), shior, taklif va savdo hunisini ishlab chiqishni, shuningdek, kopirayterlik va nashrlarni yaratishni o'rganasiz.
            </p>
           
          </div>
        </section>
        <section className='bg-white h-[300px]'>
          <p className='pt-6 pl-[119px] font-semibold text-[34.41px] text-left leading-[51.62px]; @apply'>
          Kurs haqida batafsil
          </p>
          <div className='text-right pr-[145px]'>
            <p className='text-right  pb-6 font-medium text-[17.96px] leading-[26.93px] @apply'>
            SMM kursi mutaxassis bo'lishni xohlovchilar uchun ideal tanlovdir <br /> ijtimoiy tarmoqlarda brendni ilgari surish sohalari.
            </p>
            <p className='text-right font-medium text-[17.96px] leading-[26.93px]; @apply'>
            SMM kursi sizga ijtimoiy media strategiyalarini yaratish ko'nikmalarini rivojlantirishga yordam beradi. <br />
            ommaviy axborot vositalari, turli platformalar bilan ishlash, virusli kontent yaratish va <br />
              auditoriyani jalb qilish. Trening davomida siz barcha kerakli narsalarni o'zlashtirasiz<br />
              SMM strategiyasini yaratishdan tortib u bilan ishlashgacha bo'lgan ko'nikma va bilimlar <br />
              neyron tarmog'i va mobilografiya blokini o'zlashtirish
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
                        <th className='border-white border'>5 oy</th>
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
                        oylar
                        </th>
                        <th className='border-white border text-center'>
                          72 darslar
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
                        <th className='border-white border'>3-9 oygacha</th>
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
                          10 oy
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
                        <th className='border-white border'>4 oy</th>
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

export default SMMUz

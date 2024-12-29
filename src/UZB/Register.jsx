import React from 'react';



const RegisterPage = () => {
  return (
    <>
<div class="bg-black text-white">
  
 

  <section class="relative">
   <img alt="Abstract blue network background" class="h-96 object-cover" height="600" src="https://storage.googleapis.com/a1aa/image/klL7ueSrtixyCa80ntUPEHh9Aybve1fsxGkgffhbTWKgmBEfE.jpg" width="1920"/>
   <div class="absolute inset-0 flex flex-col justify-center items-center text-center">
    <h1 class="text-4xl font-bold">
     Помогаем вашему бизнесу расти
    </h1>
    <p class="mt-2 text-lg">
     Наращивайте свой интеллектуальный капитал с NewLine и занимайте новые позиции на рынке IT
    </p>
   </div>
  </section>

  <section class="flex justify-center  py-12 bg-white dark:bg-black">
   <div class="bg-white text-black p-8  rounded-lg shadow-lg w-[1167px] ">
    <h2 class="text-2xl font-bold mb-6">
     Оставьте заявку на консультацию
    </h2>
    <form>
     <div class="mb-4">
      <label class="block text-sm font-medium" for="name">
       Ваше имя:
      </label>
      <input class="w-full p-2 border border-gray-300 rounded" id="name" type="text"/>
     </div>
     <div class="mb-4">
      <label class="block text-sm font-medium" for="phone">
       Номер телефона:
      </label>
      <input class="w-full p-2 border border-gray-300 rounded" id="phone" type="text"/>
     </div>
     <div class="mb-4">
      <label class="block text-sm font-medium" for="company">
       МCHJ(бренд):
      </label>
      <input class="w-full p-2 border border-gray-300 rounded" id="company" type="text"/>
     </div>
     <button class="w-full py-2 bg-[#664DFF] text-white font-bold rounded" type="submit">
      Получить консультацию
     </button>
    </form>
   </div>
  </section>

  
 
  </div>
    </>
  );
};

export default RegisterPage;
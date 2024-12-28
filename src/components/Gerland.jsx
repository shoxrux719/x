import React from "react";

const Garland = () => {
  const ornaments = Array.from({ length: 10 }); // Количество шариков

  const randomMove = (event) => {
    const ornament = event.target;
    const randomX = Math.random() * 20 - 10; // Движение по X (-10px до 10px)
    const randomY = Math.random() * 20 - 10; // Движение по Y (-10px до 10px)

    ornament.style.transform = `translate(${randomX}px, ${randomY}px) scale(1.2)`;
  };

  const resetMove = (event) => {
    event.target.style.transform = "translate(0, 0) scale(1)";
  };

  return (
    <div className="garland flex justify-center items-center bg-green-600 py-5 gap-4 flex-wrap">
      {ornaments.map((_, index) => (
        <div
          key={index}
          className="relative w-12 h-12 rounded-full bg-gradient-to-br from-purple-700 to-purple-900 shadow-lg cursor-pointer transition-transform duration-300 ease-in-out"
          onMouseOver={randomMove}
          onMouseLeave={resetMove}
        >
          {/* Верхушка шарика */}
          <div className="absolute top-[-10px] left-1/2 transform -translate-x-1/2 w-3 h-3 bg-yellow-500 clip-polygon-[50%_0%,100%_100%,0%_100%]"></div>
          <div className="absolute top-[-20px] left-1/2 transform -translate-x-1/2 w-0.5 h-2.5 bg-gray-700"></div>
        </div>
      ))}
    </div>
  );
};

export default Garland;

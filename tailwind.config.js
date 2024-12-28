export const darkMode = 'class';
export const content = [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}',
];
export const theme = {
  extend: {
    backgroundImage: {
      'custom-gradient': 'linear-gradient(to bottom, white, #fff, white, #fff, white, #ffffff, #aa85ff, #9163ff, #8563ff, #f3c4fc)',
      'custom-gradient-light': 'linear-gradient(to bottom, black, #000, black, #000, black, #000, #1f045f, #4b17c3, #8563ff, #f3c4fc)',
    },

    boxShadow: {
      'purple-glow': '0 4px 15px rgba(128, 90, 213, 0.5)', // Настраиваем фиолетовую тень
    },
    animation: {
      scrollLeft: 'scrollLeft 25s linear infinite',
      scrollRight: 'scrollRight 25s linear infinite',
    },
    keyframes: {
      scrollLeft: {
        '0%': { transform: 'translateX(0)' },
        '100%': { transform: 'translateX(-50%)' },
      },
      scrollRight: {
        '0%': { transform: 'translateX(0)' },
        '100%': { transform: 'translateX(50%)' },
      },
    },
  },
};
export const plugins = [];

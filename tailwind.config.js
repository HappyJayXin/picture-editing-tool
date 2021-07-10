module.exports = {
  mode: 'jit',
  purge: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/features/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      notoSans: ['Noto Sans TC'],
    },
    extend: {
      colors: {
        chinook: '#9dd3a8',
        arapawa: '#204969',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

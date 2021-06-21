module.exports = {
  mode: 'jit',
  purge: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './containers/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false,
  theme: {
    colors: {
      primary: { light: '#f5f6ff', DEFAULT: '#4758fc', dark: '#3644cd' },
      gray: { light: '#ffffff', DEFAULT: '#c2c2c2', dark: '#000000' },
      text: { light: '#0e1317', DEFAULT: '#3e2f2f', dark: '#030203' },
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1024px',
      xl: '1200px',
      '2xl': '1400px',
    },
    fontFamily: {
      raleway: ['Raleway', 'sans-serif'],
      roboto: ['Roboto', 'sans-serif'],
    },
    extend: {
      transitionProperty: {
        padding: 'padding',
        color: 'color',
        bgc: 'background-color',
        'bgc-color': 'background-color, color',
      },
    },
  },
  variants: {},
  plugins: [],
};

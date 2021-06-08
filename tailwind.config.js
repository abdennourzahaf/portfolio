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
    borderRadius: {
      none: '0',
      sm: '0.125rem',
      DEFAULT: '0.25rem',
      DEFAULT: '4px',
      md: '0.375rem',
      lg: '0.5rem',
      30: '30px',
      xl: '120px',
      '2xl': '200px',
      full: '9999px',
      large: '12px',
    },
    zIndex: {
      0: 0,
      10: 10,
      20: 20,
      30: 30,
      40: 40,
      50: 50,
      25: 25,
      50: 50,
      75: 75,
      100: 100,
      '-1': -1,
      auto: 'auto',
    },
    extend: {
      spacing: {
        34: '8.5rem',
      },
    },
  },
  variants: {
    extend: { translate: ['group-hover'] },
  },
  plugins: [],
};

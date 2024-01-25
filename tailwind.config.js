/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      primary: 'Poppins',
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        lg: '2rem',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1234px',
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: '#7380ec',
          variant: '#111e88'
        },
        danger: '#ff7782',
        success: '#41f1b6',
        warning: '#ffbb55',
        background: '#f6f6f9',
        dark: {
          DEFAULT: '#363949',
          info: '#7d8da1',
          variant: '#677483', 
        },
        light: {
          DEFAULT: 'rgba(132,139,200,0.18)',
          info: '#dce1eb',
        }
      },
    },
    boxShadow: {
      1: '0px 2rem 3rem rgba(132,139,200,0.18)'
    },
  },
  plugins: [],
}


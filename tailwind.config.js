export default {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontSize: {
        '4.5xl': '2.75rem',
        '5xl': '3.5rem',
        '6xl': '4.25rem',
        '7xl': '5rem',
        '8xl': '5.625rem'
      },
      letterSpacing: {
        widest: '0.23rem'
      },
      spacing: {
        18: '4.2rem',
        30: '7.8rem',
        62: '15.5rem',
        68: '17rem',
        80: '21rem',
        100: '22rem',
        120: '30rem',
        280: '70rem',
        540: '135rem'
      },
      lineHeight: {
        tighter: '1.15'
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
        '7xl': '3.5rem',
        '8xl': '4rem'
      },
      colors: {
        purple: '#4B1F66',
        violet: '#6f2560',
        pink: '#c36fab'
      }
    },
    fontFamily: {
      Orbitron: ['Orbitron, sans-serif'],
      Poppins: ['Poppins, sans-serif']
    },
    container: {
      center: true,
      screens: {
        lg: '1760px',
        xl: '1760px',
        '2xl': '1760px'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};

export default {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontSize: {
        '7xl': '5.625rem'
      },
      letterSpacing: {
        widest: '0.23rem'
      },
      spacing: {
        18: '4.5rem',
        30: '7.8rem',
        68: '17rem'
      },
      lineHeight: {
        tighter: '1.15'
      }
    },
    fontFamily: {
      Orbitron: ['Orbitron, sans-serif'],
      Poppins: ['Poppins, sans-serif']
    },
    container: {
      center: true,
      screens: {
        lg: '1664px',
        xl: '1664px',
        '2xl': '1664px'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};

import { darkColor, defaultColor } from '../../assets/styles/GlobalStyles';

const Style = {
  main: {
    background: '#FFFFFF',
    position: 'relative',
    zIndex: '3',
  },
  raised: {
    margin: '-60px 20px 0px',
    borderRadius: '6px',
    boxShadow:
      '0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)',
  },
  light: {
    backgroundColor: '#FFFFFF',
    color: darkColor,
  },
  dark: {
    backgroundColor: darkColor,
    color: '#fff',
  },
  transparent: {
    color: 'inherit',
    background: 'transparent',
  },
};

export default Style;

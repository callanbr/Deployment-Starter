const navDrawer = 200;

const mainContainer = {
  paddingRight: '15px',
  paddingLeft: '15px',
  marginRight: 'auto',
  marginLeft: 'auto',
  width: '100%',
};

const container = {
  ...mainContainer,
  '@media (min-width: 576px)': {
    maxWidth: '540px',
  },
  '@media (min-width: 768px)': {
    maxWidth: '720px',
  },
  '@media (min-width: 992px)': {
    maxWidth: '960px',
  },
  '@media (min-width: 1200px)': {
    maxWidth: '1140px',
  },
};

const boxShadow = {
  boxShadow:
    '0 10px 30px -12px rgba(0, 0, 0, 0.42), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)',
};

const defaultFont = {
  fontWeight: '300',
  lineHeight: '1.5em',
};

// Default Colors
const defaultColor = '#999999';
const lightColor = '#fff';
const darkColor = '#333333';

export {
  navDrawer,
  container,
  mainContainer,
  boxShadow,
  defaultFont,
  defaultColor,
  darkColor,
  lightColor,
};

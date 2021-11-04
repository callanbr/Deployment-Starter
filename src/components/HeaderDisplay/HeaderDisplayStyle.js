const Style = {
  main: {
    height: '110vh',
    maxHeight: '1500px',
    overflow: 'hidden',
    position: 'relative',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    margin: '-8px -8px 0 -8px',
    border: '0',
    display: 'flex',
    alignItems: 'center',
    maskImage:
      'linear-gradient(to bottom, rgba(0,0,0,1) 90%, rgba(0,0,0,0) 100%)',
  },
  filter: {
    '&:before': {
      background: 'rgba(0, 0, 0, 0.5)',
    },
  },
  halfView: {
    height: '60vh',
    minHeight: '500px',
  },
};

export default Style;

import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import styles from './HeaderDisplayStyle';

const useStyles = makeStyles(styles);

export default function HeaderDisplay(props) {
  let windowScrollTop;
  if (window.innerWidth >= 768) {
    windowScrollTop = window.pageYOffset / 3;
  } else {
    windowScrollTop = 0;
  }
  const [transform, setTransform] = React.useState(
    'translate3d(0,' + windowScrollTop + 'px,0)'
  );
  React.useEffect(() => {
    if (window.innerWidth >= 768) {
      window.addEventListener('scroll', resetTransform);
    }
    return function cleanup() {
      if (window.innerWidth >= 768) {
        window.removeEventListener('scroll', resetTransform);
      }
    };
  });
  const resetTransform = () => {
    let windowScrollTop = window.pageYOffset / 3;
    setTransform('translate3d(0,' + windowScrollTop + 'px,0)');
  };
  const { filter, className, children, style, image, halfView } = props;
  const classes = useStyles();
  const myClasses = classNames({
    [classes.main]: true,
    [classes.filter]: filter,
    [classes.halfView]: halfView,
    [className]: className !== undefined,
  });
  return (
    <div
      className={myClasses}
      style={{
        ...style,
        backgroundImage: 'url(' + image + ')',
        transform: transform,
      }}
    >
      {children}
    </div>
  );
}

HeaderDisplay.propTypes = {
  className: PropTypes.string,
  filter: PropTypes.bool,
  children: PropTypes.node,
  style: PropTypes.string,
  image: PropTypes.string,
  halfView: PropTypes.bool,
};

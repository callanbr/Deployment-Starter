import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import makeStyles from '@material-ui/core/styles/makeStyles';

import Style from './ContainerStyle';

const makeComponentStyles = makeStyles(() => ({
  ...Style,
}));

const RegularContainer = React.forwardRef((props, ref) => {
  const { raised, color, children, className, ...rest } = props;

  const classes = makeComponentStyles();

  const myClasses = classNames({
    [classes.main]: true,
    [classes[color]]: color,
    [classes.raised]: raised,
    [className]: className,
  });
  return (
    <div {...rest} ref={ref} className={myClasses}>
      {children}
    </div>
  );
});

RegularContainer.propTypes = {
  color: PropTypes.oneOf(['dark', 'light', 'transparent']),
  children: PropTypes.node,
  raised: PropTypes.bool,
  className: PropTypes.string,
};

export default RegularContainer;

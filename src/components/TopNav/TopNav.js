import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Hidden from '@material-ui/core/Hidden';
import Drawer from '@material-ui/core/Drawer';
import Menu from '@material-ui/icons/Menu';

import styles from './TopNavStyle.js';

const Style = makeStyles(styles);

export default function TopNav(props) {
  const classes = Style();
  const [isMobile, setMobile] = React.useState(false);

  React.useEffect(() => {
    if (props.colorOnScroll) {
      window.addEventListener('scroll', topNavColorChange);
    }
    return function cleanup() {
      if (props.colorOnScroll) {
        window.removeEventListener('scroll', topNavColorChange);
      }
    };
  });

  const handleDrawerToggle = () => {
    setMobile(!isMobile);
  };
  const topNavColorChange = () => {
    const { color, colorOnScroll } = props;
    const topOfScreen = window.pageYOffset;
    if (topOfScreen > colorOnScroll.height) {
      document.body
        .getElementsByTagName('header')[0]
        .classList.remove(classes[color]);
      document.body
        .getElementsByTagName('header')[0]
        .classList.add(classes[colorOnScroll.color]);
    } else {
      document.body
        .getElementsByTagName('header')[0]
        .classList.add(classes[color]);
      document.body
        .getElementsByTagName('header')[0]
        .classList.remove(classes[colorOnScroll.color]);
    }
  };

  const { brand, rightLinks, leftLinks, color, fixed, absolute } = props;
  const topNavClasses = classNames({
    [classes.topNav]: true,
    [classes[color]]: color,
    [classes.absolute]: absolute,
    [classes.fixed]: fixed,
  });

  const title = <Button className={classes.title}>{brand}</Button>;

  return (
    <AppBar className={topNavClasses}>
      <Toolbar className={classes.container}>
        {leftLinks !== undefined ? title : null}
        <div className={classes.flex}>
          {leftLinks !== undefined ? (
            <Hidden smDown implementation='css'>
              {leftLinks}
            </Hidden>
          ) : (
            title
          )}
        </div>
        <Hidden smDown implementation='css'>
          {rightLinks}
        </Hidden>
        <Hidden mdUp>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            onClick={handleDrawerToggle}
          >
            <Menu />
          </IconButton>
        </Hidden>
      </Toolbar>
      <Hidden mdUp implementation='js'>
        <Drawer
          variant='temporary'
          anchor={'right'}
          open={isMobile}
          classes={{
            paper: classes.drawer,
          }}
          onClose={handleDrawerToggle}
        >
          <div className={classes.appResponsive}>
            {leftLinks}
            {rightLinks}
          </div>
        </Drawer>
      </Hidden>
    </AppBar>
  );
}

TopNav.defaultProp = {
  color: 'light',
};

TopNav.propTypes = {
  color: PropTypes.oneOf(['transparent', 'light', 'dark']),
  rightLinks: PropTypes.node,
  leftLinks: PropTypes.node,
  brand: PropTypes.string,
  fixed: PropTypes.bool,
  absolute: PropTypes.bool,
  colorOnScroll: PropTypes.shape({
    height: PropTypes.number.isRequired,
    color: PropTypes.oneOf(['transparent', 'light', 'dark']).isRequired,
  }),
};

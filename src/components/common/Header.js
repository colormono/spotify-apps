import React from 'react';
import { Link } from 'react-router-dom';
import ReactGA from 'react-ga';
import logo from '../../images/logo.png';

const onButtonPress = () => {
  ReactGA.event({
    category: 'Clicks',
    action: 'Click',
    label: 'Header Logo'
  });
}

const Header = () => {
  return (
    <header className="header">
      <Link to={`${process.env.PUBLIC_URL}/`} onClick={() => onButtonPress()}>
        <span>
          <img src={logo} className="header-logo" alt="LOGO" />
        </span>
      </Link>
    </header>
  );
}

export { Header };
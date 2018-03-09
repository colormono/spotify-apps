import React from 'react';
import ReactGA from 'react-ga';

function onButtonPress(ga, url) {
  if (ga) {
    ReactGA.event({
      category: 'Clicks',
      action: 'Click',
      label: ga
    });
  }

  if (url) {
    window.open(url, '_blank');
  }
};

const Button = (props) => {
  const { ga, url } = props;

  return (
    <button onClick={() => onButtonPress(ga, url)} className={`${props.className}`}>
      {props.children}
    </button>
  );
};

export { Button };
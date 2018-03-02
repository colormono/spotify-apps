import React from 'react';
import ReactGA from 'react-ga';

const onButtonPress = (network) => {
  ReactGA.event({
    category: 'Clicks',
    action: 'Link',
    label: network
  });
}

const SocialButtons = () => {
  return (
    <aside className="social-buttons">
      <ul>
        <li>
          <a
            href="http://facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="item item-facebook"
            onClick={() => onButtonPress('facebook')}
          >
            <i className="icon icon-facebook"></i>
          </a>
        </li>
        <li>
          <a
            href="http://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="item item-twitter"
            onClick={() => onButtonPress('twitter')}
          >
            <i className="icon icon-twitter"></i>
          </a>
        </li>
        <li>
          <a
            href="http://youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="item item-youtube-play"
            onClick={() => onButtonPress('youtube')}
          >
            <i className="icon icon-youtube-play"></i>
          </a>
        </li>
      </ul>
    </aside>
  );
}

export { SocialButtons };

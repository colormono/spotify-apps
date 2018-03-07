import React from 'react';
import { ShareButtons } from 'react-share';
import ReactGA from 'react-ga';

const { FacebookShareButton, TwitterShareButton } = ShareButtons;

function trackEvent(network) {
  ReactGA.event({
    category: 'Clicks',
    action: 'Compartir',
    label: network
  });
}

const SharingButtons = (props) => {
  return (
    <div className="sharing-buttons">
      <span>COMPARTIR</span>
      <FacebookShareButton url={props.shareUrl} onClick={() => trackEvent('facebook')}>
        <i className="icon icon-facebook"></i>
      </FacebookShareButton>
      <TwitterShareButton url={props.shareUrl} tweet={props.tweet} hashtags={props.hashtags} onClick={() => trackEvent('twitter')}>
        <i className="icon icon-twitter"></i>
      </TwitterShareButton>
    </div>
  );
}

export { SharingButtons };
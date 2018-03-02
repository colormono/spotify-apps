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
    <div className="sharing">
      <span>COMPARTIR</span>
      <FacebookShareButton url={props.shareUrl} onClick={() => trackEvent('facebook')}>
        <i className="icon icon-facebook"></i>
      </FacebookShareButton>
      <TwitterShareButton url='http://miseriehbo.com' title={'¡Mi serie HBO es ' + props.serie + '! ¿Quieres conocer cuál es la tuya? Haz clic y descúbrelo. '} hashtags={['HBOGOLA', 'HBOLAT']} onClick={() => trackEvent('twitter')}>
        <i className="icon icon-twitter"></i>
      </TwitterShareButton>
    </div>
  );
}

export { SharingButtons };
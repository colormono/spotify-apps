import React from 'react';
import { Button } from './Button';
import { Spinner } from './Spinner';

const Playlist = (props) => {
  if (props.loading) {
    return (
      <div className='playlist-container'>
        <Spinner size={48} singleColor='rgb(223,37,140)' />
      </div>
    )
  }

  return (
    <div className='playlist-container'>
      <iframe
        src={`https://open.spotify.com/embed/user/${props.user}/playlist/${props.id}`}
        width='300'
        height='280'
        frameBorder='0'
        title='SpotifyIframe'
      />
      <Button ga='Escuchar en Spotify' url={`https://open.spotify.com/embed/user/${props.user}/playlist/${props.id}`} className='btn btn-white'>
        <i className='icon-spotify'></i> ESCUCHAR EN SPOTIFY
      </Button>
    </div>
  );
}

export { Playlist };

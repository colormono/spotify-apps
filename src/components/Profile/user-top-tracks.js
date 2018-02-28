import React from 'react';

const UserTopTracks = (props) => {
    const tracks = props.tracks.map((track) => {
        return(
            <li key={ track.id } className="list-group-item">
                <strong className="card-title">{ track.name }</strong>
                <br />Artista: {
                    track.artists ?
                        track.artists.map((artist, index) => {
                            return(
                                <span key={index}>{artist.name}</span>
                            );
                        })
                    :
                    <div>Sin artista</div>
                }
                <br />Album: {track.album.name}
            </li>
        );
    });

    return(
        <div>
            <h3>User Top Tracks ({ props.tracks.length })</h3>
            <ul className="list-group">
                {tracks}
            </ul>
        </div>
    );
}

export default UserTopTracks;
import React from 'react';

const UserTopArtists = (props) => {
    const artists = props.artists.map((artist) => {
        return(
            <li key={ artist.id } className="list-group-item">
                <strong className="card-title">{ artist.name }</strong><br />
                Generos: {
                    artist.genres ?
                        artist.genres.map((genre, index) => {
                            return (
                                <span key={index}>{genre}, </span>
                            );
                        })
                    : 
                    <div>Sin generos</div>
                }
            </li>
        );
    });

    return(
        <div>
            <h3>User Top Artists ({ props.artists.length })</h3>
            <ul className="list-group">
                {artists}
            </ul>
        </div>
    );
}

export default UserTopArtists;
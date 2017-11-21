import React from 'react';

const UserPlaylistsItem = ({playlist, onPlaylistSelect}) => {
    if(!playlist){
        return <div>Loading</div>;
    }

    const imageUrl = playlist.images[0].url;

    const cardStyle = {
        width: '14rem',
    };

    return(
        <div onClick={() => onPlaylistSelect(playlist.name)} className="card" style={cardStyle}>
            <img className="card-img-top" src={ imageUrl } alt="Card cap" />
            <div className="card-body">
                <strong className="card-title">{ playlist.name }</strong>
            </div>
        </div>
    );
}

export default UserPlaylistsItem;
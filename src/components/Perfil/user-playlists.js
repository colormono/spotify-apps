import React from 'react';
import UserPlaylistsItem from './user-playlists-item';

const UserPlaylists = (props) => {
    const playlists = props.playlists.map((playlist) => {
        return(
            <UserPlaylistsItem 
                key={ playlist.id }
                playlist={playlist}
                onPlaylistSelect={props.onPlaylistSelect}
            />
        );
    });

    return(
        <div>
            <h3>User Playlists ({ props.playlists.length })</h3>
            <div className="card-group">
                {playlists}
            </div>
        </div>
    );
}

export default UserPlaylists;
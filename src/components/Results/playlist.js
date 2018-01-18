import React, { Component } from 'react';
import MDSpinner from 'react-md-spinner';

export default class Playlist extends Component {
    renderContent(){
        if( this.props.loading || !this.props.playlist_id ){
            return <MDSpinner 
                className="spinner"
                size={48}
                singleColor="rgb(0,185,244)"
            />
        } else {
            return <iframe src={"https://open.spotify.com/embed/user/"+ this.props.playlist_user +"/playlist/"+ this.props.playlist_id } width="300" height="300" frameBorder="0" title="SpotifyIframe"></iframe>
        }
    }

    render() {
        return (
            <div className="iframe">
                {this.renderContent()}
            </div>
        );
    }
}
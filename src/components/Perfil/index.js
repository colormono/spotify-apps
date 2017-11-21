import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserProfile from './user-profile';
import UserPlaylists from './user-playlists';
import UserTopArtists from './user-top-artists';
import UserTopTracks from './user-top-tracks';
import AudioFeatures from './audio-features';

class Game extends Component {
    render() {
        return(
            <div>
                <UserProfile user={this.props.user} />
                <AudioFeatures tracks={this.props.analisis} />
                <UserPlaylists playlists={this.props.playlists} />
                <UserTopArtists artists={this.props.artists} />
                <UserTopTracks tracks={this.props.tracks} />
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        user: state.mainReducer.user,
        playlists: state.mainReducer.userPlaylists,
        artists: state.mainReducer.userTopArtists,
        tracks: state.mainReducer.userTopTracks,
        analisis: state.mainReducer.audioFeatures
    }
}

export default connect(mapStateToProps)(Game);
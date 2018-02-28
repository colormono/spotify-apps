import React, { Component } from 'react';
import { connect } from 'react-redux';

class PlaylistDetail extends Component {
    render() {
        if(!this.props.playlist) {
            return <div>Select a playlist</div>
        }
        return(
            <div>
                <h3>Details for</h3>
                <p>name: {this.props.playlist.name}</p>
                <p>songs: {this.props.playlist.songs}</p>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        playlist: state.activePlaylist
    };
}

export default connect(mapStateToProps)(PlaylistDetail);
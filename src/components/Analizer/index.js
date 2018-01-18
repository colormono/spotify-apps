import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { fetchUserInfo } from '../../actions/fetchUserInfo';
//import { fetchUserPlaylists } from '../../actions/fetchUserPlaylists';
import { fetchUserTopArtists } from '../../actions/fetchUserTopArtists';
import { fetchUserTopTracks } from '../../actions/fetchUserTopTracks';
import VideoPlayer from './video-player';

class Analizer extends Component {

    constructor(props) {
        super(props);

        // Realizar consultas a la API de Spotify
        this.props.fetchUserInfo();
        //this.props.fetchUserPlaylists();
        this.props.fetchUserTopArtists();
        this.props.fetchUserTopTracks();
    }
    
    render() {
        if( this.props.isLogin === false ){
            return (
                <div>
                    <Redirect to={`${process.env.PUBLIC_URL}/`} />
                </div>
            );
        }
        return (
            <VideoPlayer />
        );
    }
}

function mapStateToProps(state){
    return {
        isLogin: state.main.isLogin
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        fetchUserInfo: fetchUserInfo,
        //fetchUserPlaylists: fetchUserPlaylists,
        fetchUserTopArtists: fetchUserTopArtists,
        fetchUserTopTracks: fetchUserTopTracks
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Analizer);
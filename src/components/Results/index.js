import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createCustomPlaylist } from '../../actions/createCustomPlaylist';


class Results extends Component {
    
    componentDidMount() {
        // Crear playlist
        if(!this.props.playlist.id){
            this.props.createCustomPlaylist();
        }
    }

    render() {
        var iframe, link;
        if( this.props.playlist.id ){
            iframe = <iframe src={"https://open.spotify.com/embed/user/"+this.props.playlist.user+"/playlist/"+this.props.playlist.id} width="300" height="380" frameBorder="0" allowTransparency="true" title="SpotifyIframe"></iframe>;
            link = <a href={"https://open.spotify.com/user/"+this.props.playlist.user+"/playlist/"+this.props.playlist.id} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Escuchar en Spotify</a>;
        }
        return(
            <div>
                {iframe}
                <p>{link}</p>
                <p><button onClick={() => this.props.createCustomPlaylist()} className="btn btn-secondary">Crear nueva playlist</button></p>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        playlist: state.mainReducer.customPlaylist
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        createCustomPlaylist: createCustomPlaylist
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Results);
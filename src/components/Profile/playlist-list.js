import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectPlaylist } from '../actions/selectPlaylist';
import { bindActionCreators } from 'redux';

class PlaylistList extends Component {
    renderList() {
        return this.props.playlists.map((playlist) => {
            return(
                <li 
                    key={playlist.name} 
                    className="list-group-item"
                    onClick={() => this.props.selectPlaylist(playlist)}
                >
                    {playlist.name}
                </li>
            );
        });
    }

    render() {
        return(
            <ul className="list-group col-sm-4">
                { this.renderList() }
            </ul>
        );
    }
}

// Containers son los links entre redux y react
function mapStateToProps(state) {
    // Se devuelve lo que se muestra como props dentro de PlaylistList
    // this.props...
    return {
        playlists: state.playlists
    };
}

// Todo lo que salga de esta función
// se va a mostrar como props dentro de PlaylistList
function mapDispatchToProps(dispatch) {
    // Siempre que se llame a la acción selectPlaylist, 
    // el resultado tiene que pasarse a todos los reducers.
    return bindActionCreators({
        selectPlaylist: selectPlaylist
    }, dispatch);
}

// Enviar PlaylistList de un componente a un contenedor
export default connect(mapStateToProps, mapDispatchToProps)(PlaylistList);
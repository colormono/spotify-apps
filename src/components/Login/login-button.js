import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class LoginButton extends Component {

    getAuthorization() {
        let url = 
            'https://accounts.spotify.com/authorize?client_id=' + this.props.config.clientId +
            '&redirect_uri=' + encodeURIComponent(this.props.config.redirectUri) +
            '&scope=' + encodeURIComponent(this.props.config.scopes.join(' ')) +
            '&response_type=token' +
            '&show_dialog=true';

        // Redirect
        window.location.href = url;
        
        /*
        // New window
        var width = 450, height = 730, left = (window.screen.width / 2) - (width / 2), top = (window.screen.height / 2) - (height / 2);
        var w = window.open( url , 'Spotify', 'menubar=no,location=no,resizable=no,scrollbars=no,status=no, width=' + width + ', height=' + height + ', top=' + top + ', left=' + left );
        w.addEventListener("message", function(event) {
            // Obtener parametros de la url
            function getParameterByName(name, url) {
                if (!url) url = w.location.href;
                name = name.replace(/[\[\]]/g, "\\$&");
                var regex = new RegExp("[?|#|&]" + name + "(=([^&#]*)|&|#|$)"),
                    results = regex.exec(url);
                if (!results) return null;
                if (!results[2]) return '';
                return decodeURIComponent(results[2].replace(/\+/g, " "));
            }
            // Guardar token de sesión
            var token = getParameterByName('access_token');
            setAccessToken(token);
            // Cerrar ventana
            w.opener.focus();
            w.close();
        }, false);
        */
    }

    render() {
        return( 
            <div>
                <button 
                    onClick={() => this.getAuthorization()}
                    className="btn btn-primary"
                >Comenzar</button>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        config: state.config
    };
}

export default withRouter(connect(mapStateToProps)(LoginButton));
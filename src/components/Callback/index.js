import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';

import { setAccessToken, setUserLogin } from '../../actions/loginActions';
import { bindActionCreators } from 'redux';


class Callback extends Component {
    componentWillMount() {
        var setAccessToken = this.props.setAccessToken.bind(this);
        var setUserLogin = this.props.setUserLogin.bind(this);
        
        // Obtener parametros de la url
        function getParameterByName(name, url) {
            if (!url) url = window.location.href;
            name = name.replace(/[[\]]/g, "\\$&");
            var regex = new RegExp("[?|#|&]" + name + "(=([^&#]*)|&|#|$)"),
                results = regex.exec(url);
            if (!results) return null;
            if (!results[2]) return '';
            return decodeURIComponent(results[2].replace(/\+/g, " "));
        }

        // Control de errores
        var error = getParameterByName('error');
        if( error ){
            setAccessToken('ERROR');
            setUserLogin(false);
        }

        // Token de sesión
        var token = getParameterByName('access_token');
        if( token ){
            console.log(token);
            setAccessToken(token);
            setUserLogin(true);
        }
    }

    render() {
        // Autorizando
        if(!this.props.accessToken) {
            return (
                <div>Autorizando...</div>
            )
        }
        // Error de autorización
        else if(this.props.accessToken === 'ERROR') {
            return (
                <Redirect to="/"/>
            )
        }
        // Autorización exitosa
        return (
            <Redirect to="/analizando"/>
        );
    }
}

function mapStateToProps(state){
    return {
        accessToken: state.mainReducer.accessToken
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        setAccessToken: setAccessToken,
        setUserLogin: setUserLogin
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Callback);
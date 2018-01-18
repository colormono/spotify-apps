import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from '../../images/logo-spotify-green.png';
//import LogoutButton from '../Login/logout-button';

class Footer extends Component {

    render() {
        return(
            <footer className="footer">
                <small>POWERED BY</small>
                <span><img src={logo} alt="Spotify" /></span>
                { 
                    //this.props.isLogin ? <LogoutButton /> : <i /> 
                }
            </footer>
        )
    }
}

function mapStateToProps(state){
    return {
        isLogin: state.main.isLogin
    };
}

export default connect(mapStateToProps)(Footer);

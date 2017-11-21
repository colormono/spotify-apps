import React, { Component } from 'react';
import { connect } from 'react-redux';
import LoginButton from './login-button';
import LogoutButton from './logout-button';

class Login extends Component {
    render() {
        return(
            <div>
                {
                    this.props.isLogin
                    ? <LogoutButton />
                    : <LoginButton />
                }
            </div>
        )
    }    
}

function mapStateToProps(state){
    return {
        isLogin: state.mainReducer.isLogin
    };
}

export default connect(mapStateToProps)(Login);


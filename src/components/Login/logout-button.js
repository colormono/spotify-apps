import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setUserLogin } from '../../actions/loginActions';

class LogoutButton extends Component {
    render() {
        return (
            <div>
                <button 
                    onClick={() => this.props.setUserLogin(false)}
                    className="btn btn-danger btn-small"
                >Logout</button>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        setUserLogin: setUserLogin
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        setUserLogin: setUserLogin
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(LogoutButton);
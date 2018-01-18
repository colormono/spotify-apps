import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setUserLogin } from '../../actions/loginActions';

class LogoutButton extends Component {
    render() {
        return (
            <div>
                <Link to={`${process.env.PUBLIC_URL}/`}>
                    <button 
                        onClick={() => this.props.setUserLogin(false)}
                        className="btn">
                        Logout
                    </button>
                </Link>
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
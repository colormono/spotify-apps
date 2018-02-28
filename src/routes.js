//import reducers from './reducers';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

// Views
import Callback from './components/Callback';
import HomeScreen from './components/HomeScreen';
import AnalizerScreen from './components/AnalizerScreen';
import ResultScreen from './components/ResultScreen';

class Routes extends Component {
  render() {
    return (
      <Router basename={'/'}>
        <section className="main">
          <Route exact path={`${process.env.PUBLIC_URL}/`} component={HomeScreen} />
          <Route
            path={`${process.env.PUBLIC_URL}/callback`}
            component={Callback}
          />
          <PrivateRoute
            userLogin={this.props.userLogin}
            path={`${process.env.PUBLIC_URL}/analizando`}
            component={AnalizerScreen}
          />
          <PrivateRoute
            userLogin={this.props.userLogin}
            path={`${process.env.PUBLIC_URL}/resultado`}
            component={ResultScreen}
          />
        </section>
      </Router>
    );
  }
};

const PrivateRoute = ({ component: Component, userLogin, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      userLogin ? (
        <Component {...props} />
      ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: props.location }
            }}
          />
        )
    }
  />
);

const mapStateToProps = state => {
  return {
    userLogin: state.auth.userLogin
  };
};

export default connect(mapStateToProps)(Routes);

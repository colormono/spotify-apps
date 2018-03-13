import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

export default function(ComposedComponent) {
  class RequireAuth extends Component {
    render() {
      if (!this.props.authentificated) {
        return <Redirect to="/" {...this.props} />;
      }

      return <ComposedComponent {...this.props} />;
    }
  }

  const mapStateToProps = state => {
    return {
      authentificated: state.auth.authentificated
    };
  };

  return connect(mapStateToProps)(RequireAuth);
}

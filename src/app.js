import React, { Component } from 'react';
import { Header, PoweredBy } from './components/common';
import Routes from './routes';
import './styles/App.css';

// Analytics
import ReactGA from 'react-ga';
ReactGA.initialize('UA-XXXXXXXX-X', {
  debug: false
});
ReactGA.pageview(window.location.pathname + window.location.search);

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Routes />
        <PoweredBy />
      </div>
    );
  }
}

export default App;

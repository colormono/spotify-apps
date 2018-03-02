import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import RequireAuth from './components/hoc/RequireAuth';
import ReactGA from 'react-ga';

// Partials
import { Header, SocialButtons, PoweredBy } from './components/common';

// Views
import Callback from './components/Callback';
import HomeScreen from './components/HomeScreen';
import AnalizerScreen from './components/AnalizerScreen';
import ResultScreen from './components/ResultScreen';

// Styles
import './styles/App.css';

// Analytics
ReactGA.initialize('UA-XXXXXXXX-X', {
  debug: true
});
ReactGA.pageview(window.location.pathname + window.location.search);

class App extends Component {
  render() {
    return (
      <div className="app">
        <Router basename={'/'}>
          <div className="app-container">
            <Header />
            <section className="main">
              <Route exact path='/' component={HomeScreen} />
              <Route path='/callback' component={Callback} />
              <Route path='/analizando' component={RequireAuth(AnalizerScreen)} />
              <Route path='/resultado' component={RequireAuth(ResultScreen)} />
            </section>
            <SocialButtons />
            <PoweredBy />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;

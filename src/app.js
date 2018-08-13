import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import RequireAuth from './components/hoc/RequireAuth';
import ReactGA from 'react-ga';

// Partials
import { Header, SocialButtons, PoweredBy } from './components/common';

// Views
import Callback from './components/auth/Callback';
import HomeScreen from './components/HomeScreen';
import AnalyzerScreen from './components/AnalyzerScreen';
import TriviaScreen from './components/TriviaScreen';
import ResultScreen from './components/ResultScreen';
import ProfileScreen from './components/ProfileScreen';
import PixiTest from './components/PixiTest';
import PixiFiberTest from './components/PixiFiberTest';

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
              <Route exact path="/" component={HomeScreen} />
              <Route path="/callback" component={Callback} />
              <Route
                path="/analizando"
                component={RequireAuth(AnalyzerScreen)}
              />
              <Route path="/trivia" component={RequireAuth(TriviaScreen)} />
              <Route path="/resultado" component={RequireAuth(ResultScreen)} />
              <Route path="/perfil" component={RequireAuth(ProfileScreen)} />
              <Route path="/test" component={PixiTest} />
              <Route path="/test2" component={PixiFiberTest} />
            </section>
            <footer className="footer">
              <SocialButtons />
              <PoweredBy />
            </footer>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;

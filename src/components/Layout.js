//import reducers from '../reducers';
import React, { Component } from 'react';
import { connect } from 'react-redux';

// Router
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Partials
import Header from './Header';
import Footer from './Footer';
import Login from './Login';
import Callback from './Callback';
import Analizer from './Analizer';
import Perfil from './Perfil';
import Results from './Results';
import Formulario from './Formulario';

// Styles
import '../styles/App.css';

// GA Tracking
import ReactGA from 'react-ga';
ReactGA.initialize('UA-93726310-9', {
    debug: false
});
ReactGA.pageview(window.location.pathname + window.location.search);

class Layout extends Component {
    render() {
        return(
            <div className="app">
                <Header isLoggedIn={this.props.isLogin} />
                <Router basename={'/'}>
                    <section className="main">
                        <Route exact path={`${process.env.PUBLIC_URL}/`} component={Login} />
                        <Route path={`${process.env.PUBLIC_URL}/callback`} component={Callback} />
                        <Route path={`${process.env.PUBLIC_URL}/analizando`} component={Analizer} />
                        <Route path={`${process.env.PUBLIC_URL}/perfil`} component={Perfil} />
                        <Route path={`${process.env.PUBLIC_URL}/resultado`} component={Results} />
                        <Route path={`${process.env.PUBLIC_URL}/formulario`} component={Formulario} />
                    </section>
                </Router>
                <Footer />
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        isLogin: state.main.isLogin
    };
}

export default connect(mapStateToProps)(Layout);
import React, { Component } from 'react';

// Router
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

// Partials
import Header from './Header';
import Footer from './Footer';
import Login from './Login';
import Callback from './Callback';
import Analizer from './Analizer';
import Perfil from './Perfil';
import Results from './Results';

// Styles
import './styles.css';

export default class Layout extends Component {
    render() {
        return(
            <div className="app container-fluid">
                <Header />
                <Router>
                    <div>
                        <nav>
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><Link to="/">Login</Link></li>
                                <li className="breadcrumb-item"><Link to="/analizando">Analizer</Link></li>
                                <li className="breadcrumb-item"><Link to="/perfil">Perfil</Link></li>
                                <li className="breadcrumb-item"><Link to="/resultado">Resultado</Link></li>
                            </ol>
                        </nav>
                        <Route exact path="/" component={Login} />
                        <Route path="/callback" component={Callback} />
                        <Route path="/analizando" component={Analizer} />
                        <Route path="/perfil" component={Perfil} />
                        <Route path="/resultado" component={Results} />
                    </div>
                </Router>
                <Footer />
            </div>
        );
    }
}
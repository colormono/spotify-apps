import React from 'react';
import logo from './logo.png';
import './styles.css';

const Header = () => {
    return(
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Spotify App</h1>
        </header>
    );
}

export default Header;
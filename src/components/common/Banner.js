import React from 'react';
import ReactGA from 'react-ga';
import logo from '../../images/logo.png';

const Banner = () => {
    function goToApp() {
        // Trackar evento
        ReactGA.event({
            category: 'Clicks',
            action: 'Click',
            label: 'Descargar App'
        });
        window.open('http://miseriehbo.com/adlink.php', '_blank');
    };

    return (
        <div className="banner">
            <span><img src={logo} alt="HBO GO" /></span>
            <h4>DESCARGA LA APLICACIÓN DE HBO GO<br /> Y OBTÉN 1 MES GRATIS</h4>
            <button onClick={() => goToApp()} className="btn btn-primary">DESCARGAR</button>
        </div>
    );
}

export { Banner };
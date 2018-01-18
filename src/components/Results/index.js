import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createCustomPlaylist } from '../../actions/createCustomPlaylist';
import _ from 'lodash';
import Slider from './Slider';
import Playlist from './playlist';
import SharingButtons from './sharing-buttons';
import EscucharButton from './escuchar-button';
import Banner from './banner';
import ReactGA from 'react-ga';

class Results extends Component {
    constructor(props){
        super(props);
        
        this.state = { 
            playlistLoading: true,
            serieId: this.props.score[0].percent / 100,
            serieNombre: '',
            serieDetalle: '',
            value1: this.props.score[0].percent / 100,
            value2: this.props.score[1].percent / 100,
            value3: this.props.score[2].percent / 100,
            value4: this.props.score[3].percent / 100,
        };
    }

    findById(source, id) {
        for (var i=0; i < source.length; i++) {
            if (source[i].id === String(id) ) {
                return source[i];
            }
        }
        return '?';
    }

    componentDidMount() {
        // Asignar bg
        document.getElementById('root').className='serie-'+this.props.score[0].id;

        // Demorar en mostrar la playlist
        this.cargarPlaylist(false);
    }
    
    newPlaylist() {
        this.cargarPlaylist(true);
    }

    cargarPlaylist(nueva) {
        var ganadora = this.findById(this.props.mecanica, this.props.score[0].id);

        // Activar spinner y guardar datos de la serie
        this.setState({ 
            playlistLoading: true,
            serieNombre: ganadora.serie,
            serieDetalle: ganadora.detalle,
        });
        
        // Crear playlist
        if(!this.props.playlist.id || nueva === true){
            this.props.createCustomPlaylist([
                [this.props.score[0].id, this.state.value1.toFixed(2) * 100],
                [this.props.score[1].id, this.state.value2.toFixed(2) * 100],
                [this.props.score[2].id, this.state.value3.toFixed(2) * 100],
                [this.props.score[3].id, this.state.value4.toFixed(2) * 100]
            ]);
        }

        // Trackar eventos
        ReactGA.event({
            category: 'Clicks',
            action: 'Click',
            label: 'Crear nueva playlist'
        });

        ReactGA.event({
            category: 'Resultados',
            action: 'Serie',
            label: ganadora.serie
        });
        
        // Mostrar playlist despues de unos segundos
        _.delay( () =>{
            this.setState({ playlistLoading: false });
        }, 1500);
    };
    
    handleSlider1 = (x, y) => {
        this.setState({ value1: y });
    };
    
    handleSlider2 = (x, y) => {
        this.setState({ value2: y });
    };
    
    handleSlider3 = (x, y) => {
        this.setState({ value3: y });
    };
    
    handleSlider4 = (x, y) => {
        this.setState({ value4: y });
    };

    goToApp() {
        // Trackar evento
        ReactGA.event({
            category: 'Clicks',
            action: 'Click',
            label: 'Descargar App'
        });
        window.open('http://miseriehbo.com/adlink.php', '_blank');
    };
    
    render() {
        let playlist_id, playlist_user;
        if( this.props.playlist.id ){
            playlist_id = this.props.playlist.id;
            playlist_user = this.props.playlist.user;
        }

        return(
            <section className="resultado">
                <div className="row">
                    <article className="perfil">
                        <hgroup>
                            <h2>ERES <strong>{ Math.round(this.state.serieId.toFixed(2) * 100) }%</strong></h2>
                            <h1><img src={process.env.PUBLIC_URL + '/images/logo-'+this.props.score[0].id+'.png'} alt={this.props.score[0].id} /></h1>
                            <p>
                                <small>{this.state.serieDetalle}</small>
                                <br />
                                <button onClick={() => this.goToApp()}>Descarga la app de HBOGO y obtén 1 mes gratis</button>
                            </p>
                        </hgroup>

                        <aside>
                            <div className="series">
                                <div className="serie">
                                    <h4><img src={process.env.PUBLIC_URL + '/images/logo-' + this.props.score[0].id + '.png'} alt={this.props.score[0].id} /></h4>
                                    <Slider radius={ 70 } border={ 30 } value={ this.state.value1 } onChange={ this.handleSlider1 } />
                                </div>
                            
                                <div className="serie">
                                    <h4><img src={process.env.PUBLIC_URL + '/images/logo-' + this.props.score[1].id + '.png'} alt={this.props.score[1].id} /></h4>
                                    <Slider radius={ 70 } border={ 30 } value={ this.state.value2 } onChange={ this.handleSlider2 } />
                                </div>

                                <div className="serie">
                                    <h4><img src={process.env.PUBLIC_URL + '/images/logo-' + this.props.score[2].id + '.png'} alt={this.props.score[2].id} /></h4>
                                    <Slider radius={ 70 } border={ 30 } value={ this.state.value3 } onChange={ this.handleSlider3 } />
                                </div>
                        
                                <div className="serie">
                                    <h4><img src={process.env.PUBLIC_URL + '/images/logo-' + this.props.score[3].id + '.png'} alt={this.props.score[3].id} /></h4>
                                    <Slider radius={ 70 } border={ 30 } value={ this.state.value4 } onChange={ this.handleSlider4 } />
                                </div>
                            </div>
                            <button onClick={() => this.newPlaylist()} className="btn btn-small">NUEVA PLAYLIST</button>
                        </aside>
                    </article>
                    
                    <article className="playlist">
                        <Playlist playlist_user={playlist_user} playlist_id={playlist_id} loading={this.state.playlistLoading} />
                        <SharingButtons serie={this.state.serieNombre} shareUrl={'http://miseriehbo.com/share-'+ this.props.score[0].id +'.html'} />
                        <EscucharButton playlist_user={playlist_user} playlist_id={playlist_id}>
                            Escuchar en Spotify
                        </EscucharButton>
                    </article>

                </div>
                
                <Banner />

            </section>
        );
    }
}

function mapStateToProps(state){
    return {
        playlist: state.main.customPlaylist,
        score: state.main.userScore,
        mecanica: state.mecanica
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        createCustomPlaylist: createCustomPlaylist
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Results);
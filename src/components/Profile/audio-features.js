import React, { Component } from 'react';

export default class AudioFeatures extends Component {

    constructor(props){
        super(props);
        this.state = {
            danceability: 0,
            energy: 0,
            tempo: 0,
            valence: 0
        }
    }

    componentDidMount(){
        this.getDanceability();
        this.getEnergy();
        this.getTempo();
        this.getValence();
    }

    getDanceability(){
        let counter = 0;
        for(let i=0; i<this.props.tracks.length; i++){
            counter += this.props.tracks[i].danceability;
        }
        this.setState({ danceability: counter });
    }

    getEnergy(){
        let counter = 0;
        for(let i=0; i<this.props.tracks.length; i++){
            counter += this.props.tracks[i].energy;
        }
        this.setState({ energy: counter });
    }

    getTempo(){
        let counter = 0;
        for(let i=0; i<this.props.tracks.length; i++){
            counter += this.props.tracks[i].tempo;
        }
        this.setState({ tempo: counter });
    }

    getValence(){
        let counter = 0;
        for(let i=0; i<this.props.tracks.length; i++){
            counter += this.props.tracks[i].valence;
        }
        this.setState({ valence: counter });
    }

    getAverage(counter){
        return counter / this.props.tracks.length;
    }

    render() {
        return(
            <div>
                <h4>Promedios</h4>
                <p>
                    <strong>danceability: </strong>
                    <span>{this.getAverage(this.state.danceability)}</span><br />
                    <small>Danceability describes how suitable a track is for dancing based on a combination of musical elements including tempo, rhythm stability, beat strength, and overall regularity. A value of 0.0 is least danceable and 1.0 is most danceable.</small>
                </p>
                <p>
                    <strong>energy: </strong>
                    <span>{this.getAverage(this.state.energy)}</span><br />
                    <small>Energy is a measure from 0.0 to 1.0 and represents a perceptual measure of intensity and activity. Typically, energetic tracks feel fast, loud, and noisy. For example, death metal has high energy, while a Bach prelude scores low on the scale. Perceptual features contributing to this attribute include dynamic range, perceived loudness, timbre, onset rate, and general entropy.</small>
                </p>
                <p>
                    <strong>tempo: </strong>
                    <span>{this.getAverage(this.state.tempo)}</span><br />
                    <small>The overall estimated tempo of a track in beats per minute (BPM). In musical terminology, tempo is the speed or pace of a given piece and derives directly from the average beat duration.</small>
                </p>
                <p>
                    <strong>valence: </strong>
                    <span>{this.getAverage(this.state.valence)}</span><br />
                    <small>A measure from 0.0 to 1.0 describing the musical positiveness conveyed by a track. Tracks with high valence sound more positive (e.g. happy, cheerful, euphoric), while tracks with low valence sound more negative (e.g. sad, depressed, angry).</small>
                </p>
            </div>
        )
    }
}
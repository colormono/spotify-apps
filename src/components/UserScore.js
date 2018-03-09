import React, { Component } from 'react';
import ReactGA from 'react-ga';
import { connect } from 'react-redux';
import { createCustomPlaylistWithSeeds } from '../actions';

class UserScore extends Component {

  onButtonClick() {
    ReactGA.event({
      category: 'Clicks',
      action: 'Click',
      label: 'Nueva Playlist'
    });

    let seeds = {
      seed_genres: ["dance", "electro", "house"]
    }

    this.props.createCustomPlaylistWithSeeds(seeds);
  };

  render() {
    return (
      <div>

        <h3>
          ESTE ES EL PORCENTAJE<br />
          <small>de lo que escuchas</small>
        </h3>

        <ul className="score-list">
          {this.props.score.map((item) => {
            const { average, name } = item;
            return (
              <li key={name} className="score-item">
                <span className="score-name">{name}</span>
                <span className="score-average">{average}%</span>
                <span className="score-bg" style={{ width: `${average}%` }}></span>
              </li>
            );
          })}
        </ul>

        <button onClick={this.onButtonClick.bind(this)} className="btn btn-primary">
          Crear otra playlist
        </button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    score: state.analyzer.score
  }
}

export default connect(mapStateToProps, { createCustomPlaylistWithSeeds })(UserScore);

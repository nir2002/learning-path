import React, { Component } from 'react';
import RoadMapImg from './../../assets/frontend.png';
import './roadMap.css';

class RoadMap extends Component {
  render() {
    return (
      <div className="roadmap-container">
        <h2>Roadmap</h2>
        <img src={RoadMapImg} alt="road-map" />
      </div>
    );
  }
}

export default RoadMap;

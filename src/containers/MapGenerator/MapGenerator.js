import React, { Component } from 'react';
import './mapGenerator.css';

class MapGenerator extends Component {
  state = {};

  componentDidMount() {
    const { onGenerate } = this.props;
    setTimeout(onGenerate, 8000);
  }

  render() {
    return (
      <section>
        <div>Hold on while we generate the perfect map for your needs!</div>
        <div id="map-animation">
          <div id="first-node" className="node" />
          <div id="second-node" className="node" />
          <div id="third-node" className="node" />
        </div>
      </section>
    );
  }
}

export default MapGenerator;

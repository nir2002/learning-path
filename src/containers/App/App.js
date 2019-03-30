import React, { Component } from 'react';
import './App.css';
import Skills from '../Skills/Skills';
import skillsData from '../../data/skills';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          What skill would like to acquire?
          <Skills skills={skillsData} />
        </header>
      </div>
    );
  }
}

export default App;

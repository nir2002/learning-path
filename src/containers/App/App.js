import React, { Component } from 'react';
import './App.css';
import Skills from '../Skills';
import skillsData from '../../data/skills';
import TypeForm from '../TypeForm';
import MapGenerator from '../MapGenerator';
import RoadMap from '../RoadMap.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.tfContainerRef = React.createRef();
  }

  state = {
    step: 1
  };

  setStep(step) {
    this.setState({
      step
    });
  }

  renderStep() {
    switch (this.state.step) {
      default:
      case 1:
        return (
          <Skills skills={skillsData} onChooseSkill={() => this.setStep(2)} />
        );
      case 2:
        return (
          <TypeForm
            formDataUrl="https://nirparisian.typeform.com/to/L2Qfvo"
            onSubmit={() => this.setStep(3)}
          />
        );
      case 3:
        return <MapGenerator onGenerate={() => this.setStep(4)} />;
      case 4:
        return <RoadMap />;
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">{this.renderStep()}</header>
      </div>
    );
  }
}

export default App;

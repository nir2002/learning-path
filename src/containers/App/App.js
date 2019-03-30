import React, { Component } from 'react';
import './App.css';
import Skills from '../Skills/Skills';
import skillsData from '../../data/skills';
import TypeForm from '../TypeForm/TypeForm';

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
      case 1:
        return (
          <Skills skills={skillsData} onChooseSkill={() => this.setStep(2)} />
        );
      case 2:
        return (
          <TypeForm formDataUrl="https://nirparisian.typeform.com/to/L2Qfvo" />
        );

      default:
        return null;
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          What skill would like to acquire?
          {this.renderStep()}
        </header>
      </div>
    );
  }
}

export default App;

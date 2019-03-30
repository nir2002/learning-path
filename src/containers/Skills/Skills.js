import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './skills.css';

class Skills extends Component {
  propTypes = {
    skills: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string,
        isAvailable: PropTypes.bool
      })
    ).isRequired
  };

  renderSkills() {
    const { skills } = this.props;

    return skills.map(skill => (
      <div
        className={`skill-card ${
          skill.isAvailable ? 'available' : 'not-available'
        }`}
      >
        {skill.title}
      </div>
    ));
  }
  render() {
    return <section class="skills">{this.renderSkills()}</section>;
  }
}

export default Skills;

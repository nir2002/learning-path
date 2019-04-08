import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './skills.css';

class Skills extends Component {
  static propTypes = {
    skills: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string,
        isAvailable: PropTypes.bool
      })
    ).isRequired,
    onChooseSkill: PropTypes.func.isRequired
  };

  renderSkills() {
    const { skills, onChooseSkill } = this.props;

    return skills.map((skill, index) => (
      <div
        className={`skill-card ${
          skill.isAvailable ? 'available' : 'not-available'
        }`}
        onClick={skill.isAvailable ? onChooseSkill : undefined}
        key={index}
      >
        {skill.title}
      </div>
    ));
  }
  render() {
    return (
      <section>
        <h2>What Skill Would You Like To Acquire?</h2>
        <div className="skills">{this.renderSkills()}</div>
      </section>
    );
  }
}

export default Skills;

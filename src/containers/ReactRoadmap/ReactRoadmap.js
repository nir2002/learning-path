import React, { Component } from 'react';
import Tree from './../../components/Tree/Tree';
import reactSkillData from '../../data/reactSkill';
import './reactRoadmap.css';

class ReactRoadmap extends Component {
  render() {
    return (
      <div className="roadmap-container">
        <Tree width={1200} height={600} treeData={reactSkillData} />
      </div>
    );
  }
}

export default ReactRoadmap;

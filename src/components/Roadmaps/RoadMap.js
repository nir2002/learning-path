/* eslint-disable */
import React from 'react'
import Tree from 'react-tree-graph'
// eslint-disable-next-lines
import roadmap from './../../assets/css/roadmap.css'

export default class RoadMap extends React.Component {
  render() {
    const { data, height, width } = this.props

    return (
      <div className="custom-container">
        <Tree
          data={data}
          height={height}
          width={width}
          svgProps={{
            className: 'custom',
          }}
        />
      </div>
    )
  }
}

import React from 'react'
import Tree from 'react-tree-graph'
import roadmap from './../roadmap.css'

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

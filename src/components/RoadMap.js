import React from 'react'
import Tree from 'react-tree-graph'
import roadmap from './roadmap.css'

export default class RoadMap extends React.Component {
  render() {
    let data = {
      name: 'Frontend Developer',
      children: [
        {
          name: 'HTML',
          children: [
            {
              name: 'The Fundamentals',
              children: [
                { name: 'Text' },
                { name: 'Links' },
                { name: 'Lists' },
                { name: 'Tables' },
                { name: 'Images' },
              ],
            },
            {
              name: 'Media',
              children: [
                { name: 'Audio' },
                { name: 'Video' },
                { name: 'Web RTC' },
              ],
            },
            { name: 'Web Storage' },
          ],
        },
        {
          name: 'CSS',
          children: [
            {
              name: 'The Fundamentals',
              children: [
                { name: 'Positioning' },
                { name: 'Flexbox' },
                { name: 'CSS Grid' },
              ],
            },
            { name: 'Responsive Design' },
            { name: 'Libraries' },
          ],
        },
        {
          name: 'JavaScript',
          children: [
            {
              name: 'The Fundamentals',
              children: [
                { name: 'Text' },
                { name: 'Text' },
                { name: 'Text' },
                { name: 'Text' },
                { name: 'Text' },
              ],
            },
          ],
        },
      ],
    }

    return (
      <div className="custom-container">
        <Tree
          data={data}
          height={400}
          width={700}
          svgProps={{
            className: 'custom',
          }}
        />
      </div>
    )
  }
}

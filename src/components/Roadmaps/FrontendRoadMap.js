import React from 'react'
import RoadMap from './RoadMap'

const data = {
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
          children: [{ name: 'Audio' }, { name: 'Video' }, { name: 'Web RTC' }],
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
            { name: 'Variables' },
            { name: 'Functions' },
            { name: 'Prototype && Objects' },
          ],
        },
        {
          name: 'Functionals Programing',
        },
        {
          name: 'Testing',
        },
      ],
    },
  ],
}

export default class FrontendRoadMap extends React.Component {
  render() {
    return <RoadMap data={data} height={400} width={700} />
  }
}

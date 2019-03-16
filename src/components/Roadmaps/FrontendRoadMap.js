import React from 'react'
import RoadMap from './RoadMap'

const data = {
  name: 'Frontend Developer',
  children: [
    {
      name: 'HTML',
      children: [
        {
          name: 'HTML Fundamentals',
          children: [
            { name: 'Text' },
            { name: 'Links' },
            { name: 'Lists' },
            { name: 'Tables' },
            { name: 'Images' },
            { name: '...' },
          ],
        },
        {
          name: 'Media',
          children: [
            { name: 'Audio' },
            { name: 'Video' },
            { name: 'Web RTC' },
            { name: '...' },
          ],
        },
        { name: 'Web Storage' },
      ],
    },
    {
      name: 'CSS',
      children: [
        {
          name: 'CSS Fundamentals',
          children: [
            { name: 'Positioning' },
            { name: 'Flexbox' },
            { name: 'CSS Grid' },
            { name: '...' },
          ],
        },
        { name: 'Responsive Design' },
        { name: 'Libraries' },
        { name: '...' },
      ],
    },
    {
      name: 'JavaScript',
      children: [
        {
          name: 'JavaScript Fundamentals',
          children: [
            { name: 'Variables' },
            { name: 'Functions' },
            { name: 'Prototype && Objects' },
            { name: '...' },
          ],
        },
        {
          name: 'Functionals Programing',
          children: [{ name: '...' }],
        },
        {
          name: 'Testing',
          children: [{ name: '...' }],
        },
        { name: '...' },
      ],
    },
  ],
}

export default class FrontendRoadMap extends React.Component {
  render() {
    return <RoadMap data={data} height={400} width={700} />
  }
}

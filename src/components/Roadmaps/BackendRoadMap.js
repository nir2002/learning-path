import React from 'react'
import RoadMap from './RoadMap'

const data = {
  name: 'Backend Developer',
  children: [
    {
      name: 'Scripting Languages',
      children: [
        { name: 'Python' },
        { name: 'Ruby' },
        { name: 'PHP' },
        { name: 'NodeJS' },
      ],
    },
    {
      name: 'Functional Languages',
      children: [
        { name: 'Elixir' },
        { name: 'Scala' },
        { name: 'Java' },
        { name: '.NET' },
        { name: 'Erlang' },
        { name: 'Haskell' },
      ],
    },
    {
      name: 'Package Manager',
      children: [{ name: '...' }],
    },
    {
      name: 'Database',
      children: [
        {
          name: 'Postgress SQL',
        },
        {
          name: 'Mongo DB',
        },
        {
          name: 'My SQL',
        },
        {
          name: 'Maria DB',
        },
      ],
    },
    {
      name: 'Testing',
      children: [{ name: '... ' }],
    },
    {
      name: 'Caching',
      children: [{ name: '...  ' }],
    },
    {
      name: 'RESTful APIs',
    },
    {
      name: 'Authentication',
    },
    {
      name: 'Deployment',
      children: [{ name: 'Docker' }, { name: 'Kubernetes' }],
    },
    {
      name: '...   ',
    },
    {
      name: '...    ',
    },
  ],
}

export default class BackendRoadMap extends React.Component {
  render() {
    return <RoadMap data={data} height={400} width={700} />
  }
}

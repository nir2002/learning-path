const reactSkillData = {
  isExpanded: true,
  name: 'React Applications Developer',
  children: [
    {
      name: 'First Things First',
      children: [
        {
          name: 'What React Is?',
          clickUrl: 'https://reactjs.org/tutorial/tutorial.html#what-is-react'
        },
        {
          name: 'How To Get Started?',
          clickUrl:
            'https://facebook.github.io/create-react-app/docs/getting-started'
        },
        { name: 'Why React?', clickUrl: 'https://reactjs.org/' }
      ]
    },
    {
      name: 'The Basics',
      children: [
        {
          name: 'Components',
          children: [
            {
              name: 'JSX',
              clickUrl: 'https://reactjs.org/docs/introducing-jsx.html'
            },
            {
              name: 'Rendering Elements',
              clickUrl: 'https://reactjs.org/docs/rendering-elements.html'
            },
            {
              name: 'Props',
              clickUrl: 'https://reactjs.org/docs/components-and-props.html'
            },
            {
              name: 'State and Lifecycle',
              clickUrl: 'https://reactjs.org/docs/state-and-lifecycle.html'
            },
            {
              name: 'Styling',
              children: [
                {
                  name: 'CSS Modules',
                  clickUrl: 'https://github.com/css-modules/css-modules'
                },
                {
                  name: 'CSS in JS',
                  children: [
                    {
                      name: 'Styled Components',
                      clickUrl: 'https://www.styled-components.com/'
                    },
                    {
                      name: 'Emotion',
                      clickUrl: 'https://emotion.sh/docs/introduction'
                    },
                    {
                      name: 'Radium',
                      clickUrl: 'https://formidable.com/open-source/radium/'
                    },
                    {
                      name: 'JSS',
                      clickUrl: 'https://cssinjs.org/?v=v10.0.0-alpha.16'
                    }
                  ]
                },
                {
                  name: 'Libraries',
                  children: [
                    {
                      name: 'Material UI',
                      clickUrl: 'https://material-ui.com'
                    },
                    { name: 'Ant Design', clickUrl: 'https://ant.design/' },
                    {
                      name: 'Bootstrap',
                      clickUrl: 'https://getbootstrap.com/'
                    },
                    { name: 'Bulma', clickUrl: 'https://bulma.io/' }
                  ]
                }
              ]
            }
          ]
        },
        {
          name: 'Routing',
          children: [
            {
              name: 'React-Router',
              clickUrl:
                'https://reacttraining.com/react-router/web/guides/quick-start'
            },
            {
              name: 'React-Navigation',
              clickUrl: 'https://reactnavigation.org/'
            }
          ]
        }
      ]
    },
    {
      name: 'Advanced',
      children: [
        {
          name: 'State Mangement',
          children: [
            {
              name: 'Redux',
              clickUrl: 'https://redux.js.org/introduction/getting-started'
            },
            { name: 'Mobx', clickUrl: 'https://mobx.js.org/' }
          ]
        },
        {
          name: 'Package Mangers',
          children: [
            { name: 'npm', clickUrl: 'https://www.npmjs.com/' },
            { name: 'yarn', clickUrl: 'https://yarnpkg.com/en/' }
          ]
        },
        {
          name: 'Build Tools',
          children: [
            { name: 'Webpack', clickUrl: 'https://webpack.js.org/' },
            { name: 'Parcel', clickUrl: 'https://parceljs.org/' }
          ]
        },
        {
          name: 'Type Checkers',
          children: [
            { name: 'TypeScript', clickUrl: 'https://www.typescriptlang.org/' },
            { name: 'Flow', clickUrl: 'https://flow.org/' }
          ]
        },
        {
          name: 'Testing',
          children: [
            {
              name: 'Unit Tests',
              children: [
                { name: 'Jest', clickUrl: 'https://jestjs.io/' },
                { name: 'Enzyme', clickUrl: 'https://airbnb.io/enzyme/' },
                { name: 'Sinon', clickUrl: 'https://sinonjs.org/' },
                {
                  name: 'React Testing Library',
                  clickUrl:
                    'https://github.com/kentcdodds/react-testing-library'
                }
              ]
            },
            {
              name: 'Integration Tests',
              children: [
                {
                  name: 'Karma',
                  clickUrl: 'https://karma-runner.github.io/latest/index.html'
                }
              ]
            },
            {
              name: 'E2E Tests',
              children: [
                {
                  name: 'TestCafe',
                  clickUrl: 'https://devexpress.github.io/testcafe/'
                }
              ]
            }
          ]
        },
        {
          name: 'Virtual Dom',
          clickUrl: 'https://reactjs.org/docs/faq-internals.html'
        },
        {
          name: 'React Native',
          clickUrl: 'https://facebook.github.io/react-native/'
        }
      ]
    }
  ]
};

export default reactSkillData;

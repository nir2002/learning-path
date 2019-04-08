const reactSkillData = {
  name: 'React Applications Developer',
  children: [
    {
      name: 'HTML5',
      children: [
        {
          name: 'HTML',
          children: [{ name: 'Syntax', clickKeywords: 'HTML Syntax' }]
        },
        {
          name: 'CSS',
          children: [{ name: 'Syntax', clickKeywords: 'CSS Syntax' }]
        },
        {
          name: 'JS',
          children: [{ name: 'Syntax', clickKeywords: 'JS Syntax' }]
        }
      ],
      clickKeywords: 'HTML5'
    },
    {
      name: 'React',
      children: [
        {
          name: 'Components',
          children: [
            { name: 'Props', clickKeywords: 'React Component Props' },
            { name: 'State', clickKeywords: 'React Components State' },
            {
              name: 'Life Cycle',
              clickKeywords: 'React Components Life Cycle'
            },
            { name: 'Styling', clickKeywords: 'React Components Styling' }
          ],
          clickKeywords: 'React Components'
        },
        {
          name: 'Virtual Dom',
          clickKeywords: 'React Virtual Dom'
        },
        {
          name: 'Build Tools',
          children: [
            { name: 'npm', clickKeywords: 'npm' },
            { name: 'yarn', clickKeywords: 'yarn' }
          ]
        },
        {
          name: 'State Mangement',
          clickKeywords: 'React State Management'
        }
      ],
      clickKeywords: 'React'
    }
  ]
};

export default reactSkillData;

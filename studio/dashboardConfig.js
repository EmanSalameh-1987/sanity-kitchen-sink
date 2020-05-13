export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ebbd48fb90924b7a73d2dee',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-u3g49y5d',
                  apiId: 'd6772214-bf3b-4061-b53f-a41a4a2cb503'
                },
                {
                  buildHookId: '5ebbd490938b7b4187376af9',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-8ozo9avs',
                  apiId: '5e905fd4-9972-40a8-be07-d4fea699b18e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/EmanSalameh-1987/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-8ozo9avs.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}

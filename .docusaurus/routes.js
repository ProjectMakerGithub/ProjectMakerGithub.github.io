import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/blog',
    component: ComponentCreator('/blog', '490'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', 'f72'),
    exact: true
  },
  {
    path: '/blog/Bienvenue',
    component: ComponentCreator('/blog/Bienvenue', '5f0'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', 'd64'),
    exact: true
  },
  {
    path: '/blog/tags/annonces',
    component: ComponentCreator('/blog/tags/annonces', '8d7'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '36b'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '7c0'),
    routes: [
      {
        path: '/docs/add-project',
        component: ComponentCreator('/docs/add-project', '64a'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/category/tutoriel',
        component: ComponentCreator('/docs/category/tutoriel', '6af'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/intro',
        component: ComponentCreator('/docs/intro', '5ba'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/team',
        component: ComponentCreator('/docs/team', '5ca'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/tutoriel/join-staff',
        component: ComponentCreator('/docs/tutoriel/join-staff', '28b'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/docs/tutoriel/to-become-partner',
        component: ComponentCreator('/docs/tutoriel/to-become-partner', 'a28'),
        exact: true,
        sidebar: "defaultSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '9dc'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];

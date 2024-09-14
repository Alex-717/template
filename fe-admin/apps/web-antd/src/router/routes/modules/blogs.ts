import type { RouteRecordRaw } from 'vue-router';

import { BasicLayout } from '#/layouts';
import { $t } from '#/locales';

const routes: RouteRecordRaw[] = [
  {
    component: BasicLayout,
    meta: {
      icon: 'lucide:rss',
      keepAlive: true,
      order: 1,
      title: $t('page.blogs.title'),
    },
    name: 'Blogs',
    path: '/blog',
    children: [
      {
        meta: {
          title: $t('page.blogs.blogList')
        },
        name: 'blogList',
        path: '/blog/list',
        component: () => import('#/views/blogs/list.vue'),
      },
      {
        meta: {
          title: $t('page.blogs.blogEdit'),
          hideInBreadcrumb: true,
          hideInMenu: true,
          hideInTab: true
        },
        name: 'blogEdit',
        path: '/blog/edit',
        children: [
          {
            meta: {
              title: $t('page.blogs.blogNew'),
              hideInBreadcrumb: true,
              hideInMenu: true,
              hideInTab: true
            },
            name: 'blogNew',
            path: '/blog/edit/new',
            component: () => import('#/views/blogs/edit.vue')
          },
          {
            meta: {
              title: $t('page.blogs.blogModify'),
              hideInBreadcrumb: true,
              hideInMenu: true,
              hideInTab: true,
              isModify: true
            },
            name: 'blogModify',
            path: '/blog/edit/modify/:id',
            component: () => import('#/views/blogs/edit.vue')
          }
        ]
      },
      // {
      //   meta: {
      //     title: $t('page.blogs.blogNew'),
      //     hideInBreadcrumb: true,
      //     hideInMenu: true,
      //     hideInTab: true
      //   },
      //   name: 'blogNew',
      //   path: '/blog/edit/new',
      //   component: () => import('#/views/blogs/detail.vue')
      // },
      // {
      //   meta: {
      //     title: $t('page.blogs.blogModify'),
      //     hideInBreadcrumb: true,
      //     hideInMenu: true,
      //     hideInTab: true
      //   },
      //   name: 'blogModify',
      //   path: '/blog/edit/modify/:id',
      //   component: () => import('#/views/blogs/detail.vue')
      // }
    ],
  },
];

export default routes;

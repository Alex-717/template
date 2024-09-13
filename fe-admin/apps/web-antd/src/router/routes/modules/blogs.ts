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
          title: $t('page.blogs.antd'),
        },
        name: 'blogList',
        path: '/blog/list',
        component: () => import('#/views/blogs/list.vue'),
      },
    ],
  },
];

export default routes;

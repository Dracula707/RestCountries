import { createRouter, createWebHashHistory } from 'vue-router';
import { useRoot } from './store/root';

import Index from './views/Index.vue';

let root = null as any;


const routes = [
    {
      path: '/',
      name: 'Index',
      component: Index,
      meta: {}
    },
    {
      path: '/about',
      name: 'About',
      component: () => import('./views/About.vue'),
      meta: {}
    },
]


const router = createRouter({
    history: createWebHashHistory(), //createWebHistory(),
    routes: routes
});


router.beforeEach(async (to, from, next) => {
  if (root === null) root = useRoot();
  document.title = `${root.title} - ` + String(to.name);
  next();
});
  

export default router;
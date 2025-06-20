export const routes = [
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('@/common/Dashboard/index.vue'),
    meta: {
      title: '首页',
      icon: 'svg-icon:lucide--hospital',
      alwaysShow: true,
      hidden: true
    }
  },
  {
    path: '/',
    redirect: '/dashboard',
    name: 'Root',
    meta: {
      hidden: true
    }
  },

  {
    path: '/404',
    component: () => import('@/common/Error/404.vue'),
    name: 'NoFind',
    meta: {
      hidden: true,
      title: '404',
      noTagsView: true
    }
  }
]

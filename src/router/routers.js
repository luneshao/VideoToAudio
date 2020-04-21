import Layout from '@/layout/LLayout'

export default {
  path: '/',
  name: 'Home',
  component: Layout,
  redirect: '/video',
  children: [
    {
      path: '/video',
      name: 'video',
      meta: {
        title: '视频操作',
      },
      component: () =>
        import(/* webpackChunkName: "about" */ '@/views/Video.vue'),
    },
    {
      path: '/audio',
      name: 'audio',
      meta: {
        title: '音频操作',
      },
      component: () =>
        import(/* webpackChunkName: "about" */ '@/views/Audio.vue'),
    },
  ],
}

<template>
  <a-layout class="l-layout">
    <a-layout-header>
      <div id="nav">
        <router-link v-for="router in routers" :key="router.name" :to="router.path">{{router.meta.title}}</router-link>
      </div>
    </a-layout-header>
    <a-layout-content class="l-layout__content">
      <router-view />
    </a-layout-content>
    <a-layout-footer>Footer</a-layout-footer>
  </a-layout>
</template>

<script type="text/ecmascript-6">
import { Layout } from 'ant-design-vue'
import routers from '@/router/routers'

export default {
  name: 'LLayout',
  data () {
    return {
      routers: routers.children
    }
  },
  components: {
    [Layout.name]: Layout,
    [Layout.Header.name]: Layout.Header,
    [Layout.Content.name]: Layout.Content,
    [Layout.Footer.name]: Layout.Footer
  }
}
</script>

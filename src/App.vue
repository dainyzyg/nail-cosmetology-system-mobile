<template lang="pug">
  .main-page
    router-view
    mt-tabbar(v-model="select")
      mt-tab-item(id="/order")
        i.icon.iconfont.icon-createtask(slot="icon")
        | 订单
      mt-tab-item(id="/setting")
        i.icon.iconfont.icon-setup(slot="icon")
        | 设置
      mt-tab-item(id="/user")
        i.icon.iconfont.icon-addressbook(slot="icon")
        | 用户
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      select: this.$router.currentRoute.path
    }
  },
  watch: {
    select(val) {
      this.$router.push(val)
    }
  },
  methods: {}
}
</script>

<style scoped>
i.icon.iconfont {
  font-size: 26px;
}
/* .main-page {
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
} */
</style>

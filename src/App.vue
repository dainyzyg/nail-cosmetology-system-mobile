<template lang="pug">
  .page
    .c(v-show="select=='1'")
      h1(v-for="i in 'sdadqwdasddsfwfqdsadqdsad'") {{i}}
    .c(v-show="select=='2'")
      h1(v-for="i in 20") {{i}}
    mt-tabbar(v-model="select")
      mt-tab-item(id="1")
        i.icon.iconfont.icon-createtask(slot="icon")
        | 订单
      mt-tab-item(id="2")
        i.icon.iconfont.icon-clock(slot="icon")
        | 进行中
      mt-tab-item(id="3")
        i.icon.iconfont.icon-addressbook(slot="icon")
        | 我的
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  },
  data() {
    return {
      select: '1'
    }
  },
  methods: {}
}
</script>

<style scoped>
i.icon.iconfont {
  font-size: 26px;
}
.c {
  height: 70vh;
  overflow: auto;
}
</style>

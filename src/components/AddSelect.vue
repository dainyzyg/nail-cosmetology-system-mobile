<template lang="pug">
transition(name='slideup')
  .model(v-if="show")
    .header
        .option 
        .title 附加选择
        .option 
    .content
      mt-checklist(v-model="value" :options="options")  
    .footer
      mt-button.btn(type="primary" @click="cancel") 取消
      mt-button.btn(type="danger" @click="save") 确定
</template>

<script>
export default {
  props: ['show'],
  data() {
    const options = []
    for (let i = 1; i < 15; i++) {
      options.push(i)
    }
    return {
      value: [],
      options
    }
  },
  watch: {},
  methods: {
    cancel() {
      console.log(this.show)
      this.$emit('update:show', false)
    },
    save() {
      this.$emit('update:show', false)
    }
  }
}
</script>

<style scoped>
.slideup-enter-active,
.slideup-leave-active {
  transition: all 0.2s ease-in-out;
}
.slideup-enter,
.slideup-leave-to {
  transform: translate3d(0, 100%, 0);
}
.add-popup {
  width: 100%;
  height: 100%;
  background-color: #fff;
}
.btn {
  width: 100px;
}
.footer {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 60px;
}
.addition {
  color: #409eff;
  margin-right: 5px;
  padding-bottom: 3px;
  margin-bottom: 2px;
}
.model {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: #fafafa;
}
.header {
  /* position: absolute;
  top: 0;
  height: 30px;
  left: 0;
  right: 0; */
  flex: 0 0 30px;
  z-index: 9;
  border-bottom-width: 1px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  box-shadow: 0 1px 6px #ccc;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  font-size: 14px;
}
.content {
  font-size: 16px;
  flex: 1;
  position: relative;
  overflow-y: auto;
}
.title {
  font-size: 20px;
  color: #0e90d2;
  color: #333;
}
.cell {
  padding-bottom: 3px;
}
.cell .name {
  color: #0e90d2;
}
.cell .titlec {
  display: inline-block;
  text-align: right;
  width: 80px;
  color: #888;
}
.iconfont.icon-return {
  font-size: 26px;
  font-weight: bold;
  color: #666;
}
.option {
  color: #666;
  height: 30px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 26px;
}
</style>

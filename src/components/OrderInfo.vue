<template lang="pug">
.model
  .header
      i.iconfont.icon-return(@click="cancel") 
      .title 订单详情
      .option 
  .content
    .cell 
      span.titlec 客户：
      span.name {{data.orderName}}
    .cell 
      span.titlec 排队时间：
      span.name {{new Date(data.timeStart).toLocaleTimeString('en-GB')}}
    .cell 
      span.titlec 状态：
      span.name {{data.state}}
    .cell 
      span.titlec 项目：
      span.name {{data.projectName}}
    .cell 
      span.titlec 附加：
      mt-badge.addition(size="small" v-for="a in additions" color="rgba(64,158,255,.1)") {{a.name}}
  .footer
    mt-button.btn(type="primary" @click="addShow=true") 修改附加
    mt-button.btn(type="danger") 上钟
  AddSelect(:show.sync="addShow")
</template>

<script>
import AddSelect from '@/components/AddSelect'

export default {
  components: { AddSelect },
  props: ['show', 'data'],
  data() {
    return {
      addShow: false,
      orderInfoShow: false,
      orderList: [2, 3]
    }
  },
  watch: {},
  methods: {
    cancel() {
      console.log(this.show)
      this.$emit('update:show', false)
    }
  },
  computed: {
    additions() {
      if (!this.data.projectItem) {
        return []
      }
      return this.data.projectItem.additions
    }
  }
}
</script>

<style scoped>
.add-popup {
  width: 100%;
  height: 50%;
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
  padding: 10px;
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

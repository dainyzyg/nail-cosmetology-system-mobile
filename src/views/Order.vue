<template lang="pug">
.page
  .empty(v-show="orderList.length==0") 
      i.iconfont.icon-empty
      |暂无数据
  .card(v-for="i in orderList" @click="showInfo(i)")
    .card-header
      mt-badge.state(size="small") {{i.state}}
      .date 排队时间:{{new Date(i.timeStart).toLocaleTimeString('en-GB')}}
    .card-body
      .cell 
        span.title 客户：
        span.name {{i.orderName}}
      .cell 
        span.title 项目：
        span.name {{i.projectName}}
      .cell 
        span.title 附加：
        mt-badge.addition(size="small" v-for="a in i.projectItem.additions" color="rgba(64,158,255,.1)") {{a.name}}
  mt-popup.order(v-model="orderInfoShow" position="right")
    OrderInfo(:show.sync="orderInfoShow" :data="selectedOrder")
</template>

<script>
import OrderInfo from '@/components/OrderInfo'

export default {
  components: { OrderInfo },
  name: 'setting',
  data() {
    return {
      orderInfoShow: false,
      orderList: [],
      selectedOrder: {}
    }
  },
  created() {
    window.socket.on('orderchange', data => {
      console.log(data)
    })
    this.getDate()
  },
  beforeDestroy() {
    window.socket.off('orderchange')
  },
  watch: {},
  methods: {
    getDate() {
      window.socket.emit('order', null, (err, data) => {
        this.setOrder(data)
      })
    },
    setOrder({ preAssignList }) {
      const data = preAssignList
        .filter(x => x.technicianID == localStorage.technicianID)
        .sort((a, b) => new Date(b.timeStart) - new Date(a.timeStart))
      console.log(data)
      this.orderList = data
    },
    showInfo(i) {
      this.selectedOrder = i
      this.orderInfoShow = true
    }
  }
}
</script>

<style scoped>
.order {
  width: 100%;
  height: 100%;
  background-color: #fff;
}
.cell {
  padding-bottom: 3px;
}
.name {
  color: #0e90d2;
}
.title {
  color: #888;
}
.date {
  color: #888;
}
.addition {
  color: #409eff;
  margin-right: 5px;
  padding-bottom: 3px;
  margin-bottom: 2px;
}
.state {
  padding-bottom: 3px;
}
.page {
  background: #fafafa;
  display: block;
  padding-bottom: 20px;
}
.card {
  font-size: 14px;
  margin: 5px 8px;
  border-radius: 3px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
  background: #fff;
}
.card-header {
  height: 30px;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5px;
}
.card-body {
  padding: 5px;
}
i.iconfont.icon-empty {
  font-weight: normal;
  font-size: 60px;
  color: #999;
}
.empty {
  font-size: 16px;
  height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #999;
}
</style>

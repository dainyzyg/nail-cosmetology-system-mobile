<template lang="pug">
.page.col
  template(v-if="!isLogin")
    .page-part
      mt-field(label="用户名" placeholder="请输入用户名" v-model="userName")
      mt-field(label="密码" type="password" placeholder="请输入用户名" v-model="password")
    mt-button.btn(type="primary" @click="login") 登陆
  template(v-if="isLogin")
    .page-part
      .user-name {{userName}}
    mt-button.btn(type="primary" @click="logout") 注销
</template>

<script>
import { Toast } from 'mint-ui'

export default {
  name: 'setting',
  data() {
    return {
      isLogin: localStorage.technicianName,
      userName: localStorage.technicianName,
      password: ''
    }
  },
  watch: {},
  methods: {
    logout() {
      localStorage.technicianID = ''
      localStorage.technicianName = ''
      this.isLogin = false
    },
    login() {
      if (!this.userName) {
        Toast({
          message: '用户名不能为空！',
          duration: 3000
        })
        return
      }
      window.socket.emit(
        'login',
        {
          userName: this.userName,
          password: this.password
        },
        (err, data) => {
          if (data.error) {
            Toast({
              message: data.error,
              duration: 3000
            })
          } else {
            localStorage.technicianID = data.technician.id
            localStorage.technicianName = data.technician.name
            this.isLogin = true
          }
        }
      )
    }
  }
}
</script>

<style scoped>
.page-part {
  flex: 1;
}
.page {
  background: #fafafa;
}
.btn {
  margin-bottom: 30px;
  margin-left: 15px;
  margin-right: 15px;
}
.mint-cell:first-child>>>.mint-cell-wrapper {
  background-image: none;
  background-size: 100% 1px;
  background-repeat: no-repeat;
  background-position: bottom;
}
.user-name {
  margin-top: 10px;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

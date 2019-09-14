<template>
  <div id="more" :style='note'>
    <div style="background: rgba(0, 0, 0, 0.6);height: 800px;width: 100%;text-align:center;">
      <h1 style="margin:0;color:#FFFFFF;padding-top:200px;">{{ msg1 }}</h1>
      <h2 style="margin:0;color:#FFFFFF;padding-top:10px;font-family:'PingFang SC';">{{ msg2 }}&nbsp&nbsp&nbsp{{ msg3 }}</h2>
      <el-button style="margin-top:70px;"  @click="addRoutes">创建项目</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'more',
  data () {
    return {
      msg1: '区块链技术+供应链金融  全方位记录',
      msg2: '最高安全',
      msg3: '最佳安心',
      note: {
            backgroundImage: "url(" + require("../../assets/images/background.jpg") + ")",
            backgroundRepeat: "no-repeat",
            backgroundSize: "100% 100%",
            width: "100%",
            height: "800px",
            backgroundAttachment: "fixed",
          }
    }
  },
  methods: {
    addRoutes() {
      this.$router.push('/create')  //此处为跳转路径
    },
  }
}
</script>

<style>

</style>

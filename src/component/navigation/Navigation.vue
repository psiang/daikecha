<template>
    <el-menu router :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="/project">最近项目</el-menu-item>
      <el-menu-item index="/message">消息中心</el-menu-item>
      <el-menu-item index="/create">创建项目</el-menu-item>
      <el-menu-item index="/manage">项目管理</el-menu-item>
      <el-menu-item index="/person">个人中心</el-menu-item>
      <el-menu-item index="/more">更多</el-menu-item>
    </el-menu>
</template>

<script>
  export default {
    data () {
      return {
        activeIndex: '1'
      }
    },
    methods: {
      handleSelect (key, keyPath) {
        console.log(key, keyPath)
      }
    }
  }
</script>

<template>
  <div id="app">
    <div>
      <navigation></navigation> 
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import navigation from './component/navigation/Navigation.vue'
export default {
  name: 'app',
  data () {
    return {
      note: {
            backgroundImage: "url(" + require("./assets/images/background.jpg") + ")",
            backgroundRepeat: "no-repeat",
            backgroundSize: "100% 100%",
            width: "100%",
            height: "800px",
            backgroundAttachment: "fixed",
          }
    }
  },
  components: { navigation }
}
</script>

<style>
#app {
}
body{
  margin:0;
}
</style>

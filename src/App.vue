<template>
  <div id="app" :style='note'>
    <navigation></navigation> <br>
    <router-view></router-view>
  </div>
</template>

<script>
import navigation from './component/navigation/Navigation.vue'
export default {
  name: 'app',
  data () {
    return {
      note: {
            backgroundImage: "url(" + require("./assets/background.jpg") + ")",
            backgroundRepeat: "no-repeat",
            backgroundSize: "100% auto",
            height: "1000px",
            weight: "100%",
            margin: "0",
            padding: "0",
            //backgroundAttachment: "fixed"
          }
    }
  },
  components: { navigation }
}
</script>

<style>
</style>

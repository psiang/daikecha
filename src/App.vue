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
            backgroundImage: "url(" + require("./assets/images/background.jpg") + ")",
            backgroundRepeat: "no-repeat",
            backgroundSize: "100% auto",
            width: "100%",
            backgroundAttachment: "fixed",
          }
    }
  },
  components: { navigation }
}
</script>

<style>
</style>

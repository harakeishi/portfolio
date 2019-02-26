<template>
  <div id="app">
    <div id="nav">
      <appHeader></appHeader>
      <div class="blankSpace"></div>
    </div>
    <transition name="router-transition"
    enter-active-class="animated zoomIn"
    leave-active-class="animated bounceOutRight">
    <router-view/>
    </transition>
  </div>
</template>

<script>
import appHeader from '@/components/header'
export default {
  name: 'App',
  components: {
    appHeader: appHeader
  }
}
</script>
<style>
@import "https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.css";

.blankSpace{
  margin-top: 80px;
}
#app{
  text-align: center;
}
</style>

<template>
  <div id="app">
    <appHeader></appHeader>
    <div class="blankSpace"></div>
    <router-view/>
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
.blankSpace{
  margin-top: 80px;
}
</style>

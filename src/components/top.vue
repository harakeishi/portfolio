<template lang="html">
  <div id="top">
    <h1>ご観覧ありがとうございます</h1>
    <div class="main">
      <div class="content one">
        <router-link to="/Introduction">Introduction</router-link>
      </div>
      <div class="content two">
        <router-link to="/Biography">Biography</router-link>
      </div>
      <div class="content three">
        <router-link to="/Qualification">Qualification</router-link>
      </div><br>
      <div class="content four">
        <router-link to="/Skill">skill</router-link>
      </div>
      <div class="content five">
        <router-link to="/Productions">Productions</router-link>
      </div>
      <div class="content six">
        <router-link to="/Contact">Contact</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css">
#top{
  width: 100%;
  height: 91vh;
  background-color: rgb(228, 228, 228);
}
.content{
  display: inline-block;
  width: 200px;
  height: 200px;
  font-size: 20px;
  font-weight: bold;
  border-radius: 50%;
  margin: auto;
  text-align: center;
  line-height: 200px;
  vertical-align: middle;
}
.one{
  background-color: rgba(21, 199, 238, 0.66);
  color: rgb(255, 255, 255);
}
.two{
  background-color: rgba(141, 191, 98, 0.68);
  color: rgb(255, 255, 255);
}
.three{
  background-color: rgba(215, 214, 30, 0.67);
}
.four{
  background-color: rgba(215, 69, 30, 0.67);
}
.five{
  background-color: rgba(39, 30, 215, 0.67);
}
.six{
  background-color: rgba(215, 30, 102, 0.67);
}
</style>

<template lang="html">
  <div class="appHeader">
    <div class="left">
      <h1><router-link to="/">HaraKeishi</router-link></h1>
    </div>
    <div class="right">
      <div class="Headline">
        <p><router-link to="/Introduction">Introduction</router-link></p>
      </div>
      <div class="Headline">
        <p><router-link to="/Biography">Biography</router-link></p>
      </div>
      <div class="Headline">
        <p><router-link to="/Qualification">Qualification</router-link></p>
      </div>
      <div class="Headline">
        <p><router-link to="/Skill">skill</router-link></p>
      </div>
      <div class="Headline">
        <p><router-link to="/Productions">Productions</router-link></p>
      </div>
      <div class="Headline">
        <p><router-link to="/Contact">Contact</router-link></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style>
a{
  text-decoration: none;
}
.appHeader{
  height: 80px;
  width: 100%;
  top: 0;
  left: 0;
  position: fixed;
  background-color: rgb(100, 191, 112);
}
.left{
  float: left;
}
.right{
  float: right;
}
.Headline{
  display: inline-block;
  height: 80px;
  font-size: 20px;
  font-weight: bold;
  border-right: solid 2px rgb(255, 255, 255);
}
.Headline:hover{
  background-color: rgb(64, 227, 90);
}
</style>

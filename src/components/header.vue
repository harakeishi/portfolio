<template lang="html">
  <div class="appHeader">
    <div class="left">
      <h1><router-link to="/">HARA KEISHI</router-link></h1>
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
  name: 'header'
}
</script>

<style scoped="this">
a{
  color: rgb(143, 143, 143);
  transition: 1.0s ;
  text-decoration: none;
}
a:hover{
  color: rgb(47, 179, 228);
}
.appHeader{
  height: 80px;
  width: 100%;
  top: 0;
  left: 0;
  position: fixed;
  background-color: rgb(255, 255, 255);
  font-family: 'Time New Roman';
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
  padding: 0 5px;
  font-size: 20px;
  font-weight: bold;
  border-right: solid 2px rgb(255, 255, 255);
}

</style>

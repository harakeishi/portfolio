<template lang="html">
  <div class="hobby">
    <h1 class="title">趣味</h1>
    <div class="main">
      <ul>
        <li><i class="fas fa-music fa-2x"></i>ピアノ</li>
        <li><i class="fas fa-book fa-2x"></i>読書</li>
        <li><i class="fas fa-laptop-code fa-2x"></i>プログラミング</li>
        <li><i class="fas fa-pizza-slice fa-2x"></i>料理</li>
        <li><i class="fas fa-image fa-2x"></i>絵</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hobby'
}
</script>

<style scoped>
.title{
  background-size: cover;
  background-color: rgba(160, 254, 205, 0.53);
}
.hobby{
  width: 100%;
  height: 100vh;
  background-size:100% 100vh;
  background-image: url("../assets/piano.jpg");
}
.main{
  width: 80%;
  margin: auto;
  padding: 50px 0px;
  background-color: rgba(255, 255, 255, 0.52);
}
ul {
  text-align: left;
  width: 60%;
  margin: auto;
  border: solid 2px #ffb03f;
  padding: 0.5em 1em 0.5em 2.3em;
  position: relative;
  background-color: rgb(255, 255, 255);
}

ul li {
  color: rgb(0, 0, 0);
  font-size: 20px;
  font-weight: bold;
  line-height: 1.5;
  padding: 0.5em 0;
  list-style-type: none!important;
}
ul li i {
  color: #ffb03f;
}
ul li a {
  margin-left: 50px;
}
</style>

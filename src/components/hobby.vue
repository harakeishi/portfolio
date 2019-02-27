<template lang="html">
  <div class="hobby">
    <h1 class="title">趣味</h1>
    <div class="main">
      <ul>
        <li>ピアノ</li>
        <li>読書</li>
        <li>プログラミング</li>
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
  text-align: left;
  background-color: rgba(255, 255, 255, 0.5);
}
</style>

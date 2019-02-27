<template lang="html">
  <div id="top">
    <h1 class="title">ご観覧ありがとうございます</h1>
    <div class="main">
      <p>原慧士のポートフォリオページです</p>
      <router-link to="/Introduction">
        <p class="content one faa-bounce animated-hover">自己紹介</p>
      </router-link>
      <router-link to="/Biography">
        <p class="content two faa-bounce animated-hover">経歴</p>
      </router-link>
      <router-link to="/Qualification">
        <p class="content three faa-bounce animated-hover">保有資格</p>
      </router-link><br>
      <router-link to="/Skill">
        <p class="content four faa-bounce animated-hover">スキル</p>
      </router-link>
      <router-link to="/Productions">
        <p class="content five faa-bounce animated-hover">制作物</p>
      </router-link>
      <router-link to="/Contact">
        <p class="content six faa-bounce animated-hover">Contact</p>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'top'
}
</script>

<style scoped>
#top{
  width: 100%;
  height: 100vh;
  background-size:100% 100vh;
  background-image: url("../assets/1.jpg");
}
.title{
  background-size: cover;
  background-color: rgba(160, 254, 205, 0.53);
}
a{
  -webkit-text-stroke: 0.5px #000;
  color: rgb(255, 255, 255);
  text-decoration: none;
}
.main{
  width: 80%;
  margin: auto;
  padding: 50px 0px;
  background-color: rgba(255, 255, 255, 0.7);
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
}
.two{
  background-color: rgba(141, 191, 98, 0.68);
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

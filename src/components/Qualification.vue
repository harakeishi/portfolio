<template lang="html">
  <div class="Qualification">
    <h1 class="title">保有資格</h1>
    <div class="main">
      <ul>
        <li><i class="far fa-check-square fa-2x"></i>ITパスポート (2016年7月取得)<br><a>第 IP-2016-07-01488号</a></li>
        <li><i class="far fa-check-square fa-2x"></i>基本情報技術者 (2018年10月取得)<br><a>第 FE-2018-10-07875号</a></li>
        <li><i class="far fa-check-square fa-2x"></i>普通自動車免許 (2017年11月取得)</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'qualification'
}
</script>

<style scoped>
.title{
  background-size: cover;
  background-color: rgba(160, 254, 205, 0.53);
}
.Qualification{
  width: 100%;
  height: 100vh;
  background-size:100% 100vh;
  background-image: url("../assets/4.jpg");
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

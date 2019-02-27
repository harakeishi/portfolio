<template lang="html">
  <div class="Productions">
    <h1 class="title">制作物</h1>
    <div class="main">
      <div class="content">
        <a href="http://yumr.php.xdomain.jp/monster_generator/mainss.php" target="_blank">
          <h1>モンスタージェネレータ</h1>
          <img src="../assets/m_ge.png">
          <p>【説明】</p>
          <p>アップロードデータをもとに、モンスターを生成するwebアプリ</p>
          <p>現在動作が重いときがあるので、作り直し中</p>
          <p>【使用言語】</p>
          <p>HTML+CSS</p>
          <p>PHP</p>
          <p>javascript</p>
        </a>
      </div>
      <div class="content">
        <a href="http://yumr.php.xdomain.jp/seisaku/memo_app/index.html" target="_blank">
          <h1>メモアプリ</h1>
          <img src="../assets/memo.png">
          <p>【説明】</p>
          <p>Vue.jsを使ったメモアプリ</p>
          <p>お気に入りフィルター機能など様々追加したもの。</p>
          <p>Vueになれるために作ったものです。</p>
          <p>【使用言語】</p>
          <p>HTML+CSS</p>
          <p>javascript(vue)</p>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'productions'
}
</script>

<style scoped>
.title{
  background-size: cover;
  background-color: rgba(160, 254, 205, 0.53);
}
.Productions{
  width: 100%;
  height: 100vh;
  background-size:100% 100vh;
  background-image: url("../assets/6.jpg");
}
.main{
  width: 80%;
  margin: auto;
  padding: 20px 0px;
  background-color: rgba(255, 255, 255, 0.8);
  display:flex
}
a{
  text-decoration: none;
}
.content{
  display: inline-block;
  width: 40%;
  padding: 5px;
  margin: auto;
  background-color: rgb(255, 255, 255);
  border: solid 1px rgb(0, 0, 0);
}
.content:hover{
  background-color: rgb(218, 218, 218);
}
.content *{
  color: rgb(0, 0, 0);
}
.content img{
  width: 100%;
}
</style>

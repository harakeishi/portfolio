<template lang="html">
  <div class="Introduction">
    <h1 class="title">自己紹介</h1>
    <div class="main">
      <div class="status">
        <table>
          <tr>
            <td rowspan="2" align="center"><img src="../assets/icon.png" style="margin:auto"></td><th>氏名</th>
          </tr>
          <tr>
            <td>原 慧士（はら けいし）</td>
          </tr>
          <tr>
            <td rowspan="4">
              <a href="https://twitter.com/cfgtLnLLaWNISrP?lang=ja" target=”_blank”><i class="fab fa-twitter fa-3x faa-wrench animated-hover " style="color:rgb(73, 241, 221)"></i></a>
              <a href="https://github.com/harakeishi" target=”_blank”><i class="fab fa-github fa-3x" style="color:rgb(0, 0, 0)"></i></a>
              <a href="https://harakeishi.github.io/cms.js-starter" target=”_blank”><i class="fab fa-blogger fa-3x" style="color:rgb(97, 127, 255)"></i></a>
              <a href="https://qiita.com/harachan" target=”_blank”><img src="../assets/qiita-favicon.png" style="width: 40px;"></a>
            </td><th>所属</th>
          </tr>
          <tr>
            <td>神奈川工科大学 情報学部</td>
          </tr>
          <tr>
            <td>情報ネットワーク・コミュニケーション学科</td>
          </tr>
          <tr>
            <td>井家研究室</td>
          </tr>
        </table>
      </div>
      <div class="summary">
        <h1>概要</h1>
        <p>現在、神奈川工科大学にてインターネットの整備やプログラミングを学んでいる。</p>
        <p>研究室では、最近流行りのPythonを使った機械学習に興味を持ちFXと関連して研究をしていく予定。</p>
        <p>株式会社 究進塾にてエンジニアとしてアルバイトしている。</p>
        <p>参加プロジェクトは授業予約を電子化するもので、フロント・サーバ両方の開発・運用を行っている。</p>
        <p>2018年夏には担当していた機能追加をリリースし、バグなどの対応で忙殺される。</p>
        <p>その後、お知らせ機能の追加やメール登録機能の追加などを1人で担当し、サーバサイドのプログラミングに興味を持つようになる。</p>
        <p>現在はスマホに対応してレスポンシブに動作するように修正作業を主に行っている。</p>
      </div>
      <div class="link">
        <router-link to="/Hobby">
          <p class="content faa-tada animated">趣味</p>
        </router-link>
        <router-link to="/SelfAnalysis">
          <p class="content faa-tada animated">性格分析</p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Introduction'
}
</script>

<style scoped>
.title{
  background-size: cover;
  background-color: rgba(160, 254, 205, 0.53);
}
.Introduction{
  width: 100%;
  height: 100vh;
  background-size:100% 100vh;
  background-image: url("../assets/1.jpg");
}
.main{
  width: 80%;
  margin: auto;
  padding: 20px 0px;
  background-color: rgba(255, 255, 255, 0.8);
  text-align: left;
}
.main table{
  margin: auto;
  word-break : break-all;
}
.main table td{
  word-break : break-all;
}
.status{
  width: 80%;
  margin: auto;
  padding: 5px;
}
.summary{
  width: 80%;
  margin: auto;
  border: solid 2px rgb(255, 99, 0);
  padding: 5px;
}
.link a{
  color: rgb(0, 0, 0);
  text-decoration: none;
}
.link{
  margin-top: 10px;
  text-align: center;
}
.content{
  display: inline-block;
  width: 100px;
  height: 100px;
  font-size: 20px;
  font-weight: bold;
  border-radius: 50%;
  margin: auto;
  text-align: center;
  line-height: 100px;
  vertical-align: middle;
  background-color: rgba(238, 230, 21, 0.66);
}
</style>

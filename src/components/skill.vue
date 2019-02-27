<template lang="html">
  <div class="skill">
    <h1 class="title">skill</h1>
    <div class="main">
      <table class="info">
        <th>星の数</th><th>レベルの内容</th>
        <tr><td class="skill_star">★</td><td>書いたことがある／教えられた通りにアプリケーションを創れる／教えられた通りに構築できる</td></tr>
        <tr><td class="skill_star">★★</td><td>独力で書ける／独力で調べながらアプリケーションを創れる／独力で調べながら構築できる</td></tr>
        <tr><td class="skill_star">★★★</td><td>使いこなせる／他人に教えられる</td></tr>
      </table>
      <table class="skill_table">
        <th></th><th>技術</th><th>レベル</th><th>使用年数</th><th>用途</th>
        <tr>
          <td class="head_td"><img src="../assets/c.png"></td><td class="head_td">C</td><td class="skill_star">★★</td><td>4年</td><td>授業での使用・趣味でゲーム制作</td>
        </tr>
        <tr>
          <td class="head_td"><img src="../assets/java.png"></td><td class="head_td">Java</td><td class="skill_star">★</td><td>1年</td><td>授業での使用</td>
        </tr>
        <tr>
          <td class="head_td"><img src="../assets/php.png"></td><td class="head_td">PHP</td><td class="skill_star">★★</td><td>2.5年</td><td>授業での使用・趣味での使用・アルバイト</td>
        </tr>
        <tr>
          <td class="head_td"><img src="../assets/python.png"></td><td class="head_td">Pyhton</td><td class="skill_star">★★</td><td>0.5年</td><td>授業での使用・卒業研究での使用</td>
        </tr>
        <tr>
          <td class="head_td"><img src="../assets/html-css.png"></td><td class="head_td">HTML/CSS</td><td class="skill_star">★★</td><td>2.5年</td><td>授業での使用・趣味での使用・アルバイト</td>
        </tr>
        <tr>
          <td class="head_td"><img src="../assets/js.jpeg"></td><td class="head_td">JavaScript</td><td class="skill_star">★★</td><td>2.5年</td><td>授業での使用・趣味での使用・アルバイト</td>
        </tr>
        <tr>
          <td class="head_td"><img src="../assets/Haskell.png"></td><td class="head_td">Haskell</td><td class="skill_star">★</td><td>1年</td><td>授業での使用</td>
        </tr>
        <tr>
          <td class="head_td"><img src="../assets/unity.png"></td><td class="head_td">Unity</td><td class="skill_star">★</td><td>0.5年</td><td>趣味で３Dゲームの作成</td>
        </tr>
        <tr>
          <td class="head_td"><img src="../assets/mysql.png"></td><td class="head_td">MySQL</td><td class="skill_star">★★</td><td>1年</td><td>授業での使用・趣味での使用・アルバイト</td>
        </tr>
        <tr>
          <td class="head_td"></td><td class="head_td">サーバ構築</td><td class="skill_star">★★</td><td>1年</td><td>授業での使用・趣味での使用・アルバイト</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'skill'
}
</script>

<style scoped>
.title{
  background-size: cover;
  background-color: rgba(160, 254, 205, 0.53);
}
.skill{
  width: 100%;
  height: 100%;
  background-size:100% 100vh;
  background-image: url("../assets/5.jpg");
}
.main{
  width: 95%;
  margin: auto;
  padding: 20px 0px;
  background-color: rgba(255, 255, 255, 0.7);
  text-align: left;
}
.skill_table img{
  width: 50px;
}
.skill_star{
  color: rgb(250, 255, 0);
  font-size: 25px;
}
.skill_table{
  font-size: 20px;
}
 table{
  border-spacing: 0;
  margin: 10px auto;
}
 table td{
  border-bottom: solid 2px #ddd;
  text-align: center;
  padding: 10px 0;
}
 table th{
  border-bottom: solid 2px #ddd;
  text-align: center;
  padding: 10px 5px;
}
 .head_td{
  border-bottom: solid 4px #ff0000;
}
 .info{
  padding: 0.5em 1em;
  background: #f4f4f4;
  border-left: solid 6px #5bb7ae;
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.33);
}
 .info .skill_star{
  font-size: 20px;
}

</style>

<template lang="html">
  <div class="Contact">
    <h1 class="title">Contact</h1>
    <div class="main">
      <div class="links">
        <a href="mailto:hara.for.work&#64;gmail.com"><i class="fas fa-envelope"></i>mail</a><br>
        <a href="https://twitter.com/cfgtLnLLaWNISrP?lang=ja" target=”_blank”><i class="fab fa-twitter faa-wrench animated-hover " style="color:rgb(73, 241, 221)"></i>Twitter</a><br>
        <a href="https://github.com/harakeishi" target=”_blank”><i class="fab fa-github" style="color:rgb(0, 0, 0)"></i>Github</a><br>
        <a href="https://harakeishi.github.io/cms.js-starter" target=”_blank”><i class="fab fa-blogger" style="color:rgb(97, 127, 255)"></i>Blog</a><br>
        <a href="https://qiita.com/harachan" target=”_blank”><img src="../assets/qiita-favicon.png" style="width: 30px;">qiita</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Contact'
}
</script>

<style scoped>
.title{
  background-size: cover;
  background-color: rgba(160, 254, 205, 0.53);
}
.main{
  width: 80%;
  margin: auto;
  padding: 50px 0px;
  background-color: rgba(255, 255, 255, 0.52);
  font-size: 30px;
  font-weight: bold;
}
.links{
  width: 40%;
  margin: auto;
  text-align: left;
}
.links a i{
  margin: 20px 0px;
}
.links a:hover{
  color: rgb(228, 134, 24);
  text-decoration: underline;
}
a{
  transition: 0.5s ;
  text-decoration: none;
  color: rgb(0, 0, 0);
}
.Contact{
  width: 100%;
  height: 100vh;
  background-size:100% 100vh;
  background-image: url("../assets/7.jpg");
}
</style>

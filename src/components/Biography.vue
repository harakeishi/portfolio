<template lang="html">
  <div class="Biography">
    <h1 class="title">経歴</h1>
    <div class="main">
      <ul class="timeline">
          <li>
            <p class="timeline-date">2011～2012年</p>
            <div class="timeline-content">
              <h3>生徒会長として活動に勤しむ</h3>
              <p>体育祭や文化祭を仲間とともにやり遂げる</p>
            </div>
          </li>
          <li>
            <p class="timeline-date">2013年3月</p>
            <div class="timeline-content">
              <h3>伊東市立北中学校を卒業</h3>
            </div>
          </li>
          <li>
            <p class="timeline-date">2013年4月</p>
            <div class="timeline-content">
              <h3>静岡県立伊東高等学校に入学</h3>
            </div>
          </li>
          <li>
            <p class="timeline-date">2014年8月</p>
            <div class="timeline-content">
              <h3>WRO静岡県大会に出場</h3>
              <p>WRO(World Robot Olympiad)にチームで出場する</p>
            </div>
          </li>
          <li>
            <p class="timeline-date">2015年3月</p>
            <div class="timeline-content">
              <h3>SANGI AWARD 2015に参加</h3>
              <p>静岡産業技術大学で行われたIT競技会プログラム部門に出場する</p>
            </div>
          </li>
          <li>
            <p class="timeline-date">2016年3月</p>
            <div class="timeline-content">
              <h3>静岡県立伊東高等学校を卒業</h3>
            </div>
          </li>
          <li>
            <p class="timeline-date">2016年4月</p>
            <div class="timeline-content">
              <h3>神奈川工科大学情報学部に入学</h3>
            </div>
          </li>
          <li>
            <p class="timeline-date">2018年3月</p>
            <div class="timeline-content">
              <h3>株式会社究進塾にてエンジニアとしてアルバイトを始める</h3>
              <p>大学入学当初から働いていたコンビニでのアルバイトをやめエンジニアのアルバイトを始める</p>
            </div>
          </li>
          <li>
            <p class="timeline-date">2018年10月</p>
            <div class="timeline-content">
              <h3>基本情報技術者取得</h3>
            </div>
          </li>
        </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Biography'
}
</script>

<style scoped>
.title{
  background-size: cover;
  background-color: rgba(160, 254, 205, 0.53);
}
.Biography{
  width: 100%;
  height: 100vh;
  background-size:100% 100vh;
  background-image: url("../assets/6.jpg");
}
.main{
  width: 80%;
  margin: auto;
  background-color: rgba(212, 212, 212, 0.8);
}
.timeline {
  list-style: none;
  text-align: left;
}
.timeline > li {
  margin-bottom: 60px;
}

/* for Desktop */
@media ( min-width : 640px ){
  .timeline > li {
    overflow: hidden;
    margin: 0;
    position: relative;
  }
  .timeline-date {
    width: 110px;
    float: left;
    margin-top: 20px;
  }
  .timeline-content {
    width: 75%;
    float: left;
    border-left: 3px #e5e5d1 solid;
    padding-left: 30px;
  }
  .timeline-content:before {
    content: '';
    width: 12px;
    height: 12px;
    background: #6fc173;
    position: absolute;
    left: 106px;
    top: 24px;
    border-radius: 100%;
  }
}
li{
  opacity: 0;
}
li:nth-child(1) {
  -webkit-animation: example 1s ease 1s 1 forwards;
  animation: example 1s ease 1s 1 forwards;
}
li:nth-child(2) {
  -webkit-animation: example 1s ease 1.5s 1 forwards;
  animation: example 1s ease 1.5s 1 forwards;
}
li:nth-child(3) {
  -webkit-animation: example 1s ease 2s 1 forwards;
  animation: example 1s ease 2s 1 forwards;
}
li:nth-child(4) {
  -webkit-animation: example 1s ease 2.5s 1 forwards;
  animation: example 1s ease 2.5s 1 forwards;
}
li:nth-child(5) {
  -webkit-animation: example 1s ease 3s 1 forwards;
  animation: example 1s ease 3s 1 forwards;
}
li:nth-child(6) {
  -webkit-animation: example 1s ease 3.5s 1 forwards;
  animation: example 1s ease 3.5s 1 forwards;
}
li:nth-child(7) {
  -webkit-animation: example 1s ease 4s 1 forwards;
  animation: example 1s ease 4s 1 forwards;
}
li:nth-child(8) {
  -webkit-animation: example 1s ease 4.5s 1 forwards;
  animation: example 1s ease 4.5s 1 forwards;
}
li:nth-child(9) {
  -webkit-animation: example 1s ease 5s 1 forwards;
  animation: example 1s ease 5s 1 forwards;
}
@-webkit-keyframes example {
  100% {
    opacity: 1;
  }
}
@keyframes example {
  100% {
    opacity: 1;
  }
}
</style>

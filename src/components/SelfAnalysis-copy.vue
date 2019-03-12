<template lang="html">
  <div class="SelfAnalysis">
    <h1>FFS診断結果</h1>
    <div class="c_1 wa">
      <p>あなたの特性を構成している因子は</p>
      <h3>「受容性, 弁別性」</h3>です。
      <p>柔軟に物事を受け入れていきます。周囲の喜びを自分の喜びと考えることができます。 合理的に物事を判断していくことが できます。物事や状態を明確に切り分けていくことが得意です。 </p>
    </div>
    <div class="c_2 wa">
      <h2>口癖</h2>
      <p>「なるほど」「なんとかしよう」と共感する。</p>
      <h2>日頃の取りやすい行動、しぐさ</h2>
      <p>「にこやかに活動的」「周りをよく見ている」</p>
      <h2>陥りやすいところ</h2>
      <p>こまめに相手の話を聞きすぎてしまい、相手に関わりすぎてしまう傾向があります。 </p>
      <h2>ストレスになりやすい要因</h2>
      <p>存在を蔑ろにされること。</p>
      <h2>ディストレス状態の時の行動</h2>
      <p>介入的、自虐的、逃避的</p>
      <h2>対処法</h2>
      <p>人の役に立っていると実感する。</p>
      <h2>取りやすい学習スタイル</h2>
      <p>どちらかといえば、一つの経験を深めていくことで、世の中の真理を追究していくようなことが得意な傾向があります。 知識に関しては、 基礎から始まって体系的に全体像を把握していると強みを発揮しやすいです。</p>
      <h2>働き方のイメージ </h2>
      <p>周囲の人に貢献できる事をやろうとしやすいです。 「営業系」であれば、相手の話をしっかりと聞きながら、人間関係を構築していくよう な営業スタイルには向きやすいです。 「研究開発系」であれば、周りの意見を聞きながら柔軟にテーマを変えていくような開発には力を発 揮しやすいです。 「事務系」であれば、柔軟でお世話好きのため、状況を調整して進めていく事ができます。ルールを徹底させるといった ことは苦手になるかもしれません。</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SelfAnalysis'
}
</script>

<style scoped>
.title{
  background-size: cover;
  background-color: rgba(160, 254, 205, 0.53);
}
.SelfAnalysis{
  width: 80%;
  margin: auto;
  padding: 50px 0px;
  background-color: rgba(255, 255, 255);
  font-size: 30px;
  font-weight: bold;
}
h1{
  width: auto;
  margin: auto;
  border-bottom: solid 3px #ffb03f;
}
h2{
  width: auto;
  margin: auto;
  border-bottom: solid 2px #ffb03f;
}
</style>

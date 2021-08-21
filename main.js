const KuromojiAnalyzer = require("kuroshiro-analyzer-kuromoji");
const Kuroshiro = require("kuroshiro")
const kuroshiro = new Kuroshiro();

kuroshiro.init(new KuromojiAnalyzer())
.then(function () {
    return kuroshiro.convert("感じ取れたら手を繋ごう、重なるのは人生のライン and レミリア最高！", { to: "hiragana" });;
})
.then(function(result){
  console.log(result);
  //shingeki no kyojin
})
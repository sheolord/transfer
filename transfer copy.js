const fs = require('fs');
const readline = require('readline');
const KuromojiAnalyzer = require("kuroshiro-analyzer-kuromoji");
const Kuroshiro = require("kuroshiro")
const kuroshiro = new Kuroshiro();

async function transfer(str){
  kuroshiro.init(new KuromojiAnalyzer())
  .then(function () {
      return kuroshiro.convert(str, { to: "hiragana" });;
  })

}

async function processLineByLine() {
  const fileStream = fs.createReadStream('Untitled-spreadsheet-Sheet1.csv');

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });
  // Note: we use the crlfDelay option to recognize all instances of CR LF
  // ('\r\n') in input.txt as a single line break.

  for await (const line of rl) {
    console.log(line);
    console.log(await transfer(line)); 

  }
}



processLineByLine();
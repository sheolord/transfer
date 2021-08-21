const fs = require('fs');
const readline = require('readline');
const KuromojiAnalyzer = require("kuroshiro-analyzer-kuromoji");
const Kuroshiro = require("kuroshiro")
const kuroshiro = new Kuroshiro();

async function processLineByLine() {
  const fileStream = fs.createReadStream('Untitled-spreadsheet-Sheet1.csv');

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });
  // Note: we use the crlfDelay option to recognize all instances of CR LF
  // ('\r\n') in input.txt as a single line break.

  for await (const line of rl) {
    // Each line in input.txt will be successively available here as `line`.
   // console.log(`Line from file: ${line}`);
  
    kuroshiro.init(new KuromojiAnalyzer())
    .then(function () {
        return kuroshiro.convert(line, { to: "hiragana" });;
    })
    .then(function(result){
      console.log(result);
      //shingeki no kyojin
    })
  }
}

processLineByLine();
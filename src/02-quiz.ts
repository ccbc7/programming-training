/*
  課題02: クイズゲーム

  画面に問題を出して、キーボードから答えの番号を入力してもらいます。
  正解したら score（点数）を 1 増やします。

  実行方法:
    npx tsx src/02-quiz.ts
*/


import * as readline from "node:readline/promises";
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

console.log("Q1. 日本の首都は？");
console.log("  1. 大阪");
console.log("  2. 東京");
console.log("  3. 福岡");
const answer1 = await rl.question("番号を入力: "); 

rl.close(); 


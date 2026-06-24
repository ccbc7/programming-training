/*
  課題03: クイズゲーム

  画面に問題を出して、キーボードから答えの番号を入力してもらいます。
  クイズは3択です。
  クイズの結果に応じて、正解かどうかを教えてあげよう

  実行方法:
    npx tsx src/03-quiz.ts
*/

import * as readline from "node:readline/promises";
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });


console.log("Q1. (例)日本の首都は？");
const answer1 = await rl.question("番号を入力: ");


rl.close();


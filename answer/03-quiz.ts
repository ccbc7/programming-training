/*
  課題03: クイズゲーム

  画面に問題を出して、キーボードから答えの番号を入力してもらいます。
  正解したら score（点数）を 1 増やします。

  実行方法:
    npx tsx src/03-quiz.ts

  学ぶこと:
    - 入力 … rl.question(...) でキーボードからの入力を受け取る
    - if   … 入力が正解と同じかどうかで処理を変える
    - 変数 … score に点数をためていく
*/

// ↓ この2行は「キーボード入力を受け取る準備」です。
//    今は「おまじない」として、そのまま書いてOK。意味は後で分かります。
import * as readline from "node:readline/promises";
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

// 点数を入れておく変数。最初は 0 点。
let score = 0;

// --- 第1問 ---
console.log("Q1. 日本の首都は？");
console.log("  1. 大阪");
console.log("  2. 東京");
console.log("  3. 福岡");
const answer1 = await rl.question("番号を入力: "); // 入力は「文字」として返ってくる

if (answer1 === "2") {
  console.log("正解！\n");
  score = score + 1; // score を 1 増やす
} else {
  console.log("不正解… 正解は 2. 東京 でした\n");
}

// --- 第2問 ---
console.log("Q2. 1 + 1 は？");
console.log("  1. 1");
console.log("  2. 2");
console.log("  3. 3");
const answer2 = await rl.question("番号を入力: ");

if (answer2 === "2") {
  console.log("正解！\n");
  score = score + 1;
} else {
  console.log("不正解… 正解は 2. 2 でした\n");
}

// --- 結果発表 ---
console.log(`あなたのスコアは ${score} 点 / 2 点 でした`);

rl.close(); // 入力の受け付けを終了する（これも今はおまじない）

// -----------------------------------------------
// 🔎 デバッガで見てみよう
//   score = score + 1 の行にブレークポイントを置いて、
//   正解したときだけ score が増えることを確認しよう。
//
// ⚠️ よくあるミス
//   入力は「文字」なので、2 ではなく "2"（クォート付き）で比べます。
//   answer1 === 2 と書くと、いつも不正解になってしまう。
//
// 🚀 発展
//   - 問題を3問に増やす
//   - 3点たまったら「クリア！」と表示する
// -----------------------------------------------

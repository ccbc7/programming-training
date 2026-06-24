/*
  最終課題: ゴルフゲーム ⛳

  残り 350yard の Hole 1 をプレイします。
  クラブを選んで打ち、残りが ちょうど 0 になればカップイン！
  何打でホールアウトできるか挑戦しましょう。

  実行方法:
    npx tsx src/07-golf.ts

  学ぶこと（今までの集大成）:
    - 状態管理 … remaining（残り）や strokes（打数）を変数で持ち続ける
    - 変数     … 打つたびに値を更新する
    - if       … 飛びすぎたときの処理を分ける
    - オブジェクト … クラブ1本＝{ name, distance }
    - 配列     … クラブを並べて持ち、番号で選ぶ
*/

import * as readline from "node:readline/promises";
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

// クラブ一覧（オブジェクトの配列）。
// 1本ずつが「名前」と「飛距離」を持つオブジェクト。
const clubs = [
  { name: "ドライバー", distance: 250 },
  { name: "アイアン", distance: 120 },
  { name: "パター", distance: 10 },
];

// --- ゲームの状態（プレイ中ずっと持ち続ける変数）---
let remaining = 350; // 残りヤード
let strokes = 0; // 打った回数

console.log("⛳ Hole 1");
console.log("");

// 残りが 0 になるまで、ずっと繰り返す。
// while は「( ) の中が true のあいだ繰り返す」ループ。
while (remaining > 0) {
  console.log(`残り ${remaining}yard`);
  console.log("");
  console.log("どのクラブで打つ？");
  // クラブ一覧を for で表示（"1. ドライバー (250yard)" のように番号付きで）
  for (let i = 0; i < clubs.length; i++) {
    console.log(`  ${i + 1}. ${clubs[i].name} (${clubs[i].distance}yard)`);
  }

  const input = await rl.question("番号を入力: ");

  // 入力は "1" のような文字。Number(...) で数値に直し、
  // 配列の番号（0始まり）に合わせるため 1 を引く。
  const index = Number(input) - 1;
  const club = clubs[index];

  // 1〜3 以外を入れた場合、club は存在しない（undefined）。
  if (club === undefined) {
    console.log("そのクラブはありません。もう一度！\n");
    continue; // この回をやり直す（ループの先頭に戻る）
  }

  // ここまで来たら、ちゃんと打てる ＝ 状態を更新する
  strokes = strokes + 1;
  remaining = remaining - club.distance;

  console.log("");
  console.log(`${club.name}！`);
  console.log(`${club.distance}yard飛んだ！`);

  // 飛びすぎて残りがマイナスになったら「通り越した」あつかい。
  // 反対側に、はみ出した分だけ残っていることにする。
  if (remaining < 0) {
    remaining = -remaining; // 例: -20 → 20
    console.log(`飛びすぎ！ グリーンを通り越して、反対に ${remaining}yard`);
  }
  console.log("");
}

console.log("🏁 カップイン！");
console.log(`${strokes}打でホールアウトしました`);

rl.close();

// -----------------------------------------------
// 🔎 デバッガで見てみよう
//   remaining = remaining - club.distance の行で、
//   1打ごとに remaining が減っていく様子を見よう。
//   strokes（打数）もいっしょに増えていく。
//
// 🚀 発展（少しずつ機能を足してみよう）
//   - 飛距離をランダムにする（例: distance ± 20yard）
//       ヒント: Math.floor(Math.random() * 41) - 20  で -20〜+20
//   - バンカー・池・OB などのマスを作り、入ったらペナルティ1打
//   - スコア管理（パー4などを決めて、何打差か表示）
//   - 9ホール → 18ホールに増やす（ホール情報を配列で持つ）
// -----------------------------------------------

// ===============================================
// 📘 ここから先：TypeScript の型を紹介
// ===============================================
// 上の clubs は { name, distance } の形をしたオブジェクトの配列でした。
// 「この形ですよ」と名前を付けたものが「型（type）」です。
//
//   type Club = {
//     name: string;     // 文字
//     distance: number; // 数値
//   };
//
//   const clubs: Club[] = [ ... ]; // 「Clubの配列」という意味
//
// こう書いておくと、club.nemo のようなタイプミスを
// 実行する前にエディタが赤線で教えてくれます。
// 最初から型を設計する必要はありません。
// 「動くものを作る → 後から型で守る」の順で大丈夫です。
// -----------------------------------------------

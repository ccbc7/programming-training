// ===============================================
// 最終課題: ゴルフゲーム ⛳
// ===============================================
// 残り 350yard の Hole 1 をプレイします。
// クラブを選んで打ち、残りが ちょうど 0 になればカップイン！
// 何打でホールアウトできるか挑戦しましょう。
//
// 実行方法:
//   npx tsx src/07-golf.ts
//
// 学ぶこと（今までの集大成）:
//   - 状態管理 … remaining（残り）や strokes（打数）を変数で持ち続ける
//   - 変数     … 打つたびに値を更新する
//   - if       … 飛びすぎたときの処理を分ける
//   - オブジェクト … クラブ1本＝{ name, distance }
//   - 配列     … クラブを並べて持ち、番号で選ぶ
// ===============================================

import * as readline from "node:readline/promises";
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

// クラブ一覧（オブジェクトの配列）。ここはそのまま使ってOK。
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

// TODO: ここからゲーム本体を作ろう。今までの課題の組み合わせ！
//
// 大きな流れ:
//   1. 「残りが 0 より大きいあいだ」繰り返す  →  while (remaining > 0) { ... }
//   2. 残りヤードと、クラブ一覧を表示する（一覧は for で）
//        for (let i = 0; i < clubs.length; i++) {
//          console.log(`  ${i + 1}. ${clubs[i].name} (${clubs[i].distance}yard)`);
//        }
//   3. 番号を入力してもらう
//        const input = await rl.question("番号を入力: ");
//        const club = clubs[Number(input) - 1];   // "1" → 0番目
//   4. 選んだクラブの distance だけ remaining を減らし、strokes を 1 増やす
//   5. 結果（「ドライバー！ 250yard飛んだ！」など）を表示する
//
// できたら挑戦:
//   ・1〜3 以外を入力したとき（club が undefined）のガード
//   ・飛びすぎて remaining がマイナスになったときの処理
//
// 最後に「カップイン！ ◯打でホールアウト」を表示する。

rl.close();

// 困ったら answer/07-golf.ts に答え（と、さらに発展のアイデア）があります。

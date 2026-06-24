/*
  課題04: 配列問題（合計と最大値）

  テストの点数が入った配列から、
    合計
    最大値
  を求めます。

  期待する出力:
    合計: 240
    最大値: 90

  実行方法:
    npx tsx src/04-array.ts

  学ぶこと:
    - 配列 … たくさんの値を1つの箱にまとめて持つ
    - for  … 配列を「先頭から1つずつ」見ていく
    - if   … 今見ている値が今までの最大より大きいか比べる
*/

const scores = [80, 90, 70];

// --- 合計を求める ---
// TODO: 合計を計算して表示しよう。
//   ヒント:
//     let total = 0;                       // 足し算の途中結果。最初は 0
//     for (let i = 0; i < scores.length; i++) {
//       total = total + scores[i];         // scores[i] は i 番目の値（0始まり）
//     }
//     console.log(`合計: ${total}`);

// --- 最大値を求める ---
// TODO: 最大値を見つけて表示しよう。
//   ヒント:
//     let max = scores[0];                 // とりあえず先頭を最大とする
//     for (...) {
//       if (scores[i] > max) { max = scores[i]; }  // もっと大きければ更新
//     }
//     console.log(`最大値: ${max}`);

// 困ったら answer/04-array.ts に答えがあります。

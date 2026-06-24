/*
  課題03: テイクアウト・イートイン価格計算

  商品の「価格」を渡すと、
    原価（価格の70%）
    テイクアウト価格（消費税 8%）
    イートイン価格（消費税 10%）
  を計算して表示します。

  期待する出力（showPrice(1000) のとき）:
    価格: 1000円
    原価: 700円
    テイクアウト: 1080円
    イートイン: 1100円

  実行方法:
    npx tsx src/03-price.ts

  学ぶこと:
    - 引数 … function に値を渡す（price）
    - 計算 … かけ算で値を求める
    - 新しい変数を作る … 計算の「途中結果」を変数にためる
*/

// price を引数として受け取る関数。
function showPrice(price) {
  // TODO: 計算結果を「途中の変数」にためてから表示しよう。
  //   引数 price をそのまま表示するだけでなく、
  //   一度 cost / takeoutPrice / eatInPrice という変数に入れるのがポイント。
  //
  // ヒント:
  //   const cost = price * 0.7;      // 原価 = 70%
  //   const takeoutPrice = price * 1.08;  // 8%税
  //   const eatInPrice = price * 1.1;     // 10%税
  //   console.log(`価格: ${price}円`);
  //   ...
}

// 作った関数を「呼び出す」。1000 が引数 price に入る。
showPrice(1000);

// 困ったら answer/03-price.ts に答えがあります。

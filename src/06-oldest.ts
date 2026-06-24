/*
  課題06: 最年長者を探す

  「名前」と「年齢」を持つ人の配列から、いちばん年上の人を探します。

  期待する出力:
    最年長は 佐藤 さん（35歳）

  実行方法:
    npx tsx src/06-oldest.ts

  学ぶこと:
    - 配列 + オブジェクト … 1人＝オブジェクト、それを並べた配列
    - 比較 … 年齢どうしを比べて、年上を選び続ける
    （課題04の「最大値」と考え方は同じ。比べる対象が age になっただけ）
*/

const people = [
  { name: "田中", age: 20 },
  { name: "佐藤", age: 35 },
  { name: "鈴木", age: 28 },
];

// TODO: いちばん年上の人を探して、名前と年齢を表示しよう。
//   ヒント:
//     let oldest = people[0];             // とりあえず先頭の人
//     for (let i = 0; i < people.length; i++) {
//       if (people[i].age > oldest.age) { // people[i].age で i番目の人の年齢
//         oldest = people[i];             // 数値ではなく「人まるごと」を入れ替える
//       }
//     }
//     console.log(`最年長は ${oldest.name} さん（${oldest.age}歳）`);

// 困ったら answer/06-oldest.ts に答えがあります。

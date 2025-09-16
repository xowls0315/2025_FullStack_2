// // 유저에게 mbti를 물어봄
// const mbti1 = prompt("e임 i임??");
// const mbti2 = prompt("s임 n임??");
// const mbti3 = prompt("t임 f임??");
// const mbti4 = prompt("p임 j임??");

// const mbti = {
//   e: "외향적",
//   i: "내향적",
//   s: "감각적",
//   n: "직관적",
//   t: "현실적",
//   f: "감성적",
//   j: "계획적",
//   p: "즉흥적",
// };

// // const result1 = mbti1 == "e" ? "외향적" : "내향적";
// // const result2 = mbti2 == "s" ? "감각적" : "상상적";
// // const result3 = mbti3 == "t" ? "현실적" : "감성적";
// // const result4 = mbti4 == "p" ? "즉흥적" : "계획적";

// alert(`당신은 ${mbti[mbti1]} ${mbti[mbti2]} ${mbti[mbti3]} ${mbti[mbti4]} 이군요!!!`);

// 유저에게 몇년생인지 물어보고
// 알럿으로 띠 알려주기
const tweleve = {
  0: "뱀",
  1: "용",
  2: "토끼",
  3: "호랑이",
  4: "소",
  5: "쥐",
  6: "돼지",
  7: "개",
  8: "닭",
  9: "원숭이",
  10: "양",
  11: "말",
};

const user_age = +prompt("당신은 몇년생인가요?");

alert(`당신은 ${tweleve[(2025 - user_age) % 12]}띠 이시군요!!`);

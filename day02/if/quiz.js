// 유저에게 영어점수를 입력받고
// 90이상 A
// 80이상 B
// 70이상 C
// 60이상 D
// 50이상 E
// 그 외는 ㅅㄱ
// 콘솔로 나타내기
// const score = Number(prompt("영어점수를 입력:"));
// if (score >= 90) {
//   console.log("A");
// } else if (score >= 80) {
//   console.log("B");
// } else if (score >= 70) {
//   console.log("C");
// } else if (score >= 60) {
//   console.log("D");
// } else if (score >= 50) {
//   console.log("E");
// } else {
//   console.log("ㅅㄱ");
// }

// 유저에게 숫자 정수를 입력받고
// 양의 홀수, 양의 짝수, 0, 음의 홀수, 음의 짝수 출력하기
// -3 -> 음의 홀수, 8 -> 양의 짝수
const num = Number(prompt("숫자 정수 입력: "));
if (num > 0 && num % 2 == 1) {
  console.log("양의 홀수");
} else if (num > 0 && num % 2 == 0) {
  console.log("양의 짝수");
} else if (num < 0 && num % 2 == -1) {
  console.log("음의 홀수");
} else if (num < 0 && num % 2 == 0) {
  console.log("음의 짝수");
} else {
  console.log("0");
}

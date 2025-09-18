// 1. x를 주면 두배 돌려주는 화살표 함수
const quiz1 = (x) => {
  return 2 * x;
};
// 2. x를 주면 -500 해서 돌려주는 화살표 함수
const quiz2 = (x) => {
  return x - 500;
};
// 3. x, y를 주면 더 큰 숫자를 돌려주는 화살표 함수
const quiz3 = (x, y) => {
  return x > y ? x : y;
};
// 4. str를 주면 길이를 돌려주는 화살표 함수
const quiz4 = (str) => {
  str = String(str);
  return str.length;
};
// 5. str를 주면 문자의 길이가 10글자 보다 크면 길이가 길어요!
// 아니면 길이가 적당해요를 돌려주는 화살표 함수
const quiz5 = (str) => {
  str = String(str);
  return str.length > 10 ? "길이가 길어요!" : "길이가 적당해요";
};
// 6. str를 주면, str을 하다니 럭키비키잖아😀 돌려주는 화살표 함수
const quiz6 = (str) => {
  return `${str}을 하다니 럭키비키잖아😀`;
};
// 7. x, y를 주면, x의 y제곱을 돌려주는 화살표 함수
const quiz7 = (x, y) => {
  return x ** y;
};
// 8. str를 주었을 때, a or b가 포함되면 a, b 포함! 아니면 a, b 미포함!
const quiz8 = (str) => {
  return str.includes("a") || str.includes("a") ? "a, b 포함!" : "a, b 미포함!";
};
// 9. x를 주었을 때, x의 구구단의 배수를 배열로 돌려주는 함수
// ex) 5 -> [5, 10, 15, ..., 45]
const quiz9 = (x) => {
  return [...Array(9)].map((v, i) => x * (i + 1));
};
console.log(quiz9(5));
// 10. str, x를 주었을 때, str의 0번째 부터 x번째까지의 문자열을 돌려주는 함수
// ex) apple, 3 -> appl
const quiz10 = (str, x) => {
  return str.slice(0, 4);
};

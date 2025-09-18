const arr = [1, 3, 5, 7, 9];
// map: 안에 있는 요소를 바꾸는 함수
// filter: 안에 있는 요소를 조건에 의하여 걸르기
// some: 하나라도 있으면 true

const first = (x) => {
  return x == 1;
};
const quiz = arr.some(first); // true

// 1. 요소중에 5 있니?
const quiz1 = arr.some((v, i) => v == 5);
console.log("quiz1:", quiz1);

// 2. 요소중에 짝수 있니?
const quiz2 = arr.some((v, i) => v % 2 == 0);
console.log("quiz2:", quiz2);

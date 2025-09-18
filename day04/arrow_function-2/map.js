const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 5보다 작으면 2배, 크면 3배
// const condition1 = arr.map((v, i) => (v < 5 ? v * 2 : v * 3));
// console.log(condition1);

// 1. 각 요소를 3배해서 출력하기
const quiz1 = arr.map((v, i) => 3 * v);
console.log("quiz1: ", quiz1);

// 2. 각 요소에서 5보다 작으면 2배, 크면 3배해서 출력하기
const quiz2 = arr.map((v, i) => (v < 5 ? v * 2 : v * 3));
console.log("quiz2: ", quiz2);

// 3. 각 요소에서 홀수면 "😀", 아니면 "😰"해서 출력하기
const quiz3 = arr.map((v, i) => (v % 2 == 1 ? "😀" : "😰"));
console.log("quiz3: ", quiz3);

// 4. 각 요소에서 뒤에 ":00" 붙혀서 출력하기
const quiz4 = arr.map((v, i) => `${v}:00`);
console.log("quiz4: ", quiz4);

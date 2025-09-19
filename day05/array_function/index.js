// map, filter, some, every
// 1. 대문자화하기
// 2. e가 들어가는 것만 살리기
// 3. mo or no가 있는지 확인하기
const coffee = ["americano", "latte", "mocha", "flat white"];

const quiz1 = coffee.map((v, i) => v.toUpperCase());
console.log("quiz1", quiz1);
const quiz2 = coffee.filter((v, i) => v.includes("e"));
console.log("quiz2", quiz2);
const quiz3 = coffee.some((v, i) => v.includes("mo") || v.includes("no"));
console.log(quiz3);
const quiz4 = coffee.find((v) => v.length <= 5);
console.log(quiz4);
const quiz5 = coffee.findIndex((v) => v.length <= 5);
console.log(quiz5);

const words = ["ice", "cream", "cake", "jmt"];
const a6 = words.join(" "); // 'ice cream cake jmt
console.log(a6);

const arr = [1, 2, 3, 4, 5];
const a7 = arr.reduce((a, c) => a + c);
console.log(a7);

// 총 문자의 길이
const a8 = coffee.map((v) => v.length).reduce((a, c) => a + c);
console.log(a8);

const a9 = coffee.join("").length;
console.log(a9);

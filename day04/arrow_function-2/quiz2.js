const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 1. 5 이하만 살리기
const quiz1 = arr.filter((v, i) => v <= 5);
console.log(quiz1);

// 2. 2, 5만 살리기
const quiz2 = arr.filter((v, i) => v == 2 || v == 5);
console.log(quiz2);

// 3. 짝수만 살리기
const quiz3 = arr.filter((v, i) => v % 2 == 0);
console.log(quiz3);

// 4. 자기숫자의 제곱했을때, 50보다 작은수만 살리기
const quiz4 = arr.filter((v, i) => v ** 2 <= 50);
console.log(quiz4);

const arr = [1, 3, 5, 7, 9];
// map: 안에 있는 요소를 바꾸는 함수
// filter: 안에 있는 요소를 조건에 의하여 걸르기

const biggerFive = (x) => {
  return x >= 5;
};
console.log(arr.filter(biggerFive));

// 3이상 7이하만 살리기
console.log(arr.filter((v, i) => v >= 3 && v <= 7));

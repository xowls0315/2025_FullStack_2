const fruits = ["watermelon", "apple", "melon", "grape", "banana", "peach", "kiwi", "pineapple", "strawberry", "orange", "plum"];

// 1. 배열의 요소들을 문자 길이로 바꾸기
const quiz1 = fruits.map((v, i) => v.length);
console.log(quiz1);

// 2. 배열의 요소들이 6글자 이상이면 대문자화하기 아니면 소문자화
const quiz2 = fruits.map((v, i) => (v.length >= 6 ? v.toUpperCase() : v.toLowerCase()));
console.log(quiz2);

// 3. 배열의 요소들이 a or e가 들어가면 "꿀맛"으로 바꾸고 아니면 "노맛"으로 바꾸기
const quiz3 = fruits.map((v, i) => (v.includes("a") || v.includes("e") ? "꿀맛" : "노맛"));
console.log(quiz3);

// 4. 배열의 요소들을 첫번째 글자만 대문자화하고 나머지 소문자화하기(ex) Watermelon
const quiz4 = fruits.map((v, i) => v[0].toUpperCase() + v.slice(1).toLowerCase());
console.log(quiz4);

// 5. 배열의 요소들을 오브젝트 타입으로 {name: 과일이름, length: 과일이름길이}으로 바꾸기
const quiz5 = fruits.map((v, i) => ({ name: v, length: v.length }));
console.log(quiz5);

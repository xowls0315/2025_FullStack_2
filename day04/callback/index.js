// boolean, string, number, object, array, function
// 콜백함수:
// const happy = () => {
//   console.log("해피해피해피");
// };
// const test = (x) => {
//   console.log("테스트 시작");
//   x(); // [콜백함수]
//   console.log("테스트 끝");
// };

// 김치볶음밥, 라면, 후라이
// 요리함수 사용하여 콜백함수를 통해서 구현하기

const cook = (x) => {
  console.log("요리 시작");
  x();
  console.log("요리 끝");
};

const kimchiRice = () => {
  console.log("김치 볶기");
  console.log("밥 넣고 볶기");
  console.log("김치볶음밥 끝");
};
const ramen = () => {
  console.log("물 끓이기");
  console.log("스프 넣기");
  console.log("면 넣기");
  console.log("라면 끝");
};
const fry = () => {
  console.log("후라이팬 불에 달구기");
  console.log("기름 두르기");
  console.log("계란 깨서 넣기");
  console.log("후라이 끝");
};

cook(kimchiRice);
console.log("===========");
cook(ramen);
console.log("===========");
cook(fry);
console.log("===========");
cook(fry());

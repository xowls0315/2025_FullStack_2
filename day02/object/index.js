// 기본 타입: String, Number, Boolean, Undefined, Null[없음]
// 참조 타입: object
// [key - value]
// const coffee = {
//   name: "아메리카노",
//   price: 3000,
//   bean: "스페셜원두",
// };
// // car object type
// // name:, brand:, price:, color:
// const car = {
//   name: "레이",
//   brand: "기아",
//   price: 2000,
//   color: "black",
// };

// console.log(car);
// console.log(car.color); // dot 접근
// console.log(car["color"]); // bracket 접근
// console.log(car.capacity); // 존재하지 않으면 undefined

// car.options = "날개"; // 추가
// console.log(car.options);

// delete car.color; // 삭제
// console.log(car.color);

// car.color = "민트색";
// console.log(car.color);

// 선생님 이름
// 선생님 나이
// 선생님 mbti
// 학생수
// 진행과목
// 수업시간

const course = {
  teacher: {
    name: "이름",
    age: "30",
    mbti: "entp",
  },
  studentNum: 10,
  subject: "programming",
  time: "09:30 ~ 18:30",
};
console.log(course.teacher.age);

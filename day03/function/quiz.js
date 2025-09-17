// 1. 홀수짝수를 알려주는 함수를 만들고
// 함수를 이용해서 콘솔로그로 나타내기
function oddEven(x) {
  return x % 2 == 0 ? console.log("짝수") : console.log("홀수");
}
oddEven(2);
oddEven(3);

// 2. 어떠한 숫자를 넣었을 때 10보다 크면
// 💛를 돌려주고, 작으면 🐨를 돌려주는 함수를 만들고
// 함수를 이용해서 콘솔로그로 나타내기
function num(x) {
  return x > 10 ? console.log("💛") : console.log("🐨");
}
num(15);
num(5);

// 3. 어떠한 아이스크림 맛을 주면,
// ~~맛보다 바.로.너 를 돌려주는 함수 만들고
// 함수를 이용해서 콘솔로그로 나타내기
function icecream(x) {
  return console.log(`${x}맛보다 바.로.너`);
}
icecream("초코");

// 4. x, y를 주었을 때, x가 y보다 크면 x의 y 제곱을 돌려주고
// 아니면 오브젝트로 {first:x, second:y} 함수 만들기
function fourth(x, y) {
  return x > y ? x ** y : { first: x, second: y };
}
console.log(fourth(10, 5));
console.log(fourth(6, 15));

// 5. x, y, z를 주었을 때, 가장 큰 수를 돌려주는 함수 만들기
function fifth(x, y, z) {
  return x > y ? (x > z ? x : z > y ? z : y) : y > z ? y : z;
}
console.log(fifth(5, 10, 15));
console.log(fifth(5, 15, 10));
console.log(fifth(10, 5, 15));
console.log(fifth(10, 15, 5));
console.log(fifth(15, 5, 10));
console.log(fifth(15, 10, 5));

// 6. year, month, date를 주었을 때,
// year-month-date로 돌려주는 함수 만들기
function sixth(year, month, date) {
  return `${year}-${month}-${date}`;
}
console.log(sixth("2025", "09", "17"));

// 7. burger, side, drink를 매개변수 넣으면
// 오브젝트로 {main: burger, side: side, drink: drink} 나오도록 하기
function seventh(burger, side, drink) {
  return { main: burger, side: side, drink, drink };
}
console.log(seventh("치즈버거", "감자튀김", "제로콜라"));

//8. krw와 nation를 매개변수로 넣으면
// nation이 usa 원화를 달러화로 바꿔서 돌려주고
// nation이 jpy 원화를 엔화로 바꿔서 돌려주고
// nation이 thb 원화를 바트로 바꿔서 돌려주고
// 그외는 그냥 원화를 돌려주기
function eighth(krw, nation) {
  if (nation == "usa") {
    return `${krw}원은 ${krw / 1381.6} 달러!!`;
  } else if (nation == "jpy") {
    return `${krw}원은 ${krw / 9.43} 엔!!`;
  } else if (nation == "thb") {
    return `${krw}원은 ${krw / 43.54} 바트!!`;
  } else {
    return `${krw}원은 ${krw}원 입니다!!`;
  }
}
console.log(eighth(10000, "usa"));
console.log(eighth(10000, "jpy"));
console.log(eighth(10000, "thb"));
console.log(eighth(10000, "krw"));

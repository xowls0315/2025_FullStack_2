const calculator = {
  num: 0,
  add: function (x, y) {
    return x + y;
  },
  minus: function (x, y) {
    return x - y;
  },
  multiply: function (x, y) {
    return x * y;
  },
  square: function (x, y) {
    return x ** y;
  },
};

// console.log(calculator.num);
// console.log(calculator.add(5, 10));
// console.log(calculator.add);
// console.log(calculator.multiply(5, 10));
// console.log(calculator.minus(5, 10));

// object 타입으로

// baskinrabbins
// icecream 정의하고 매개변수는 flavor
// flavor 맛 아이스크림 나왔습니다.
// coffee 정의하고 매개변수 shots
// 샷 shots번 들어간 커피가 나왔습니다.
// cake 정의하고 매개변수 topping
// topping이 추가된 아이스케이크 나왔습니다.
const baskinrabbins = {
  icecream: function (flavor) {
    return `${flavor} 맛 아이스크림 나왔습니다.`;
  },
  coffee: function (shots) {
    return `샷 ${shots}번 들어간 커피가 나왔습니다.`;
  },
  cake: function (topping) {
    return `${topping}이(가) 추가된 아이스케이크 나왔습니다.`;
  },
};
console.log(baskinrabbins.icecream("초코"));
console.log(baskinrabbins.coffee(3));
console.log(baskinrabbins.cake("콘푸로스트"));

// 오브젝트 타입인 변수 point 만들고
// x:0, y:0, up: 함수, down: 함수
const point = {
  x: 0,
  up: function () {
    return (this.x += 1);
  },
  down: function () {
    return (this.x -= 1);
  },
};
point.up();
point.up();
point.up();
point.up();
point.up();
console.log(point.x);

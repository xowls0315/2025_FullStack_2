// 일반 함수[구문법]
function add(x, y) {
  return x + y;
}
// 화살표 함수[신문법]
const add1 = (x, y) => {
  return x + y;
};

// 빼기 화살표함수 x, y
const sub = (x, y) => {
  return x - y;
};

// 1. name, age를 주면 오브젝트 타입으로 돌려주기
const quiz1 = (name, age) => {
  return {
    name: name,
    age: age,
  };
};

// 2. menu, menu1, menu2를 주면
// name: menu, price:0 으로 각각 오브젝트 타입으로 변환해서
// 배열타입으로 돌려주기
const quiz2 = (menu, menu1, menu2) => {
  return [
    {
      name: menu,
      price: 0,
    },
    {
      name: menu1,
      price: 0,
    },
    {
      name: menu2,
      price: 0,
    },
  ];
};

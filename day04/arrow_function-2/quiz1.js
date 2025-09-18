const venti = [
  {
    name: "iced americano",
    price: 2000,
    shots: 2,
  },
  {
    name: "iced latte",
    price: 3000,
    shots: 2,
  },
  {
    name: "iced mocha",
    price: 3000,
    shots: 2,
  },
  {
    name: "strawberry latte",
    price: 4000,
    shots: 0,
  },
  {
    name: "mango ade",
    price: 3500,
    shots: 0,
  },
];

// 1. 전체에 shots 하나 올려서 돌려주기
const quiz1 = venti.map((v, i) => (v.shots += 1));
console.log(quiz1);

// 2. 가격이 3500원 이상이면 +500원, 아니면 +200원해서 돌려주기
const quiz2 = venti.map((v, i) => (v.price >= 3500 ? (v.price += 500) : (v.price += 200)));
console.log(quiz2);

// 3. 전체 이름 앞에 venti를 붙혀서 돌려주기
const quiz3 = venti.map((v, i) => (v.name = `venti ${v.name}`));
console.log(quiz3);

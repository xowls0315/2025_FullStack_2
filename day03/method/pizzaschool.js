// 피자 가게를 운영하는 오브젝트 만들어보세요.

// 속성
// sales: 총 매출 (초기값 0)
// menus: 메뉴 배열 (피자 이름, 가격, 재고 포함)

// 메서드
// order(menumenuNuberber)
// 해당 메뉴 번호의 재고가 1개 이상이면:
// - 매출에 가격 추가
// - 재고 1 감소
// - 콘솔에 "~~ 피자가 판매되었습니다. 현재 매출: ~~원" 출력
// 재고가 0개라면:
// - "~~ 피자는 품절입니다." 출력

// restock(menumenuNuberber)
// - 해당 메뉴 번호의 재고 +1
// - "~~ 피자 재고가 충당되었습니다. 현재 재고: ~개" 출력

// add(name, price, stock)
// - 메뉴배열에 새로운 데이터 추가하기
// - 단, name 빈 문자열이거나 price가 음수거나 stock가 음수이면
// - 콘솔에 "올바르지 않은 데이터입니다." 출력

const pizza = {
  sales: 0,
  menus: [
    { name: "치즈 피자", price: 5000, stock: 3 },
    { name: "페페로니 피자", price: 6000, stock: 2 },
    { name: "쉬림프 피자", price: 7000, stock: 2 },
    { name: "스테이크 피자", price: 8000, stock: 0 },
  ],
  order: function (menuNuber) {
    if (this.menus[menuNuber - 1].stock >= 1) {
      this.sales += this.menus[menuNuber - 1].price;
      this.menus[menuNuber - 1].stock -= 1;
      console.log(`${this.menus[menuNuber - 1].name}가 판매되었습니다. 현재 매출: ${this.sales}원 `);
    } else {
      console.log(`${this.menus[menuNuber - 1].name}는 재고가 품절입니당`);
    }
  },
  restock: function (menuNuber) {
    this.menus[menuNuber - 1].stock += 1;
    console.log(`${this.menus[menuNuber - 1].name} 재고가 하나 충당되었습니다.`);
  },
  add: function (name, price, stock) {
    if (!(typeof name != "string" || name == "" || price < 0 || stock < 0)) {
      this.menus.push({ name: name, price: price, stock: stock });
    } else {
      console.log("올바르지 않은 데이터입니다.");
    }
  },
};

console.log(pizza.sales);
pizza.order(1);
pizza.order(2);
pizza.order(3);
pizza.order(4);
console.log(pizza.sales);
pizza.restock(4);
pizza.order(4);
console.log(pizza.sales);

pizza.add("파인애플 피자", 9000, 2);
// pizza.menus.push({ name: "파인애플 피자", price: 9000, stock: 2 });
console.log(pizza.menus);
pizza.add("", 9000, 2);
console.log(pizza.menus);
pizza.add("이상한 피자", -9000, 2);
console.log(pizza.menus);
pizza.add("이상한 피자", 9000, -2);
console.log(pizza.menus);

pizza.order(5);
console.log(pizza.sales);

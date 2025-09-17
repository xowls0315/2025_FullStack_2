// venti
// sales: 0
// menus: 아아 2000, 라떼 3000, 에이드 3800
// sell: 함수(num: 1,2,3)
// sell 함수가 실행되면
// 콘솔로 아아 2000원이 판매되었습니다.
// 콘솔로 현재 매출 ~~원 입니다.

const venti = {
  sales: 0,
  menus: [
    { name: "아아", price: 2000 },
    { name: "라떼", price: 3000 },
    { name: "에이드", price: 3000 },
  ],
  sell: function (num) {
    this.sales += this.menus[num - 1].price;
    console.log(`${this.menus[num - 1].name} ${this.menus[num - 1].price}원이 판매되었습니다`);
    console.log(`현재 매출은 ${this.sales}원 입니다.`);
  },
};

// console.log(venti.sales);
// venti.sell(1);
// venti.sell(2);
// venti.sell(3);
// console.log(venti.sales);

// 서브웨이
// 매출: 0
// 메뉴: 서브웨이클럽 7000 재고:3, BLT 7500 재고:2, 에그마요 5000 재고:2, 쉬림프 8000 재고:0
// 판매: 함수 [매출올리고, 콘솔로 판매내용 알려주고, 재고하나 깎아야함, 단 재고가 1개이상일 경우, 0개면 매출안올라가고 해당 재고는 품절입니당]
// 재고충당: 함수 [메뉴번호 매개변수 해당 메뉴의 재고가 하나 올라감]

const subway = {
  sales: 0,
  menu: [
    { name: "서브웨이클럽", price: 7000, stock: 3 },
    { name: "BLT", price: 7500, stock: 2 },
    { name: "에그마요", price: 5000, stock: 2 },
    { name: "쉬림프", price: 8000, stock: 0 },
  ],
  sell: function (num) {
    if (this.menu[num - 1].stock >= 1) {
      this.sales += this.menu[num - 1].price;
      this.menu[num - 1].stock -= 1;
      console.log(`${this.menu[num - 1].name} ${this.menu[num - 1].price}원이 판매되었습니다`);
      console.log(`현재 매출은 ${this.sales}원 입니다.`);
    } else {
      console.log(`${this.menu[num - 1].name} 메뉴의 재고는 품절입니당`);
    }
  },
  stockPlus: function (num) {
    this.menu[num - 1].stock += 1;
    console.log(`${this.menu[num - 1].name}의 재고가 하나 추가되었습니다.`);
  },
};

console.log(subway.sales);
subway.sell(1);
subway.sell(2);
subway.sell(3);
subway.sell(4);
console.log(subway.sales);
subway.stockPlus(4);
subway.sell(4);
console.log(subway.sales);

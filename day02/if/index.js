const num = +prompt("숫자 입력:");
if (num > 0) {
  console.log(`${num}은 0보다 큽니다.`);
} else if (num == 0) {
  console.log(`${num}은 0 입니다.`);
} else {
  console.log(`${num}은 0보다 작습니다`);
}
console.log("프로그램 끝");

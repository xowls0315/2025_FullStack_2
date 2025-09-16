const user_age = +prompt("나이 몇임?");
const user_bus = +prompt("버스 노선 몇번임?");

if (user_age <= 7 || user_age >= 65) {
  alert("무료임");
} else if (user_bus == 1 && user_age >= 8 && user_age <= 19) {
  alert(`${user_bus}번 시내버스는 ${1200 * 0.7}원 버스 요금을 내야합니다.`);
} else if (user_bus == 2 && user_age >= 8 && user_age <= 19) {
  alert(`${user_bus}번 광역버스는 ${2000 * 0.7}원 버스 요금을 내야합니다.`);
} else if (user_bus == 3 && user_age >= 8 && user_age <= 19) {
  alert(`${user_bus}번 마을버스는 ${1000 * 0.7}원 버스 요금을 내야합니다.`);
} else if (user_bus == 1) {
  alert(`${user_bus}번 시내버스는 ${1200}원 버스 요금을 내야합니다.`);
} else if (user_bus == 2) {
  alert(`${user_bus}번 광역버스는 ${2000}원 버스 요금을 내야합니다.`);
} else if (user_bus == 3) {
  alert(`${user_bus}번 마을버스는 ${1000}원 버스 요금을 내야합니다.`);
} else {
  alert("다시 입력하세요.");
}

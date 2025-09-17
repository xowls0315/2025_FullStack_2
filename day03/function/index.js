// function - 함수
// 함수: 마술상자

function makeCircle(x) {
  return `${x}색 동그라미`;
}

// 숫자 넣으면 세배로 돌려주는 함수 만들기
function three(x) {
  return 3 * x;
}

// 문자를 넣으면 맨뒤에 느낌표 !!! 붙혀서 돌려주는 함수만들기
function exclamation(x) {
  return `${x}!!!`;
}

const a = makeCircle("핑꾸");
console.log(a);

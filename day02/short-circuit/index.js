// short-circuit[단축평가]
// ||[or]
// const a = false || "떡보끼"; // "떡보끼"
// const c = 0 || "" || "콜라" || "제로콜라"; // "콜라"

// 유저에게 닉네임을 입력받고
// alert으로 ~~~님 환영합니다!
// 만약에 닉네임을 빈 문자로 입력하면
// alert으로 guest님 환영합니다!
// const nickname = prompt("닉네임을 입력: ");
// // nickname == "" ? alert("guest님 환영합니다!") : alert(`${nickname}님 환영합니다!`);
// alert(`${nickname || "guest"}님 환영합니다!`);

// &&[and]
const d = false && "떡볶이"; // false
const e = true && "떡볶이"; // "떡볶이"
false && alert("ㅎㅇ"); // 아무일도 안일어남

// 유저에게 화장실비밀번호 입력을 받고
// 틀리면 아무일도 안일어나고,
// 맞으면 화장실문이 열렸습니다!
const password = Number(prompt("화장실비밀번호 입력: "));
// const result = password == 1215 ? 1215 : "";
// console.log(result);
password == 1215 && alert("화장실 문이 열렸습니다");

// 1. 점수를 입력받아 60점 이상이면 합격, 아니면 불합격 출력하기
// ex) 45 -> 불합격, 60 -> 합격
// const num = Number(prompt("점수 입력: "));
// num >= 60 ? console.log("합격") : console.log("불합격");

// 2. 두 수를 입력받아 더 큰 수를 출력하기
// ex) 5 3 입력 -> 5
let input = prompt("두 수를 입력하세요 (예: 5 3): ");

let [a, b] = input.split(" ").map(Number);
a >= b ? console.log("더 큰 수는", a) : console.log("더 큰 수는", b);

// 3. 숫자를 입력받아 양수, 음수, 0 중 하나를 출력하기
// ex) 0 -> 0, 10 -> 양수, -20 -> 음수
// const num = Number(prompt("숫자 입력: "));
// num > 0 ? console.log("양수") : num < 0 ? console.log("음수") : console.log("0");

// 4. 숫자를 입력받아 짝수인지 홀수인지 출력하기
// ex) 10 -> 짝수, -5 -> 홀수
// const num = Number(prompt("숫자 입력: "));
// num % 2 == 0 ? console.log("짝수") : console.log("홀수");

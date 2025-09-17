// 유저에게 프롬프트로
// 대문자화 해서 콘솔로 출력하기
// const user_word = prompt("단어 입력: ");
// console.log(user_word.toUpperCase());

// 1. 단어를 입력하고 10글자 이상이면
// 콘솔로 단어가 깁니다.
// 아니면 콘솔로 대문자화해서 나타내기
// const word = prompt("단어 입력: ");
// word2.length >= 10 ? console.log("단어가 깁니다") : console.log(word2.toUpperCase());

// 2. 영어문장을 입력해서 콘솔로 배열로 나타내기
// ex) i like icecream => ["i", "like", "icecream"]
// const word = prompt("단어 입력: ");
// console.log(word3.split(" "));

// 3. 유저에게 단어를 입력받고
// 소문자로 입력하면 대문자화해서 콘솔로 나타내기
// 대문자로 입력하면 소문자화해서 콘솔로 나타내기
// const word = prompt("단어 입력: ");
// word === word.toLowerCase() ? console.log(word.toUpperCase()) : console.log(word.toLowerCase());

// 4. 유저에게 이메일을 입력받고, @가 포함하면
// 올바른 이메일입니다. 콘솔 출력
// 아니면 바르지 않는 이메일입니다. 콘솔 출력
const email = prompt("이메일 입력: ");
email.includes("@") ? console.log("올바른 이메일입니다.") : console.log("바르지 않는 이메일입니다.");

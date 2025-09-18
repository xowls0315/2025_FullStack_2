const fruits = ["watermelon", "apple", "melon", "grape", "banana", "peach", "kiwi", "pineapple", "strawberry", "orange", "plum"];

// 1. 6글자 이상만 과일 남기기
const quiz1 = fruits.filter((v, i) => v.length >= 6);
console.log(quiz1);

// 2. 알파벳 m이 들어가면 없애기
const quiz2 = fruits.filter((v, i) => !v.includes("m"));
console.log(quiz2);

// 3. a, e, i, o, u로 시작하는 과일은 걸러주기
// const quiz3 = fruits.filter((v, i) => !(v.startsWith("a") || v.startsWith("e") || v.startsWith("i") || v.startsWith("o") || v.startsWith("u")));
// console.log(quiz3);
const quiz3 = fruits.filter((v, i) => !["a", "e", "i", "o", "u"].some((ch) => v.startsWith(ch)));
console.log(quiz3);

// 4. 과일에 i, p 들어가면 살려주기
const quiz4 = fruits.filter((v, i) => ["i", "p"].some((ch) => v.includes(ch)));
console.log(quiz4);

/// 5. a, p로 시작하고 e로 끝나는 과일 나타내기
const quiz5 = fruits.filter((v, i) => ["a", "p"].some((ch) => v.startsWith(ch))).filter((v, i) => v.endsWith("e"));
console.log(quiz5);

// 6. i, e를 포함하고 문자 길이가 4글자 이상인 애들만 찾고, 대문자화하기
const quiz6 = fruits.filter((v, i) => ["i", "e"].some((ch) => v.includes(ch))).map((v) => v.toUpperCase());
console.log(quiz6);

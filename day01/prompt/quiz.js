// 1. 태어난 년도, 월, 일을 각각 프롬프트로 묻고
// 당신의 태어난 때는 ~~년 ~~월 ~~일 이시군요!
const year = prompt("태어난 년도는?");
const month = prompt("태어난 월은?");
const day = prompt("태어난 일은?");

console.log(`당신의 태어난 때는 ${year}년 ${month}월 ${day}일 이시군요!!`);

// 2. 초등학교, 중학교, 고등학교를 각가 프롬프트로 묻고
// 당신의 학교 이력
// ~~ 초등학교, ~~ 중학교, ~~ 고등학교
const elementarySchool = prompt("당신의 초등학교는?");
const middleSchool = prompt("당신의 중학교는?");
const highSchool = prompt("당신의 고등학교는?");

console.log(`당신의 학교들: ${elementarySchool}, ${middleSchool}, ${highSchool}`);

// 3. 베스킨라빈스에서 좋아하는 아이스크림 3가지를 각각 프롬프트로 묻고
// 파인트 컵에 ~~ 맛, ~~맛, ~~맛을 담아서 드립니다!
const flavor1 = prompt("베라 좋아하는맛 첫번째는?");
const flavor2 = prompt("베라 좋아하는맛 두번째는?");
const flavor3 = prompt("베라 좋아하는맛 세번째는?");

console.log(`파인트 컵에 ${flavor1}맛, ${flavor2}맛, ${flavor3}맛을 담아서 드립니다!`);

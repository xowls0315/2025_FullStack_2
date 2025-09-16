const classroom = [
  { name: "A", capacity: 20, student: 18, lecture: "java" },
  { name: "B", capacity: 20, student: 19, lecture: "python" },
  { name: "C", capacity: 20, student: 20, lecture: "javascript" },
];

// 유저한테 듣고싶은 과목을 물은 다음에
// 만약에 해당 과목의 수용 인원수가 가능하면, 학생수를 늘리고 콘솔로그로 클래스룸 결과 보여주기
// 만약에 수용인원 불가능하면, 알럿으로 불가! 콘솔로그 클래스룸 결과보여주기

const user_lecture = prompt("듣고싶은 과목은??");
if (classroom[0].lecture == user_lecture) {
  classroom[0].student += 1;
  console.log(classroom);
} else if (classroom[1].lecture == user_lecture) {
  classroom[1].student += 1;
  console.log(classroom);
} else {
  alert("불가능!!");
  console.log(classroom);
}

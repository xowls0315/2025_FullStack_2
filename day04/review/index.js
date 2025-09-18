// 1. 영화제목과 좌석[A1, D2, E5, ...], 그리고 시간을 넣으면
// 끝시간이 + 2시간 더해서
// 오브젝트 타입으로 돌려주는 함수 만들기
// 단 타입 위배시 문자열 "에러입니다" 돌려주기

const quiz1 = function (title, seat, time) {
  if (typeof title !== "string" || !Array.isArray(seat) || typeof time !== "string") {
    return "에러입니다";
  }

  const [hourStr, minStr] = time.split(":");
  let hour = Number(hourStr);
  const minute = Number(minStr);

  if (isNaN(hour) || isNaN(minute)) {
    return "에러입니다";
  }

  hour += 2; // 2시간 더하기
  if (hour >= 24) {
    hour -= 24; // 24시간 넘어가면 0시부터
  }

  // const end = `${hour.toString().padStart(2, "0")}:${minStr}`;
  const end = `${hour < 10 ? "0" + hour : hour}:${minStr}`;

  return {
    title: title,
    seat: seat,
    start: time,
    end,
  };
};

console.log(quiz1("인터스텔라", ["A1", "D2", "E5"], "12:30"));
console.log(quiz1("타이타닉", ["C1"], "23:15"));
console.log(quiz1(123, "A1", 20));

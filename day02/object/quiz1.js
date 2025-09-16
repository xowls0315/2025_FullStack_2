const user_movie = +prompt("영화 종류 몇번임??");
const user_age = +prompt("몇살임??");
const user_snack = +prompt("간식 종류 몇번임??");
const user_seat = +prompt("좌석 종류 몇번임??");

const ticket = {
  movie: {
    1: 12000,
    2: 15000,
    3: 18000,
  },
  snack: {
    1: 5000,
    2: 2000,
    3: 0,
  },
  seat: {
    1: 0,
    2: 5000,
    3: 10000,
  },
};

if (user_age <= 7) {
  alert(`당신의 최종 요금은 ${ticket.movie[user_movie] * 0.5 + ticket.snack[user_snack] + ticket.seat[user_seat]}원 입니다!!`);
} else if (user_age >= 8 && user_age <= 19) {
  alert(`당신의 최종 요금은 ${ticket.movie[user_movie] * 0.7 + ticket.snack[user_snack] + ticket.seat[user_seat]}원 입니다!!`);
} else if (user_age >= 65) {
  alert(`당신의 최종 요금은 ${ticket.movie[user_movie] * 0 + ticket.snack[user_snack] + ticket.seat[user_seat]}원 입니다!!`);
} else {
  alert(`당신의 최종 요금은 ${ticket.movie[user_movie] + ticket.snack[user_snack] + ticket.seat[user_seat]}원 입니다!!`);
}

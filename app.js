const countdown = () => {
  const countDate = new Date("may 31, 2022 00:00:00").getTime();
  const now = new Date().getTime();
  const gap = countDate - now;

  // how does the time works
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  //calculate the time
  const textDay = Math.floor(gap / day);
  const textHour = Math.floor((gap % day) / hour);
  const textMinute = Math.floor((gap % hour) / minute);
  const textSecond = Math.floor((gap % minute) / second);

  //   console.log(textDay);
};

countdown();

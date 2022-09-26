const timeLeft = document.getElementById("time-left");
const myBirthday = new Date("09/28/2022");
const second = 1000;
const minutes = second * 60;
const hour = minutes * 60;
const day = hour * 24;
let timer;
console.log(myBirthday);
function countdown() {
  const today = new Date();
  const timeSpan = myBirthday - today;
  if(timeSpan <= -day){
    timeLeft.innerHTML = "i made my Birthday special for me Because my happiness is my responsibility"
    clearInterval(timer)
    return
  }
  if (timeSpan <= 0) {
    timeLeft.innerHTML = "Happy Birthday 🎂 RICHELLE 🎉🎊🎈";
    clearInterval(timer)
    return
  }
  const daysLeft = Math.floor(timeSpan/day)
  console.log(daysLeft);
  const hoursLeft = Math.floor((timeSpan % day) / hour)
  const minutesLeft = Math.floor((timeSpan % hour) / minutes)
  const secondsLeft = Math.floor((timeSpan % minutes) / second)
  timeLeft.innerHTML = ` ${daysLeft} day  ${hoursLeft} hours ${minutesLeft} minutes  ${ secondsLeft} seconds Left for my Birthday`  
}
timer = setInterval(countdown, second);

const secondHand = document.querySelector(".second-hand");
const minHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");
function setDate() {
  const date = new Date();
  const seconds = date.getSeconds();
  const secondsDegrees = (seconds / 60) * 360 + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  const minutes = date.getMinutes();
  const minutesDegrees = (minutes / 60) * 360 + (seconds / 60) * 6 + 90;
  minHand.style.transform = `rotate(${minutesDegrees}deg)`;
  const hour = date.getHours();
  const hoursDegrees = (hour / 12) * 360 + (mins / 60) * 30 + 90;
  minHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

setInterval(setDate, 1000);

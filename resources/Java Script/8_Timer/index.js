let sw1 = document.getElementById("sw");
let d1 = new Date();

let time = new Date();
time.setHours(0);
time.setMinutes(0);
time.setSeconds(0);
time.setMilliseconds(0);
let i = 0;
function displayTime() {
  hours = time.getHours();
  minutes = time.getMinutes();
  seconds = time.getSeconds();
  millisecond = time.getMilliseconds();
  sw1.innerHTML = hours + ":" + minutes + ":" + seconds + ":" + millisecond;

  i = i + 100;
  now = time.getTime() + i;
  console.log(now + 100);
}

function start1() {
  let inetrval1 = setInterval(displayTime, 1000);
  console.log(inetrval1)
}
function stop1() {
console.log(inetrval1);
}

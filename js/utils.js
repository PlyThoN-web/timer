function getTimestamp() {
  let d = new Date();
  return d.getTime();
  // Cмотри документалку про эти два метода, свяжи их с кликом
  // на кнопку начать игру и hits = 10
}

function randomDivId() {
  let b = Math.floor(Math.random() * 6) + 1;
  let n = Math.floor(Math.random() * 6) + 1;
  let sum = b * n
  return `#slot-${sum}`;
}

// Drop your JS here ;)

// The Clock
const showTime = async () => { while (true) {

  const elClock = document.querySelector('#clock');
  const d = new Date();
  const h = d.getHours();
  const m = String(d.getMinutes()).padStart(2, '0');

  elClock.innerHTML = `${h}:${m}`;

  await new Promise(resolve => setTimeout(resolve, 1000));
}};
showTime();
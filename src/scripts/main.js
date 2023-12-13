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


// The Date
const el = document.querySelector('#date');
const date = new Date();
const locale = "fr-FR";
var options = {weekday: "long", month: "short", day: "numeric"};

el.innerHTML = date.toLocaleDateString(`${locale}`, options).toUpperCase();

// The Background
const video = document.getElementById("theBackground");
const btn = document.getElementById("playPause");

/**
 * @function videoControl
 * If the status of the background video is "paused", 
 * it displays the play button to start the video loop.
 * If it's already playing (default)...well, it stops it.
 * @summary The classic play/pause.
 * 
 */
const videoControl = () => {
  if (video.paused) {
    video.play();
    btn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="currentColor" d="M14 10h-2v12h2V10zm6 0h-2v12h2V10z"/><path fill="currentColor" d="M16 4A12 12 0 1 1 4 16A12 12 0 0 1 16 4m0-2a14 14 0 1 0 14 14A14 14 0 0 0 16 2Z"/></svg>';
  } else {
    video.pause();
    btn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="currentColor" d="M11 23a1 1 0 0 1-1-1V10a1 1 0 0 1 1.447-.894l12 6a1 1 0 0 1 0 1.788l-12 6A1.001 1.001 0 0 1 11 23Zm1-11.382v8.764L20.764 16Z"/><path fill="currentColor" d="M16 4A12 12 0 1 1 4 16A12 12 0 0 1 16 4m0-2a14 14 0 1 0 14 14A14 14 0 0 0 16 2Z"/></svg>';
  }
}
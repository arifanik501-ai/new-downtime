function showTime() {
  const el = document.getElementById('currentTime');
  if (el) el.textContent = new Date().toUTCString();
}
if (typeof document !== 'undefined' && document.getElementById('currentTime')) {
  showTime();
  setInterval(showTime, 1000);
}

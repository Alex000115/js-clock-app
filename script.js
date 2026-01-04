function update(){
  const now = new Date();
  const time = now.toLocaleTimeString();
  document.getElementById('time').innerText = time;
}
setInterval(update, 1000);
update();

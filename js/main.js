let startTime;
let stopTime = 0;
let timeoutID;
let running = false;

//スタートボタン
function startStopwatch() {
  if (running) return;
  document.getElementById("stop_button").disabled = false;
  document.getElementById("start_button").disabled = true;
  document.getElementById("reset_button").disabled = true;
  startTime = Date.now();
  console.log(startTime);
  displayTime();
  running = true;
}

//ストップボタン
function stopStopwatch() {
  if (!running) return;
  document.getElementById("reset_button").disabled = false;
  document.getElementById("start_button").disabled = false;
  document.getElementById("stop_button").disabled = true;
  clearTimeout(timeoutID);
  stopTime += Date.now() - startTime;
  running = false;
}

//リセットボタン
function resetStopwatch() {
  if (running) return;
  document.getElementById("start_button").disabled = false;
  document.getElementById("stop_button").disabled = true;
  document.getElementById("reset_button").disabled = true;
  document.getElementById("time_display").textContent = "00:00:00.000";
  stopTime = 0;
  running = false;
}

//時間表示
function displayTime() {
  const currentTime = new Date(Date.now() - startTime + stopTime);
  const h = String(currentTime.getHours() - 9).padStart(2, "0");
  const m = String(currentTime.getMinutes()).padStart(2, "0");
  const s = String(currentTime.getSeconds()).padStart(2, "0");
  const ms = String(currentTime.getMilliseconds()).padStart(3, "0");
  document.getElementById("time_display").textContent = `${h}:${m}:${s}.${ms}`;
  timeoutID = setTimeout(displayTime, 10);
}

const stopwatchText = document.getElementById("stopwatch-text");
let swSeconds = 0;
let swInterval = null;

function updateStopwatch() {
  swSeconds++;
  const sec = String(swSeconds % 60).padStart(2, "0");
  const min = String(Math.floor(swSeconds / 60) % 60).padStart(2, "0");
  const hrs = String(Math.floor(swSeconds / 3600)).padStart(2, "0");
  stopwatchText.innerText = `${hrs}:${min}:${sec}`;
}

document.getElementById("sw-start").addEventListener("click", () => {
  if (swInterval) return;
  swInterval = setInterval(updateStopwatch, 1000);
});

document.getElementById("sw-stop").addEventListener("click", () => {
  clearInterval(swInterval);
  swInterval = null;
});

document.getElementById("sw-reset").addEventListener("click", () => {
  clearInterval(swInterval);
  swInterval = null;
  swSeconds = 0;
  stopwatchText.innerText = "00:00:00";
});

const timerText = document.getElementById("timer-text");
let timerTotalSeconds = 0;
let timerInterval = null;

function updateTimer() {
  if (timerTotalSeconds <= 0) {
    clearInterval(timerInterval);
    timerInterval = null;
    alert("⏰ Time's up!");
    return;
  }
  timerTotalSeconds--;
  const min = String(Math.floor(timerTotalSeconds / 60)).padStart(2, "0");
  const sec = String(timerTotalSeconds % 60).padStart(2, "0");
  timerText.innerText = `${min}:${sec}`;
}

document.getElementById("timer-start").addEventListener("click", () => {
  if (timerInterval) return;

  if (timerTotalSeconds <= 0) {
    const inputMin = parseInt(document.getElementById("timer-input").value);
    if (isNaN(inputMin) || inputMin < 0) {
      alert("Please enter a valid number of minutes");
      return;
    }
    timerTotalSeconds = inputMin * 60;
  }

  updateTimer();
  timerInterval = setInterval(updateTimer, 1000);
});

document.getElementById("timer-stop").addEventListener("click", () => {
  clearInterval(timerInterval);
  timerInterval = null;
});

document.getElementById("timer-reset").addEventListener("click", () => {
  clearInterval(timerInterval);
  timerInterval = null;
  timerTotalSeconds = 0;
  timerText.innerText = "00:00";
});

function startTimer() {
  if (timerInterval) return;
  timerInterval = setInterval(updateTime, 1000);
}

function stopTimer() {
  clearInterval(timerInterval);
  timerInterval = null;
}

function resetTimer() {
  stopTimer();
  timeInSync = 0;
  timerTextElem.innerText = "00:00:00";
}

startBtn.addEventListener("click", startTimer);
stopBtn.addEventListener("click", stopTimer);
resetBtn.addEventListener("click", resetTimer);

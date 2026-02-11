import { getNumber, saveNumber } from "./storage.js";

let time = 25 * 60;
let interval;

function updateDisplay() {
  let min = Math.floor(time / 60);
  let sec = time % 60;

  document.getElementById("timerDisplay").textContent =
    `${min}:${sec < 10 ? "0" : ""}${sec}`;
}

document.getElementById("startBtn").onclick = () => {
  clearInterval(interval);

  interval = setInterval(() => {
    time--;

    if (time <= 0) {
      clearInterval(interval);

      let total = getNumber("studyMinutes");
      saveNumber("studyMinutes", total + 25);

      alert("🎉 Pomodoro complete! Progress updated.");

      time = 25 * 60;
    }

    updateDisplay();
  }, 1000);
};

document.getElementById("resetBtn").onclick = () => {
  clearInterval(interval);
  time = 25 * 60;
  updateDisplay();
};

updateDisplay();
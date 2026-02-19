let timeLeft = 25 * 60; // 25 minutes in seconds
let timerInterval = null;

const timerDisplay = document.getElementById("timerDisplay");
const startBtn = document.getElementById("startBtn");
const resetBtn = document.getElementById("resetBtn");

// Format time into MM:SS
function updateDisplay() {
  let minutes = Math.floor(timeLeft / 60);
  let seconds = timeLeft % 60;

  timerDisplay.textContent =
    `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
}

// Start Timer
function startTimer() {
  if (timerInterval) return; // prevents multiple intervals

  timerInterval = setInterval(() => {
    if (timeLeft > 0) {
      timeLeft--;
      updateDisplay();
    } else {
      clearInterval(timerInterval);
      timerInterval = null;
      alert("Time’s up!");
    }
  }, 1000);
}

// Reset Timer
function resetTimer() {
  clearInterval(timerInterval);
  timerInterval = null;
  timeLeft = 25 * 60;
  updateDisplay();
}

// Button Events
startBtn.addEventListener("click", startTimer);
resetBtn.addEventListener("click", resetTimer);

// Initialize display
updateDisplay();
function updateStreak() {
  let streak = localStorage.getItem("streak") || 0;
  let best = localStorage.getItem("bestStreak") || 0;

  let lastDate = localStorage.getItem("lastStudyDate");
  let today = new Date().toDateString();

  if (lastDate !== today) {
    streak++;
    localStorage.setItem("streak", streak);
    localStorage.setItem("lastStudyDate", today);

    if (streak > best) {
      best = streak;
      localStorage.setItem("bestStreak", best);
    }
  }

  document.getElementById("streakCount").innerText = streak;
  document.getElementById("bestStreak").innerText = best;
}

document.addEventListener("DOMContentLoaded", updateStreak);

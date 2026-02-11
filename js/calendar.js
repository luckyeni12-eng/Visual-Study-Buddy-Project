// Get references to form and list
const sessionForm = document.getElementById("sessionForm");
const sessionList = document.getElementById("sessionList");

// Load sessions from localStorage on page load
let sessions = JSON.parse(localStorage.getItem("sessions")) || [];
renderSessions();

// Add new session
sessionForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const topic = document.getElementById("topic").value.trim();
  const date = document.getElementById("date").value;

  if (!topic || !date) return;

  const newSession = {
    id: Date.now(),
    topic,
    date,
    done: false // track if session is completed
  };

  sessions.push(newSession);
  localStorage.setItem("sessions", JSON.stringify(sessions));

  renderSessions();
  sessionForm.reset();
});

// Render all sessions
function renderSessions() {
  sessionList.innerHTML = "";

  if (sessions.length === 0) {
    sessionList.innerHTML = "<li>No upcoming sessions.</li>";
    return;
  }

  sessions.sort((a, b) => new Date(a.date) - new Date(b.date));

  sessions.forEach(session => {
    const li = document.createElement("li");
    li.className = "session-item";

    li.innerHTML = `
      <div class="session-info ${session.done ? 'done' : ''}">
        <strong>${session.topic}</strong><br>
        <small>${new Date(session.date).toLocaleDateString()}</small>
      </div>
      <button class="delete-btn" data-id="${session.id}">❌</button>
    `;

    // Click event for session info — now opens modal-like detail
    li.querySelector(".session-info").addEventListener("click", () => {
      const markDone = confirm(
        `Session: ${session.topic}\nDate: ${new Date(session.date).toLocaleDateString()}\n\nMark as done?`
      );
      if (markDone) {
        session.done = true;
        localStorage.setItem("sessions", JSON.stringify(sessions));
        renderSessions();
      }
    });

    // Delete session
    li.querySelector(".delete-btn").addEventListener("click", () => {
      sessions = sessions.filter(s => s.id !== session.id);
      localStorage.setItem("sessions", JSON.stringify(sessions));
      renderSessions();
    });

    sessionList.appendChild(li);
  });
}
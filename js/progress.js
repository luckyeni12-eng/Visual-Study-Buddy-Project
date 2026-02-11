document.addEventListener("DOMContentLoaded", () => {

  // Study Hours Chart
  new Chart(document.getElementById("studyChart"), {
    type: "line",
    data: {
      labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      datasets: [{
        label: "Hours Studied",
        data: [2, 3, 1, 4, 2, 5, 3],
        borderWidth: 2
      }]
    }
  });

  // Task Completion Chart
  new Chart(document.getElementById("taskChart"), {
    type: "bar",
    data: {
      labels: ["Completed", "Remaining"],
      datasets: [{
        label: "Tasks",
        data: [8, 3],
        borderWidth: 1
      }]
    }
  });

});
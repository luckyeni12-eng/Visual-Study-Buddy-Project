function loadComponent(id, file) {
  fetch(file)
    .then(res => res.text())
    .then(data => {
      const el = document.getElementById(id);
      if (el) el.innerHTML = data;

      if (id === "navbar") enableMenu();
    });
}

function enableMenu() {
  const menuBtn = document.getElementById("menuBtn");
  const sidebar = document.querySelector(".sidebar");

  if (menuBtn && sidebar) {
    menuBtn.addEventListener("click", () => {
      sidebar.classList.toggle("active");
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  loadComponent("navbar", "./components/navbar.html");
  loadComponent("sidebar", "./components/sidebar.html");
  loadComponent("footer", "./components/footer.html");
});
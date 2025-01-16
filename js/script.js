// Sidebar toggle functionality
const toggleSidebar = document.getElementById("toggle-sidebar");
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");

toggleSidebar.addEventListener("click", () => {
  sidebar.style.left = sidebar.style.left === "0px" ? "-220px" : "0px";
  overlay.style.display = overlay.style.display === "block" ? "none" : "block";
});

overlay.addEventListener("click", () => {
  sidebar.style.left = "-220px";
  overlay.style.display = "none";
});

const toggleSidebar = document.getElementById("toggle-sidebar");
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");

// Toggle Sidebar and Overlay
toggleSidebar.addEventListener("click", () => {
  sidebar.classList.toggle("open"); // Add or remove 'open' class for sidebar
  overlay.classList.toggle("active"); // Add or remove 'active' class for overlay
});

// Close Sidebar when clicking on Overlay
overlay.addEventListener("click", () => {
  sidebar.classList.remove("open");
  overlay.classList.remove("active");
});
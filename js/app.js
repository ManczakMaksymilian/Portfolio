// Sidebar
const toggleBtn = document.querySelector(".sidebar-toggle");
const closeBtn = document.querySelector(".close-btn");
const sidebar = document.querySelector(".sidebar");

toggleBtn.addEventListener("click", function () {
  sidebar.classList.toggle("show-sidebar");
});

closeBtn.addEventListener("click", function () {
  sidebar.classList.remove("show-sidebar");
});

// Dark mode
const checkbox = document.getElementById("mode-checkbox");

checkbox.addEventListener("change", () => {
  // Change the theme of the website
  document.body.classList.toggle("dark");
});

if (screen.width < 380 && screen.height < 500) {
  while (true) {
    alert("Screen size to small to use this website! Please switch to a bigger one!")
  }
}
const contactBtn = document.getElementById("contact-btn");

contactBtn.addEventListener("click", () => {
  alert("Thanks for your comment!");
});

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

function ifChecked() {
  const checkbox = document.getElementById("checkbox").checked;
  if (checkbox === true) {
    console.log("yes");
  } else {
    console.log("no");
  }
}

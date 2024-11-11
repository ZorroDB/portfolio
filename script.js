document.addEventListener("DOMContentLoaded", () => {
  const tooltipTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="tooltip"]')
  );
  tooltipTriggerList.map(
    (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
  );
});

function filterProjects(category) {
  const projects = document.querySelectorAll(".project-item");
  projects.forEach((project) => {
    project.style.display =
      category === "all" || project.classList.contains(category)
        ? "block"
        : "none";
  });
}

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});
// Toggle visibility on scroll
const backToTopButton = document.getElementById("backToTop");
window.onscroll = () => {
  backToTopButton.style.display = window.scrollY > 300 ? "block" : "none";
};
backToTopButton.onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });

document.querySelector("form").onsubmit = (e) => {
  e.preventDefault();
  // Perform form validation
  alert("Thank you for your message! I'll get back to you soon.");
};

document.getElementById("themeToggle").onclick = () => {
  document.body.classList.toggle("dark-mode");

  // Toggle between moon and sun icons
  const themeIcon = document.getElementById("themeIcon");
  if (document.body.classList.contains("dark-mode")) {
    themeIcon.classList.remove("fa-moon");
    themeIcon.classList.add("fa-sun");
  } else {
    themeIcon.classList.remove("fa-sun");
    themeIcon.classList.add("fa-moon");
  }
};

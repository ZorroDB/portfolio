// Tooltip Initialization
document.addEventListener("DOMContentLoaded", () => {
  const tooltipTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="tooltip"]')
  );
  tooltipTriggerList.map(
    (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
  );
});

// Filter Projects by Category (optional)
function filterProjects(category) {
  const projects = document.querySelectorAll(".project-item");
  projects.forEach((project) => {
    project.style.display =
      category === "all" || project.classList.contains(category)
        ? "block"
        : "none";
  });
}

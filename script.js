function filterProjects(category) {
  const projects = document.querySelectorAll(".project-item");
  projects.forEach((project) => {
    project.style.display =
      category === "all" || project.classList.contains(category)
        ? "block"
        : "none";
  });
}

// Smooth scroll handling
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", (e) => {
    e.preventDefault();
    const target = document.querySelector(anchor.getAttribute("href"));
    if (!target) return;

    window.scrollTo({
      top: target.offsetTop,
      behavior: "smooth",
    });
  });
});

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll(".skill-item, .project-card").forEach((el) => {
  observer.observe(el);
});

// Form handling with feedback
document.querySelector("form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const submitBtn = e.target.querySelector("#submitBtn");
  const originalText = submitBtn.innerHTML;

  try {
    submitBtn.innerHTML =
      '<span class="spinner-border spinner-border-sm"></span> Sending...';
    submitBtn.disabled = true;

    // Add your form submission logic here
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Success feedback
    submitBtn.classList.remove("btn-light");
    submitBtn.classList.add("btn-success");
    submitBtn.innerHTML = '<i class="fas fa-check"></i> Sent!';

    e.target.reset();
  } catch (error) {
    submitBtn.classList.add("btn-danger");
    submitBtn.innerHTML = '<i class="fas fa-exclamation-triangle"></i> Error';
  } finally {
    setTimeout(() => {
      submitBtn.className = "btn btn-light";
      submitBtn.innerHTML = originalText;
      submitBtn.disabled = false;
    }, 3000);
  }
});

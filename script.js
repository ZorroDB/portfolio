// Use modern JavaScript features
document.addEventListener("DOMContentLoaded", () => {
  // Initialize tooltips
  const initTooltips = () => {
    const tooltips = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    tooltips.forEach((tooltip) => new bootstrap.Tooltip(tooltip));
  };

  // Improved form handling
  const handleForm = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    try {
      // Add loading state
      const submitBtn = form.querySelector("#submitBtn");
      submitBtn.disabled = true;
      submitBtn.innerHTML =
        '<span class="spinner-border spinner-border-sm"></span> Sending...';

      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Show success message
      alert("Thank you for your message! I'll get back to you soon.");
      form.reset();
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("There was an error sending your message. Please try again.");
    } finally {
      submitBtn.disabled = false;
      submitBtn.innerHTML = "Send Message";
    }
  };

  // Event listeners
  document.querySelector("form").addEventListener("submit", handleForm);
  initTooltips();
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

// Enhanced smooth scroll
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    const headerOffset = 60;
    const elementPosition = target.offsetTop;
    const offsetPosition = elementPosition - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  });
});

// Add reveal animation on scroll
const revealElements = () => {
  const elements = document.querySelectorAll(".project-card, .skill-item");
  elements.forEach((element) => {
    const windowHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect().top;
    if (elementTop < windowHeight - 100) {
      element.classList.add("aos-animate");
    }
  });
};

window.addEventListener("scroll", throttle(revealElements, 100));

// Improved scroll handling with throttle
const throttle = (func, limit) => {
  let inThrottle;
  return function (...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

window.addEventListener(
  "scroll",
  throttle(() => {
    const backToTopButton = document.getElementById("backToTop");
    backToTopButton.style.display = window.scrollY > 300 ? "block" : "none";
  }, 100)
);

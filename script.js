const toggle = document.querySelector(".nav-toggle");
const menu = document.querySelector(".nav-menu");

toggle.addEventListener("click", () => {
  const expanded = toggle.getAttribute("aria-expanded") === "true";
  toggle.setAttribute("aria-expanded", !expanded);
  menu.classList.toggle("active");
});

const cardBoxes = document.querySelectorAll(".card-hover-box");

cardBoxes.forEach((box) => {
  const primary = box.querySelector(".card-primary");
  const secondary = box.querySelector(".card-secondary");

  primary.addEventListener("mouseenter", () => {
    secondary.style.maxHeight = secondary.scrollHeight + "px";
    secondary.style.opacity = "1";
    secondary.style.transform = "translateY(0)";
  });

  primary.addEventListener("mouseleave", () => {
    secondary.style.maxHeight = "0";
    secondary.style.opacity = "0";
    secondary.style.transform = "translateY(-10px)";
  });
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        entry.target.classList.remove("out-view");
      } else {
        entry.target.classList.remove("in-view");
        entry.target.classList.add("out-view");
      }
    });
  },
  {
    threshold: 0.35, // Quando il 15% dell'elemento è visibile
  }
);

document
  .querySelectorAll(".element-appear")
  .forEach((el) => observer.observe(el));
document
  .querySelectorAll(".element-appear-right")
  .forEach((el) => observer.observe(el));
document
  .querySelectorAll(".element-appear-left")
  .forEach((el) => observer.observe(el));

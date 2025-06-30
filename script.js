// 📅 Set current year in footer
document.addEventListener("DOMContentLoaded", () => {
  const yearElement = document.getElementById("year");
  const currentYear = new Date().getFullYear();
  yearElement.textContent = currentYear;
});

// 👀 Reveal sections on scroll
const reveals = document.querySelectorAll(".section");

function revealOnScroll() {
  reveals.forEach((section) => {
    const windowHeight = window.innerHeight;
    const elementTop = section.getBoundingClientRect().top;
    const elementVisible = 100;

    if (elementTop < windowHeight - elementVisible) {
      section.classList.add("reveal");
    }
  });
}

// Animate skills progress bars
function animateProgressBars() {
  const progressBars = document.querySelectorAll(".progress");
  progressBars.forEach(bar => {
    const width = bar.classList.contains("html") ? "90%" :
                  bar.classList.contains("css") ? "85%" :
                  bar.classList.contains("js") ? "60%" : "0%";
    bar.style.width = width;
  });
}

// Call when section reveals
function revealOnScroll() {
  reveals.forEach((section) => {
    const windowHeight = window.innerHeight;
    const elementTop = section.getBoundingClientRect().top;
    const elementVisible = 100;

    if (elementTop < windowHeight - elementVisible) {
      section.classList.add("reveal");

      if (section.id === "skills") {
        animateProgressBars();
      }
    }
  });
}


// 🔼 Scroll to Top Button
const scrollBtn = document.getElementById("scrollToTop");

window.addEventListener("scroll", () => {
  revealOnScroll();

  if (window.scrollY > 300) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
});

// Smooth scroll to top
scrollBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Initial reveal on load
window.addEventListener("load", revealOnScroll);

// 🖋️ Typing effect in hero section
document.addEventListener("DOMContentLoaded", () => {
  const text = "Aspiring Web & App Developer";
  let index = 0;
  const speed = 100;
  const typingTarget = document.getElementById("typing-text");

  function typeText() {
    if (index < text.length) {
      typingTarget.textContent += text.charAt(index);
      index++;
      setTimeout(typeText, speed);
    }
  }

  typeText();
});


// Form submit event handle
document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent page reload
  alert("Thank you for contacting me! I will get back to you soon.");
  this.reset(); // Clear form inputs
});

// Footer year set dynamically
document.getElementById("year").textContent = new Date().getFullYear();

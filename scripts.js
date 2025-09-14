// Greet button event
document.getElementById("greetBtn").addEventListener("click", function () {
  alert("Hello! Welcome to Linda's Art Page! 🎉");
});

// Hover effect using JavaScript (instead of inline HTML attributes)
const hoverText = document.getElementById("hoverText");
hoverText.addEventListener("mouseover", () => {
  hoverText.style.color = "blue";
});
hoverText.addEventListener("mouseout", () => {
  hoverText.style.color = "purple";
});

// Like button functionality
const likeButtons = document.querySelectorAll(".likeBtn");
likeButtons.forEach((btn) => {
  btn.addEventListener("click", function () {
    const artId = btn.getAttribute("data-art");
    const likeSpan = document.getElementById(`likes-${artId}`);
    let currentLikes = parseInt(likeSpan.textContent);
    currentLikes++;
    likeSpan.textContent = `${currentLikes} Likes`;
  });
});

// Dark/Light mode toggle
document.getElementById("themeToggle").addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
});

// FAQ collapsible toggle
const faqQuestions = document.querySelectorAll(".faq-question");
faqQuestions.forEach((question) => {
  question.addEventListener("click", () => {
    const answer = question.nextElementSibling;
    answer.classList.toggle("hidden");
  });
});

// Show/Hide password toggle
document
  .getElementById("togglePassword")
  .addEventListener("click", function () {
    const passwordField = document.getElementById("password");
    if (passwordField.type === "password") {
      passwordField.type = "text";
    } else {
      passwordField.type = "password";
    }
  });

// Custom Form Validation
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault(); // prevent form submission

  let valid = true;

  // Name validation
  const name = document.getElementById("name").value.trim();
  if (name === "") {
    document.getElementById("nameError").textContent = "Name is required";
    valid = false;
  } else {
    document.getElementById("nameError").textContent = "";
  }

  // Email validation (basic regex)
  const email = document.getElementById("email").value.trim();
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    document.getElementById("emailError").textContent = "Enter a valid email";
    valid = false;
  } else {
    document.getElementById("emailError").textContent = "";
  }

  // Password validation
  const password = document.getElementById("password").value.trim();
  if (password.length < 6) {
    document.getElementById("passwordError").textContent =
      "Password must be at least 6 characters";
    valid = false;
  } else {
    document.getElementById("passwordError").textContent = "";
  }

  // Success message
  if (valid) {
    document.getElementById("formSuccess").textContent =
      "✅ Form submitted successfully!";
    document.getElementById("contactForm").reset();
  }
});

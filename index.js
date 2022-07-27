const emailInput = document.getElementById("email-input");
const countryInput = document.getElementById("country-input");
const zipInput = document.getElementById("zip-input");
const passwordInput = document.getElementById("password-input");
const confirmPasswordInput = document.getElementById("confirm-pass-input");
const submitBtn = document.getElementById("submit-btn");
const messageDisplay = document.querySelector(".message-display");

const validateForm = (event) => {
  emailInput.addEventListener("input", () => {
    emailInput.setCustomValidity("");
    emailInput.checkValidity();
  });

  emailInput.addEventListener("invalid", () => {
    if (emailInput.value === "") {
      emailInput.setCustomValidity("Write your email");
    } else {
      emailInput.setCustomValidity("Write a valid email");
    }
  });

  countryInput.addEventListener("input", () => {
    countryInput.setCustomValidity("");
    countryInput.checkValidity();
  });

  countryInput.addEventListener("invalid", () => {
    if (countryInput.value === "") {
      countryInput.setCustomValidity(
        "Write the country name where you are living"
      );
    } else {
      countryInput.setCustomValidity("Write a valid country");
    }
  });

  zipInput.addEventListener("input", () => {
    zipInput.setCustomValidity("");
    zipInput.checkValidity();
  });

  zipInput.addEventListener("invalid", () => {
    if (zipInput.value === "") {
      zipInput.setCustomValidity("Write your zip code");
    } else {
      zipInput.setCustomValidity("Only numbers are accepted 🔢");
    }
  });

  passwordInput.addEventListener("input", () => {
    passwordInput.setCustomValidity("");
    passwordInput.checkValidity();
  });

  passwordInput.addEventListener("invalid", () => {
    if (passwordInput.value === "") {
      passwordInput.setCustomValidity(
        "The password must contain 8 or more characters"
      );
    } else {
      passwordInput.setCustomValidity(
        "Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
      );
    }
  });

  if (passwordInput.value != confirmPasswordInput.value) {
    messageDisplay.classList.add("error-display");
    messageDisplay.textContent = "Ups! The password doesn't match, try again";
    confirmPasswordInput.value = "";
    event.preventDefault();
  }
};

submitBtn.addEventListener("click", (e) => validateForm(e));

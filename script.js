document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const confirmation = document.querySelector(".confirmation-message");
  function toggleError(input, condition, errorElement) {
    if (condition) {
      errorElement.style.display = "block";
    } else {
      errorElement.style.display = "none";
    }
  }

  //  First name validation
  const firstNameInput = document.querySelector("#first-name");

  const firstNameError =
    firstNameInput.parentElement.querySelector(".error-message");
  console.log(firstNameError);

  firstNameInput.addEventListener("blur", () => {
    toggleError(
      firstNameInput,
      firstNameInput.value.trim() === "",
      firstNameError
    );
  });

  // Last Name validation
  const lastNameInput = document.getElementById("last-name");

  const lastNameError =
    lastNameInput.parentElement.querySelector(".error-message");
  console.log(lastNameError);
  lastNameInput.addEventListener("blur", function () {
    toggleError(
      lastNameInput,
      lastNameInput.value.trim() === "",
      lastNameError
    );
  });

  //  Email Validation
  const emailInput = document.getElementById("email");
  const emailErrors =
    emailInput.parentElement.querySelectorAll(".error-message");
  console.log(emailErrors);
  const emailPatterns = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  emailInput.addEventListener("blur", () => {
    if (emailInput.value.trim() === "") {
      emailErrors[1].style.display = "block";
      emailErrors[0].style.display = "none";
    } else if (!emailPatterns.test(emailInput.value)) {
      emailErrors[0].style.display = "block";
      emailErrors[1].style.display = "none";
    } else {
      emailErrors.forEach((err) => (err.style.display = "none"));
    }
  });

  //  Message Validation
  const messageInput = document.getElementById("message");
  const messageError =
    messageInput.parentElement.querySelector(".error-message");
  console.log(messageError);

  messageInput.addEventListener("blur", () => {
    toggleError(messageInput, messageInput.value.trim() === "", messageError);
  });

  //  Checkbox validation
  const consentCheckbox = form.querySelector('input[type="checkbox"]');
  const consentError = consentCheckbox.parentElement.nextElementSibling;
  console.log(consentError);

  consentCheckbox.addEventListener("change", () => {
    toggleError(consentCheckbox, !consentCheckbox.checked, consentError);
  });

  // final form submission
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    //   Trigger each field's validation
    firstNameInput.dispatchEvent(new Event("blur"));
    lastNameInput.dispatchEvent(new Event("blur"));
    emailInput.dispatchEvent(new Event("Blur"));
    messageInput.dispatchEvent(new Event("blur"));
    consentCheckbox.dispatchEvent(new Event("change"));

    const errors = form.querySelectorAll(".error-message");
    const visibleErrors = [...errors].filter(
      (err) => err.style.display === "block"
    );

    if (visibleErrors.length === 0) {
      form.style.display === "none";
      confirmation.style.display = "block";
    }
  });
});

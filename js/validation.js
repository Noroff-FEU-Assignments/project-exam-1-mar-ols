const contactForm = document.querySelector(".contact-form");

// Name validation
const fName = document.querySelector("#full-name");
const fNameError = document.querySelector(".name-error");
fNameError.style.display = "none";

fName.addEventListener("blur", () => {
  const fNameValue = fName.value;

  if (fNameValue.length < 5) {
    fNameError.style.display = "block";
    fNameError.classList.add("error-message");
  } else {
    fNameError.style.display = "none";
    fNameError.classList.remove("error-message");
  }
});

// Subject validation
const subject = document.querySelector("#message-subject");
const subjectError = document.querySelector(".subject-error");
subjectError.style.display = "none";

subject.addEventListener("blur", () => {
  const subjectValue = subject.value;
  if (subjectValue.length < 15) {
    subjectError.style.display = "block";
    subjectError.classList.add("error-message");
  } else {
    subjectError.style.display = "none";
    subjectError.classList.remove("error-message");
  }
});

const email = document.querySelector("#enter-email");
const emailError = document.querySelector(".email-error");
emailError.style.display = "none";

email.addEventListener("blur", () => {
  const emailValue = email.value;
  const regEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const checkMatch = regEx.test(emailValue);

  if (checkMatch === false) {
    emailError.style.display = "block";
    emailError.classList.add("error-message");
  } else {
    emailError.style.display = "none";
    emailError.classList.remove("error-message");
  }
});

// Message validation
const message = document.querySelector("#message");
const messageError = document.querySelector(".message-error");
messageError.style.display = "none";

message.addEventListener("input", () => {
  const messageValue = message.value;
  if (messageValue.length < 25) {
    messageError.style.display = "block";
    messageError.classList.add("error-message");
  } else {
    messageError.style.display = "none";
    messageError.classList.remove("error-message");
  }
});

// Form submit validation
contactForm.addEventListener("submit", (event) => {
  if (
    contactForm.querySelectorAll(".error-message").length > 0 ||
    fName.value < 5 ||
    subject.value < 15 ||
    message.value < 25
  ) {
    event.preventDefault();
  }
});

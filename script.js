/**
 * validate email when button clicked
 *
 * if it doesnt match email,
 * ui display msg, input: bg, border, text color  red
 *
 * if it does match
 * ui updated, form dissapears and success msg apears
 * succes msg button, dissmises msg (dissaperars) and refreshes pg back to form
 */

// refrence variables
// dom variables
const input = document.querySelector("input");
const emailInput = document.getElementById("emailInput");
const emailField = document.getElementById("emailfield");
const successBtn = document.getElementById("successBtn");
const dismissBtnn = document.getElementById("dismissBtn");
const formContainer = document.getElementById("container__form");
const successContainer = document.getElementById("container__success");
const confirmEmailSpan = document.getElementById("confirmEmail");

successBtn.addEventListener("click", checkEmail);
dismissBtnn.addEventListener("click", dismissState);

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

function checkEmail(email) {
  if (emailRegex.test(input.value)) {
    console.log("Email Approved!");
    succesStateUI();
    confirmEmail();
  } else {
    emailField.classList.add("red");
    console.log("Email not approved email.");
  }
  console.log("check email");
}

function succesStateUI() {
  console.log("success email");
  formContainer.style.display = "none";
  successContainer.style.display = "flex";
}

input.addEventListener("click", updateValue);
function updateValue(e) {
  if (emailField.classList.contains("red")) {
    emailField.classList.remove("red");
  }
}

function dismissState() {
  console.log("dismiss message...");
  formContainer.style.display = "flex";
  successContainer.style.display = "none";
}

function confirmEmail(email) {
  confirmEmailSpan.textContent = input.value;
}

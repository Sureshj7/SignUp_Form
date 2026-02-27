const btn = document.querySelector("button");
const formInfo = document.getElementById("form-info");
const msg = document.getElementById("form-msg");
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(form);

  //   console.log(Object.fromEntries(formData.entries())); //to get formData as an object
  //   console.log(formData.get("username")); //to get formData as an indivually

  const username = formData.get("username");
  const email = formData.get("email");
  const password = formData.get("password");
  const ConfirmPassword = formData.get("ConfirmPassword");

  const userNameInput = document.getElementById("username");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const confirmPasswordInput = document.getElementById("ConfirmPassword");

  function showError(input, message) {
    input.style.outlineColor = "red";
    input.focus();
    formInfo.style.backgroundColor = "red";
    msg.textContent = message;
    msg.style.color = "white";
  }
  function showSuccessfull() {
    formInfo.style.backgroundColor = "Green";
    msg.textContent = "Thank you for Signed";
    msg.style.color = "Black";
    console.log(Object.fromEntries(formData.entries()));

    form.reset();
  }

  if (username === "") {
    showError(userNameInput, "Enter UserName");
    return;
  }
  if (!email === "" || !email.includes("@gmail.com")) {
    showError(emailInput, "Enter Valid Email");
    return;
  }
  if (password === "" && ConfirmPassword === "") {
    showError(passwordInput, "Enter a Password");
    return;
  }

  if (password !== ConfirmPassword) {
    showError(passwordInput, "password Doesn't match");
    return;
  }

  console.log(Object.fromEntries(formData.entries()));
  showSuccessfull();
});

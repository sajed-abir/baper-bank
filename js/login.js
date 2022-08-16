document.getElementById("btn-submit").addEventListener("click", function () {
  const emailField = document.getElementById("email-field");
  const email = emailField.value;

  const passwordField = document.getElementById("password-field");
  const password = passwordField.value;

  if (email === "abir@khan.com" && password === "secret") {
    window.location.href = "bank.html";
  } else {
    alert("Please enter a valid email address or password");
  }
});

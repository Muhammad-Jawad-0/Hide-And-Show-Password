const password = document.getElementById("password");
const eyeIcon = document.getElementById("eyeIcon");

eyeIcon.addEventListener("click", () => {
  if (password.type == "password" && !password.value == "") {
    password.type = "text";
    eyeIcon.src = "./images/eye-open.png"
  } else {
    password.type = "password";
    eyeIcon.src = "./images/eye-close.png"
  }
});

const form = document.getElementById("form");

async function registerUser(event) {
  event.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  const errorText = document.querySelector(".error");

  // Form validation

  if (username.length < 4 || username.length > 13) {
    errorText.innerText = "Username must contain 4 to 13 characters!";
  } else {
    errorText.innerText = " ";
  }

  if (password.length < 4 || password.length > 10) {
    errorText.innerText = "Password must contain 4 to 10 characters!";
  } else {
    errorText.innerText = " ";
  }

  // Login

  if (username === "sher-admin" && password === "30092006") {
    window.open("https://www.youtube.com/watch?v=b91XgdyX-SM");
  } else {
    errorText.innerText = "You don't have access!";
  }
}

form.addEventListener("submit", registerUser);

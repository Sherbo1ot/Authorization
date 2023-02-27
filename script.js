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

// Password show

const showBtn = document.getElementById("show-btn");
const password = document.getElementById("password");

showBtn.addEventListener("click", () => {
  if (password.getAttribute("type") === "password") {
    password.setAttribute("type", "text");
    showBtn.classList.add("active")
  } else {
    password.setAttribute("type", "password");
    showBtn.classList.remove("active")
  }
});

form.addEventListener("submit", registerUser);

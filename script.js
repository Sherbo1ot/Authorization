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

  fetch("http://localhost:5088/registration", {
    method: "POST",
    body: JSON.stringify({
      username,
      password,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());
}

// Password show

const showBtn = document.getElementById("show-btn");
const password = document.getElementById("password");

showBtn.addEventListener("click", () => {
  if (password.getAttribute("type") === "password") {
    password.setAttribute("type", "text");
    showBtn.classList.add("active");
  } else {
    password.setAttribute("type", "password");
    showBtn.classList.remove("active");
  }
});

form.addEventListener("submit", registerUser);

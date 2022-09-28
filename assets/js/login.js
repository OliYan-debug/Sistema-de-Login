const form = document.querySelector("#form");
form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = form.querySelector("#email").value;
  const password = form.querySelector("#password").value;

  const data = { email, password };
  const loggedUser = await login(data);

  if (loggedUser) {
    location.href = "/pages/home.html"
    localStorage.setItem("token",  loggedUser.token)

  } else {
    alert("Algo deu errado");
  }
});

async function login(data) {
  const url = "http://localhost:2001";
  let result = await fetch(url + "/user/login", {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" },
  });
  if (result.status != 200) return false;
  return {
    message: result.text(),
    token: result.headers.get("authorization-token"),
  };
}

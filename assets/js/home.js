document.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("token")) {
    displayContent();
  } else {
    location.href = "/";
  }
});

async function displayContent() {
  const token = localStorage.getItem("token");
  const user = await getInfo(token);
  const createdAt = new Date(user.createdAt);
  const memberSince =
    createdAt.getMonth().toString() + "/" + createdAt.getFullYear().toString();

  document.querySelector("#main").innerHTML = `
    <button id="logout">Logout</button>

    <h1>Seja bem vindo! ${user.name}</h1>
    <p>Você está com a gente desde ${memberSince}</p>
  `;
  if (user.admin) {
    document.querySelector(
      "#main"
    ).innerHTML += `<strong>Você possui acesso privilegiado</strong>`;
  }
  logoutCallback();
}

async function getInfo(token) {
  let url = "http://localhost:2001";
  let data = await fetch(url + "/user/info", {
    method: "POST",
    body: JSON.stringify({ token }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  return data.json();
}

function logoutCallback() {
  const buttonLogout = document.querySelector("#logout");

  buttonLogout.addEventListener("click", () => {
    localStorage.clear();
    location.href = "/";
  });
}

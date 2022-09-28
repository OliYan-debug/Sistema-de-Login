let my_box = document.querySelector(".my_box");
let email_option = document.querySelector(".email");
let token_option = document.querySelector(".token");


email_option.addEventListener("click", () => {
  my_box.innerHTML = `
    <form id="form">
      <h3 class="text-center w-100 p-3">Resetar senha (email)</h3>
      <div class="input-group mb-2 p-3">
        <span class="input-group-text bg-primary text-white" id="inputGroup-sizing-default">Email</span>
        <input
          type="email"
          id="email"
          class="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-default"
          required
        />
        </div>
    <input type="submit" class="text-center w-100 mb-2 btn btn-primary" value="Enviar Código"
    />
    <a href="/pages/reset.html" class="link">escolher outra opção</a>
  </form>
    `;

  let form = document.querySelector("#form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let email = document.querySelector("#email").value;
    my_box.innerHTML = `
  <form id="form">
    <h3 class="text-center w-100 p-3">Código enviado para ${email}</h3>
    <div class="input-group mb-2 p-3">
      <span class="input-group-text bg-primary text-white" id="inputGroup-sizing-default">Código</span>
      <input
      type="text"
      id="verify-code"
      class="form-control"
      aria-label="Sizing example input"
      aria-describedby="inputGroup-sizing-default"
      maxlength="5"
      required
      />
    </div>
    <input type="submit" class="text-center w-100 mb-2 btn btn-primary" value="Resetar Senha"
    />
    <a href="/pages/reset.html" class="link">escolher outra opção</a>
  </form>
  `;
    let verification_code = document.querySelector("#verify-code");

    verification_code.addEventListener("input", () => {
      verification_code.value = verification_code.value.toUpperCase();
    });
  });
});


token_option.addEventListener("click", () => {
  my_box.innerHTML = `
  <form id="form">
    <h3 class="text-center w-100 p-3">Redefinir Senha (Token)</h3>
    <div class="input-group mb-2 p-3">
      <span class="input-group-text bg-primary text-white" id="inputGroup-sizing-default">TOKEN</span>
      <input
      type="text"
      id="token-code"
      class="form-control"
      aria-label="Sizing example input"
      aria-describedby="inputGroup-sizing-default"
      maxlength="12"
      required
      />
    </div>
    <input  id="reset-btn" type="submit" class="text-center w-100 mb-2 btn btn-primary" value="Resetar Senha"
    />
    <a href="/pages/reset.html" class="link">escolher outra opção</a>
  </form>
  `;
})
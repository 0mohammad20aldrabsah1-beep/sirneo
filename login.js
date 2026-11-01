(function () {
  const form = document.getElementById("login-form");
  const message = document.getElementById("login-message");

  form?.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!message) return;

    const username = String(new FormData(form).get("username") || "").trim();
    const password = String(new FormData(form).get("password") || "").trim();

    message.hidden = false;
    message.classList.remove("error");

    if (!username || !password) {
      message.textContent = "Please enter your user name and password.";
      message.classList.add("error");
      return;
    }

    message.textContent = "Signing you in…";
    window.setTimeout(() => {
      window.location.href = "verify.html";
    }, 400);
  });
})();

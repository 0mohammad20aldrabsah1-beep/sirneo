(function () {
  const form = document.getElementById("verify-form");
  const codeInput = document.getElementById("verification-code");
  const message = document.getElementById("verify-message");
  const resendBtn = document.getElementById("resend-btn");

  codeInput?.addEventListener("input", () => {
    codeInput.value = codeInput.value.replace(/\D/g, "");
  });

  resendBtn?.addEventListener("click", () => {
    if (!message) return;
    message.hidden = false;
    message.classList.remove("error");
    message.textContent = "A new code has been sent.";
    if (codeInput) {
      codeInput.value = "";
      codeInput.focus();
    }
  });

  form?.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!message || !codeInput) return;

    const code = codeInput.value.trim();

    message.hidden = false;
    message.classList.remove("error");

    if (!code) {
      message.textContent = "Please enter your verification code.";
      message.classList.add("error");
      codeInput.focus();
      return;
    }

    message.textContent = "Verified successfully. Redirecting…";
    window.setTimeout(() => {
      window.location.href = "index.html#prizes";
    }, 800);
  });

  codeInput?.focus();
})();

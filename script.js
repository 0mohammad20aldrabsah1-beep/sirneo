(function () {
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  const spend = document.getElementById("spend");
  const spendValue = document.getElementById("spend-value");
  const entriesCount = document.getElementById("entries-count");

  function updateEntries() {
    if (!spend || !spendValue || !entriesCount) return;
    const pounds = Number(spend.value);
    spendValue.textContent = "£" + pounds.toLocaleString("en-GB");
    entriesCount.textContent = String(Math.floor(pounds / 10));
  }

  spend?.addEventListener("input", updateEntries);
  updateEntries();

  const menuToggle = document.querySelector(".menu-toggle");
  const mobileNav = document.getElementById("mobile-nav");

  menuToggle?.addEventListener("click", () => {
    const open = mobileNav?.classList.toggle("is-open");
    if (mobileNav) mobileNav.hidden = !open;
    menuToggle.setAttribute("aria-expanded", open ? "true" : "false");
  });

  mobileNav?.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mobileNav.classList.remove("is-open");
      mobileNav.hidden = true;
      menuToggle?.setAttribute("aria-expanded", "false");
    });
  });

})();

(() => {
  const navToggle = document.querySelector("[data-nav-toggle]");
  const navMenu = document.querySelector("[data-nav-menu]");

  if (navToggle && navMenu) {
    const closeMenu = () => {
      navMenu.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    };

    navToggle.addEventListener("click", () => {
      const isOpen = navMenu.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });

    navMenu.addEventListener("click", (event) => {
      if (event.target.closest("a")) {
        closeMenu();
      }
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    });
  }

  const currentPath = new URL(window.location.href).pathname.replace(/\/index\.html$/, "/");

  document.querySelectorAll("[data-nav-link]").forEach((link) => {
    const linkPath = new URL(link.getAttribute("href"), window.location.href).pathname.replace(/\/index\.html$/, "/");
    const samePage = linkPath === currentPath;
    const sameSection = (
      (currentPath.includes("/keilmiahan/") && linkPath.includes("/keilmiahan/")) ||
      (currentPath.includes("/keprofesian/") && linkPath.includes("/keprofesian/"))
    );

    if (samePage || sameSection) {
      link.setAttribute("aria-current", "page");
    }
  });
})();

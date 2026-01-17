/* =========================
   GLOBAL HELPERS
========================= */

/* Get element by ID */
window.$ = (id) => document.getElementById(id);

/* Open external links safely */
window.openExternal = (url) => {
  window.open(url, "_blank", "noopener");
};

/* Disable all inputs */
window.disableAllInputs = () => {
  document.querySelectorAll("input, select, button").forEach(el => el.disabled = true);
};

/* Smooth scroll to top */
window.scrollTopSmooth = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

/* Show error banner in container */
window.showGlobalError = (containerId, message) => {
  const box = $(containerId);
  if (!box) return;
  box.innerHTML = `<div style="padding:12px;border:1px solid #f00;background:#fee;color:#900;border-radius:6px;font-weight:600">${message}</div>`;
  scrollTopSmooth();
};

// Highlight active nav link based on current file
window.highlightActiveNav = () => {
  const links = document.querySelectorAll(".nav a");
  const currentFile = window.location.pathname.split("/").pop(); // e.g., "index.html" or "forms.html"

  // Remove active from all links first
  links.forEach(link => link.classList.remove("active"));

  // Loop through links and check if their href matches the current file
  links.forEach(link => {
    let hrefFile = link.getAttribute("href").split("/").pop(); // get "index.html" or "forms.html"
    if (hrefFile === currentFile || (currentFile === "" && hrefFile === "index.html")) {
      link.classList.add("active");
    }
  });
};

// Run after DOM loads
document.addEventListener("DOMContentLoaded", highlightActiveNav);


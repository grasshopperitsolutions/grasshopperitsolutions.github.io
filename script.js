lucide.createIcons();
const btn = document.getElementById("mobile-menu-btn");
const menu = document.getElementById("mobile-menu");
btn.addEventListener("click", () => menu.classList.toggle("hidden"));
setInterval(() => {
  const now = new Date();
  document.getElementById("time").innerText = now.toTimeString().split(" ")[0];
}, 1000);
function notify() {
  const toast = document.getElementById("notification-toast");
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 3000);
}
function toggleAIBubble() {
  const bubble = document.getElementById("ai-bubble");
  bubble.classList.toggle("hidden");
}

// Language Switcher
function switchLanguage(locale) {
  const path = window.location.pathname;
  const filename = path.split("/").pop() || "index.html";
  const currentDir = path.substring(0, path.lastIndexOf("/"));

  // Detect current locale from path
  let targetPath;
  if (currentDir.endsWith("/en-us") || currentDir.endsWith("/es-co")) {
    // Already in a locale subdirectory
    const parentDir = currentDir.substring(0, currentDir.lastIndexOf("/"));
    targetPath = parentDir + "/" + locale + "/" + filename;
  } else if (currentDir === "" || currentDir === "/") {
    // Root level
    targetPath = "/" + locale + "/" + filename;
  } else {
    // Some other subdirectory (e.g., /pages/)
    targetPath = "/" + locale + "/" + filename;
  }

  window.location.href = targetPath;
}

// Update language switcher label on page load
function updateLangLabel() {
  const path = window.location.pathname;
  let label = "EN";
  if (path.includes("/es-co/")) label = "ES";
  
  const desktopLabel = document.getElementById("current-lang-label");
  const mobileLabel = document.getElementById("mobile-current-lang-label");
  if (desktopLabel) desktopLabel.textContent = label;
  if (mobileLabel) mobileLabel.textContent = label;
}
document.addEventListener("DOMContentLoaded", updateLangLabel);

// Identities Carousel Logic
const container = document.getElementById("carousel-container");
const prevBtn = document.getElementById("slide-prev");
const nextBtn = document.getElementById("slide-next");

if (container && prevBtn && nextBtn) {
  nextBtn.addEventListener("click", () => {
    container.scrollBy({ left: 400, behavior: "smooth" });
  });
  prevBtn.addEventListener("click", () => {
    container.scrollBy({ left: -400, behavior: "smooth" });
  });
}

// App Carousel Logic (New)
const appContainer = document.getElementById("app-carousel-container");
const appPrevBtn = document.getElementById("app-slide-prev");
const appNextBtn = document.getElementById("app-slide-next");

if (appContainer && appPrevBtn && appNextBtn) {
  appNextBtn.addEventListener("click", () => {
    appContainer.scrollBy({ left: 400, behavior: "smooth" });
  });
  appPrevBtn.addEventListener("click", () => {
    appContainer.scrollBy({ left: -400, behavior: "smooth" });
  });
}
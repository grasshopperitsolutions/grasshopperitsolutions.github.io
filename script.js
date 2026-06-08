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

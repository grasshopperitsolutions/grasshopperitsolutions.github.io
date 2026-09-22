/* Grasshopper Solutions — shared site script.
 *
 * Note: the header and footer partials are injected asynchronously, so every
 * element lookup here must be null-guarded and anything touching the partials
 * has to run (or re-run) after they land. `initPartialDependentUI()` is called
 * by the partial loader on each page once injection finishes.
 */

// ===== CONTACT CHANNELS =====
const WHATSAPP_NUMBER = "33767834576";
const CONTACT_EMAIL = "general@grasshoppersolutions.online";

/**
 * Open WhatsApp with a prefilled message.
 * Shared by the homepage contact form and the project cost calculator so the
 * number and the URL shape live in exactly one place.
 */
function sendToWhatsApp(message) {
  const url =
    "https://api.whatsapp.com/send?phone=" +
    WHATSAPP_NUMBER +
    "&text=" +
    encodeURIComponent(message);
  window.open(url, "_blank", "noopener");
}

// ===== UI HELPERS =====
function notify() {
  const toast = document.getElementById("notification-toast");
  if (!toast) return;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 3000);
}

function toggleAIBubble() {
  const bubble = document.getElementById("ai-bubble");
  if (bubble) bubble.classList.toggle("hidden");
}

function toggleNav() {
  const menu = document.getElementById("mobile-menu");
  if (menu) menu.classList.toggle("hidden");
}

// ===== CLOCK + FOOTER YEAR =====
setInterval(() => {
  const el = document.getElementById("time");
  if (el) el.textContent = new Date().toTimeString().split(" ")[0];
}, 1000);

/**
 * Wire up anything that lives inside the injected header/footer.
 * Safe to call more than once.
 */
function initPartialDependentUI() {
  const btn = document.getElementById("mobile-menu-btn");
  const menu = document.getElementById("mobile-menu");
  if (btn && menu && !btn.dataset.bound) {
    btn.dataset.bound = "true";
    btn.addEventListener("click", () => menu.classList.toggle("hidden"));
  }

  const year = document.getElementById("footer-year");
  if (year) year.textContent = new Date().getFullYear();

  if (typeof lucide !== "undefined") lucide.createIcons();
}

document.addEventListener("DOMContentLoaded", initPartialDependentUI);

// ===== HOMEPAGE CONTACT FORM =====
function initContactForm() {
  const form = document.getElementById("contact-form");
  if (!form) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    // Honeypot: real users never see this field, bots fill everything.
    const trap = document.getElementById("contact-company");
    if (trap && trap.value.trim() !== "") return;

    if (!form.reportValidity()) return;

    const name = document.getElementById("contact-name").value.trim();
    const type = document.getElementById("contact-type").value;
    const budget = document.getElementById("contact-budget").value;
    const details = document.getElementById("contact-message").value.trim();

    const message =
      "Hi Grasshopper Solutions!\n\n" +
      "Name: " +
      name +
      "\n" +
      "Project type: " +
      type +
      "\n" +
      "Budget range: " +
      budget +
      "\n\n" +
      details +
      "\n\n(Sent from grasshoppersolutions.online)";

    sendToWhatsApp(message);

    const sent = document.getElementById("contact-sent");
    if (sent) sent.classList.remove("hidden");
  });
}

document.addEventListener("DOMContentLoaded", initContactForm);

// ===== CAROUSELS =====
function initCarousel(containerId, prevId, nextId) {
  const container = document.getElementById(containerId);
  const prevBtn = document.getElementById(prevId);
  const nextBtn = document.getElementById(nextId);
  if (!container || !prevBtn || !nextBtn) return;

  nextBtn.addEventListener("click", () =>
    container.scrollBy({ left: 400, behavior: "smooth" })
  );
  prevBtn.addEventListener("click", () =>
    container.scrollBy({ left: -400, behavior: "smooth" })
  );
}

document.addEventListener("DOMContentLoaded", () => {
  initCarousel("carousel-container", "slide-prev", "slide-next");
  initCarousel("app-carousel-container", "app-slide-prev", "app-slide-next");
});

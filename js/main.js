document.addEventListener("DOMContentLoaded", () => {
  const hasVisited = sessionStorage.getItem("hasVisited");
  const sidebar = document.querySelector(".sidebar");
  const mainContent = document.querySelector(".main-content");
  const headings = document.querySelectorAll(".main-content h1");

  // ===== Sidebar Slide-In =====
  if (!hasVisited && sidebar) {
    // Add the "hidden" class to move it off-screen
    sidebar.classList.add("sidebar-hidden");

    // Force a reflow to ensure browser registers the transform
    void sidebar.offsetWidth;

    // Trigger the slide-in
    requestAnimationFrame(() => {
      sidebar.classList.remove("sidebar-hidden");
    });
  }

  // ===== Typing Effect on h1 =====
  if (!hasVisited && headings.length > 0) {
    const typeText = (element, text, delay = 50) => {
      let index = 0;
      element.textContent = "";
      const type = () => {
        if (index < text.length) {
          element.textContent += text.charAt(index);
          index++;
          setTimeout(type, delay);
        }
      };
      type();
    };

    headings.forEach((h1) => {
      const originalText = h1.textContent.trim();
      typeText(h1, originalText, 40);
    });
  }

  // ===== Album Card Slide-In Animation =====
  const albumCards = document.querySelectorAll(".album-card");

  albumCards.forEach((card, index) => {
    // Start hidden
    card.classList.add("hidden");

    // Delay each one slightly for a staggered effect
    setTimeout(() => {
      card.classList.remove("hidden");
    }, index * 150); // 150ms between cards
  });

  // ===== Main Content Fade-In =====
  if (mainContent) {
    mainContent.style.opacity = 0;
    mainContent.style.transition = "opacity 1s ease";
    requestAnimationFrame(() => {
      mainContent.style.opacity = 1;
    });
  }

  // ===== Set Visit Flag =====
  sessionStorage.setItem("hasVisited", "true");
});

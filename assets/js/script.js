document.addEventListener("DOMContentLoaded", () => {
  const tooltip = document.getElementById("tooltip");
  const techItems = document.querySelectorAll(".tech-item");

  // Tooltip Logic
  techItems.forEach((item) => {
    item.addEventListener("mouseenter", () => {
      tooltip.innerText = item.getAttribute("data-name");
      tooltip.style.opacity = "1";
    });

    item.addEventListener("mousemove", (e) => {
      // Offset de 15px para não ficar exatamente sob o cursor
      tooltip.style.transform = `translate(${e.clientX + 15}px, ${e.clientY + 15}px)`;
    });

    item.addEventListener("mouseleave", () => {
      tooltip.style.opacity = "0";
    });
  });

  // Intersection Observer para as animações (Scroll Reveal)
  const revealCallback = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        observer.unobserve(entry.target); // Anima apenas uma vez
      }
    });
  };

  const revealObserver = new IntersectionObserver(revealCallback, {
    threshold: 0.15
  });

  document.querySelectorAll(".reveal").forEach(el => {
    revealObserver.observe(el);
  });
});
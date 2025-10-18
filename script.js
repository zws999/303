// efect de glow pe textul colorat
document.addEventListener("DOMContentLoaded", () => {
  const colorSpans = document.querySelectorAll(".action span");
  colorSpans.forEach(span => {
    span.style.transition = "filter .3s ease";
    span.addEventListener("mouseenter", () => {
      span.style.filter = "drop-shadow(0 0 10px rgba(139,92,246,0.6))";
    });
    span.addEventListener("mouseleave", () => {
      span.style.filter = "none";
    });
  });

  // arată temporar "Invite/Link" când utilizatorul apasă pe buton
  document.querySelectorAll('a.action[data-reveal]').forEach(btn => {
    btn.addEventListener('click', () => {
      const sel = btn.getAttribute('data-reveal');
      const pill = document.querySelector(sel);
      if (!pill) return;

      pill.classList.remove('hidden');

      // ascunde după 2 secunde
      clearTimeout(pill.__hideTimer);
      pill.__hideTimer = setTimeout(() => {
        pill.classList.add('hidden');
      }, 2000);
    });
  });

  console.log("✨ 5T Socials page ready!");
});


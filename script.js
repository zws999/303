// mic efect de puls pe butoanele colorate
document.addEventListener("DOMContentLoaded", () => {
  const actions = document.querySelectorAll(".action span");
  actions.forEach(span => {
    span.style.transition = "filter .3s ease";
    span.addEventListener("mouseenter", () => {
      span.style.filter = "drop-shadow(0 0 10px rgba(139,92,246,0.6))";
    });
    span.addEventListener("mouseleave", () => {
      span.style.filter = "none";
    });
  });

  console.log("✨ 5T Socials page ready!");
});

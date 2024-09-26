const scrollRevealOption = {
    distance: "40px",
    origin: "top",
    easing: 'cubic-bezier(0.5, 0, 0, 1)',
    duration:700,
};

const sr = ScrollReveal();

// Apply the reveal effect
sr.reveal(".icon", {
    ...scrollRevealOption,
    delay: 500
});

// feature container
ScrollReveal().reveal(".icon", {
    ...scrollRevealOption,
    interval: 500,
  });

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("visualizer-container");

  for (let i = 1; i <= 1000; i++) {
    const bar = document.createElement("div");
    bar.classList.add("bar");
    bar.style.setProperty("--i", i);
    container.appendChild(bar);
  }

  // Start the animation after a short delay
  setTimeout(() => {
    document.querySelectorAll(".bar").forEach((bar) => {
      bar.style.animationPlayState = "running";
    });
  }, 500); // Adjust the delay as needed
});

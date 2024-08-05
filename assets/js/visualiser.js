window.onload = () => {
  const visualizer = document.getElementById("visualizer-placeholder");
  const barCount = Math.floor(visualizer.clientWidth / 6); // Adjust the divisor for more or fewer bars

  for (let i = 0; i < barCount; i++) {
    const bar = document.createElement("div");
    bar.classList.add("bar");
    bar.style.animationDelay = `${i * 0.1}s`;
    visualizer.appendChild(bar);
  }
};

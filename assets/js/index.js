let lastScroll = 0;
let scrollThreshold = 100; // Cambia este valor para ajustar la distancia de desplazamiento necesaria
let accumulatedScroll = 0;

window.addEventListener("scroll", function () {
  const menu = document.getElementById("cabecera");
  const currentScroll = window.scrollY;
  const deltaScroll = currentScroll - lastScroll;

  accumulatedScroll += deltaScroll;

  window.requestAnimationFrame(function () {
    if (accumulatedScroll > scrollThreshold) {
      menu.classList.add("hidden");
      accumulatedScroll = 0;
    } else if (accumulatedScroll < -scrollThreshold) {
      menu.classList.remove("hidden");
      accumulatedScroll = 0;
    }
    lastScroll = currentScroll;
  });
});

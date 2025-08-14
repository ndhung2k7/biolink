/* ==== Sakura Falling (Hoa anh đào rơi) ==== */
(function () {
  const styleId = "sakura-fall-style";
  if (!document.getElementById(styleId)) {
    const css = `
      .sakura {
        position: fixed;
        top: -10vh;
        left: 0;
        pointer-events: none;
        user-select: none;
        will-change: transform, opacity, margin-left;
        animation: sakura-fall var(--fall, 10s) linear forwards, sakura-sway var(--sway, 5s) ease-in-out infinite;
        transform-origin: center;
        opacity: var(--opacity, 0.9);
        filter: drop-shadow(0 2px 2px rgba(0,0,0,0.15));
        z-index: 999999; /* đảm bảo rơi trên avatar, tên, MXH */
      }
      @keyframes sakura-fall {
        0%   { transform: translate3d(0, -10vh, 0) rotate(0deg); }
        100% { transform: translate3d(0, 110vh, 0) rotate(720deg); }
      }
      @keyframes sakura-sway {
        0%   { margin-left: 0; }
        50%  { margin-left: var(--amp, 80px); }
        100% { margin-left: 0; }
      }
    `;
    const style = document.createElement("style");
    style.id = styleId;
    style.textContent = css;
    document.head.appendChild(style);
  }

  const rand = (min, max) => Math.random() * (max - min) + min;
  let sakuraTimer = null;
  let running = false;

  function createPetal() {
    const span = document.createElement("span");
    span.className = "sakura";
    span.textContent = "🌸";
    const size = rand(14, 26);
    const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    span.style.left = `${rand(0, vw)}px`;
    span.style.setProperty("--fall", `${rand(8, 14)}s`);
    span.style.setProperty("--sway", `${rand(3.5, 6.5)}s`);
    span.style.setProperty("--amp", `${rand(-90, 90)}px`);
    span.style.setProperty("--opacity", `${rand(0.65, 1)}`);
    span.style.fontSize = `${size}px`;
    span.style.transform = `translate3d(0, -10vh, 0) rotate(${rand(-45, 45)}deg)`;
    span.addEventListener("animationend", () => span.remove());
    document.body.appendChild(span);
  }

  function startSakura(options = {}) {
    if (running) return;
    running = true;
    const density = options.density ?? 250;
    const maxOnScreen = options.maxOnScreen ?? 60;
    sakuraTimer = setInterval(() => {
      const current = document.querySelectorAll(".sakura").length;
      if (current < maxOnScreen) createPetal();
    }, Math.max(80, density));
    for (let i = 0; i < 12; i++) createPetal();
  }

  function stopSakura() {
    running = false;
    if (sakuraTimer) clearInterval(sakuraTimer);
    sakuraTimer = null;
  }

  document.addEventListener("visibilitychange", () => {
    if (document.hidden) stopSakura();
    else startSakura();
  });

  startSakura({ density: 220, maxOnScreen: 70 });
  window.SakuraFall = { start: startSakura, stop: stopSakura };
})();
document.addEventListener("DOMContentLoaded", function () {
  

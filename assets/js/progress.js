export function initProgress() {
  const progressBar = document.querySelector("#progress-bar");

  if (!progressBar) {
    return;
  }

  let ticking = false;
  let lastRun = 0;

  const updateProgress = () => {
    const scrollTop = window.scrollY || window.pageYOffset;
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const percent = scrollHeight <= 0 ? 0 : Math.min((scrollTop / scrollHeight) * 100, 100);
    progressBar.style.width = `${percent}%`;
    lastRun = performance.now();
    ticking = false;
  };

  const onScroll = () => {
    const now = performance.now();

    if (ticking || now - lastRun < 16) {
      return;
    }

    ticking = true;
    window.requestAnimationFrame(updateProgress);
  };

  updateProgress();
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);
}

window.initProgress = initProgress;

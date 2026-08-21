document.querySelectorAll('.publication-figure').forEach((figure) => {
  figure.addEventListener('pointermove', ({ clientX, clientY }) => {
    const { left, top, width, height } = figure.getBoundingClientRect();
    figure.style.setProperty('--zoom-x', `${((clientX - left) / width) * 100}%`);
    figure.style.setProperty('--zoom-y', `${((clientY - top) / height) * 100}%`);
  });
});

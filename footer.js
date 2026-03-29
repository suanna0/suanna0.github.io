(function () {
  const el = document.getElementById('footer');
  el.className = 'footer';
  el.innerHTML =
    '<p>Suanna Zhong</p>' +
    '<button class="button" id="backToTop" title="Back to Top">Back to Top ↑</button>';

  window.addEventListener('scroll', function () {
    const btn = document.getElementById('backToTop');
    btn.style.display =
      (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300)
        ? 'block' : 'none';
  });

  document.getElementById('backToTop').addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
})();

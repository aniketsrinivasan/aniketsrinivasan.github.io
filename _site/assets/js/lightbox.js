(function() {
  var lightbox = document.querySelector('.lightbox');
  if (!lightbox) return;
  var image = lightbox.querySelector('.lightbox-img');
  var caption = lightbox.querySelector('.lightbox-caption');

  function open(photo) {
    image.src = photo.src;
    image.alt = photo.alt;
    caption.textContent = photo.dataset.caption || '';
    lightbox.classList.add('open');
    lightbox.setAttribute('aria-hidden', 'false');
  }

  function close() {
    lightbox.classList.remove('open');
    lightbox.setAttribute('aria-hidden', 'true');
  }

  // Each gallery photo opens itself in the lightbox.
  document.querySelectorAll('.frames-item img').forEach(function(photo) {
    photo.addEventListener('click', function() { open(photo); });
  });

  lightbox.addEventListener('click', close);
  document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') close();
  });
})();

document.addEventListener('DOMContentLoaded', function() {
  const toggleBtn = document.querySelector('.nav-toggle');
  const mobileNav = document.getElementById('mobileNav');
  const mobileOverlay = document.getElementById('mobileOverlay');

  if (!toggleBtn || !mobileNav) return;

  function toggleMenu() {
    toggleBtn.classList.toggle('open');
    mobileNav.classList.toggle('open');
    if (mobileOverlay) mobileOverlay.classList.toggle('open');
    
    // Toggle aria-expanded
    const expanded = toggleBtn.getAttribute('aria-expanded') === 'true';
    toggleBtn.setAttribute('aria-expanded', !expanded);
    
    // Prevent background scrolling when open
    document.body.style.overflow = !expanded ? 'hidden' : '';
  }

  toggleBtn.addEventListener('click', toggleMenu);
  
  if (mobileOverlay) {
    mobileOverlay.addEventListener('click', toggleMenu);
  }

  // Close mobile nav when a link is clicked
  const navLinks = mobileNav.querySelectorAll('a');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (mobileNav.classList.contains('open')) {
        toggleMenu();
      }
    });
  });
});

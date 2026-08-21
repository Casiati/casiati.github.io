// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');

if (mobileMenuBtn && mobileMenu) {
  mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });

  // Close when clicking a link
  document.querySelectorAll('.mobile-link').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
    });
  });
}

// Project Filtering
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.getAttribute('data-filter');

    projectCards.forEach(card => {
      if (filter === 'all' || card.getAttribute('data-category') === filter) {
        card.style.display = 'flex';
      } else {
        card.style.display = 'none';
      }
    });
  });
});

// Copy Email Button with Toast Feedback
const copyEmailBtn = document.getElementById('copyEmailBtn');

if (copyEmailBtn) {
  copyEmailBtn.addEventListener('click', () => {
    const email = copyEmailBtn.getAttribute('data-email') || 'lucasrobiati@gmail.com';
    navigator.clipboard.writeText(email).then(() => {
      const originalHtml = copyEmailBtn.innerHTML;
      copyEmailBtn.innerHTML = '<i class="fa-solid fa-check text-emerald-400"></i> <span>E-mail Copiado!</span>';
      copyEmailBtn.classList.add('border-emerald-500');

      setTimeout(() => {
        copyEmailBtn.innerHTML = originalHtml;
        copyEmailBtn.classList.remove('border-emerald-500');
      }, 2500);
    }).catch(() => {
      // Fallback
      alert('E-mail: ' + email);
    });
  });
}

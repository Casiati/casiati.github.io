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
const copyEmailText = document.getElementById('copyEmailText');

if (copyEmailBtn && copyEmailText) {
  copyEmailBtn.addEventListener('click', () => {
    const email = copyEmailBtn.getAttribute('data-email');
    navigator.clipboard.writeText(email).then(() => {
      const originalText = copyEmailText.textContent;
      copyEmailText.textContent = 'E-mail Copiado! âœ“';
      copyEmailBtn.classList.add('border-emerald-500');

      setTimeout(() => {
        copyEmailText.textContent = originalText;
        copyEmailBtn.classList.remove('border-emerald-500');
      }, 2500);
    });
  });
}
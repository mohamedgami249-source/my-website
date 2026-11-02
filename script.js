// إرسال النموذج
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('✅ تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.');
  this.reset();
});

// تمرير سلس للروابط
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
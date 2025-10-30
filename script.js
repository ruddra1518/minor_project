
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const targetId = this.getAttribute('href');
    if (targetId !== '#' && targetId.length > 1) {
      e.preventDefault();
      document.querySelector(targetId).scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});


const fadeElements = document.querySelectorAll('.fade-in');

const fadeInOnScroll = () => {
  const triggerBottom = window.innerHeight * 0.9;

  fadeElements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < triggerBottom) {
      el.classList.add('visible');
    } else {
      el.classList.remove('visible');
    }
  });
};

window.addEventListener('scroll', fadeInOnScroll);
window.addEventListener('load', fadeInOnScroll);

// expanding/collapsing
document.querySelectorAll('.details-toggle').forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('data-target');
        const detailsDiv = document.getElementById(targetId);

        if (detailsDiv.classList.contains('expanded')) {
            // Collapse 
            detailsDiv.classList.remove('expanded');
            this.setAttribute('aria-expanded', 'false');
            

        } else {
            // Expand 
            detailsDiv.classList.add('expanded');
            this.setAttribute('aria-expanded', 'true');
            
        }
    });
});
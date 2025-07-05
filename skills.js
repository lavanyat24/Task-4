 // Add animation for skill cards
  const skillsSection = document.getElementById('skills');
  if (skillsSection && skillCards.length > 0) {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate'); // Optional class to trigger animation
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    skillCards.forEach(card => observer.observe(card));
  }

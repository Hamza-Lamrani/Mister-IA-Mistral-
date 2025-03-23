document.addEventListener('DOMContentLoaded', function() {
  const slides = document.querySelectorAll('.slide');
  const prevBtn = document.getElementById('prev-btn');
  const nextBtn = document.getElementById('next-btn');
  const currentSlideDisplay = document.getElementById('current-slide');
  const totalSlidesDisplay = document.getElementById('total-slides');
  
  let currentSlideIndex = 0;
  
  // Initialize
  totalSlidesDisplay.textContent = slides.length;
  updateSlideNavigation();
  
  // Button event listeners
  prevBtn.addEventListener('click', showPreviousSlide);
  nextBtn.addEventListener('click', showNextSlide);
  
  // Keyboard navigation
  document.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowRight') {
      showNextSlide();
    } else if (e.key === 'ArrowLeft') {
      showPreviousSlide();
    }
  });
  
  function showNextSlide() {
    if (currentSlideIndex < slides.length - 1) {
      slides[currentSlideIndex].classList.remove('active');
      currentSlideIndex++;
      slides[currentSlideIndex].classList.add('active');
      updateSlideNavigation();
    }
  }
  
  function showPreviousSlide() {
    if (currentSlideIndex > 0) {
      slides[currentSlideIndex].classList.remove('active');
      currentSlideIndex--;
      slides[currentSlideIndex].classList.add('active');
      updateSlideNavigation();
    }
  }
  
  function updateSlideNavigation() {
    currentSlideDisplay.textContent = currentSlideIndex + 1;
    
    // Disable/enable navigation buttons
    prevBtn.disabled = currentSlideIndex === 0;
    nextBtn.disabled = currentSlideIndex === slides.length - 1;
    
    // Add visual indication
    if (prevBtn.disabled) {
      prevBtn.classList.add('disabled');
    } else {
      prevBtn.classList.remove('disabled');
    }
    
    if (nextBtn.disabled) {
      nextBtn.classList.add('disabled');
    } else {
      nextBtn.classList.remove('disabled');
    }
  }
});

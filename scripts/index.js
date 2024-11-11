document.addEventListener("DOMContentLoaded", () => {
    // Select all elements with the class 'tech'
    const techElements = document.querySelectorAll('.tech');

    techElements.forEach(element => {
      // Add mouseenter event to each element
      element.addEventListener('mouseenter', () => {
        const borderColor = window.getComputedStyle(element).borderColor;
        element.style.backgroundColor = borderColor;
      });

      // Add mouseleave event to reset background color
      element.addEventListener('mouseleave', () => {
        element.style.backgroundColor = 'transparent';
      });
    });
  });
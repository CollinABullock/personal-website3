// Function to be called when the element enters the viewport
function slideIn(entries, observer) {
  entries.forEach(entry => {
      if (entry.isIntersecting) {
          entry.target.classList.add('slide'); // Add a CSS class for sliding animation
          observer.unobserve(entry.target); // Stop observing once animation is triggered
      }
  });
}

// Using Intersection Observer to detect when the element enters the viewport
const slideInOptions = {
  root: null,
  threshold: 0.2 // Adjust this threshold as needed
};

const slideInObserver = new IntersectionObserver(slideIn, slideInOptions);
const slideInElement = document.getElementById('slide-in');
slideInObserver.observe(slideInElement);

// Optionally, you can do the same for the skills list
const skillsList = document.getElementById('skills-list');
slideInObserver.observe(skillsList);

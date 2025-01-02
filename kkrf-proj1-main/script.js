function animateNumber(element, target) {
  let current = 0;
  const increment = target / 100; // Increment steps

  const interval = setInterval(() => {
    current += increment;
    if (current >= target) {
      clearInterval(interval);
      current = target;
    }
    element.textContent = Math.floor(current); // Set the new number
  }, 15); // Every 15ms
}

// Using Intersection Observer to detect when the element comes into view
const thirtyFiveEl = document.getElementById("thirtyFive");
const sixteenHundredEl = document.getElementById("sixteenHundred");
const threeThousandEl = document.getElementById("threeThousand");
const fiveHundredEl = document.getElementById("fiveHundred");
const fiveEl = document.getElementById("five");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateNumber(thirtyFiveEl, 35); // Animate to 35 when in view
        animateNumber(sixteenHundredEl, 1600);
        animateNumber(threeThousandEl, 3000);
        animateNumber(fiveHundredEl, 500);
        animateNumber(fiveEl, 5);
        observer.disconnect(); // Stop observing after the animation is triggered
      }
    });
  },
  { threshold: 1 }
); // 100% of the element must be in view



observer.observe(thirtyFiveEl); // Start observing the correct element
observer.observe(sixteenHundredEl);
observer.observe(threeThousandEl);
observer.observe(fiveHundredEl);
observer.observe(fiveEl);

// script.js

// Initialize Lenis
const lenis = new Lenis({
  duration: 1.2,         // Scroll speed
  easing: (t) => t,      // Linear easing function
  smooth: true,          // Enable smooth scrolling
  smoothTouch: false     // Disable smooth scrolling on touch devices
})

// Animation Frame Loop to keep Lenis updated
function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)
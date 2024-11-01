// script.js
document.addEventListener("DOMContentLoaded", function () {
    const reveals = document.querySelectorAll(".reveal");

    function checkReveal() {
        const windowHeight = window.innerHeight;
        reveals.forEach(reveal => {
            const elementTop = reveal.getBoundingClientRect().top;
            const isVisible = elementTop < windowHeight - 5;  // Adjust trigger point if needed
            if (isVisible) {
                reveal.classList.add("reveal-visible");
            }
        });
    }

    // Event listeners for scroll and initial check
    window.addEventListener("scroll", checkReveal);
    checkReveal(); // Trigger initial reveal on page load
});

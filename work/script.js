// Scroll-to-top button
window.onscroll = function () {
const btn = document.getElementById("backToTop");
if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    btn.style.display = "block";
} else {
    btn.style.display = "none";
}
};

document.getElementById("backToTop").onclick = function () {
window.scrollTo({ top: 0, behavior: "smooth" });
};

// Animate landing_desc on scroll with GSAP
gsap.registerPlugin(ScrollTrigger);
const isMobile = window.innerWidth < 768; 

gsap.from(".landing_desc", {
scrollTrigger: {
    trigger: ".landing_desc",
    start: "top 80%",
},
y: 80,
opacity: 0,
duration: 1,
ease: "power4.out"
});

gsap.utils.toArray("img").forEach((imgEl) => {
  gsap.from(imgEl, {
    scrollTrigger: {
      trigger: imgEl,
      start: "top 80%",
    },
    y: isMobile ? 10 : 30, 
    opacity: 0,
    duration: 1,
    ease: "power4.out"
  });
});

gsap.utils.toArray("video").forEach((videoEl) => {
  gsap.from(videoEl, {
    scrollTrigger: {
      trigger: videoEl,
      start: "top 80%",
    },
    y: isMobile ? 10 : 30, 
    opacity: 0,
    duration: 1,
    ease: "power4.out"
  });
});
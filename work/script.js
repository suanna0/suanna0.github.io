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

gsap.registerPlugin(ScrollTrigger);
const isMobile = window.innerWidth < 768; 

const downArrow = document.getElementById("downArrow");
if (downArrow) {
  gsap.to(downArrow, {
    opacity: 1,
    delay: 1,
    duration: 1,
    ease: "power2.out"
  });

  downArrow.addEventListener("click", () => {
    gsap.to(window, {
      scrollTo: "#mainSite",
      duration: 1,
      ease: "power2.inOut"
    });
  });

  document.getElementById("downArrow").addEventListener("click", () => {
    gsap.to(window, {
      scrollTo: "#mainSite",
      duration: 1,
      ease: "power2.inOut"
    });
  });
}


gsap.from(".landing_desc h1", {
scrollTrigger: {
    trigger: ".landing_desc h1",
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
    y: isMobile ? 10 : 20, 
    opacity: 0,
    duration: 0.75,
    ease: "power4.out"
  });
});

gsap.utils.toArray("video").forEach((videoEl) => {
  gsap.from(videoEl, {
    scrollTrigger: {
      trigger: videoEl,
      start: "top 80%",
    },
    y: isMobile ? 10 : 20, 
    opacity: 0,
    duration: 0.75,
    ease: "power4.out"
  });
});
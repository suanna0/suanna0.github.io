gsap.registerPlugin(ScrollTrigger);

gsap.from("#Suanna", {
  ease: "power1.out",
  opacity: 0,
  duration: 1,
});

gsap.to(".dark-bg", {
  ease: "power3.out",
  delay: 1,
  opacity: 0,
  duration: 0.5
});

gsap.from("#Suanna", {
  ease: "power3.out",
  delay: 1.5,
  scale: 2,
  y: "45vh",
});

gsap.from("#links", {
  opacity: 0,
  delay: 1.5,
  y: 200,
  duration: 0.5,
  ease: "power3.out"
});

gsap.to(".light-bg", {
  ease: "power3.out",
  zIndex: 1,
  delay: 1.8,
  duration: 1
});
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

function wrapWords(node) {
  const walker = document.createTreeWalker(node, NodeFilter.SHOW_TEXT, null, false);

  const textNodes = [];
  while (walker.nextNode()) {
    textNodes.push(walker.currentNode);
  }

  textNodes.forEach(textNode => {
    const parent = textNode.parentNode;
    const text = textNode.textContent;

    if (!text.trim()) return;

    const fragment = document.createDocumentFragment();

    text.split(/(\s+)/).forEach(word => {
      if (word.trim() === "") {
        fragment.appendChild(document.createTextNode(word)); 
      } else {
        const span = document.createElement("span");
        span.className = "parallax-word";
        span.textContent = word;
        fragment.appendChild(span);
      }
    });

    parent.replaceChild(fragment, textNode);
  });
}

const h1 = document.querySelector(".parallax-title");
wrapWords(h1);

const words = document.querySelectorAll(".parallax-word");

let targetX = 0;
let targetY = 0;
const currentXY = Array.from(words).map(() => ({ x: 0, y: 0 }));

function lerp(start, end, factor) {
  return start + (end - start) * factor;
}

function animateWords() {
  words.forEach((word, i) => {
    const factor = 0.05 - (i%5) * 0.01; 
    currentXY[i].x = lerp(currentXY[i].x, targetX, factor);
    currentXY[i].y = lerp(currentXY[i].y, targetY, factor);
    word.style.transform = `translate(${currentXY[i].x}px, ${currentXY[i].y}px)`;
  });
  requestAnimationFrame(animateWords);
}

if (!isMobile) {
  document.addEventListener("mousemove", (e) => {
    targetX = (e.clientX / window.innerWidth - 0.25) * 50;
    targetY = (e.clientY / window.innerHeight - 0.25) * 50;
  });
  animateWords();
}

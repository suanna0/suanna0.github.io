const commercialText = document.getElementById('commercialText');
const personalText = document.getElementById('personalText');
const videoCommercial = document.getElementById('videoCommercial');
const videoPersonal = document.getElementById('videoPersonal');

commercialText.addEventListener('mouseenter', () => {
  videoCommercial.style.opacity = 1;
  videoCommercial.play();
});

commercialText.addEventListener('mouseleave', () => {
  videoCommercial.style.opacity = 0;
  videoCommercial.pause();
  videoCommercial.currentTime = 0;
});

personalText.addEventListener('mouseenter', () => {
  videoPersonal.style.opacity = 1;
  videoPersonal.play();
});

personalText.addEventListener('mouseleave', () => {
  videoPersonal.style.opacity = 0;
  videoPersonal.pause();
  videoPersonal.currentTime = 0;
});

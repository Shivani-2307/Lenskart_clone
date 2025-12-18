const slides = document.getElementById("slides");
let slideItems = document.querySelectorAll(".slide");
let index = 0;

// STEP 1: CLONE FIRST IMAGE & APPEND
const firstClone = slideItems[0].cloneNode(true);
slides.appendChild(firstClone);

// UPDATE LIST after clone
slideItems = document.querySelectorAll(".slide");

// AUTO SLIDE
setInterval(() => {
  index++;
  slides.style.transition = "transform 0.5s ease";
  slides.style.transform = `translateX(-${index * 100}%)`;

  // WHEN LAST (CLONE) IMAGE PAR PAHUNCH JAYE
  if (index === slideItems.length - 1) {

    setTimeout(() => {
      slides.style.transition = "none";      // remove animation
      index = 0;                              // move back to original 1st image
      slides.style.transform = "translateX(0)";  
    }, 500); // 0.5 sec slide timing
  }

}, 2000);
// filepath: soap-mountain/soap-mountain/src/main.js

// Animazione avanzata per randomizzare leggermente i movimenti delle nuvole, sole, riflessi e alberi
function animateClouds() {
  const clouds = document.querySelectorAll('.cloud');
  clouds.forEach((cloud, i) => {
    const base = i % 2 === 0 ? 1 : -1;
    cloud.animate([
      { transform: `translateY(0px)` },
      { transform: `translateY(${base * 8 + Math.random() * 4}px)` },
      { transform: `translateY(0px)` }
    ], {
      duration: 12000 + Math.random() * 4000,
      iterations: Infinity,
      direction: 'alternate',
      easing: 'ease-in-out',
      delay: Math.random() * 2000
    });
  });
}

function animateSun() {
  const sun = document.querySelector('.sun');
  if (sun) {
    sun.animate([
      { filter: 'brightness(1)', transform: 'translateY(0px)' },
      { filter: 'brightness(1.08)', transform: 'translateY(-10px)' },
      { filter: 'brightness(1)', transform: 'translateY(0px)' }
    ], {
      duration: 9000,
      iterations: Infinity,
      direction: 'alternate',
      easing: 'ease-in-out'
    });
  }
}

function animateReflections() {
  const reflections = document.querySelectorAll('.reflection');
  reflections.forEach((refl, i) => {
    refl.animate([
      { transform: 'scaleX(1) translateY(0px)', opacity: 0.7 },
      { transform: `scaleX(${1 + Math.random() * 0.08}) translateY(-${2 + Math.random() * 4}px)`, opacity: 1 },
      { transform: 'scaleX(1) translateY(0px)', opacity: 0.7 }
    ], {
      duration: 5000 + Math.random() * 3000,
      iterations: Infinity,
      direction: 'alternate',
      easing: 'ease-in-out',
      delay: Math.random() * 2000
    });
  });
}

function animateTrees() {
  const trees = document.querySelectorAll('.trees path');
  trees.forEach((tree, i) => {
    tree.animate([
      { transform: 'rotate(-1deg)' },
      { transform: `rotate(${1 + Math.random() * 2}deg)` },
      { transform: 'rotate(-1deg)' }
    ], {
      duration: 3500 + Math.random() * 2000,
      iterations: Infinity,
      direction: 'alternate',
      easing: 'ease-in-out',
      delay: Math.random() * 1000
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
    const floatingElements = document.querySelectorAll('.floating');

    floatingElements.forEach(element => {
        animateElement(element);
    });

    function animateElement(element) {
        const animationDuration = Math.random() * 5 + 3; // Random duration between 3 and 8 seconds
        const translateY = Math.random() * 20 + 10; // Random float distance between 10 and 30 pixels

        element.animate([
            { transform: `translateY(0px)` },
            { transform: `translateY(-${translateY}px)` },
            { transform: `translateY(0px)` }
        ], {
            duration: animationDuration * 1000,
            iterations: Infinity,
            easing: 'ease-in-out'
        });
    }

    animateClouds();
    animateSun();
    animateReflections();
    animateTrees();
});
// (nessuna modifica necessaria, le classi e animazioni sono già compatibili con la nuova struttura SVG)
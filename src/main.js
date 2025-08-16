// filepath: soap-mountain/soap-mountain/src/main.js

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
});
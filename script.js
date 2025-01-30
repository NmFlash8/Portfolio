// script.js
document.addEventListener('DOMContentLoaded', function () {
    const containers = document.querySelectorAll('.container');

    const options = {
        threshold: 0.5 // Trigger the animation when 50% of the container is in view
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target); // Stop observing once animated
            }
        });
    }, options);

    containers.forEach(container => {
        observer.observe(container);
    });
});

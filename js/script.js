// js/script.js

const projects = [
    {
        title: "RuneLite Event Server",
        description: "Flask server to handle RuneLite EventsAPI: levels, quests, bank items, and inventory.",
        link: "https://github.com/nmflash8"
    },
    {
        title: "Super Paper Mario Stat Sync",
        description: "UDP client/server with Dolphin Memory Engine for stat syncing.",
        link: "https://github.com/nmflash8"
    },
    {
        title: "Factorio Picture Generator",
        description: "encodes and decodes json to create custom objects to draw any picture in factorio",
        link: "https://github.com/nmflash8"
    }
];

const gallery = document.getElementById("project-gallery");

projects.forEach(project => {
    const card = document.createElement("div");
    card.className = "project-card";
    card.innerHTML = `
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <a href="${project.link}" target="_blank">View Project</a>
    `;
    gallery.appendChild(card);
});

// Contact Form Validation
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form');
    const status = document.getElementById('form-status');

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();

            if (!name || !email || !message) {
                status.textContent = "Please fill in all fields.";
                status.style.color = "red";
                return;
            }

            if (!email.includes('@')) {
                status.textContent = "Please enter a valid email.";
                status.style.color = "red";
                return;
            }

            status.textContent = "Message sent successfully! (Pretend send)";
            status.style.color = "green";

            form.reset();
        });
    }

    // Scroll animation (basic fade-in)
    const faders = document.querySelectorAll('.fade-in');

    const appearOptions = {
        threshold: 0.3,
        rootMargin: "0px 0px -50px 0px"
    };

    const appearOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('appear');
            observer.unobserve(entry.target);
        });
    }, appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });
});

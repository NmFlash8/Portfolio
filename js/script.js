// Dynamic Projects Gallery
const projects = [
    {
        title: "Project 1",
        description: "Description for Project 1",
        img: "assets/images/project1.png"
    },
    {
        title: "Project 2",
        description: "Description for Project 2",
        img: "assets/images/project2.png"
    }
];

const gallery = document.getElementById("projects-gallery");

projects.forEach(project => {
    const projectCard = document.createElement("div");
    projectCard.classList.add("project-card");

    const img = document.createElement("img");
    img.src = project.img;
    img.alt = project.title;

    const title = document.createElement("h3");
    title.textContent = project.title;

    const description = document.createElement("p");
    description.textContent = project.description;

    projectCard.appendChild(img);
    projectCard.appendChild(title);
    projectCard.appendChild(description);

    gallery.appendChild(projectCard);
});

// Contact form validation (Example)
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name && email && message) {
        alert("Thank you for your message!");
        // You can send the form data here
    } else {
        alert("Please fill in all fields.");
    }
});

// Add interactivity if needed
document.addEventListener("DOMContentLoaded", () => {
    console.log("Portfolio loaded successfully!");

    // Example: Smooth scroll for navigation links
    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach(link => {
        link.addEventListener("click", event => {
            event.preventDefault();
            const targetId = event.target.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 50, // Adjust for sticky nav
                    behavior: "smooth",
                });
            }
        });
    });
});

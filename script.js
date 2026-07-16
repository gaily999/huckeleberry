const backToTopBtn = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        backToTopBtn.classList.add("show");
    } else {
        backToTopBtn.classList.remove("show");
    }
});

backToTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
    menuToggle.classList.toggle("active");
    navLinks.classList.toggle("active");
});

document.addEventListener("click", (e) => {
    if (!menuToggle.contains(e.target) && !navLinks.contains(e.target)) {
        menuToggle.classList.remove("active");
        navLinks.classList.remove("active");
    }
});
document.addEventListener("DOMContentLoaded", () => {
    document.body.classList.add("fade-in");

    const links = document.querySelectorAll("a");
    
    links.forEach(link => {
        link.addEventListener("click", (e) => {
            const targetUrl = link.getAttribute("href");

            if (
                targetUrl && 
                !targetUrl.startsWith("#") && 
                !targetUrl.startsWith("javascript:") && 
                link.target !== "_blank"
            ) {
                e.preventDefault();
                document.body.classList.remove("fade-in");

                setTimeout(() => {
                    window.location.href = targetUrl;
                }, 400);
            }
        });
    });
});
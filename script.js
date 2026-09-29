// ================================
// ANIMASI SAAT SCROLL
// ================================

const elements = document.querySelectorAll(".fade-up");

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    },
    {
        threshold: 0.15
    }
);

elements.forEach((element) => {
    observer.observe(element);
});


// ================================
// FORM CONTACT
// ================================

const contactForm = document.querySelector("#contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        alert(
            "Terima kasih sudah menghubungi saya! " +
            "Pesan Anda berhasil diterima."
        );

        contactForm.reset();
    });
}


// ================================
// NAVBAR SAAT SCROLL
// ================================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});
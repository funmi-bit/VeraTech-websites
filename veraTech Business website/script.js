const images = [
    'images/banner.jpeg',
    'images/banner2.jpeg'
];
const img = document.querySelector('#bannerImages img'); // FIXED
let index = 0;

setInterval(() => {
    img.style.opacity = 0;

    setTimeout(() => {
        index = (index + 1) % images.length;
        img.src = images[index];
        img.style.opacity = 0.5;
    }, 400);

}, 3000);



function tech(){
        let feature = document.querySelectorAll(".feature-item");
    feature.forEach(item => {
        item.addEventListener("mouseenter", () => {
            item.classList.add("active");
        })
               item.addEventListener("mouseleave", () => {
            item.classList.remove("active");
        });
    })
}
function menuToggle(){
    let menuToggle = document.querySelector(".menu-toggle");
    let mobileMenu = document.querySelector(".mobile-menu");
    let nav = document.querySelector(".nav-links");

    menuToggle.addEventListener("click", () => {
        menuToggle.classList.toggle("active");
        mobileMenu.classList.toggle("active"); 
        nav.classList.toggle("active");
    });
}
tech();
menuToggle()


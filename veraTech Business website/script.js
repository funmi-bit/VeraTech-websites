function tech(){
        let feature = document.querySelectorAll(".feature-item");
    feature.forEach(item => {
        item.addEventListener("mouseenter", () => {
            item.classList.toggle("active");
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
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');

    burger.addEventListener("click", () => {
        navLinks.classList.toggle('nav-active')
        // burgur animation
        burger.classList.toggle('toogle');
    });

}
navSlide();
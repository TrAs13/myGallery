const slides = document.querySelectorAll(".container__slide");

slides.forEach((slide) => {
    slide.addEventListener('click', () => {
        clearActiveSlides()
        slide.classList.add('container__slide_active')
    })
})

function clearActiveSlides() {
    slides.forEach((slide) => {
        slide.classList.remove('container__slide_active')
    })
}
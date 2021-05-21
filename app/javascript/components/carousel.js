const initCarousel = () => {
    let slidePosition = 0;
    const slides = document.getElementsByClassName('carousel_item');
    const indicators_circle = document.getElementsByClassName('carousel_indicator_circle');
    const totalSlides = slides.length;
    
    document.
        getElementById('carousel_button--next')
        .addEventListener("click", () => {
            moveToNextSlide();
        });
        document.
        getElementById('carousel_button--prev')
        .addEventListener("click", () => {
            moveToPrevSlide();
        });
    
    function updateSlidePosition() {
        for(let slide of slides) {
            slide.classList.remove('carousel_item--visible')
        }
        slides[slidePosition].classList.add('carousel_item--visible')
        updateIndicatorsPosition();
    }

    function moveToNextSlide() {
        console.log("Hello next")
        if (slidePosition == totalSlides - 1) {
            slidePosition = 0
        } else {
            slidePosition++;
        }
        updateSlidePosition();
    }

    function moveToPrevSlide() {
        console.log("Hello prev")
        if (slidePosition == 0) {
            slidePosition = totalSlides - 1
        } else {
            slidePosition--;
        }
        updateSlidePosition();
    }

    function updateIndicatorsPosition() {
        for(let indicator of indicators_circle) {
            indicator.classList.remove('carousel_indicator--active')
            indicator.classList.add('carousel_indicator--inactive')
        }
        indicators_circle[slidePosition].classList.remove('carousel_indicator--inactive')
        indicators_circle[slidePosition].classList.add('carousel_indicator--active')
    }
}

export { initCarousel };
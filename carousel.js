document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.carousel-track');
    if (!track) return;

    const slides = Array.from(track.children);
    const nextButton = document.querySelector('.carousel-btn.next');
    const prevButton = document.querySelector('.carousel-btn.prev');
    const dotsContainer = document.querySelector('.carousel-dots');

    let currentIndex = 0;

    // Create dots
    slides.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => moveToSlide(index));
        dotsContainer.appendChild(dot);
    });

    const dots = Array.from(dotsContainer.children);

    const updateDots = (index) => {
        dots.forEach(dot => dot.classList.remove('active'));
        dots[index].classList.add('active');
    };

    const moveToSlide = (index) => {
        currentIndex = index;
        const amountToMove = -100 * currentIndex;
        track.style.transform = `translateX(${amountToMove}%)`;
        updateDots(currentIndex);
    };

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % slides.length;
        moveToSlide(currentIndex);
    });

    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        moveToSlide(currentIndex);
    });

    // Auto-play (optional)
    // setInterval(() => {
    //     currentIndex = (currentIndex + 1) % slides.length;
    //     moveToSlide(currentIndex);
    // }, 5000);
});

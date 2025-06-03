const track = document.getElementById('carouselTrack');
const btnLeft = document.getElementById('btnLeft');
const btnRight = document.getElementById('btnRight');
const step = 270;
let scroll = 0;

btnLeft.addEventListener('click', () => {
    scroll = Math.max(scroll - step, 0);
    track.style.transform = `translateX(-${scroll}px)`;
    pauseAutoScroll();
});

btnRight.addEventListener('click', () => {
    const maxScroll = track.scrollWidth - track.offsetWidth;
    scroll = Math.min(scroll + step, maxScroll);
    track.style.transform = `translateX(-${scroll}px)`;
    pauseAutoScroll();
});

let autoScrollInterval = null;
let pauseTimeout = null;
const startAutoScroll = () => {
    autoScrollInterval = setInterval(() => {
        const maxScroll = track.scrollWidth - track.offsetWidth;
        scroll = scroll + step > maxScroll ? 0 : scroll + step;
        track.style.transform = `translateX(-${scroll}px)`;
    }, 3000);
};

const pauseAutoScroll = () => {
    clearInterval(autoScrollInterval);
    clearTimeout(pauseTimeout);
    pauseTimeout = setTimeout(() => {
        startAutoScroll();
    }, 6000); // pausa de 7 segundos
};

// Iniciar scroll automático
startAutoScroll();
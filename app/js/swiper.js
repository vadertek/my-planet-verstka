// In Trends mobile slider.
let trendsSwiper = null;

const initTrendsSwiper = (reset = false) => {
    const isDesktop = window.matchMedia('(min-width: 768px)').matches;

    if (isDesktop) {
        trendsSwiper?.destroy(true, true);
        trendsSwiper = null;
        return;
    }

    if (!trendsSwiper) {
        trendsSwiper = new Swiper('[data-trends-swiper]', {
            slidesPerView: 1,
            speed: 350,
            watchOverflow: true,
            navigation: {
                prevEl: '[data-trends-swiper-prev]',
                nextEl: '[data-trends-swiper-next]',
            },
        });
    }

    trendsSwiper.update();

    if (reset) {
        trendsSwiper.slideTo(0, 0);
    }
};

window.updateTrendsSwiper = initTrendsSwiper;
window.addEventListener('resize', () => initTrendsSwiper());

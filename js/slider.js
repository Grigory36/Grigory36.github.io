new Swiper('.slider', {
	slidesPerView: 1,
    spaceBetween: 0,
	loop: true,
	wrapperClass: 'slider__list',
    slideClass: 'slider__item',
    navigation: {
        nextEl: '.slider__button_next',
        prevEl: '.slider__button_prev',
    },

    breakpoints: {
        1251: {
            slidesPerView: 3,
            spaceBetween: 30,
        },

        1024: {
        	slidesPerView: 2,
        	spaceBetween: 34,
        },
    },

    pagination: {
        el: '.slider__pagination',
        type: 'bullets',
        bulletClass: 'paginator__item',
        bulletActiveClass: 'paginator__item--active',
        clickable: true
    },

    a11y: {
        prevSlideMessage: 'Предыдущий слайд',
        nextSlideMessage: 'Следующий слайд',
        paginationBulletMessage: 'Перейти к слайду {{index}}'
  },
});	
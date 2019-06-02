'use strict'

$(document).ready(function () {
    const ourServices = new Tabs('.our-services-header-tabs-btn', 'services-tabs-btn-active', '.our-services-articles-item', 'name');
    const ourWork = new Tabs('.our-work-header-tabs-btn', 'work-tabs-btn-active', '.our-work-gallery-item', 'name');

    const aboutTheHamSlider = new Slider('.slider-controls-img', 'slider-controls-img-active', '.slide', 'name');
    const aboutTheHam = new Tabs('.slider-controls-img', 'slider-controls-img-active', '.slide', 'name');

    function Tabs(tabClass, tabClassActive, itemClass, dataName) {
        const defaultTab = $(`${tabClass}.${tabClassActive}`).data(dataName)
        $(itemClass).each(function () {
            ($(this).data(dataName) === defaultTab || !defaultTab) ? $(this).show(): $(this).hide();
            $(this).css("order", `${Math.floor(Math.random()*$(itemClass).length)}`);
        });
        $(document).on('click', tabClass, (event) => {
            $(event.currentTarget).addClass(tabClassActive).siblings().removeClass(tabClassActive);
            $(itemClass).each(function () {
                $(this).css("order", `${Math.floor(Math.random()*$(itemClass).length)}`);
                ($(event.currentTarget).data(dataName) === $(this).data(dataName) || !$(event.currentTarget).data(dataName)) ? $(this).show(): $(this).hide();
            });
        });
    };

    function Slider(tabClass, tabClassActive, itemClass, dataName) {
        let currentSlide = 0;
        $(tabClass).eq(currentSlide).addClass(tabClassActive);
        // $(document).on('click', '.slider-controls-right', function () {
        //     currentSlide = $(`.${tabClassActive}`).index(tabClass);
        //     $(tabClass).eq(currentSlide).removeClass(tabClassActive);
        //     currentSlide = (currentSlide + 1) % $(tabClass).length;
        //     $(tabClass).eq(currentSlide).addClass(tabClassActive);
        //     $(itemClass).each(function () {
        //         ($(this).data(dataName) === $(tabClass).eq(currentSlide).data(dataName)) ? $(this).show(): $(this).hide();
        //     })
        // });
        // $(document).on('click', '.slider-controls-left', function () {
        //     currentSlide = $(`.${tabClassActive}`).index(tabClass);
        //     $(tabClass).eq(currentSlide).removeClass(tabClassActive);
        //     currentSlide = (currentSlide - 1) % $(tabClass).length;
        //     $(tabClass).eq(currentSlide).addClass(tabClassActive);
        //     $(itemClass).each(function () {
        //         ($(this).data(dataName) === $(tabClass).eq(currentSlide).data(dataName)) ? $(this).show(): $(this).hide();
        //     })
        // });

        $(document).click((event) => {
            currentSlide = $(`.${tabClassActive}`).index(tabClass);
            $(tabClass).eq(currentSlide).removeClass(tabClassActive);

            if ($(event.target).hasClass('slider-controls-right')) {
                currentSlide = (currentSlide + 1) % $(tabClass).length;
            } else if ($(event.target).hasClass('slider-controls-left')) {
                currentSlide = (currentSlide - 1) % $(tabClass).length;
            };

            $(tabClass).eq(currentSlide).addClass(tabClassActive);
            $(itemClass).each((i, item) => {
                ($(item).data(dataName) === $(tabClass).eq(currentSlide).data(dataName)) ? $(item).show(): $(item).hide();
            });
        });

    };

});
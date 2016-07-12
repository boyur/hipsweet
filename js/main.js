$(document).ready(function () {

        // Слайдер
    (function () {

        var sliderArr = new Array();

        $('.bestseller__slider-main').each(function (i) {
            sliderArr.push(this);
            sliderArr[i].style.left = (100 * i) + "%";
        });

        var
            dotsArr = $('.slider__dots > li'),
            dotId = 0,
            newId = 0;

        dotsArr.on('click', function () {
            newId = dotsArr.index(this);

            if (dotId !== newId) {
                $(dotsArr[newId]).addClass("slider__dot--active");
                $(dotsArr[dotId]).removeClass("slider__dot--active");

                if (dotId < newId) {
                    $(sliderArr).each(function(i) {
                        $(this).animate({left: (100 * (-newId + i)) + "%"}, 1500);
                    });
                } else {
                    $(sliderArr).each(function(i) {
                        $(this).animate({left: (100 * (newId + i)) + "%"}, 1500);
                    });
                }

                dotId = newId;
            }
        });

        $('#left').on('click', function () {
            alert("нажал");
        })
        
    }());

    //Аккордеон
    (function () {
        var flag = true;
        $('.acco__item').on('click', function (e) {
            e.preventDefault();
            var
                $this = $(this),
                item = $this.closest('.acco__item'),
                currentContent = item.find('.acco__content'),
                duration = 500;

            if (flag) {
                flag = false;
                if (!item.hasClass('acco__item--active')) {
                    item
                        .addClass('acco__item--active')
                        .siblings()
                        .removeClass('acco__item--active')
                        .find('.acco__content')
                        .slideUp(duration);
                    currentContent.slideDown(duration, function () {
                        flag = true
                    });
                } else {
                    item.removeClass('acco__item--active');
                    currentContent.slideUp(function () {
                        flag = true
                    });
                }
            }
        });
    }());

    //phone mask
    (function () {
        $('#phone').mask('+7 (000) 000 - 00 - 00');
    })();

    // tabs
    (function () {
        $('.team-tabs__item').on('click', function (e) {
            e.preventDefault();

            var
                $this = $(this),
                item = $this.closest('.team-tabs__item'),
                container = $this.closest('.team-tabs'),
                content = container.find('.team-tabs__content-item'),
                ndx = item.index(),
                reqItem = content.eq(ndx),
                activeItem = content.filter('.active');

            item.addClass('active')
                .siblings()
                .removeClass('active');

            activeItem.fadeOut(500, function () {
                reqItem.fadeIn(500, function () {
                    $(this).addClass('active')
                        .siblings()
                        .removeClass('active');
                });
            });
        });
    }());

});



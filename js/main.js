$(document).ready(function () {

        // Слайдер
    (function () {

        var sliderArr = new Array();
        $('.bestseller__slider-main').each(function (i) {
            sliderArr.push(this);
        });

        console.log(sliderArr);
        var btn = 1;
        $('.slider__dot').on('click', function (e) {
            console.log(sliderArr[0]);
            var activeBtn = e.target.id;
            var idActiveBtn = +activeBtn.replace(/btn/, "");
            var slider = "#slider" + idActiveBtn;
            //var sliderArr = $('#bestsellerSlider').children();

            if (btn !== idActiveBtn) {
                $("#btn" + idActiveBtn).addClass("slider__dot--active");
                $("#btn" + btn).removeClass("slider__dot--active");



                if (btn < idActiveBtn) {
                    sliderArr[btn].animate({left: "-100%"}, 1500);
                    sliderArr[idActiveBtn].animate({left: "0%"}, 1500);
                } else {
                    sliderArr[btn].animate({left: "100%"}, 1500);
                    sliderArr[idActiveBtn].animate({left: "0%"}, 1500);
                }

                btn = idActiveBtn;
            }

        });
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



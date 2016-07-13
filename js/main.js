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
                    $(sliderArr).each(function (i) {
                        $(this).animate({left: (100 * (-newId + i)) + "%"}, 1500);
                    });
                } else {
                    $(sliderArr).each(function (i) {
                        $(this).animate({left: (100 * (-newId + i)) + "%"}, 1500);
                    });
                }

                dotId = newId;
            }
        });

        $('#left').on('click', function () {
            if (dotId !== 0) {
                newId = --dotId;
                $(dotsArr[newId]).addClass("slider__dot--active");
                $(dotsArr[newId + 1]).removeClass("slider__dot--active");

                $(sliderArr).each(function (i) {
                    $(this).animate({left: (100 * (-newId + i)) + "%"}, 1500);
                });
            }
        });

        $('#right').on('click', function () {
            if (dotId < (dotsArr.length - 1)) {
                newId = ++dotId;
                $(dotsArr[newId]).addClass("slider__dot--active");
                $(dotsArr[newId - 1]).removeClass("slider__dot--active");

                $(sliderArr).each(function (i) {
                    $(this).animate({left: (100 * (-newId + i)) + "%"}, 1500);
                });
            }
        });

        // JS - Touch
        var box1 = document.getElementById('slider');
        var startx = 0

        box1.addEventListener('touchstart', function(e){
<<<<<<< HEAD
            var touchobj = e.changedTouches[0];
            startx = parseInt(touchobj.clientX);
=======
            var touchobj = e.changedTouches[0]; // reference first touch point (ie: first finger)
            startx = parseInt(touchobj.clientX); // get x position of touch point relative to left edge of browser
>>>>>>> master
            e.preventDefault()
        }, false);

        box1.addEventListener('touchend', function(e){
<<<<<<< HEAD
            var touchobj = e.changedTouches[0];
=======
            var touchobj = e.changedTouches[0]; // reference first touch point for this event
>>>>>>> master

            if(startx < touchobj.clientX) {
                // jQuery
                if (dotId !== 0) {
                    newId = --dotId;
                    $(dotsArr[newId]).addClass("slider__dot--active");
                    $(dotsArr[newId + 1]).removeClass("slider__dot--active");

                    $(sliderArr).each(function (i) {
                        $(this).animate({left: (100 * (-newId + i)) + "%"}, 1500);
                    });
                }
            } else {
                // jQuery
                if (dotId < (dotsArr.length - 1)) {
                    newId = ++dotId;
                    $(dotsArr[newId]).addClass("slider__dot--active");
                    $(dotsArr[newId - 1]).removeClass("slider__dot--active");

                    $(sliderArr).each(function (i) {
                        $(this).animate({left: (100 * (-newId + i)) + "%"}, 1500);
                    });
                }
            }

            e.preventDefault()
        }, false);

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

// Yandex map
(function() {
    ymaps.ready(init);
    var
        myMap,
        myPlacemark;

    function init(){
        myMap = new ymaps.Map("map", {
            center: [44.73498924390664,37.73530074198924],
            zoom: 14,
            controls: []
        });
        myPlacemark = new ymaps.Placemark([44.73498924390664,37.73530074198924], {},{
            iconLayout: 'default#image',
            iconImageHref: 'img/marker.png',
            iconImageSize: [42, 59],
            iconImageOffset: [-20, -55]
        });
        myMap.geoObjects.add(myPlacemark);
        myMap.behaviors.disable('scrollZoom');
    }
})();

// Scroll id
(function () {
    $('a[href^="#"]').on('click', function () {
        var element = $(this).attr('href');
        $('body').animate({
            scrollTop: $(element).offset().top}, 1000
        );
        return false;
    });
})();
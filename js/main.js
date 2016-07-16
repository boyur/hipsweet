$(document).ready(function () {

    // Слайдер HandMade )))
    (function () {

        // Создаю архив слайдов
        var sliderArr = [];
        // Расставляю слайды
        $('.slider__main').each(function (i) {
            sliderArr.push(this);
            sliderArr[i].style.left = (100 * i) + "%";
        });

        var
            dotsArr = $('.slider__dots > li'), //Собираю массив круглешков
            dotId = 0, //Позиция точки
            newId = 0; //Новая позиция

        // Обработчик нажатия по круглешку
        dotsArr.on('click', function () {
            newId = dotsArr.index(this); // Записываем порядковый номер круглешка

            if (dotId !== newId) {
                // отменяем активацию первого и вешаем на новый круглешок
                $(dotsArr[newId]).addClass("slider__dot--active");
                $(dotsArr[dotId]).removeClass("slider__dot--active");

                // Матаем слайдер
                if (dotId < newId) {
                    $(sliderArr).each(function (i) {
                        $(this).animate({left: (100 * (-newId + i)) + "%"}, 1000);
                    });
                } else {
                    $(sliderArr).each(function (i) {
                        $(this).animate({left: (100 * (-newId + i)) + "%"}, 1000);
                    });
                }

                dotId = newId; // Задаем точку о умолчанию
            }
        });


        // Обработка скрола мышей

        var jqSider = $("#slider"); // Забирю слайдер
        var mouseupX = 0;

        // При зажатой кнопки мыши считываю кардинаты по X
        jqSider.on('mousedown', function (e) {
            mouseupX = e.clientX;
            console.log(mouseupX);
        });

        // При отпускании кноки мыши
        jqSider.on('mouseup', function (e) {
            var mousedownX = e.clientX; // Пишу кардинаты
            console.log(mousedownX);
            console.log("+" + mouseupX);
            var difference = mousedownX - mouseupX; // разница между 2умя кардинатами
            console.log("diff: " + difference);

            if (difference < 0) { // Если минус то убирам его
                difference = -difference;
            }

            // начинаем двигать слайдер
            if (mouseupX && mouseupX != mousedownX && difference > 20) {
                if (mouseupX < mousedownX) {
                    if (dotId !== 0) {
                        newId = --dotId;
                        $(dotsArr[newId]).addClass("slider__dot--active");
                        $(dotsArr[newId + 1]).removeClass("slider__dot--active");

                        $(sliderArr).each(function (i) {
                            $(this).animate({left: (100 * (-newId + i)) + "%"}, 1000);
                        });
                    } else {
                        // к последнему слайду
                        newId = dotsArr.length - 1;
                        dotId = dotsArr.length - 1;
                        $(dotsArr[newId]).addClass("slider__dot--active");
                        $(dotsArr[0]).removeClass("slider__dot--active");
                        ////
                        $(sliderArr).each(function (i) {
                            $(this).animate({left: (100 * (-newId + i)) + "%"}, 300);
                        });
                    }
                } else {
                    if (dotId < (dotsArr.length - 1)) {
                        newId = ++dotId;
                        $(dotsArr[newId]).addClass("slider__dot--active");
                        $(dotsArr[newId - 1]).removeClass("slider__dot--active");

                        $(sliderArr).each(function (i) {
                            $(this).animate({left: (100 * (-newId + i)) + "%"}, 1000);
                        });
                    } else {
                        // к первому слайду
                        newId = 0;
                        dotId = 0;
                        $(dotsArr[0]).addClass("slider__dot--active");
                        $(dotsArr[dotsArr.length - 1]).removeClass("slider__dot--active");
                        ////
                        $(sliderArr).each(function (i) {
                            $(this).animate({left: (100 * (-newId + i)) + "%"}, 300);
                        });
                    }
                }
            }

        });

        // Обработка Тач-скрина на JS
        var slide = document.getElementById('slider');
        var startx = 0;

        slide.addEventListener('touchstart', function (e) {

            var touchobj = e.changedTouches[0];
            startx = parseInt(touchobj.clientX);
            e.preventDefault()
        }, false);

        slide.addEventListener('touchend', function (e) {
            var touchobj = e.changedTouches[0];

            var difference = startx - touchobj.clientX;
            console.log("diff: " + difference);

            if (difference < 0) {
                difference = -difference;
            }

            if (startx != touchobj.clientX && difference > 20) {
                if (startx < touchobj.clientX) {
                    // jQuery
                    if (dotId !== 0) {
                        newId = --dotId;
                        $(dotsArr[newId]).addClass("slider__dot--active");
                        $(dotsArr[newId + 1]).removeClass("slider__dot--active");

                        $(sliderArr).each(function (i) {
                            $(this).animate({left: (100 * (-newId + i)) + "%"}, 1500);
                        });
                    } else {
                        // к последнему слайду
                        newId = dotsArr.length - 1;
                        dotId = dotsArr.length - 1;
                        $(dotsArr[newId]).addClass("slider__dot--active");
                        $(dotsArr[0]).removeClass("slider__dot--active");
                        ////
                        $(sliderArr).each(function (i) {
                            $(this).animate({left: (100 * (-newId + i)) + "%"}, 300);
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
                    } else {
                        // к первому слайду
                        newId = 0;
                        dotId = 0;
                        $(dotsArr[0]).addClass("slider__dot--active");
                        $(dotsArr[dotsArr.length - 1]).removeClass("slider__dot--active");
                        ////
                        $(sliderArr).each(function (i) {
                            $(this).animate({left: (100 * (-newId + i)) + "%"}, 300);
                        });
                    }
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
                    flag = true;
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
        })
    }());

    // Yandex map
    (function () {
        ymaps.ready(init);
        var
            myMap,
            myPlacemark;

        function init() {
            myMap = new ymaps.Map("map", {
                center: [44.73498924390664, 37.73530074198924],
                zoom: 14,
                controls: []
            });
            myPlacemark = new ymaps.Placemark([44.73498924390664, 37.73530074198924], {}, {
                iconLayout: 'default#image',
                iconImageHref: 'img/marker.png',
                iconImageSize: [42, 59],
                iconImageOffset: [-20, -55]
            });
            myMap.geoObjects.add(myPlacemark);
            myMap.behaviors.disable('scrollZoom');
        }
    })();

    // scroll
    (function () {
        $('a[href^="#order"]').on('click', function () {
            var element = $(this).attr('href');
            $('body').animate({
                    scrollTop: $(element).offset().top
                }, 1000
            );
            return false;
        });
    })();

});


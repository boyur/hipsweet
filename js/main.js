$(document).ready(function() {

    // Слайдер
    var btn = 1;
	$('.slider__dot').on('click', function(e){
        var activeBtn = e.target.id;
        var idActiveBtn = +activeBtn.replace(/btn/, "");
        var slider = "#slider" + idActiveBtn;

        if (btn !== idActiveBtn) {
            $("#btn" + idActiveBtn).addClass( "slider__dot--active" );
            $("#btn" + btn).removeClass( "slider__dot--active" );

            if (btn < idActiveBtn) {
                $("#slider" + btn).animate({left: "-100%"}, 1500 );
                $("#slider" + idActiveBtn).animate({left: "0%"}, 1500 );
            } else {
                $("#slider" + btn).animate({left: "100%"}, 1500 );
                $("#slider" + idActiveBtn).animate({left: "0%"}, 1500 );
            }

            btn = idActiveBtn;
        }

	});

    //Аккордеон
    var flag = true;
    $('.acco__item').on('click', function(e){
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
                currentContent.slideUp(function() {
                    flag = true
                });
            }
        }
    });

    //phone mask
    (function () {
        $('#phone').mask('+7 (000) 000 - 00 - 00');
    })();

    // columns
    (function () {
    $('#tab1').columnize({ columns: 2 });
    $('.first').attr('style', 'width:25%; float:left;')
    $('.last').attr('style', 'width:33%; float:right;')
    })();


    // tabs
    (function(){
        $('.team-tabs__item').on('click', function(e){
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



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

});
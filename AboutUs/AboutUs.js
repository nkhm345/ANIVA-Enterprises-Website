$(document).ready(function() {
    $('#logistics').fadeIn(1000).addClass('active-slide');

    $('#translation').css("min-height", $('#logistics').css('height'));
    
    window.onresize = function(event) {
        $('#translation').css("min-height", $('#logistics').css('height'));
    };

    $('.arrow-next').click(function() {
        
        $('.arrow-next').attr("disabled", true).css("visibility", "hidden");
        $('.arrow-prev').attr("disabled", false).css("visibility", "visible");

        var currentSlide = $(".active-slide");
        var nextSlide = currentSlide.next();
        currentSlide.fadeOut(300).removeClass("active-slide");
        nextSlide.fadeIn(300).addClass("active-slide");
        
        var currentDot = $(".active-dot");
        var nextDot = currentDot.next();
        currentDot.removeClass("active-dot");
        nextDot.addClass("active-dot");
    });
    
    $('.arrow-prev').click(function() {
        $('.arrow-prev').attr("disabled", true).css("visibility", "hidden");
        $('.arrow-next').attr("disabled", false).css("visibility", "visible");

        var currentSlide = $(".active-slide");
        var prevSlide = currentSlide.prev();
        currentSlide.fadeOut(300).removeClass("active-slide");
        prevSlide.fadeIn(300).addClass("active-slide");
        
        var currentDot = $(".active-dot");
        var prevDot = currentDot.prev();
        currentDot.removeClass("active-dot");
        prevDot.addClass("active-dot");
    });
});
$(document).ready(function() {
    $('#dialects').fadeIn(1000).addClass('active-slide');
    
    $('#dialects').css("min-height", $('#subjectfields').css('height'));
    $("#services").css("min-height", $('#subjectfields').css('height'));
    
    window.onresize = function(event) {
        $("#dialects").css("min-height", $('#subjectfields').css('height'));
        $("#services").css("min-height", $('#subjectfields').css('height'));
    };

    $('.arrow-next').click(function() {
        var currentSlide = $(".active-slide");
        var nextSlide = currentSlide.next();
        if (nextSlide.length == 0) {
            nextSlide = $('.slide').first();
        }
        currentSlide.fadeOut(300).removeClass("active-slide");
        nextSlide.fadeIn(300).addClass("active-slide");
        
        var currentDot = $(".active-dot");
        var nextDot = currentDot.next();
        if (nextDot.length == 0) {
            nextDot = $(".dot").first();
        }
        currentDot.removeClass("active-dot");
        nextDot.addClass("active-dot");
    });
    
    $('.arrow-prev').click(function() {
        var currentSlide = $(".active-slide");
        var prevSlide = currentSlide.prev();
        if (prevSlide.length == 0) {
            prevSlide = $('.slide').last();
        }
        currentSlide.fadeOut(300).removeClass("active-slide");
        prevSlide.fadeIn(300).addClass("active-slide");
        
        var currentDot = $(".active-dot");
        var prevDot = currentDot.prev();
        if (prevDot.length == 0) {
            prevDot = $(".dot").last();
        }
        currentDot.removeClass("active-dot");
        prevDot.addClass("active-dot");
    });
});
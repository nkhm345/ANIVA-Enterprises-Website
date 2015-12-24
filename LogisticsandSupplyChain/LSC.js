$(document).ready(function() {
	$(".intro .btn").click(function() {
		$(this).next().slideToggle(500);
		$(this).toggleClass("active");

		if ($(this).hasClass("active")) {
		    $('html, body').animate( {
		    	scrollTop: parseInt($(this).offset().top) - 100
		    }, 400);
		}
	});

	$(".jumbotron").css("height", parseInt($(".jumbotron").css("width")) * 657 / 883);

	window.onresize = function(event) {
		$(".jumbotron").css("height", parseInt($(".jumbotron").css("width")) * 657 / 883);
	};

	$("#strbutton").click(function() {
		$('html, body').animate( {
			scrollTop: parseInt($(".strategic").offset().top) - 100
		}, 700);
	});

	$("#tacbutton").click(function() {
		$('html, body').animate( {
			scrollTop: parseInt($(".tactical").offset().top) - 100
		}, 1000);
	});

	$('.caret').click(function() {
		$(this).next().slideToggle(300);
        $(this).toggleClass("caret caret-up");
	});

	$('#costs .caret').click(function() {
		$('#costs p').next().slideToggle(300);
	});

	$('#strhowitworksexpand').click(function() {
		$(".strhowitworks b").next().slideDown(300);
		$(".strhowitworks b").addClass("caret-up");
		$(".strhowitworks b").removeClass("caret");
	});

	$('#strhowitworkscollapse').click(function() {
		$(".strhowitworks b").next().slideUp(300);
		$(".strhowitworks b").addClass("caret");
		$(".strhowitworks b").removeClass("caret-up");
	});

	$('#dataexpand').click(function() {
		$(".strdata b").next().slideDown(300);
		$(".strdata b").addClass("caret-up");
		$(".strdata b").removeClass("caret");
	});

	$('#datacollapse').click(function() {
		$(".strdata b").next().slideUp(300);
		$(".strdata b").addClass("caret");
		$(".strdata b").removeClass("caret-up");
	});

	$('#tachowitworksexpand').click(function() {
		$(".tachowitworks b").next().slideDown(300);
		$(".tachowitworks b").addClass("caret-up");
		$(".tachowitworks b").removeClass("caret");
	});

	$('#tachowitworkscollapse').click(function() {
		$(".tachowitworks b").next().slideUp(300);
		$(".tachowitworks b").addClass("caret");
		$(".tachowitworks b").removeClass("caret-up");
	});

	$("#taccostsexpand").click(function() {
		$("#costs p").next().slideDown(300);
		$("#costs b").addClass("caret-up");
		$("#costs b").removeClass("caret");
	});

	$("#taccostscollapse").click(function() {
		$("#costs p").next().slideUp(300);
		$("#costs b").addClass("caret");
		$("#costs b").removeClass("caret-up");
	});

	$('.backtotop').first().click(function() {
		$('html, body').animate( {
			scrollTop: parseInt($(".details").offset().top) - 60
		}, 1000);
	});

	$('.backtotop').last().click(function() {
		$('html, body').animate( {
			scrollTop: parseInt($(".details").offset().top) - 60
		}, 1200);
	});
});
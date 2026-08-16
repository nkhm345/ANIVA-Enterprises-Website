$(document).ready(function() {
	var NAV_OFFSET = 125; /* fixed navbar (61px) + sticky section navigator */

	function scrollToTarget(selector, duration) {
		var $t = $(selector);
		if (!$t.length) { return; }
		$('html, body').animate( {
			scrollTop: parseInt($t.offset().top) - NAV_OFFSET + 20
		}, duration || 700);
	}

	/* Flow chart keeps its aspect ratio at any width */
	function sizeChart() {
		$(".jumbotron").css("height", parseInt($(".jumbotron").css("width")) * 657 / 883);
	}
	sizeChart();
	window.onresize = sizeChart;

	/* Section navigator + hero buttons: smooth scroll to anchors */
	$('.section-nav a').click(function(e) {
		var href = $(this).attr('href');
		if (href && href.charAt(0) === '#' && $(href).length) {
			e.preventDefault();
			scrollToTarget(href, 700);
		}
	});

	/* Highlight the section currently in view */
	var $navLinks = $('.section-nav a');
	var sections = $navLinks.map(function() {
		var href = $(this).attr('href');
		return $(href).length ? $(href) : null;
	}).get();

	function updateActive() {
		var pos = $(window).scrollTop() + NAV_OFFSET + 40;
		var current = -1;
		for (var i = 0; i < sections.length; i++) {
			if (sections[i].offset().top <= pos) { current = i; }
		}
		$navLinks.removeClass('active');
		if (current >= 0) { $navLinks.eq(current).addClass('active'); }
	}
	$(window).on('scroll', updateActive);
	updateActive();

	/* Tab cards: Learn More */
	$("#strbutton").click(function() { scrollToTarget(".strategic", 700); });
	$("#tacbutton").click(function() { scrollToTarget(".tactical", 900); });
	$("#engbutton").click(function() { scrollToTarget(".engagements", 700); });

	$('.caret').click(function() {
		$(this).next().slideToggle(300);
        $(this).toggleClass("caret caret-up");
	});

	$('#costs .caret').click(function() {
		$(this).parent().next().slideToggle(300);
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

	/* Customer Engagements: per-card toggle and expand / collapse all */
	$('.eng-toggle').click(function() {
		$(this).next('.eng-details').slideToggle(300);
		$(this).closest('.eng-card').toggleClass('open');
	});

	/* Theme filters */
	$('.eng-filter').click(function() {
		var theme = $(this).data('theme');
		$('.eng-filter').removeClass('active');
		$(this).addClass('active');
		$('.eng-col').each(function() {
			var mine = $(this).data('theme');
			var show = (theme === 'all' || mine === 'all' || mine === theme);
			$(this).toggle(show);
		});
	});

	$('#engexpand').click(function() {
		$('.eng-details').slideDown(300);
		$('.eng-card').addClass('open');
	});

	$('#engcollapse').click(function() {
		$('.eng-details').slideUp(300);
		$('.eng-card').removeClass('open');
	});

	$('.backtotop').click(function() {
		scrollToTarget(".details", 900);
	});
});

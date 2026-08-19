$(document).ready(function() {
	/* Height of everything fixed/sticky at the top: navbar + Valora ribbon (if shown) + section navigator */
	function headerOffset() {
		var h = $('.navbar').outerHeight() || 61;
		if ($('html').hasClass('ribbon-on')) { h += $('.announce').outerHeight() || 0; }
		h += $('.section-nav').outerHeight() || 0;
		return h;
	}
	function syncScrollPadding() {
		document.documentElement.style.scrollPaddingTop = (headerOffset() + 10) + 'px';
	}
	syncScrollPadding();
	$(window).on('resize', syncScrollPadding);
	$('.announce-close').on('click', function() { setTimeout(syncScrollPadding, 50); });

	var animating = false;
	function scrollToTarget(selector, duration) {
		var $t = $(selector);
		if (!$t.length) { return; }
		animating = true;
		$('html, body').stop(true).animate( {
			scrollTop: parseInt($t.offset().top) - headerOffset() - 12
		}, duration || 700, function() { animating = false; if (typeof updateActive === 'function') { updateActive(); } });
	}

	/* Flow chart keeps its aspect ratio at any width */
	function sizeChart() {
		if (!$(".jumbotron").length) { return; }
		$(".jumbotron").css("height", parseInt($(".jumbotron").css("width")) * 657 / 883);
	}
	sizeChart();
	window.onresize = sizeChart;

	/* Section navigator + hero buttons: smooth scroll to anchors */
	$('.section-nav a').click(function(e) {
		var href = $(this).attr('href');
		if (href && href.charAt(0) === '#' && $(href).length) {
			e.preventDefault();
			pinned = $navLinks.index(this);
			$('.section-nav a').removeClass('active'); $(this).addClass('active');
			scrollToTarget(href, 700);
		}
	});

	/* Highlight the section currently in view */
	var $navLinks = $('.section-nav a');
	var pinned = -1;
	var sections = $navLinks.map(function() {
		var href = $(this).attr('href');
		return $(href).length ? $(href) : null;
	}).get();

	function updateActive() {
		if (animating) { return; }
		var pos = $(window).scrollTop() + headerOffset() + 40;
		var current = -1;
		var lastTop = -1;
		for (var i = 0; i < sections.length; i++) {
			var top = sections[i].offset().top;
			if (top <= pos && top > lastTop) { current = i; lastTop = top; }
		}
		/* keep a clicked link highlighted while its target shares the position of another (side-by-side cards) */
		if (pinned >= 0 && current >= 0 && Math.abs(sections[pinned].offset().top - sections[current].offset().top) < 2) { current = pinned; } else { pinned = -1; }
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

	/* Six-move process stepper */
	function showMove(n) {
		n = ((n - 1 + 6) % 6) + 1;
		$('.journey-step').removeClass('active').filter('[data-step="' + n + '"]').addClass('active');
		$('.journey-detail').removeClass('active').filter('[data-step="' + n + '"]').addClass('active');
		$('.journey-dots i').removeClass('on').eq(n - 1).addClass('on');
	}
	$('.journey-step').click(function() { showMove(parseInt($(this).data('step'), 10)); });
	$('.journey-prev').click(function() { showMove(parseInt($('.journey-step.active').data('step'), 10) - 1); });
	$('.journey-next').click(function() { showMove(parseInt($('.journey-step.active').data('step'), 10) + 1); });
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

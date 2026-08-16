/* ANIVA Enterprises - shared page behaviour
   1) Gentle reveal-on-scroll for cards and tiles (no-JS safe: without
      this script everything is simply visible).
   2) Smooth scrolling for same-page anchor links.                     */
(function () {
  var REVEAL = '.site-card, .pillar-card, .tab-card, .eng-card, .stat, .phase, .tsc-box, .founder-photo-card, .profile-card, .chart-frame';

  function init() {
    var items = document.querySelectorAll(REVEAL);
    if (!items.length) { return; }

    if (!('IntersectionObserver' in window)) { return; } /* old browsers: leave everything visible */

    document.documentElement.className += ' js-reveal';
    for (var i = 0; i < items.length; i++) {
      items[i].className += ' reveal';
      /* stagger siblings a little */
      items[i].style.transitionDelay = ((i % 4) * 70) + 'ms';
    }

    var io = new IntersectionObserver(function (entries) {
      for (var j = 0; j < entries.length; j++) {
        if (entries[j].isIntersecting) {
          entries[j].target.className += ' in';
          io.unobserve(entries[j].target);
        }
      }
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });

    for (var k = 0; k < items.length; k++) { io.observe(items[k]); }

    /* anything already on screen at load shows immediately */
    setTimeout(function () {
      for (var m = 0; m < items.length; m++) {
        var r = items[m].getBoundingClientRect();
        if (r.top < window.innerHeight && r.bottom > 0 && items[m].className.indexOf(' in') < 0) {
          items[m].className += ' in';
        }
      }
    }, 60);
  }

  function smoothAnchors() {
    if (!window.jQuery) { return; }
    jQuery('a[href^="#"]').not('.section-nav a').click(function (e) {
      var href = jQuery(this).attr('href');
      if (href.length > 1 && jQuery(href).length) {
        e.preventDefault();
        jQuery('html, body').animate({ scrollTop: jQuery(href).offset().top - 80 }, 600);
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () { init(); smoothAnchors(); });
  } else {
    init(); smoothAnchors();
  }
})();

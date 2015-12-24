$(document).ready(function() {
	var seconds = 7;
	setInterval(function() {
		$('#countdown').text(seconds)
		if (--seconds < 0) {
			window.location = 'ContactUs.html';
		}
	}, 1000);
});
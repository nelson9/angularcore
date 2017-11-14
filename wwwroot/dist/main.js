/*
	Twenty by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	skel.breakpoints({
		wide: '(max-width: 1680px)',
		normal: '(max-width: 1280px)',
		narrow: '(max-width: 980px)',
		narrower: '(max-width: 840px)',
		mobile: '(max-width: 736px)'
	});

	$(function() {

	    var $window = $(window),
	        $body = $('body'),
	        $header = $('#header'),
	        $banner = $('#banner'),
            $panel = $('#navPanel');

		// Disable animations/transitions until the page has loaded.
			//$body.addClass('is-loading');

			//$window.on('load', function() {
			//	$body.removeClass('is-loading');
			//});

		// CSS polyfills (IE<9).
			if (skel.vars.IEVersion < 9)
				$(':last-child').addClass('last-child');

		// Fix: Placeholder polyfill.
			$('form').placeholder();

		// Prioritize "important" elements on narrower.
			skel.on('+narrower -narrower', function() {
				$.prioritize(
					'.important\\28 narrower\\29',
					skel.breakpoint('narrower').active
				);
			});		

		// Dropdowns.
			$('#nav > ul').dropotron({
				mode: 'fade',
				noOpenerFade: true,
				expandMode: (skel.vars.mobile ? 'click' : 'hover')
			});

		// Off-Canvas Navigation.

	    // Navigation Panel.
	                $panel.panel({
						delay: 500,
						hideOnClick: true,
						hideOnSwipe: true,
						resetScroll: true,
						resetForms: true,
						side: 'left',
						target: $body,
						visibleClass: 'navPanel-visible'
					});

			// Fix: Remove navPanel transitions on WP<10 (poor/buggy performance).
				if (skel.vars.os == 'wp' && skel.vars.osVersion < 10)
					$('#navButton, #navPanel, #page-wrapper')
						.css('transition', 'none');

		// Header.
		// If the header is using "alt" styling and #banner is present, use scrollwatch
		// to revert it back to normal styling once the user scrolls past the banner.
		// Note: This is disabled on mobile devices.
   //             if (!skel.vars.mobile) {
   //                 console.log($banner.scrollwatch());

   //                 $banner.scrollwatch({
			//        delay: 0,
			//        range: 1,
			//        anchor: 'top',
			//        on: function () { $header.addClass('alt reveal'); },
			//        off: function () { $header.removeClass('alt'); }
			//    });

			//}

	});

})(jQuery);
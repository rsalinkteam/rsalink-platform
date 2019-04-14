//  Script:         zSlider-doubleLength.js
//  Location:       Home Page, High-level Product Pages, RSA University Landing Page
//  Author:         Jeff Shurtliff
//  Last Editor:    Jeff Shurtliff
//  Last Modified:  06 Dec 2018
//  Description:    Enables functionality for the rotating banner widgets. (Requires jQuery)

(function($) {
	$.fn.zSlider = function(m) {
		var defaults = {
			interval: 8000, 
			turnTo: "c",
			paper: true,
			width:480,
			height:270
		};
		return this.each(function() {
			var options = $.extend(defaults, m);
			var fBox = $(this);
			var uSon = fBox.children('ul');
			var gSon = uSon.children('li');
			fBox.css({
				'width': options.width,
				'height': options.height
			});
			fBox.children('ol').children('li').eq(0).addClass('on');
			gSon.css({
				'width': options.width,
				'height': options.height
			});
			
			if (options.turnTo == 'a') {
				uSon.css({
					'width': options.width * gSon.length
				});
				t = setInterval(move_a, options.interval);
			} else if (options.turnTo == 'b') {
				gSon.css({
					'float': 'none'
				});
				t = setInterval(move_b, options.interval);
			} else if (options.turnTo == 'c') {
				gSon.hide();
				gSon.eq(0).show();
				t = setInterval(move_c, options.interval);
			};
			
			var num = 1;

			function move_a() {
				olon(num);
				if (num < gSon.length) {
					uSon.animate({
						'left': -gSon.width() * num
					});
					num++;
				} else {
					uSon.animate({
						'left': 0
					});
					fBox.children('ol').children('li').eq(0).addClass('on');
					num = 1;
				};
			};
			
			function move_b() {
				olon(num);
				if (num < gSon.length) {
					uSon.animate({
						'top': -gSon.height() * num
					});
					num++;
				} else {
					uSon.animate({
						'top': 0
					});
					fBox.children('ol').children('li').eq(0).addClass('on');
					num = 1;
				};
			};

			function move_c() {
				olon(num);
				if (num < gSon.length) {
					gSon.eq(num-1).fadeOut('400', function() {
						gSon.eq(num++).fadeIn('400');
					});
				} else {
					gSon.eq(gSon.length-1).fadeOut('400', function() {
						gSon.eq(0).fadeIn('400');
					});
					fBox.children('ol').children('li').eq(0).addClass('on');
					num = 1;
				};
			};

			
			if (options.paper) {
				fBox.append('<ol class="paper"></ol>');
				for (var i = 0; i < gSon.length; i++) {
					fBox.children('ol').append("<li></li>");
				};
				var olSon = fBox.children('ol').children('li');
				$(this).children('ol').children('li').hover(function() {
					clearInterval(t);
					num = $(this).index();
					olSon.removeClass('on');
					if (options.turnTo == 'a') {
						uSon.stop().animate({
							'left': -gSon.width() * num
						});
					} else if (options.turnTo == 'b') {
						uSon.stop().animate({
							'top': -gSon.height() * num
						});
					}else if (options.turnTo == 'c') {
						gSon.eq(num).siblings().stop().fadeOut('fast', function() {
							gSon.eq(num).fadeIn('400');
						});
					};
					$(this).addClass('on');
				}, function() {
					if (options.turnTo == 'a') {
						t = setInterval(move_a, options.interval);
					} else if (options.turnTo == 'b') {
						t = setInterval(move_b, options.interval);
					}else if (options.turnTo == 'c') {
						t = setInterval(move_c, options.interval);
					}
				});
				fBox.children('ol').children('li').eq(0).addClass('on');

				function olon(num) {
					fBox.children('ol').children('li').removeClass('on').eq(num).addClass('on');
				};
			};
		});
	};
})(jQuery);
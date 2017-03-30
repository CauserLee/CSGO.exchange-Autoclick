/**
 * Created by Arthur on 2017/3/28.
 */
/* * File: jquery.flexisel.js * Version: 1.0.2 * Description: Responsive carousel jQuery plugin * Author: 9bit Studios * Copyright 2012, 9bit Studios * http://www.9bitstudios.com * Free to use and abuse under the MIT license. * http://www.opensource.org/licenses/mit-license.php */
!function (e) {
	e.fn.flexisel = function (n) {
		var t, i = e.extend({
			visibleItems: 4,
			animationSpeed: 200,
			autoPlay: !1,
			autoPlaySpeed: 3e3,
			pauseOnHover: !0,
			setMaxWidthAndHeight: !1,
			enableResponsiveBreakpoints: !0,
			flipPage: !1,
			clone: !0,
			responsiveBreakpoints: {
				portrait: {changePoint: 480, visibleItems: 1},
				landscape: {changePoint: 640, visibleItems: 2},
				tablet: {changePoint: 768, visibleItems: 3}
			}
		}, n), o = e(this), s = e.extend(i, n), a = !0, l = s.visibleItems, r = o.children().length, c = [], h = {
			init: function () {
				return this.each(function () {
					h.appendHTML(), h.setEventHandlers(), h.initializeItems()
				})
			}, initializeItems: function () {
				var n = o.parent(), i = (n.height(), o.children());
				h.sortResponsiveObject(s.responsiveBreakpoints);
				var a = n.width();
				t = a / l, i.width(t), s.clone && (i.last().insertBefore(i.first()), i.last().insertBefore(i.first()), o.css({left: -t})), o.fadeIn(), e(window).trigger("resize")
			}, appendHTML: function () {
				if (s.clone) {
					var e = o.children().clone();
					o.append(e)
				}
			}, setEventHandlers: function () {
				var n = o.parent(), i = (n.parent(), o.children());
				e(window).on("resize", function (a) {
					h.setResponsiveEvents();
					{
						var r = e(n).width();
						e(n).height()
					}
					t = r / l, i.width(t), o.css(s.clone ? {left: -t} : {left: 0})
				}), s.pauseOnHover === !0 && e(".nbs-flexisel-item").on({
					mouseenter: function () {
						a = !1
					}, mouseleave: function () {
						a = !0
					}
				}), s.autoPlay === !0 && setInterval(function () {
					a === !0 && h.scrollRight()
				}, s.autoPlaySpeed), o[0].addEventListener("touchstart", h.touchHandler.handleTouchStart, !1), o[0].addEventListener("touchmove", h.touchHandler.handleTouchMove, !1)
			}, setResponsiveEvents: function () {
				var n = e("html").width();
				if (s.enableResponsiveBreakpoints) {
					var t = c[c.length - 1].changePoint;
					for (var i in c) {
						if (n >= t) {
							l = s.visibleItems;
							break
						}
						if (n < c[i].changePoint) {
							l = c[i].visibleItems;
							break
						}
					}
				}
			}, sortResponsiveObject: function (e) {
				var n = [];
				for (var t in e)n.push(e[t]);
				n.sort(function (e, n) {
					return e.changePoint - n.changePoint
				}), c = n
			}, scrollLeft: function () {
				if (o.position().left < 0 && a === !0) {
					a = !1;
					var e = o.parent(), n = e.width();
					t = n / l;
					var i = o.children(), r = s.flipPage ? n : t;
					o.animate({left: "+=" + r}, {
						queue: !1,
						duration: s.animationSpeed,
						easing: "linear",
						complete: function () {
							s.clone && i.last().insertBefore(i.first()), h.adjustScroll(), a = !0
						}
					})
				}
			}, scrollRight: function () {
				var e = o.parent(), n = e.width();
				t = n / l;
				var i = t - n, c = o.position().left + (r - l) * t - n, u = s.flipPage ? n : t;
				if (i <= Math.ceil(c) && !s.clone) a === !0 && (a = !1, o.animate({left: "-=" + u}, {
					queue: !1,
					duration: s.animationSpeed,
					easing: "linear",
					complete: function () {
						h.adjustScroll(), a = !0
					}
				})); else if (s.clone && a === !0) {
					a = !1;
					var p = o.children();
					o.animate({left: "-=" + u}, {
						queue: !1,
						duration: s.animationSpeed,
						easing: "linear",
						complete: function () {
							p.first().insertAfter(p.last()), h.adjustScroll(), a = !0
						}
					})
				}
			}, adjustScroll: function () {
				var e = o.parent(), n = o.children(), i = e.width();
				t = i / l, n.width(t);
				var a = s.flipPage ? i : t;
				s.clone && o.css({left: -a})
			}, touchHandler: {
				xDown: null, yDown: null, handleTouchStart: function (e) {
					this.xDown = e.touches[0].clientX, this.yDown = e.touches[0].clientY
				}, handleTouchMove: function (e) {
					if (this.xDown && this.yDown) {
						{
							var n = e.touches[0].clientX, t = e.touches[0].clientY, i = this.xDown - n;
							this.yDown - t
						}
						Math.abs(i) > 0 && (i > 0 ? h.scrollRight() : h.scrollLeft()), this.xDown = null, this.yDown = null, a = !0
					}
				}
			}
		};
		return h[n] ? h[n].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof n && n ? void e.error('Method "' + method + '" does not exist in flexisel plugin!') : h.init.apply(this)
	}
}(jQuery), $(window).load(function () {
	$("#Weblink").flexisel({
		visibleItems: 4,
		animationSpeed: 1e3,
		autoPlay: !0,
		autoPlaySpeed: 2e3,
		pauseOnHover: !0,
		enableResponsiveBreakpoints: !0,
		responsiveBreakpoints: {
			pc300: {changePoint: 1, visibleItems: 1},
			pc600: {changePoint: 500, visibleItems: 2},
			pc1000: {changePoint: 1150, visibleItems: 2},
			pc1200: {changePoint: 1450, visibleItems: 3},
			pc1500: {changePoint: 1650, visibleItems: 4},
			pc1920: {changePoint: 1920, visibleItems: 5}
		}
	})
});
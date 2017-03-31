function active() {
	var config = {childList: true, attributes: true, characterData: false, subtree: true};
	var Node = $(".vItem.Normal.cItem:first");
	click_logic(Node, config);
}

function click_logic(node, config) {
	var target_widw = document.querySelector("#widw");
	var observer_widwnext = new MutationObserver(function () {
		var handler = self.setInterval(function () {
			if ($(".contentItems") != null) {
				observer_widwnext.disconnect();
				$("#widw").css("display", "none");
				$("#bg-widw").css("display", "none");
				window.clearInterval(handler);
			}
		}, 40);
		click_logic(node.next(), config);
	});
	var observer_widw = new MutationObserver(function () {
		observer_widwnext.observe(target_widw, config);
		setTimeout(function () {
			$(".btnCheck").click();
		}, 50);
		observer_widw.disconnect();
	});
	node.mouseenter();
	if (node.hasClass("Key") || node.hasClass("Sticker") || node.hasClass("Container") || node.hasClass("Tool") || node.hasClass("Graffiti") || node.hasClass("Collectible") || node.hasClass("Music")) {
		click_logic(node.next(), config)
	} else {
		if (node.attr("data-rawext") > 1) {
			observer_widw.observe(target_widw, config);
			document.querySelector("a[href^='#item']").click();
		} else {
			node.append("<div class='show-rawext'>" + node.attr("data-rawext").substr(0, 10) + "</div>");
			click_logic(node.next(), config);
		}
	}
}


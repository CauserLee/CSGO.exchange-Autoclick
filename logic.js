function active() {
	var config = {childList: true, attributes: true, characterData: false, subtree: true};
	var Node = $(".vItem.Normal.cItem:first");
	click_logic(Node, config);
}

function click_logic(node, config) {
	node.mouseenter();
	var target_widw = document.querySelector("#widw");
	var observer_widwnext = new MutationObserver(function () {
		var handler = self.setInterval(function () {
			if ($(".contentItems") != null) {
				observer_widwnext.disconnect();
				$("widw-close").click();
				window.clearInterval(handler);
			}
		}, 40);
		node.append("<div class='show-rawext'>" + node.attr("data-rawext").substr(0, 10) + "</div>");
		click_logic(node.next(), config);
	});
	var observer_widw = new MutationObserver(function () {
		//observer_widwnext.observe(target_widw, config);
		$(".txtInspect").attr("val", inspect);
		setTimeout(function () {
			$(".btnCheck").click();
		}, 50);
		observer_widw.disconnect();
	});
	if (node.hasClass("Key") || node.hasClass("Sticker") || node.hasClass("Container") || node.hasClass("Tool") || node.hasClass("Graffiti") || node.hasClass("Collectible") || node.hasClass("Music")) {
		click_logic(node.next(), config)
	} else {
		var inspect = $(".ingame.OptionInspect").attr("href");
		if (node.attr("data-rawext") > 1) {
			observer_widw.observe(target_widw, config);
			alert(inspect);
			document.querySelector("a[href^='#item']").click();
		} else {
			node.append("<div class='show-rawext'>" + node.attr("data-rawext").substr(0, 10) + "</div>");
			click_logic(node.next(), config);
		}
	}
}


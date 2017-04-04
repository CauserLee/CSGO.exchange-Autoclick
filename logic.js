/*===========================

 本js文件用于存放脚本点击逻辑

 ===========================*/

function active() {
	var Node = $(".vItem.Normal.cItem:first");
	clickLogic(Node);
}

function clickLogic(node) {
	//此处用于初始化DOM监听器
	var configNodeAttributes = {attributes: true, childList: false, characterData: false};
	var configSubtree = {attributes: true, childList: true, characterData: true, subtree: true};
	var target_widw = document.querySelector("#widw");
	var observer_widw = new MutationObserver(function () { //此函数是用于点击关闭按钮的监听器
		if ($("#widw").css("display") === "block") {
			var IntervalHandler1 = self.setInterval(function () {
				if ($(".msgNotif") !== null) {
					$(".widw-close").click();
					document.querySelector("a[href='#']");
					node.append("<div class='show-rawext'>success</div>");
					clickLogic(node.next());
					window.clearInterval(IntervalHandler1);
				}
			}, 700);
		}
	});
	show(node); //show()函数用于强制触发本来与mouseenter事件绑定的ItemData函数
	if (node.hasClass("Key") || node.hasClass("Sticker") || node.hasClass("Container") || node.hasClass("Tool") || node.hasClass("Graffiti") || node.hasClass("Collectible") || node.hasClass("Music") || node.hasClass("Stock")) {
		clickLogic(node.next())
	} else {
		if (node.attr("data-rawext") > 1) {
			observer_widw.observe(target_widw, configNodeAttributes);
			document.querySelector("a[href^='#item']").click();
			var IntervalHandler2 = self.setInterval(function () { //此函数是用于在input中填充查询地址和点击check按钮的监听器
				if ($("#widw").css("display") === "block") {
					setTimeout(function () {
						$(".txtInspect").attr("value", $(".OptionInspect").attr("href"));
						$(".btnCheck").click();
						window.clearInterval(IntervalHandler2);
					}, 300);
				}
			}, 700);
		} else {
			node.append("<div class='show-rawext'>" + node.attr("data-rawext").substr(0, 10) + "</div>");
			clickLogic(node.next());
		}
	}
}


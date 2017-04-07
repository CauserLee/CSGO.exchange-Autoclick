/*===========================

 本js文件用于存放脚本点击逻辑

 ===========================*/
var onceFlag = true;
//以上为Flag变量
var $widw = $("#widw");
var $bgwidw = $("#bg-widw");
var $retrieve = document.querySelector("a[href='#item/market']");
var inspectCache = "";
var target_widw = document.querySelector("#widw");
//以上为对象缓存
var configSubtree = {attributes: true, childList: true, characterData: false, subtree: true};
//以上为Config对象
var observerCheck = new MutationObserver(function () { //查询地址填充与check按钮点击监听器
	if ($widw.css("display") === "block") {
		observerCheck.disconnect();
		$(".txtInspect").attr("value", inspectCache);
		parseInspect();
	}
});
//以上为被动监听器对象

function active() {
	if (onceFlag) {
		onceFlag = false;
		clickLogic($(".vItem.cItem:first"));
	}
}

function clickLogic(node) {
	var observerClose = new MutationObserver(function () { //关闭按钮点击监听器
		if ($(".detailItem") !== null || $(".contentWeb") !== null) {
			observerClose.disconnect();
			$widw.css("display", "none");
			$bgwidw.css("display", "none");
			setTimeout(function (node) {
				node.append("<div class='show-rawext'>" + node.attr("data-rawext").substr(0, 10) + "</div>");
			}(node),500);
			setTimeout(function () {
				controller(node);
			},1000);
		}
	});
	if (node.hasClass("Key") || node.hasClass("Sticker") || node.hasClass("Container") || node.hasClass("Tool") || node.hasClass("Graffiti") || node.hasClass("Collectible") || node.hasClass("Music") || node.hasClass("Stock")) {
		node.hide();
		controller(node);
	} else {
		if (node.attr("data-rawext") > 1) {
			observerCheck.observe(target_widw, configSubtree);
			observerClose.observe(target_widw, configSubtree);
			inspectCache = inspect(node);
			$retrieve.click();
		} else {
			node.append("<div class='show-rawext'>" + node.attr("data-rawext").substr(0, 10) + "</div>");
			controller(node);
		}
	}
}

function controller(Node) {
	if (Node.next().hasClass("vItem")) {
		clickLogic(Node.next());
	} else {
		observerCheck.disconnect();
		Notification.requestPermission(function () {
			var n = new Notification("Task Finished");
		});
	}
}

function inspect(node) {
	return "steam://rungame/730/76561202255233023/+csgo_econ_action_preview%20S" + node.data("profile") + "A" + node.data("id") + "D" + node.data("inspect");
}

function parseInspect() {
	var t = $(".txtInspect").val(),
		e = /steam:\/\/rungame\/730\/\d*?\/\+csgo_econ_action_preview( |%20)(M|S)(\d*)[A](\d*)[D](\d*)/gm;
	null !== (m = e.exec(t)) ? null != m[2] && null != m[3] && null != m[4] && null != m[5] ? ($("#MarketFloatValue").html("<img class='loading' src='/images/loader.gif' alt='loading...' />"), $("#MarketFloatValue").load("/item/float", {
		s: m[2],
		a: m[4],
		m: m[3],
		d: m[5]
	}, function () {
		$(".btnCheck").one("click", parseInspect), $(".txtInspect").select()
	})) : ($(".btnCheck").one("click", parseInspect), $(".txtInspect").select()) : (alert("Empty/Incorrect Inspect Link"), $(".btnCheck").one("click", parseInspect), $(".txtInspect").select())
}

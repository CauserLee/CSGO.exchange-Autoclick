/*===========================

 本js文件用于存放脚本点击逻辑

 ===========================*/
let [onceFlag, reloadFlag, finishedFlag] = [true, false, false];
//以上为Flag变量
const $widw = $("#widw");
const $bgwidw = $("#bg-widw");
const $retrieve = document.querySelector("a[href='#item/market']");
const target_widw = document.querySelector("#widw");
let inspectCache = "";
//以上为对象缓存
const configSubtree = {attributes: true, childList: true, characterData: false, subtree: true};
//以上为Config对象
let observerCheck = new MutationObserver(function () { //查询地址填充与check按钮点击监听器
	if ($widw.css("display") === "block") {
		observerCheck.disconnect();
		$(".txtInspect").attr("value", inspectCache);
		parseInspect();
	}
});
//以上为被动监听器对象

$(document).ready(function () {
	if (sessionStorage.AutoclickRefreshCount && Number(sessionStorage.AutoclickRefreshCount) > 0) {
		if (Number(sessionStorage.AutoclickRefreshCount) < 4) {
			let handler = window.setInterval(function () {
				if ($(".statsInv").text() !== "") {
					window.clearInterval(handler);
					clickLogic($(".vItem.cItem:first"));
				}
			}, 50);
		} else if (sessionStorage.AutoclickRefreshCount === 5) {
			onceFlag = false;
		} else {
			let handler = window.setInterval(function () {
				if ($(".statsInv").text() !== "") {
					finishedFlag = true;
					Notification.requestPermission(function () {
						let n = new Notification("Task Finished");
					});
					window.clearInterval(handler);
					clickLogic($(".vItem.cItem:first"));
				}
			}, 50);
		}
	} else {
		sessionStorage.AutoclickRefreshCount = 0;
	}
});

function active() {
	finishedFlag = false;
	sessionStorage.AutoclickRefreshCount = 0;
	if (onceFlag) {
		onceFlag = false;
		clickLogic($(".vItem.cItem:first"));
	}
}

function clickLogic(node) {
	let observerClose = new MutationObserver(function () { //关闭按钮点击监听器
		if ($(".detailItem") !== null || $(".contentWeb") !== null) {
			observerClose.disconnect();
			$widw.css("display", "none");
			$bgwidw.css("display", "none");
			node.append("<div class='show-rawext'>success</div>");
			setTimeout(function () {
				controller(node, reloadFlag);
			}, 1000);
		}
	});
	if (node.hasClass("Key") || node.hasClass("Sticker") || node.hasClass("Container") || node.hasClass("Tool") || node.hasClass("Graffiti") || node.hasClass("Collectible") || node.hasClass("Music") || node.hasClass("Stock")) {
		node.hide();
		controller(node, reloadFlag);
	} else {
		if (node.attr("data-rawext") > 1) {
			reloadFlag = true;
			observerCheck.observe(target_widw, configSubtree);
			observerClose.observe(target_widw, configSubtree);
			inspectCache = inspect(node);
			$retrieve.click();
		} else {
			node.append("<div class='show-rawext'>" + node.attr("data-rawext").substr(0, 10) + "</div>");
			controller(node, reloadFlag);
		}
	}
}

function controller(node, reloadFlag) {
	if (node.next().hasClass("vItem")) {
		clickLogic(node.next());
	} else {
		if (reloadFlag === true && Number(sessionStorage.AutoclickRefreshCount) < 4) {
			sessionStorage.AutoclickRefreshCount = Number(sessionStorage.AutoclickRefreshCount) + 1;
			location.reload(true);
		} else {
			if (finishedFlag) {
			} else {
				onceFlag = false;
				observerCheck.disconnect();
				sessionStorage.AutoclickRefreshCount = 5;
				Notification.requestPermission(function () {
					let n = new Notification("Task Finished");
				});
			}
		}
	}
}

function inspect(node) {
	return "steam://rungame/730/76561202255233023/+csgo_econ_action_preview%20S" + node.data("profile") + "A" + node.data("id") + "D" + node.data("inspect");
}

function parseInspect() {
	let t = $(".txtInspect").val(),
		e = /steam:\/\/rungame\/730\/\d*?\/\+csgo_econ_action_preview( |%20)(M|S)(\d*)[A](\d*)[D](\d*)/gm;
	null !== (m = e.exec(t)) ? null != m[2] && null != m[3] && null != m[4] && null != m[5] ? ($("#MarketFloatValue").html("<img class='loading' src='/images/loader.gif' alt='loading...' />"), $("#MarketFloatValue").load("/item/float", {
		s: m[2],
		a: m[4],
		m: m[3],
		d: m[5]
	}, function () {
		$(".btnCheck").one("click", parseInspect), $(".txtInspect").select()
	})) : ($(".btnCheck").one("click", parseInspect), $(".txtInspect").select()) : ($(".btnCheck").one("click", parseInspect), $(".txtInspect").select())
}

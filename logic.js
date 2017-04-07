/*===========================

 本js文件用于存放脚本点击逻辑

 ===========================*/
var onceFlag = true;
var reloadFlag = false;
var finishedFlag = false;
//以上为Flag变量
var $widw = $("#widw");
var $bgwidw = $("#bg-widw");
//以上为jquery对象缓存
var configNodeAttributes = {attributes: true, childList: false, characterData: false};
var configDisplay = {attributes: true, childList: false, characterData: false, attributeFilter: ["display"]};
//以上为Config对象
var observerCheck = new MutationObserver(function () { //查询地址填充与check按钮点击监听器
    if ($widw.css("display") === "block") {
        $(".txtInspect").attr("value", $(".OptionInspect").attr("href"));
        parseInspect();
    }
});
var observerClose = new MutationObserver(function () { //关闭按钮点击监听器
    observerClose.disconnect();
    var IntervalHandler1 = window.setInterval(function () {
        if ($(".msgNotif") !== null) {
            $(".msgNotif").detach();
            $(".widw-close").click();
            setTimeout(function () {
                $widw.css("display", "none");
                $bgwidw.css("display", "none");
                currentNode.append("<div class='show-rawext'>success</div>");
                window.clearInterval(IntervalHandler1);
                controller(node, reloadFlag);
            }, 100);
        }
    }, 300);

});
//以上为被动监听器对象

$(document).ready(function () {
    if (sessionStorage.AutoclickRefreshCount && Number(sessionStorage.AutoclickRefreshCount) > 0) {
        if (Number(sessionStorage.AutoclickRefreshCount) < 4) {
            var handler = window.setInterval(function () {
                if ($(".statsInv").text() !== "") {
                    var Node = $(".vItem.Normal.cItem:first");
                    window.clearInterval(handler);
                    clickLogic(Node);
                }
            }, 50);
        } else {
            var handler = window.setInterval(function () {
                if ($(".statsInv").text() !== "") {
                    finishedFlag = true;
                    Notification.requestPermission(function () {
                        var n = new Notification("Task Finished");
                    });
                    var Node = $(".vItem.Normal.cItem:first");
                    window.clearInterval(handler);
                    clickLogic(Node);
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
        observerCheck.observe($widw, configDisplay);
        var Node = $(".vItem.Normal.cItem:first");
        clickLogic(Node);
    }
}

function clickLogic(node) {
    var currentNode = node;
    show(node); //show()函数用于强制触发本来与mouseenter事件绑定的ItemData函数
    if (node.hasClass("Key") || node.hasClass("Sticker") || node.hasClass("Container") || node.hasClass("Tool") || node.hasClass("Graffiti") || node.hasClass("Collectible") || node.hasClass("Music") || node.hasClass("Stock")) {
        if (Number(sessionStorage.AutoclickRefreshCount) < 3) {
            controller(node, reloadFlag);
        } else {
            //TODO:Jquery对象数组
        }
        setTimeout(function () {
            currentNode.remove();
        }, 20);
    } else {
        if (node.attr("data-rawext") > 1) {
            reloadFlag = true;
            observerClose.observe($widw, configNodeAttributes);
            document.querySelector("a[href^='#item']").click();
        } else {
            node.append("<div class='show-rawext'>" + node.attr("data-rawext").substr(0, 10) + "</div>");
            controller(node, reloadFlag);
        }
    }
}

function controller(Node, reloadFlag) {
    if (Node.next().hasClass("vItem")) {
        clickLogic(Node.next());
    } else {
        if (reloadFlag === true && Number(sessionStorage.AutoclickRefreshCount) < 3) {
            sessionStorage.AutoclickRefreshCount = Number(sessionStorage.AutoclickRefreshCount) + 1;
            location.reload(true);
        } else {
            if (finishedFlag) {
            } else {
                onceFlag = false;
                observerCheck.disconnect();
                Notification.requestPermission(function () {
                    var n = new Notification("Task Finished");
                });
            }
        }
    }
}

/*=================================

 被强制调用的网站原函数

 =================================*/

function () {
    
}
"steam://rungame/730/76561202255233023/+csgo_econ_action_preview%20S" + $(this).data("profile") + "A" + $(this).data("id") + "D" + $(this).data("inspect")

function parseInspect(t) {
    null !== (m = e.exec(t)) ? null != m[2] && null != m[3] && null != m[4] && null != m[5] ? ($("#MarketFloatValue").html("<img class='loading' src='/images/loader.gif' alt='loading...' />"), $("#MarketFloatValue").load("/item/float", {
                s: m[2],
                a: m[4],
                m: m[3],
                d: m[5]
            }, function () {
                $(".btnCheck").one("click", parseInspect), $(".txtInspect").select()
            })) : (alert("Incorrect Inspect Link"), $(".btnCheck").one("click", parseInspect), $(".txtInspect").select()) : (alert("Empty/Incorrect Inspect Link"), $(".btnCheck").one("click", parseInspect), $(".txtInspect").select())
}

var t = 0;
function show(node) { //这一坨是show()函数的本体，本是原网页的ItemData生成函数，由于经过了混淆，难以解析，所以直接稍加修改复制粘贴了过来
    t++;
    var e = 60, a = 0, n = 1;
    if ($(node).hasClass("vItem") || $(node).hasClass("sItem")) {
        if ($(".ItemData").css({"z-index": "0"}), "" != $(node).data("custom") ? $(".ItemData h3").text(urldecode($(node).data("custom"))) : $(".ItemData h3").text(capFL(urldecode($(node).data("name")))), "undefined" != typeof $(node).data("exterior") ? ($(".ItemData div:first").removeClass(), $(".ItemData div:first").addClass($(node).data("quality")), $(".ItemData div:first").text($(node).data("quality")), $(".ItemData div:first").show()) : $(".ItemData div:first").hide(), $(node).attr("data-rawext") < 2) {
            if ("undefined" != typeof $(node).data("exterior") && "" != $(node).data("exterior") ? ($(".ItemData u").text("Exterior: " + $(node).data("exterior")), $(".ItemData u").show(), e += 20) : $(".ItemData u").hide(), "undefined" != typeof $(node).data("collection")) {
                $(".ItemData .exterior").css({"float": "right"}), $(".ItemData .exterior").css({"margin-right": "10px"}), $(".ItemData img.sColl").attr("data-idcollection", $(node).data("idcollection"));
                var s = "/images/collection/" + $(node).data("collection").replace(/\s+/g, "") + ".png";
                $(".ItemData img.sColl").attr("src", s.toLowerCase()), $(".ItemData img.sColl").attr("title", $(node).data("collection")), $(".ItemData img.sColl").show(), e += 15
            } else $(".ItemData img.sColl").hide(), $(".ItemData .exterior").css({"float": "none"}), $(".ItemData .exterior").css({"margin-right": "0"});
            if ($(node).attr("data-rawext") > 0) {
                var i = parseFloat($(node).attr("data-rawext")).toFixed(8);
                $(".ItemData .target-label-text").text(i), $(".ItemData .target-label-text").show();
                var o = porcExterior(i);
                $(".ItemData .target").width(Math.round(o) + "%"), $(".ItemData .target").show(), e += 10
            } else $(".ItemData .target").hide(), $(".ItemData .target-label-text").hide(), $(".ItemData").css({"z-index": "8"});
            if ("undefined" != typeof $(node).data("minwear")) {
                $(".ItemData div.bullet-graph").show(), a = parseFloat($(node).attr("data-minwear")).toFixed(2), $(".value-min .tick-label-text").text("MIN " + a);
                var o = porcExterior(a);
                $(".min-wear").width(Math.round(o) + "%"), $(".value-min").css("left", Math.round(o) + "%"), n = parseFloat($(node).attr("data-maxwear")).toFixed(2), $(".value-max .tick-label-text").text("MAX " + n);
                var o = porcExterior(n);
                $(".max-wear").width(Math.round(o) + "%"), $(".value-max").css("left", Math.round(o) + "%"), e += 40
            } else $(".ItemData div.bullet-graph").hide()
        } else $(".ItemData .target-label-text").hide(), $(".ItemData u").hide(), $(".ItemData div.bullet-graph").hide(), $(".ItemData a.vid").hide(), $(".ItemData img").hide();
        if ("undefined" != typeof $(node).data("image") && "" != $(node).data("image") ? ($(".ItemData img.imageItem").attr("src", $(node).data("image")), $(".ItemData img.imageItem").show(), e += 120) : $(".ItemData img.imageItem").hide(), "undefined" != typeof $(node).data("id")) {
            var r = "i";
            $(node).attr("data-rawext") <= 2 ? "undefined" != typeof $(node).data("container") ? r = "c" : "Sticker " == $(node).data("type") && (r = "s") : r = "Music " == $(node).data("type") ? "m" : "Graffiti " == $(node).data("type") ? "g" : "v", $(".ItemData a.vid").text("Item Showcase"), $(".ItemData a.vid").attr("href", "#view/" + $(node).data("id") + "/" + r), $(".ItemData a.vid").show(), e += 10, "" != $(node).data("profile") ? ($(".ItemData a.inprofile").attr("href", "http://steamcommunity.com/profiles/" + $(node).data("profile") + "/inventory#730_2_" + $(node).data("id")), $(".ItemData a.inprofile").attr("target", "_blank"), $(".ItemData a.inprofile").show(), e += 15, "" != $(node).data("inspect") ? ($(".ItemData a.ingame").attr("href", "steam://rungame/730/76561202255233023/+csgo_econ_action_preview%20S" + $(node).data("profile") + "A" + $(node).data("id") + "D" + $(node).data("inspect")), $(".ItemData a.ingame").show(), e += 15, "undefined" == typeof $(node).data("orig") && 2 == $(node).attr("data-rawext") && "" != $(node).data("weapon") && "Stock " != $(node).data("type") ? ($(".ItemData a.getFloat").attr("href", "#item/market/" + $(node).data("profile") + "/" + $(node).data("id") + "/" + $(node).data("inspect")), $(".ItemData a.getFloat").show(), e += 15) : $(".ItemData a.getFloat").hide()) : ($(".ItemData a.ingame").hide(), $(".ItemData a.getFloat").hide())) : ($(".ItemData a.inprofile").hide(), $(".ItemData a.ingame").hide(), $(".ItemData a.getFloat").hide());
        } else $(".ItemData a.vid").hide(), $(".ItemData a.inprofile").hide(), $(".ItemData a.ingame").hide(), $(".ItemData a.getFloat").hide();
        if ("undefined" != typeof $(node).data("hashname") && "" != $(node).data("hashname") ? ($(".ItemData a.scm").attr("href", "http://steamcommunity.com/market/listings/730/" + $(node).data("hashname")), $(".ItemData a.scm").show(), e += 20, $(".ItemData a.bts").attr("href", "http://bskn.co/?ref_alias=csgoexchange&market_hash_name=" + $(node).data("hashname")), $(".ItemData a.bts").show(), e += 20) : ($(".ItemData a.scm").hide(), $(".ItemData a.bts").hide()), "undefined" != typeof $(node).data("scmcase") ? ("" != $(node).data("scmcase") ? ($(".ItemData a.scm_case").attr("href", "http://steamcommunity.com/market/listings/730/" + $(node).data("scmcase")), $(".ItemData a.scm_case").show()) : $(".ItemData a.scm_case").hide(), "" != $(node).data("scmcollection") ? ($(".ItemData a.scm_weps").attr("href", "http://steamcommunity.com/market/search?appid=730&q=&category_730_ItemSet%5B%5D=" + $(node).data("scmcollection")), $(".ItemData a.scm_weps").show(), e += 20) : $(".ItemData a.scm_weps").hide()) : ($(".ItemData a.scm_case").hide(), $(".ItemData a.scm_weps").hide()), "undefined" != typeof $(node).data("search"))if ("" != $(node).data("search")) {
            var c = "";
            "undefined" != typeof $(node).data("container") ? c = "http://csgo.exchange/item/search?package=true&container=" + $(node).data("search") : "Sticker " == $(node).data("type") ? c = "http://csgo.exchange/item/search?stickers=true&sticker=" + $(node).data("search") : "Graffiti " == $(node).data("type") ? c = "http://csgo.exchange/item/search?graffiti=" + $(node).data("search") : 3 == $(node).attr("data-rawext") ? c = "http://csgo.exchange/item/search?simple=Search&item=" + $(node).data("search") + "&category=" + $(node).data("category") : ("Battle-Scarred" == $(node).data("exterior") ? (temp_maxw = 1, temp_minw = .45) : "Well-Worn" == $(node).data("exterior") ? (temp_maxw = .45, temp_minw = .38) : "Field-Tested" == $(node).data("exterior") ? (temp_maxw = .38, temp_minw = .15) : "Minimal Wear" == $(node).data("exterior") ? (temp_maxw = .15, temp_minw = .07) : "Factory New" == $(node).data("exterior") ? (temp_maxw = .07, temp_minw = 0) : "Vanilla" == $(node).data("exterior") && (temp_maxw = n, temp_minw = a), a > temp_minw && (temp_minw = a), n < temp_maxw && (temp_maxw = n), c = "http://csgo.exchange/item/search?weapon=" + $(node).data("search") + "&category=" + $(node).data("category") + "&maxwear=" + temp_maxw + "&minwear=" + temp_minw), "" != c && ($(".ItemData a.opt_search").attr("href", c), $(".ItemData a.opt_search").show(), e += 20)
        } else $(".ItemData a.opt_search").hide(); else $(".ItemData a.opt_search").hide();
        "undefined" != typeof $(node).data("descsouv") ? ($(".ItemData .dsouv").show(), $(".ItemData .dsouv").text($(node).data("descsouv")), e += 50) : $(".ItemData .dsouv").hide(), $(".ItemData ul").hide();
        var l = $(node).offset().left, d = $(node).offset().top - $(window).scrollTop();
        $(node).hasClass("sItem") ? (l = $(node).offset().left + $(node).outerWidth(), d -= 130) : $(window).width() > 500 ? $(window).width() - l > 250 ? l += 120 : l -= 160 : $(window).width() - l > 200 ? l += 50 : l -= $(window).width() - l > 100 ? 100 : 50, $(".ItemData").css({
            top: d + "px",
            left: l + "px",
            height: e + "px"
        }).hide().show(0)
    }
}


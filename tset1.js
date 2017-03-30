function porcExterior(t) {
    return dif = 1 - t, dif >= 0 && dif < .55 ? (resd = dif, porc = 20 * resd / .55) : dif >= .55 && dif < .62 ? (resd = dif - .55, porc = 20 * resd / .07 + 20) : dif >= .62 && dif < .85 ? (resd = dif - .62, porc = 20 * resd / .23 + 40) : dif >= .85 && dif < .93 ? (resd = dif - .85, porc = 20 * resd / .08 + 60) : dif >= .93 && dif <= 1 && (resd = dif - .93, porc = 20 * resd / .07 + 80), porc
}
function cWidw(t) {
    t ? ($("#bg-widw").show(), $("#widw").show()) : ($("#widw").hide(), $("#bg-widw").hide(), window.clearInterval(tidT))
}
function cMsg(t) {
    t ? ($("#bg-msg").show(), $("#msg").show()) : ($("#msg").hide(), $("#bg-msg").hide(), window.clearInterval(tidT))
}
function viewTrade(t) {
    window.open("http://steamcommunity.com/tradeoffer/" + t, "MsgWindow", "width=1024, height=768, scrollbars=yes")
}
function timer() {
    if (count -= 1, -1 == count)return clearInterval(counter), void cryptokey();
    var t = count % 60, e = Math.floor(count / 60), a = Math.floor(e / 60);
    e %= 60, a %= 60, $("#Timer").text(e + " minutes " + t + " seconds")
}
function prepSort() {
    var t = $(this).attr("href").replace("#", "");
    $(".listPrices th a").each(function () {
        var t = $(this), e = t.attr("title");
        t.text(e)
    }), $(this).toggleClass("ASC"), $(this).hasClass("ASC") ? ($(this).prepend("&#x25B2;"), sortItems(t, 1)) : ($(this).prepend("&#x25BC;"), sortItems(t)), $(this).one("click", prepSort)
}
function sortItems(t, e) {
    if (e = "undefined" != typeof e ? e : !1, "High" == t) {
        var a = $(".contentItems");
        a.find(".cItem").sort(function (t, e) {
            return +e.dataset.market - +t.dataset.market
        }).appendTo(a)
    } else if ("Low" == t) {
        var a = $(".contentItems");
        a.find(".cItem").sort(function (t, e) {
            return +t.dataset.market - +e.dataset.market
        }).appendTo(a)
    } else if ("Raw" == t) {
        var a = $(".contentItems");
        a.find(".cItem").sort(function (t, e) {
            return +t.dataset.rawext - +e.dataset.rawext
        }).appendTo(a)
    } else if ("Name" == t) {
        var a = $(".contentItems");
        a.find(".cItem").sort(function (t, a) {
            var n = t.dataset.name, s = a.dataset.name;
            return e ? n > s ? -1 : 1 : n > s ? 1 : -1
        }).appendTo(a)
    } else if ("Quality" == t) {
        var a = $(".contentItems");
        a.find(".cItem").sort(function (t, e) {
            return +e.dataset.bestquality - +t.dataset.bestquality
        }).appendTo(a)
    } else if ("HighBet" == t) {
        var a = $(".contentItems");
        a.find(".cItem").sort(function (t, e) {
            return +e.dataset.bet - +t.dataset.bet
        }).appendTo(a)
    } else if ("mktVN" == t) {
        var a = $(".contentItems");
        a.find(".cItem").sort(function (t, a) {
            return e ? +t.dataset.vn - +a.dataset.vn : +a.dataset.vn - +t.dataset.vn
        }).appendTo(a)
    } else if ("mktBS" == t) {
        var a = $(".contentItems");
        a.find(".cItem").sort(function (t, a) {
            return e ? +t.dataset.bs - +a.dataset.bs : +a.dataset.bs - +t.dataset.bs
        }).appendTo(a)
    } else if ("mktWW" == t) {
        var a = $(".contentItems");
        a.find(".cItem").sort(function (t, a) {
            return e ? +t.dataset.ww - +a.dataset.ww : +a.dataset.ww - +t.dataset.ww
        }).appendTo(a)
    } else if ("mktFT" == t) {
        var a = $(".contentItems");
        a.find(".cItem").sort(function (t, a) {
            return e ? +t.dataset.ft - +a.dataset.ft : +a.dataset.ft - +t.dataset.ft
        }).appendTo(a)
    } else if ("mktMW" == t) {
        var a = $(".contentItems");
        a.find(".cItem").sort(function (t, a) {
            return e ? +t.dataset.mw - +a.dataset.mw : +a.dataset.mw - +t.dataset.mw
        }).appendTo(a)
    } else if ("mktFN" == t) {
        var a = $(".contentItems");
        a.find(".cItem").sort(function (t, a) {
            return e ? +t.dataset.fn - +a.dataset.fn : +a.dataset.fn - +t.dataset.fn
        }).appendTo(a)
    } else if ("cslVN" == t) {
        var a = $(".contentItems");
        a.find(".cItem").sort(function (t, a) {
            return e ? +t.dataset.clvn - +a.dataset.clvn : +a.dataset.clvn - +t.dataset.clvn
        }).appendTo(a)
    } else if ("cslBS" == t) {
        var a = $(".contentItems");
        a.find(".cItem").sort(function (t, a) {
            return e ? +t.dataset.clbs - +a.dataset.clbs : +a.dataset.clbs - +t.dataset.clbs
        }).appendTo(a)
    } else if ("cslWW" == t) {
        var a = $(".contentItems");
        a.find(".cItem").sort(function (t, a) {
            return e ? +t.dataset.clww - +a.dataset.clww : +a.dataset.clww - +t.dataset.clww
        }).appendTo(a)
    } else if ("cslFT" == t) {
        var a = $(".contentItems");
        a.find(".cItem").sort(function (t, a) {
            return e ? +t.dataset.clft - +a.dataset.clft : +a.dataset.clft - +t.dataset.clft
        }).appendTo(a)
    } else if ("cslMW" == t) {
        var a = $(".contentItems");
        a.find(".cItem").sort(function (t, a) {
            return e ? +t.dataset.clmw - +a.dataset.clmw : +a.dataset.clmw - +t.dataset.clmw
        }).appendTo(a)
    } else if ("cslFN" == t) {
        var a = $(".contentItems");
        a.find(".cItem").sort(function (t, a) {
            return e ? +t.dataset.clfn - +a.dataset.clfn : +a.dataset.clfn - +t.dataset.clfn
        }).appendTo(a)
    } else if ("" == t) {
        var a = $(".contentItems");
        a.find(".cItem").sort(function (t, e) {
            return +t.dataset.pos - +e.dataset.pos
        }).appendTo(a)
    }
}
function filterItems() {
    var t = "", e = [], a = [], n = [], s = [], i = [], o = "";
    $(".contentMain input[type=checkbox]:checked").each(function () {
        "quality" == $(this).attr("name") ? e.push("[data-" + $(this).attr("name") + '*="' + $(this).val() + '"]') : "exterior" == $(this).attr("name") ? a.push("[data-" + $(this).attr("name") + '*="' + $(this).val() + '"]') : "category" == $(this).attr("name") ? n.push("[data-" + $(this).attr("name") + '*="' + $(this).val() + '"]') : "type" == $(this).attr("name") ? s.push("[data-" + $(this).attr("name") + '*="' + $(this).val() + '"]') : "weapon" == $(this).attr("name") ? i.push("[data-" + $(this).attr("name") + '*="' + $(this).val() + '"]') : "picked" == $(this).attr("name") && (o = ".selected")
    });
    var r = [], c = $(".name_search").val().toLowerCase();
    "" != c && (c = '[data-name*="' + encodeURIComponent(c).replace(/'/g, "%27").replace(/\(/g, "%28").replace(/\)/g, "%29") + '"]');
    var l = "";
    $(".selCollection").length > 0 && (l = $(".selCollection").val(), l = "All" != l ? '[data-collection*="' + l + '"]' : "");
    var d = "";
    $(".selBets").length > 0 && (d = $(".selBets").val(), d = "Bettable" == d ? '[data-bet*="."]' : "Max Bet" == d ? '[data-bet="75.00"]' : "Overbet" == d ? '[data-betprofit="1"]' : "Unavailable" == d ? '[data-bet="0"]' : "");
    var m = 0;
    do {
        var h = "", u = "", p = "", f = "", v = "";
        e.length > m && (h = e[m]);
        var g = 0;
        do {
            a.length > g && (u = a[g]);
            var I = 0;
            do {
                n.length > I && (p = n[I]);
                var w = 0;
                do {
                    s.length > w && (f = s[w]);
                    var k = 0;
                    do i.length > k && (v = i[k]), "" == h && "" == u && "" == p && "" == f && "" == c && "" == v && "" == o && "" == l && "" == d || r.push(h + u + p + f + v + c + o + l + d), k++; while (k < i.length);
                    w++
                } while (w < s.length);
                I++
            } while (I < n.length);
            g++
        } while (g < a.length);
        m++
    } while (m < e.length);
    if (r.length > 0) {
        if (t = r.join(), $(".cItem").hide(), $(t).show(), $(".vItem").length) {
            var x = 0, y = 0, b = 0, T = "";
            $(t).each(function () {
                y += parseFloat($(this).data("market")), b += parseFloat($(this).data("currency")), x++
            }), b > 0 && (T = " [" + $(".statsInv").data("coin") + " " + Math.round(100 * b) / 100 + "]"), $(".statsInv").text("Showing " + x + " items | Total = " + Math.round(100 * y) / 100 + T)
        }
    } else if ($(".cItem").show(), $(".vItem").length) {
        var x = 0, y = 0, b = 0, T = "";
        $(".vItem").each(function () {
            y += parseFloat($(this).data("market")), b += parseFloat($(this).data("currency")), x++
        }), b > 0 && (T = " [" + $(".statsInv").data("coin") + " " + Math.round(100 * b) / 100 + "]"), $(".statsInv").text("Showing " + x + " items | Total = " + Math.round(100 * y) / 100 + T)
    }
}
function loadPage(t, e, a, n) {
    a = "undefined" != typeof a ? a : "", n = "undefined" != typeof n ? n : "", loadtext = "", n && (loadtext = "<div><b>" + n + "</b></div>"), $(t).html(loadtext + "<img class='loading' src='/images/loader.gif' alt='loading...' />"), $(t).load("/" + e + "/" + a, function (n, s, i) {
        return "success" == s ? !0 : void(503 == i.status ? loadPage(t, e, a) : 524 == i.status && loadPage(t, e, a))
    })
}
function urldecode(t) {
    return decodeURIComponent((t + "").replace(/\+/g, "%20"))
}
function capFL(t) {
    return t.replace(/\w\S*/g, function (t) {
        return t.charAt(0).toUpperCase() + t.substr(1).toLowerCase()
    })
}
function checkSteam() {
    var t = $("#chkID").val(), e = /\/(id|profiles)\/(.*?)(\/|$)/gm;
    null !== (m = e.exec(t)) && (t = m[2]), "" != t ? ($(".responseCalc").html("<img class='loading' src='/images/loader.gif' alt='loading...' />"), $(".responseCalc").load("/calculator/steam/" + t, function (t, e) {
            return "success" == e ? !0 : ($(".responseCalc").empty(), $("#chkID").val(""), alert("Bad URL"), void 0)
        })) : alert("Enter SteamID64 or Custom URL")
}
function checkTrade() {
    var t = $("#chkID").val(), e = t.split("trade?t=");
    "undefined" != typeof e[1] ? ($(".responseCalc").html("<img class='loading' src='/images/loader.gif' alt='loading...' />"), $(".responseCalc").load("/calculator/link/" + e[1], function (t, e) {
            return "success" == e ? !0 : ($(".responseCalc").empty(), $("#chkID").val(""), alert("Bad URL"), void 0)
        })) : alert("Enter csgolounge trade link")
}
function calcBtc(t, e) {
    var a = t / e;
    a = a.toFixed(6), $("#donateBtc").text(a), changeBTC == e && changeUSD == t || $("#qrBtc").length && $.post("/donate/address/", {b: a}, function (a) {
        changeBTC = e, changeUSD = t, $("#dataCrypto").html(a)
    })
}
function cryptokey() {
    var t = $("#donateBtc").text();
    $.post("/donate/address/", {b: t}, function (t) {
        $("#dataCrypto").html(t)
    })
}
function chkQueue(t) {
    tidI = setInterval(function () {
        statusCheck(t)
    }, 1e4)
}
function statusCheck(t) {
    $.getJSON("/" + t + "/check", function (t) {
        "undefined" != typeof t.trade && ("undefined" != typeof t.trade.msg && $(".msgTrade").html(t.trade.msg), "undefined" != typeof t.trade.bs && $(".botTrading").html("<a href='http://steamcommunity.com/profiles/" + t.trade.bs + "/' target='_blank'>BOT " + t.trade.bn + "</a>"), t.trade.status < 3 && (window.clearInterval(tidI), $("#btnItems").off("click"), "undefined" != typeof t.trade.donate ? $("#btnItems").text("DONATE") : "undefined" != typeof t.trade.exchange ? $("#btnItems").text("EXCHANGE") : "undefined" != typeof t.trade.retrieve ? $("#btnItems").text("REQUEST") : $("#btnItems").text("GET PASS")), 0 == t.trade.status && $(".msgTrade").hide(), t.trade.status < 2 ? ($("#btnItems").off("click"), "undefined" != typeof t.trade.donate ? $("#btnItems").one("click", donateItems) : "undefined" != typeof t.trade.exchange ? $("#btnItems").one("click", exchangeItems) : "undefined" != typeof t.trade.retrieve ? $("#btnItems").one("click", retrieveItems) : $("#btnItems").one("click", passItems)) : 4 == t.trade.status && ($("#btnItems").text(" R E A D Y "), $("#btnItems").off("click"), $("#btnItems").click(function () {
                viewTrade(t.trade.id)
            })), 1 == t.trade.status && ("undefined" != typeof t.trade.pass && window.location.replace("http://csgo.exchange/item/search"), "undefined" != typeof t.trade.coins && ($(".coinsExchange").text(t.trade.coins), $(".avalExchange").text(t.trade.sales), $(".selected").remove())))
    })
}
function donateItems() {
    var t = $(".selected").map(function () {
        return $(this).data("id")
    }).get().join(",");
    t ? ($(this).text(". . . . ."), $.post("/donate/prepare/", {i: t}, function (t) {
            var e = jQuery.parseJSON(t);
            "undefined" != typeof e.s && ($(".msgTrade").show(), e.s ? (chkQueue("donate"), 1 == e.s ? $(".msgTrade").text("On process...") : 2 == e.s && $(".msgTrade").text("Processing...")) : ($(".msgTrade").text("You need set your trade offer token."), $("#btnItems").text("DONATE"), $("#btnItems").one("click", donateItems), $("#widw").load("/user/", function (t, e) {
                    "success" == e && cWidw(!0)
                })))
        })) : (alert("You don't have any item selected"), $("#btnItems").one("click", donateItems))
}
function passItems() {
    var t = $(".selected").map(function () {
        return $(this).data("id")
    }).get().join(",");
    t ? $(".amountDonation").text() >= 10 ? ($(this).text(". . . . ."), $.post("/item/prepare/", {i: t}, function (t) {
                var e = jQuery.parseJSON(t);
                "undefined" != typeof e.s && ($(".msgTrade").show(), e.s ? (chkQueue("item"), 1 == e.s ? $(".msgTrade").text("On process...") : 2 == e.s && $(".msgTrade").text("Processing...")) : ($(".msgTrade").text("You need set your trade offer token."), $("#btnItems").text("GET PASS"), $("#btnItems").one("click", passItems), $("#widw").load("/user/", function (t, e) {
                        "success" == e && cWidw(!0)
                    })))
            })) : (alert("You need at least give $10 for 1 month."), $("#btnItems").one("click", passItems)) : (alert("You don't have any item selected"), $("#btnItems").one("click", passItems))
}
function exchangeItems() {
    var t = 0, e = $(".selected").map(function () {
        return t++, $(this).data("id")
    }).get().join(",");
    if (t > 0)if (10 >= t) {
        var a = $(".amountDonation").text();
        $(this).text(". . . . ."), $.post("/market/prepare/", {i: e, c: a}, function (t) {
            var e = jQuery.parseJSON(t);
            "undefined" != typeof e.s && ($(".msgTrade").show(), e.s ? (chkQueue("market"), 1 == e.s ? $(".msgTrade").text("On process...").show() : 2 == e.s ? $(".msgTrade").text("Processing...").show() : 3 == e.s ? $(".msgTrade").text("Not available Bots for trading.").show() : 4 == e.s ? ($(".msgTrade").text("You need read and accept TOS."), $("#btnItems").text("EXCHANGE"), $("#btnItems").one("click", exchangeItems), $("#widw").load("/market/tos/", function (t, e) {
                                    "success" == e && cWidw(!0)
                                })) : 5 == e.s && $(".msgTrade").text("Select only up to 10 items").show(), "undefined" != typeof e.bs && $(".botTrading").html("<a href='http://steamcommunity.com/profiles/" + e.bs + "/' target='_blank'>BOT " + e.bn + "</a>")) : ($(".msgTrade").text("You need set your trade offer token."), $("#btnItems").text("EXCHANGE"), $("#btnItems").one("click", exchangeItems), $("#widw").load("/user/", function (t, e) {
                    "success" == e && cWidw(!0)
                })))
        })
    } else alert("You can only select up to 10 items by trade"), $("#btnItems").one("click", exchangeItems); else alert("You don't have any item selected"), $("#btnItems").one("click", exchangeItems)
}
function retrieveItems() {
    var t = $(".itemsExchange").text();
    t > 0 ? ($(this).text(". . . . ."), $.post("/market/retrieve/", {i: t}, function (t) {
            var e = jQuery.parseJSON(t);
            "undefined" != typeof e.s && (e.s ? (chkQueue("market/get"), 1 == e.s ? $(".msgTrade").text("On process...").show() : 2 == e.s ? $(".msgTrade").text("Processing...").show() : 3 == e.s ? $(".msgTrade").text("Not Available Bots for trading.").show() : 4 == e.s && $(".msgTrade").text("You don't have items for claim.").show(), "undefined" != typeof e.bs && $(".botTrading").html("<a href='http://steamcommunity.com/profiles/" + e.bs + "/' target='_blank'>BOT " + e.bn + "</a>")) : ($(".msgTrade").text("You need set your trade offer token."), $("#btnItems").text("REQUEST"), $("#btnItems").one("click", retrieveItems), $("#widw").load("/user/", function (t, e) {
                    "success" == e && cWidw(!0)
                })))
        })) : (alert("You don't have any item(s) for retrieve"), $("#btnItems").one("click", retrieveItems))
}
function userSettings() {
    var t = "", e = 0, a = 0, n = 0, s = "", i = "", o = 0;
    $(".txtToken").length && (t = $(".txtToken").val()), $(".selCurrency").length && (e = $(".selCurrency").val()), $(".selShowBets").length && (a = $(".selShowBets").val()), $(".selOrderInventory").length && (n = $(".selOrderInventory").val()), $(".selFVInventory").length && (o = $(".selFVInventory").val()), $(".txtBG").length && (s = $(".txtBG").val() + "<~}>" + $(".selBGsize").val() + "<~}>" + $(".selBGrepeat").val()), $(".txtChannel").length && (i = $(".txtChannel").val()), $("#widw").load("/user/update/", {
        t: t,
        d: e,
        o: n,
        f: o,
        v: a,
        b: s,
        c: i
    })
}
function retryInventory(t, e, a, n) {
    n++, a = "undefined" != typeof a ? a : "", $(t).html("<img class='loading' src='/images/loader.gif' alt='loading...'/><p>Loading Inventory... Attempt #" + n + "</p>"), 50 > n ? retry = "/retry/" : retry = "", a ? param = "/" + a : param = "", $(t).load("/" + e + param + retry, {r: n}, function (s, i, o) {
        return "success" == i ? "" == s ? (retryInventory(t, e, a, n), !1) : !0 : void(503 == o.status ? retryInventory(t, e, a, n) : 524 == o.status || 403 == o.status ? $(t).html("<h1>Steam Down</h1>") : $(t).html("<h1>Steam Down</h1>"))
    })
}
function updateSkins() {
    var t = $("#selSkin");
    if (t.empty(), "undefined" != typeof dataweapons[this.value]) {
        t.append("<option value='999'>All</option>");
        var e = [];
        $.each(dataweapons[this.value], function (t, a) {
            e.push({v: a.name, k: t})
        }), e.sort(function (t, e) {
            return t.v > e.v ? 1 : t.v < e.v ? -1 : 0
        }), $.each(e, function (e, a) {
            t.append($("<option></option>").attr("value", a.k).text(a.v))
        })
    } else t.append("<option value='999'>Pick weapon first</option>"), $("#max_wear").val("1.00"), $("#min_wear").val("0.00");
    updateWear(1, 0)
}
function setWear() {
    var t = $("#selWeapon option:selected").val(), e = 1, a = 0;
    "undefined" != typeof dataweapons[t][this.value] ? (e = dataweapons[t][this.value].maxw, a = dataweapons[t][this.value].minw, $("#max_wear").val(e), $("#min_wear").val(a)) : ($("#max_wear").val("1.00"), $("#min_wear").val("0.00")), updateWear(e, a)
}
function updateWear(t, e) {
    max_porc = 3 * porcExterior(t), min_porc = 3 * porcExterior(e), $(".value-max .tick-label-text").text("MAX " + parseFloat(Math.round(100 * t) / 100).toFixed(2)), $(".max-wear").width(Math.round(max_porc) + "px"), $(".value-max").css("left", Math.round(max_porc) + "px"), $(".value-min .tick-label-text").text("MIN " + parseFloat(Math.round(100 * e) / 100).toFixed(2)), $(".min-wear").width(Math.round(min_porc) + "px"), $(".value-min").css("left", Math.round(min_porc) + "px"), setPattern()
}
function setPattern() {
    var t = $("#selWeapon option:selected").val(), e = $("#selSkin option:selected").val(), a = $("#selPattern");
    if (a.empty(), $("#pattern").prop("disabled", !0), $("#pattern").val(""), 999 != e)if ("undefined" != typeof datapattern[e])if ("undefined" != typeof datapattern[e][t]) {
        a.append("<option value='-2'>All</option>");
        var n = [];
        $.each(datapattern[e][t], function (t, e) {
            n.push({v: e, k: t})
        }), 44 == e ? n.sort(function (t, e) {
                return t.v > e.v ? 1 : t.v < e.v ? -1 : 0
            }) : (console.log("Numeric"), n.sort(function (t, e) {
                return e - t
            })), $.each(n, function (t, e) {
            a.append($("<option></option>").attr("value", e.k).text(e.v))
        }), a.append("<option value='0'>Custom</option>")
    } else a.append("<option value='-2'>All</option>"), a.append("<option value='0'>Custom</option>"); else a.append("<option value='-2'>All</option>"), a.append("<option value='0'>Custom</option>"); else a.append("<option value='-3'>Pick skin first</option>")
}
function updatePattern() {
    var t = $("#selPattern option:selected").val();
    $("#pattern").prop("disabled", !0), $("#pattern").val(""), t > 0 ? $("#pattern").val(t) : 0 == t && ($("#pattern").prop("disabled", !1), $("#pattern").focus())
}
function updateSimple() {
    var t = $("#selSimple");
    if (t.empty(), "undefined" != typeof datasimples[this.value]) {
        var e = [];
        $.each(datasimples[this.value], function (t, a) {
            e.push({v: a, k: t})
        }), e.sort(function (t, e) {
            return t.v > e.v ? 1 : t.v < e.v ? -1 : 0
        }), $.each(e, function (e, a) {
            t.append($("<option></option>").attr("value", a.k).text(a.v))
        })
    } else t.append("<option value='0'>Pick category first</option>");
    1 == this.value ? $("#StickersV").show("slow") : $("#StickersV").hide()
}
function searchWeapon() {
    var t = $("#selWeapon option:selected").val(), e = $("#selSkin option:selected").val(), a = $("#pattern").val(), n = $("#selCategory option:selected").val(), s = $("#selQuality option:selected").val(), i = $("#selOrder option:selected").val(), o = $("#chkUnique").is(":checked") ? 1 : 0, r = $("#chkUnknown").is(":checked") ? 1 : 0, c = $("#selSticker1").val().toLowerCase(), l = $("#ListStickers option").filter(function () {
        return this.value.toLowerCase() == c
    }).data("value");
    c = $("#selSticker2").val().toLowerCase();
    var d = $("#ListStickers option").filter(function () {
        return this.value.toLowerCase() == c
    }).data("value");
    c = $("#selSticker3").val().toLowerCase();
    var m = $("#ListStickers option").filter(function () {
        return this.value.toLowerCase() == c
    }).data("value");
    c = $("#selSticker4").val().toLowerCase();
    var h = $("#ListStickers option").filter(function () {
        return this.value.toLowerCase() == c
    }).data("value");
    c = $("#selSticker5").val().toLowerCase();
    var u = $("#ListStickers option").filter(function () {
        return this.value.toLowerCase() == c
    }).data("value"), p = $("#max_wear").val(), f = $("#min_wear").val();
    $("body").off("click", "ul.tabs li"), $("ul.tabs li").css("cursor", "default"), $(".contentItems").hide(), $(".contentMain").html("<img class='loading' src='/images/loader.gif' alt='loading...' />"), $(".contentItems").load("/item/weapon", {
        w: t,
        s: e,
        p: a,
        c: n,
        q: s,
        o: i,
        u: p,
        l: f,
        d: o,
        m: r,
        t: l,
        t2: d,
        t3: m,
        t4: h,
        t5: u
    }, function (t, e) {
        "success" == e ? ($(".Information").hide(), $(".contentMain").hide(), $(".contentItems").show()) : "error" == e && ($(".contentMain").html("<b>There was an error. Try again your search</b>"), $(".contentItems").show(), $(".btnAction").one("click", searchWeapon))
    })
}
function searchPackage() {
    var t = $("#selContainer").val(), e = $("#selTourney").val(), a = $("#selTeam1").val(), n = $("#selTeam2").val(), s = $("#selStage").val(), i = $("#selMVP").val();
    $("body").off("click", "ul.tabs li"), $("ul.tabs li").css("cursor", "default"), $(".contentItems").hide(), $(".contentMain").html("<img class='loading' src='/images/loader.gif' alt='loading...' />"), $(".contentItems").load("/item/package", {
        c: t,
        t: e,
        h: a,
        v: n,
        s: s,
        m: i
    }, function (t, e) {
        "success" == e ? ($(".Information").hide(), $(".contentMain").hide(), $(".contentItems").show()) : "error" == e && ($(".contentMain").html("<b>There was an error. Try again your search</b>"), $(".contentItems").show(), $(".btnAction").one("click", searchPackage))
    })
}
function searchSticker() {
    var t = $("#selSticker").val().toLowerCase(), e = $("#ListStickers option").filter(function () {
        return this.value.toLowerCase() == t
    }).data("value"), a = $("#selOrderS option:selected").val(), n = $("#chkUniqueS").is(":checked") ? 1 : 0, s = $("#chkUnknownS").is(":checked") ? 1 : 0, i = $("#max_idS").val(), o = $("#min_idS").val();
    $("body").off("click", "ul.tabs li"), $("ul.tabs li").css("cursor", "default"), $(".contentItems").hide(), $(".contentMain").html("<img class='loading' src='/images/loader.gif' alt='loading...' />"), $(".contentItems").load("/item/sticker", {
        t: e,
        o: a,
        d: n,
        m: s,
        i: i,
        l: o
    }, function (t, e) {
        "success" == e ? ($(".Information").hide(), $(".contentMain").hide(), $(".contentItems").show()) : "error" == e && ($(".contentMain").html("<b>There was an error. Try again your search</b>"), $(".contentItems").show(), $(".btnAction").one("click", searchSticker))
    })
}
function searchSimple() {
    var t = $("#selSimple option:selected").val(), e = $("#selKind option:selected").val(), a = $("#selCategoryV option:selected").val(), n = $("#selOrderV option:selected").val(), s = $("#chkUniqueV").is(":checked") ? 1 : 0, i = $("#chkUnknownV").is(":checked") ? 1 : 0, o = $("#max_idV").val(), r = $("#min_idV").val(), c = $("#selStickerV1").val().toLowerCase(), l = $("#ListStickers option").filter(function () {
        return this.value.toLowerCase() == c
    }).data("value");
    c = $("#selStickerV2").val().toLowerCase();
    var d = $("#ListStickers option").filter(function () {
        return this.value.toLowerCase() == c
    }).data("value");
    c = $("#selStickerV3").val().toLowerCase();
    var m = $("#ListStickers option").filter(function () {
        return this.value.toLowerCase() == c
    }).data("value");
    c = $("#selStickerV4").val().toLowerCase();
    var h = $("#ListStickers option").filter(function () {
        return this.value.toLowerCase() == c
    }).data("value");
    c = $("#selStickerV5").val().toLowerCase();
    var u = $("#ListStickers option").filter(function () {
        return this.value.toLowerCase() == c
    }).data("value");
    $("body").off("click", "ul.tabs li"), $("ul.tabs li").css("cursor", "default"), $(".contentItems").hide(), $(".contentMain").html("<img class='loading' src='/images/loader.gif' alt='loading...' />"), $(".contentItems").load("/item/simple", {
        w: t,
        k: e,
        c: a,
        o: n,
        d: s,
        m: i,
        i: o,
        l: r,
        t: l,
        t2: d,
        t3: m,
        t4: h,
        t5: u
    }, function (t, e) {
        "success" == e ? ($(".Information").hide(), $(".contentMain").hide(), $(".contentItems").show()) : "error" == e && ($(".contentMain").html("<b>There was an error. Try again your search</b>"), $(".contentItems").show(), $(".btnAction").one("click", searchSimple))
    })
}
function searchGraffiti() {
    var t = $("#selKindG option:selected").val(), e = $("#selGraffiti option:selected").val(), a = $("#selTint option:selected").val(), n = $("#selOrderS option:selected").val(), s = $("#chkUniqueS").is(":checked") ? 1 : 0, i = $("#chkUnknownS").is(":checked") ? 1 : 0, o = $("#max_idS").val(), r = $("#min_idS").val();
    $("body").off("click", "ul.tabs li"), $("ul.tabs li").css("cursor", "default"), $(".contentItems").hide(), $(".contentMain").html("<img class='loading' src='/images/loader.gif' alt='loading...' />"), $(".contentItems").load("/item/spray", {
        g: t,
        s: e,
        t: a,
        o: n,
        d: s,
        m: i,
        i: o,
        l: r
    }, function (t, e) {
        "success" == e ? ($(".Information").hide(), $(".contentMain").hide(), $(".contentItems").show()) : "error" == e && ($(".contentMain").html("<b>There was an error. Try again your search</b>"), $(".contentItems").show(), $(".btnAction").one("click", searchGraffiti))
    })
}
function usersTop(t) {
    param = "undefined" != typeof param ? param : "", $(".contentTop").html("<img class='loading' src='/images/loader.gif' alt='loading...' />"), $.getJSON("/" + t + "/", function (t) {
        $(".contentTop").empty(), "undefined" != typeof t.u ? $.each(t.u, function (t, e) {
                i = 0, textToInsert = [], "undefined" != typeof e.l ? c = e.l : c = "", "undefined" != typeof e.i ? s = e.i : s = t, textToInsert[i++] = "<div class='miniRank'><div>", textToInsert[i++] = "<div class='color" + c + "'>" + e.n + "</div>", textToInsert[i++] = "<div><a href='/id/" + t + "' title='Inventory'>" + s + "</a></div>", textToInsert[i++] = "</div><a href='http://steamcommunity.com/profiles/" + t + "'  title='Profile' target='_blank'>", textToInsert[i++] = "<img class='border" + c + "' src='" + e.a + "'></a>", textToInsert[i++] = "<img class='imgRankmini' src='/images/ranks/" + e.r + ".png' title='" + e.t + "'>", "undefined" != typeof e.d && (textToInsert[i++] = "<div>" + e.d + "</div>"), textToInsert[i++] = "</div>", $(".contentTop").append(textToInsert.join(""))
            }) : "undefined" != typeof t.e && $(".contentTop").append("<h4 class='msgResponse'>" + t.e + "</h4>")
    })
}
function startPattern(t) {
    if ($(".patternInv").length) $(".patternInv").clone().appendTo(".patternInspect"); else {
        var e = $('[data-orig="' + t + '"]');
        $('<div><a href="' + e.data("inspect") + '" target="_blank">View in Game</a></div>').appendTo(".patternInspect")
    }
    $("#btnPattern").one("click", function () {
        savePattern(t)
    })
}
function savePattern(t) {
    var e = $(".selPattern").val();
    $("#btnPattern").text("Saving..."), $.getJSON("/pattern/vote/" + t + "/" + e, function (t) {
        1 == t.status ? alert("You already vote for this pattern of item") : 2 == t.status && alert("Thank you for your vote"), $(".patternInv").length ? location.reload() : cWidw(!1)
    })
}
function votePattern() {
    var t = $(this).closest("tr").attr("id");
    console.log(t);
    var e = $("#" + t).find(".selPatt").val();
    console.log(e), e >= 0 ? ($(this).val("Saving..."), $.getJSON("/pattern/vote/" + t + "/" + e, function (e) {
            1 == e.status ? alert("You already vote for this pattern of item") : 2 == e.status && alert("Thank you for your vote"), $("#" + t).hide(100)
        })) : (alert("Select the pattern for this item"), $(this).one("click", votePattern))
}
function showCollection() {
    var t = $(".weaponCollection").attr("id"), e = $("input[name=col_category]:checked").val(), a = $("input[name=col_exterior]:checked").val();
    loadPage(".weaponCollection", "collection/view/" + t, "show/" + e + "/" + a);
    var n = "";
    1 == e ? n = "normal" : 2 == e ? n = "strange" : 3 == e && (n = "tournament");
    var s = $(".btnLink").attr("id");
    $(".btnLink").attr("href", "http://steamcommunity.com/market/search?appid=730&q=&category_730_ItemSet%5B%5D=" + s + "&category_730_Quality[]=tag_" + n + "&category_730_Exterior[]=tag_WearCategory" + a)
}
function parseInspect() {
    var t = $(".txtInspect").val(), e = /steam:\/\/rungame\/730\/\d*?\/\+csgo_econ_action_preview( |%20)(M|S)(\d*)[A](\d*)[D](\d*)/gm;
    null !== (m = e.exec(t)) ? null != m[2] && null != m[3] && null != m[4] && null != m[5] ? ($("#MarketFloatValue").html("<img class='loading' src='/images/loader.gif' alt='loading...' />"), $("#MarketFloatValue").load("/item/float", {
                s: m[2],
                a: m[4],
                m: m[3],
                d: m[5]
            }, function () {
                $(".btnCheck").one("click", parseInspect), $(".txtInspect").select()
            })) : (alert("Incorrect Inspect Link"), $(".btnCheck").one("click", parseInspect), $(".txtInspect").select()) : (alert("Empty/Incorrect Inspect Link"), $(".btnCheck").one("click", parseInspect), $(".txtInspect").select())
}
var tidT;
$(document).ready(function () {
    $("#bg-widw").on("click", function () {
        cWidw(!1)
    }), $("body").on("click", ".widw-close", function () {
        cWidw(!1)
    }), $("#bg-msg").on("click", function () {
        cMsg(!1)
    }), $("body").on("click", ".msg-close", function () {
        cMsg(!1)
    }), $("body").on("click", ".mm", function () {
        var t = $(this).attr("href").replace("#", "") + "/";
        $("#widw").load("/" + t, function (t, e) {
            "success" == e && cWidw(!0)
        })
    }), $("body").on("click", ".expand", function () {
        $(".pinfo").hide("slow"), val = $(this).attr("alt"), $("#" + val).show("slow")
    }), $("body").on("click", ".n_close", function () {
        val = $(this).attr("id"), $("#n" + val).hide("slow"), $.post("dismiss", {m: val})
    }), $("body").on("click", ".pickItem", function () {
        $(this).toggleClass("selected"), sitems = $(".selected").map(function () {
            return $(this).hasClass("selected") ? 1 : void 0
        }), $("#selItem").text("Selected " + sitems.length + " Item(s)")
    }), $("body").on("click", ".contentMain input[type='checkbox']", function () {
        filterItems()
    }), $("body").on("keyup", ".name_search", function () {
        filterItems()
    }), $("body").on("change", ".selCollection, .selBets", function () {
        filterItems()
    }), $("body").on("change", ".selSort", function () {
        sortItems(this.value)
    }), $("body").on("click", ".btnFilter", function () {
        $(this).toggleClass("show"), $(this).hasClass("show") ? ($(this).text("Hide Filters"), $(".filters").css("display", "inline-block")) : ($(this).text("Show Filters"), $(".filters").hide())
    }), $("body").on("click", ".contentItems .vItem:not(.xItem)", function () {
        if ($(this).toggleClass("selected"), $(".amountDonation").length) {
            total = 0, sitems = $(".selected").map(function () {
                return $(this).data("market")
            });
            for (var t = 0; t < sitems.length; t++)total += parseFloat(sitems[t]);
            total = Math.round(100 * total) / 100, $(".amountDonation").text(total)
        }
    }), $("body").on("click", ".sColl", function () {
        $("#widw").load("/collection/view/" + $(this).attr("data-idcollection"), function (t, e) {
            "success" == e && cWidw(!0)
        })
    }), $("body").on("click", ".xItem", function () {
        $("#widw").load("/market/schema/" + $(this).attr("data-defindex"), function (t, e) {
            "success" == e && cWidw(!0)
        })
    });
    var t = 0;
    $("body").on("mouseenter", ".vItem, .ItemData, .sItem", function () {
        t++;
        var e = 60, a = 0, n = 1;
        if ($(this).hasClass("vItem") || $(this).hasClass("sItem")) {
            if ($(".ItemData").css({"z-index": "0"}), "" != $(this).data("custom") ? $(".ItemData h3").text(urldecode($(this).data("custom"))) : $(".ItemData h3").text(capFL(urldecode($(this).data("name")))), "undefined" != typeof $(this).data("exterior") ? ($(".ItemData div:first").removeClass(), $(".ItemData div:first").addClass($(this).data("quality")), $(".ItemData div:first").text($(this).data("quality")), $(".ItemData div:first").show()) : $(".ItemData div:first").hide(), $(this).attr("data-rawext") < 2) {
                if ("undefined" != typeof $(this).data("exterior") && "" != $(this).data("exterior") ? ($(".ItemData u").text("Exterior: " + $(this).data("exterior")), $(".ItemData u").show(), e += 20) : $(".ItemData u").hide(), "undefined" != typeof $(this).data("collection")) {
                    $(".ItemData .exterior").css({"float": "right"}), $(".ItemData .exterior").css({"margin-right": "10px"}), $(".ItemData img.sColl").attr("data-idcollection", $(this).data("idcollection"));
                    var s = "/images/collection/" + $(this).data("collection").replace(/\s+/g, "") + ".png";
                    $(".ItemData img.sColl").attr("src", s.toLowerCase()), $(".ItemData img.sColl").attr("title", $(this).data("collection")), $(".ItemData img.sColl").show(), e += 15
                } else $(".ItemData img.sColl").hide(), $(".ItemData .exterior").css({"float": "none"}), $(".ItemData .exterior").css({"margin-right": "0"});
                if ($(this).attr("data-rawext") > 0) {
                    var i = parseFloat($(this).attr("data-rawext")).toFixed(8);
                    $(".ItemData .target-label-text").text(i), $(".ItemData .target-label-text").show();
                    var o = porcExterior(i);
                    $(".ItemData .target").width(Math.round(o) + "%"), $(".ItemData .target").show(), e += 10
                } else $(".ItemData .target").hide(), $(".ItemData .target-label-text").hide(), $(".ItemData").css({"z-index": "8"});
                if ("undefined" != typeof $(this).data("minwear")) {
                    $(".ItemData div.bullet-graph").show(), a = parseFloat($(this).attr("data-minwear")).toFixed(2), $(".value-min .tick-label-text").text("MIN " + a);
                    var o = porcExterior(a);
                    $(".min-wear").width(Math.round(o) + "%"), $(".value-min").css("left", Math.round(o) + "%"), n = parseFloat($(this).attr("data-maxwear")).toFixed(2), $(".value-max .tick-label-text").text("MAX " + n);
                    var o = porcExterior(n);
                    $(".max-wear").width(Math.round(o) + "%"), $(".value-max").css("left", Math.round(o) + "%"), e += 40
                } else $(".ItemData div.bullet-graph").hide()
            } else $(".ItemData .target-label-text").hide(), $(".ItemData u").hide(), $(".ItemData div.bullet-graph").hide(), $(".ItemData a.vid").hide(), $(".ItemData img").hide();
            if ("undefined" != typeof $(this).data("image") && "" != $(this).data("image") ? ($(".ItemData img.imageItem").attr("src", $(this).data("image")), $(".ItemData img.imageItem").show(), e += 120) : $(".ItemData img.imageItem").hide(), "undefined" != typeof $(this).data("id")) {
                var r = "i";
                $(this).attr("data-rawext") <= 2 ? "undefined" != typeof $(this).data("container") ? r = "c" : "Sticker " == $(this).data("type") && (r = "s") : r = "Music " == $(this).data("type") ? "m" : "Graffiti " == $(this).data("type") ? "g" : "v", $(".ItemData a.vid").text("Item Showcase"), $(".ItemData a.vid").attr("href", "#view/" + $(this).data("id") + "/" + r), $(".ItemData a.vid").show(), e += 10, "" != $(this).data("profile") ? ($(".ItemData a.inprofile").attr("href", "http://steamcommunity.com/profiles/" + $(this).data("profile") + "/inventory#730_2_" + $(this).data("id")), $(".ItemData a.inprofile").attr("target", "_blank"), $(".ItemData a.inprofile").show(), e += 15, "" != $(this).data("inspect") ? ($(".ItemData a.ingame").attr("href", "steam://rungame/730/76561202255233023/+csgo_econ_action_preview%20S" + $(this).data("profile") + "A" + $(this).data("id") + "D" + $(this).data("inspect")), $(".ItemData a.ingame").show(), e += 15, "undefined" == typeof $(this).data("orig") && 2 == $(this).attr("data-rawext") && "" != $(this).data("weapon") && "Stock " != $(this).data("type") ? ($(".ItemData a.getFloat").attr("href", "#item/market/" + $(this).data("profile") + "/" + $(this).data("id") + "/" + $(this).data("inspect")), $(".ItemData a.getFloat").show(), e += 15) : $(".ItemData a.getFloat").hide()) : ($(".ItemData a.ingame").hide(), $(".ItemData a.getFloat").hide())) : ($(".ItemData a.inprofile").hide(), $(".ItemData a.ingame").hide(), $(".ItemData a.getFloat").hide());
            } else $(".ItemData a.vid").hide(), $(".ItemData a.inprofile").hide(), $(".ItemData a.ingame").hide(), $(".ItemData a.getFloat").hide();
            if ("undefined" != typeof $(this).data("hashname") && "" != $(this).data("hashname") ? ($(".ItemData a.scm").attr("href", "http://steamcommunity.com/market/listings/730/" + $(this).data("hashname")), $(".ItemData a.scm").show(), e += 20, $(".ItemData a.bts").attr("href", "http://bskn.co/?ref_alias=csgoexchange&market_hash_name=" + $(this).data("hashname")), $(".ItemData a.bts").show(), e += 20) : ($(".ItemData a.scm").hide(), $(".ItemData a.bts").hide()), "undefined" != typeof $(this).data("scmcase") ? ("" != $(this).data("scmcase") ? ($(".ItemData a.scm_case").attr("href", "http://steamcommunity.com/market/listings/730/" + $(this).data("scmcase")), $(".ItemData a.scm_case").show()) : $(".ItemData a.scm_case").hide(), "" != $(this).data("scmcollection") ? ($(".ItemData a.scm_weps").attr("href", "http://steamcommunity.com/market/search?appid=730&q=&category_730_ItemSet%5B%5D=" + $(this).data("scmcollection")), $(".ItemData a.scm_weps").show(), e += 20) : $(".ItemData a.scm_weps").hide()) : ($(".ItemData a.scm_case").hide(), $(".ItemData a.scm_weps").hide()), "undefined" != typeof $(this).data("search"))if ("" != $(this).data("search")) {
                var c = "";
                "undefined" != typeof $(this).data("container") ? c = "http://csgo.exchange/item/search?package=true&container=" + $(this).data("search") : "Sticker " == $(this).data("type") ? c = "http://csgo.exchange/item/search?stickers=true&sticker=" + $(this).data("search") : "Graffiti " == $(this).data("type") ? c = "http://csgo.exchange/item/search?graffiti=" + $(this).data("search") : 3 == $(this).attr("data-rawext") ? c = "http://csgo.exchange/item/search?simple=Search&item=" + $(this).data("search") + "&category=" + $(this).data("category") : ("Battle-Scarred" == $(this).data("exterior") ? (temp_maxw = 1, temp_minw = .45) : "Well-Worn" == $(this).data("exterior") ? (temp_maxw = .45, temp_minw = .38) : "Field-Tested" == $(this).data("exterior") ? (temp_maxw = .38, temp_minw = .15) : "Minimal Wear" == $(this).data("exterior") ? (temp_maxw = .15, temp_minw = .07) : "Factory New" == $(this).data("exterior") ? (temp_maxw = .07, temp_minw = 0) : "Vanilla" == $(this).data("exterior") && (temp_maxw = n, temp_minw = a), a > temp_minw && (temp_minw = a), n < temp_maxw && (temp_maxw = n), c = "http://csgo.exchange/item/search?weapon=" + $(this).data("search") + "&category=" + $(this).data("category") + "&maxwear=" + temp_maxw + "&minwear=" + temp_minw), "" != c && ($(".ItemData a.opt_search").attr("href", c), $(".ItemData a.opt_search").show(), e += 20)
            } else $(".ItemData a.opt_search").hide(); else $(".ItemData a.opt_search").hide();
            "undefined" != typeof $(this).data("descsouv") ? ($(".ItemData .dsouv").show(), $(".ItemData .dsouv").text($(this).data("descsouv")), e += 50) : $(".ItemData .dsouv").hide(), $(".ItemData ul").hide();
            var l = $(this).offset().left, d = $(this).offset().top - $(window).scrollTop();
            $(this).hasClass("sItem") ? (l = $(this).offset().left + $(this).outerWidth(), d -= 130) : $(window).width() > 500 ? $(window).width() - l > 250 ? l += 120 : l -= 160 : $(window).width() - l > 200 ? l += 50 : l -= $(window).width() - l > 100 ? 100 : 50, $(".ItemData").css({
                top: d + "px",
                left: l + "px",
                height: e + "px"
            }).hide().show(0)
        }
    }).on("mouseleave", ".vItem, .ItemData, .sItem", function () {
        t--, setTimeout(function () {
            t || $(".ItemData").hide()
        }, 50)
    }), $("body").on("submit", "#checkInventory", !1), $(".itemSort").one("click", prepSort), $("body").one("click", "#btnBTC", function () {
        cryptokey()
    }), $("body").on("change", "#donateUsd", function () {
        var t = $(this).val(), e = $(this).data("btc");
        calcBtc(t, e)
    }), $("body").on("mouseenter", ".txtToken", function () {
        var t = $(this).position(), e = $(this).outerWidth();
        $(".imgToken").css({top: t.top + "px", left: t.left + (e - 120) + "px"}).show()
    }).on("mouseleave", ".txtToken", function () {
        $(".imgToken").hide()
    }), $("body").on("click", "#btnSetSettings", userSettings), $("body").on("change", "#selWeapon", updateSkins), $("body").on("change", "#selSkin", setWear), $("body").on("change", "#selPattern", updatePattern), $("body").on("change", "#selKind", updateSimple), $("body").on("click", "ul.tabs li", function () {
        var t = $(this).attr("data-tab");
        $("ul.tabs li").removeClass("current"), $(".tab-content").removeClass("current"), $(this).addClass("current"), $("#" + t).addClass("current"), $(".btnAction").off(), "tab-weapon" == t ? $(".btnAction").one("click", searchWeapon) : "tab-package" == t ? $(".btnAction").one("click", searchPackage) : "tab-sticker" == t ? $(".btnAction").one("click", searchSticker) : "tab-simple" == t ? $(".btnAction").one("click", searchSimple) : "tab-graffiti" == t && $(".btnAction").one("click", searchGraffiti)
    }), $("body").on("change", "#selHistory", function () {
        var t = $(this).data("user"), e = $(this).val();
        e && window.open("http://csgo.exchange/id/" + t + "/history/" + e + "/", "_blank")
    }), $("body").on("click", ".relCollection input[type='radio']", function () {
        showCollection()
    }), $("body").on("click", ".buyItem", function () {
        var t = $(this).data("id"), e = $(this).data("price"), a = $(this).data("confirm");
        $("#msg").load("/market/buy", {i: t, p: e, c: a}, function (t, e) {
            "success" == e && cMsg(!0)
        })
    })
});
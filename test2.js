/**
 * Created by Arthur on 2017/3/28.
 */
function rgb2hex(t) {
	return t = t.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/), "#" + hex(t[1]) + hex(t[2]) + hex(t[3])
}
function hex(t) {
	return isNaN(t) ? "00" : hexDigits[(t - t % 16) / 16] + hexDigits[t % 16]
}
function previewTrade() {
	$(".name_search").length ? $("#widw").load("/reddit/prepare", function (t, e) {
			"success" == e && cWidw(!0)
		}) : alert("You inventory need be load for continue")
}
function sendTrade() {
	if (title = $("input[name='tReddit']").val(), content = "", title.length < 20)return void alert("Title too short");
	if (title.length > 300)return void alert("Title too big");
	if (title.indexOf("[H]") > -1) {
		if (!(title.indexOf("[W]") > -1))return void alert("You need a tag [W] on your title");
		var t = title.split("[W]");
		if (!t[1] || null !== t[1].match(/^ *$/))return void alert("You need set a Buyout of your item after tag [W]")
	}
	var e = $("textarea[name='bfiReddit']").val();
	e.length > 0 && (content += e + "\n****\n"), content += getCode(1, 1);
	var a = $("textarea[name='afiReddit']").val();
	if (a.length > 0 && (content += "\n****\n" + a), content.length > 4e4)return void alert("Too much content: Remove items, columns or text.");
	var i = 0;
	$("#showTL").is(":checked") && (i = 1), $("#actionReddit").html("<img class='loading' src='/images/loader.gif' alt='loading...' />"), $("#actionReddit").load("/reddit/trade", {
		t: title,
		c: content,
		l: i
	}, function (t, e) {
		"success" == e && cWidw(!0)
	})
}
function captchaTrade() {
	var t = $("input[name='cReddit']").val();
	if (t.length < 5)return void alert("Capture the captcha correct");
	var e = 0;
	$("#showTL").is(":checked") && (e = 1), $("#actionReddit").html("<img class='loading' src='/images/loader.gif' alt='loading...' />"), $("#actionReddit").load("/reddit/trade", {
		t: title,
		c: content,
		l: e,
		p: t
	}, function (t, e) {
		"success" == e && cWidw(!0)
	})
}
function getCode(t, e) {
	t = "undefined" != typeof t ? t : $(".selFormat").val(), e = "undefined" != typeof e;
	var a = "", i = {}, n = {}, c = {}, o = {}, l = 0, d = "", s = 2.5, r = 100, h = "Keys", p = 0;
	2 == $(".selCCy").val() && (s = 1, h = "USD"), r = parseInt($(".selCPc").val()) / 100;
	var u = "", m = [], g = [], v = [], k = [], C = [], f = "";
	$(".contentMain input[type=checkbox]:checked").each(function () {
		"quality" == $(this).attr("name") ? m.push("[data-" + $(this).attr("name") + '*="' + $(this).val() + '"]') : "exterior" == $(this).attr("name") ? g.push("[data-" + $(this).attr("name") + '*="' + $(this).val() + '"]') : "category" == $(this).attr("name") ? v.push("[data-" + $(this).attr("name") + '*="' + $(this).val() + '"]') : "type" == $(this).attr("name") ? k.push("[data-" + $(this).attr("name") + '*="' + $(this).val() + '"]') : "weapon" == $(this).attr("name") ? C.push("[data-" + $(this).attr("name") + '*="' + $(this).val() + '"]') : "picked" == $(this).attr("name") && (f = ".selected")
	});
	var y = [], b = $(".name_search").val().toLowerCase();
	"" != b && (b = '[data-name*="' + encodeURIComponent(b).replace(/'/g, "%27").replace(/\(/g, "%28").replace(/\)/g, "%29") + '"]');
	var w = "";
	$(".selCollection").length > 0 && (w = $(".selCollection").val(), w = "All" != w ? '[data-collection*="' + w + '"]' : "");
	var x = "";
	$(".selBets").length > 0 && (x = $(".selBets").val(), x = "Bettable" == x ? '[data-bet*="."]' : "Max Bet" == x ? '[data-bet="75.00"]' : "Overbet" == x ? '[data-betprofit="1"]' : "Unavailable" == x ? '[data-bet="0"]' : "");
	var I = 0;
	do {
		var T = "", S = "", B = "", F = "", R = "";
		m.length > I && (T = m[I]);
		var U = 0;
		do {
			g.length > U && (S = g[U]);
			var q = 0;
			do {
				v.length > q && (B = v[q]);
				var W = 0;
				do {
					k.length > W && (F = k[W]);
					var O = 0;
					do C.length > O && (R = C[O]), "" == T && "" == S && "" == B && "" == F && "" == b && "" == R && "" == f && "" == w && "" == x || y.push(T + S + B + F + R + b + f + w + x), O++; while (O < C.length);
					W++
				} while (W < k.length);
				q++
			} while (q < v.length);
			U++
		} while (U < g.length);
		I++
	} while (I < m.length);
	if (y.length > 0 ? u = y.join() : $(".vItem").length && (u = $(".vItem")), u) {
		var M = "";
		1 == t ? ($("input#chkColQty").is(":checked") && (M += " Qty "), $("input#chkColItem").is(":checked") && (M.length > 0 && (M += "|"), M += " Item ", $("input#chkColInspect").length ? $("input#chkColInspect").is(":checked") && (M += "(Inspect) ") : M += "(Inspect) "), $("input#chkColExt").is(":checked") && (M.length > 0 && (M += "|"), M += " Exterior (Check) "), $("input#chkColStk").is(":checked") && (M.length > 0 && (M += "|"), M += " Stickers (Market) "), $("input#colCustomOne").length && (M.length > 0 && (M += "|"), M += $("input#colCustomOne").val()), $("input#colCustomTwo").length && (M.length > 0 && (M += "|"), M += $("input#colCustomTwo").val()), $("input#colCustomThree").length && (M.length > 0 && (M += "|"), M += $("input#colCustomThree").val()), $("input#chkColBets").length && $("input#chkColBets").is(":checked") && (M.length > 0 && (M += "|"), M += " CSGL Bet Value (USD) "), $("input#chkColBO").is(":checked") && (M.length > 0 && (M += "|"), M += " Buyout (" + h + ") "), M.length > 0 && (M += e ? "|\n" : "|<br/>"), $("input#chkColQty").is(":checked") && (M += ":-:"), $("input#chkColItem").is(":checked") && (M.length > 0 && (M += "|"), M += "-"), $("input#chkColExt").is(":checked") && (M.length > 0 && (M += "|"), M += "-"), $("input#chkColStk").is(":checked") && (M.length > 0 && (M += "|"), M += "-"), $("input#colCustomOne").length && (M.length > 0 && (M += "|"), M += "-"), $("input#colCustomTwo").length && (M.length > 0 && (M += "|"), M += "-"), $("input#colCustomThree").length && (M.length > 0 && (M += "|"), M += "-"), $("input#chkColBets").length && $("input#chkColBets").is(":checked") && (M.length > 0 && (M += "|"), M += "-"), $("input#chkColBO").is(":checked") && (M.length > 0 && (M += "|"), M += ":-:"), M.length > 0 && (M += "|")) : 2 == t ? M += "[list]" : 4 == t && (M += "<table class='reddit'><thead><tr>", $("input#chkColQty").is(":checked") && (M += "<th>Qty</th>"), $("input#chkColItem").is(":checked") && (M += "<th>Item ", $("input#chkColInspect").is(":checked") && (M += "(Inspect)"), M += "</th>"), $("input#chkColExt").is(":checked") && (M += "<th>Exterior (Check)</th>"), $("input#chkColStk").is(":checked") && (M += "<th>Stickers (Market)</th>"), $("input#chkColCustom1").is(":checked") && (M += '<th><input id="colCustomOne" type="text" placeholder="Custom" size="10"></th>'), $("input#chkColCustom2").is(":checked") && (M += '<th><input id="colCustomTwo" type="text" placeholder="Custom" size="10"></th>'), $("input#chkColCustom3").is(":checked") && (M += '<th><input id="colCustomThree" type="text" placeholder="Custom" size="10"></th>'), $("input#chkColBets").is(":checked") && (M += "<th>CSGL Bet Value (USD)</th>"), $("input#chkColBO").is(":checked") && (M += "<th>Buyout (" + h + ")</th>"), M += "</tr></thead><tbody>"), M += $(u).map(function () {
			var h = this;
			if ($(h).data("hashname")) {
				var u = decodeURIComponent($(h).data("hashname"));
				if (!($(h).data("inspect") && $(h).data("rawext") <= 1))return "undefined" != typeof i[u] ? i[u]++ : (c[u] = rgb2hex($(".infoItem", h).css("background-color")), i[u] = parseInt(1), $(h).data("bet") > 0 && (o[u] = $(h).data("bet")), p = ($(h).data("market") / s * r).toFixed(2), 1 == $(".selCRd").val() ? p = Math.ceil(p) : 2 == $(".selCRd").val() && (p = Math.floor(p)), n[u] = p), "";
				if (a = "", 4 == t && (a += "<tr>"), $("input#chkColQty").is(":checked") && (1 == t ? a += "1" : 2 == t ? a += "[i]1 x[/i] " : 3 == t ? a += "1 x " : 4 == t && (a += "<td>1</td>")), $("input#chkColItem").is(":checked"))if (1 == t) a.length > 0 && (a += "|"), a += $("input#chkColInspect").length ? $("input#chkColInspect").is(":checked") ? "[-" + u.replace(/\|/g, "~") + "-](" + $(h).data("inspect") + ")" : "-" + u.replace(/\|/g, "~") + "-" : "[-" + u.replace(/\|/g, "~") + "-](" + $(h).data("inspect") + ")"; else if (2 == t) {
					var m = "";
					"Souvenir" == $(h).data("category") && (u = u.replace("Souvenir ", ""), m += "[color=#FFD700]Souvenir[/color] "), u.search(/\u2605/) >= 0 && (u = u.replace("? ", ""), m += "[color=#8650AC]?[/color] "), u.search("StatTrakô") >= 0 && (u = u.replace("StatTrakô ", ""), m += "[color=#CF6A32]StatTrakô[/color] "), a += "[b]" + m + "[color=" + rgb2hex($(".infoItem", h).css("background-color")) + "]" + u + "[/color][/b] "
				} else 3 == t ? a += u + " " : 4 == t && (a += $("input#chkColInspect").is(":checked") ? '<td><a href="' + $(h).data("inspect") + '" target="_blank">' + u.replace(/\|/g, "~") + "</a></td>" : "<td>" + u.replace(/\|/g, "~") + "</td>", d = u);
				if ($("input#chkColExt").is(":checked") && (1 == t ? (a.length > 0 && (a += "|"), a += "[" + parseFloat($(h).data("rawext")) + "](http://csgo.exchange/item/" + $(h).data("id") + ")") : 2 == t ? a += "[url=http://csgo.exchange/item/" + $(h).data("id") + "][FV: " + parseFloat($(h).data("rawext")) + "][/url] " : 3 == t ? a += "[FV: " + parseFloat($(h).data("rawext")) + "] " : 4 == t && (a += '<td><a href="http://csgo.exchange/item/' + $(h).data("id") + '" target="_blank">' + parseFloat($(h).data("rawext")) + "</a></td>")), 2 == t && (p = ($(h).data("market") / s * r).toFixed(2), 1 == $(".selCRd").val() ? p = Math.ceil(p) : 2 == $(".selCRd").val() && (p = Math.floor(p)), $("input#chkColBO").is(":checked") && (a += " = [b]" + p + "[/b] ")), $("input#chkColStk").is(":checked") && (1 == t ? a.length > 0 && (a += "|") : 4 == t && (a += "<td>"), $(".stickers", h).length && (2 == t ? a += "[i]Stickers:[list]" : 3 == t && (a += "*Stickers:"), $(".imgSticker", h).each(function () {
						var e = $(this).attr("title"), i = "http://steamcommunity.com/market/listings/730/" + e.replace("(", "%28").replace(")", "%29").replace(/\|/g, "%7C");
						1 == t ? a += " <> [" + e.replace(/\|/g, "~") + "](" + i + ")" : 2 == t ? a += "[*]" + e : 3 == t ? a += " ~ " + e : 4 == t && (a += ' <> <a href="' + i + '" target="_blank">' + e.replace(/\|/g, "~") + "</a>")
					}), 2 == t && a.length > 0 && (a += "[/list][/i]")), 4 == t && (a += "</td>")), 1 == t ? ($("input#c" + l).length && (a.length > 0 && (a += "|"), a += $("input#c" + l).val()), $("input#cc" + l).length && (a.length > 0 && (a += "|"), a += $("input#cc" + l).val()), $("input#ccc" + l).length && (a.length > 0 && (a += "|"), a += $("input#ccc" + l).val()), $("input#chkColBets").length && $("input#chkColBets").is(":checked") && (a.length > 0 && (a += "|"), $(h).data("bet") > 0 && (a += $(h).data("bet")))) : 4 == t && ($("input#chkColCustom1").is(":checked") && (a += '<td><input id="c' + l + '" type="text" size="10"></td>'), $("input#chkColCustom2").is(":checked") && (a += '<td><input id="cc' + l + '" type="text" size="10"></td>'), $("input#chkColCustom3").is(":checked") && (a += '<td><input id="ccc' + l + '" type="text" size="10"></td>'), $("input#chkColBets").is(":checked") && (a += $(h).data("bet") > 0 ? "<td>" + $(h).data("bet") + "</td>" : "<td></td>")), $("input#chkColBO").is(":checked") && (p = ($(h).data("market") / s * r).toFixed(2), 1 == $(".selCRd").val() ? p = Math.ceil(p) : 2 == $(".selCRd").val() && (p = Math.floor(p)), 1 == t ? (a.length > 0 && (a += "|"), a += $("input#v" + l).length ? $("input#v" + l).val() : p) : 3 == t ? a += " = " + p : 4 == t && (a += '<td><input id="v' + l + '" type="text" value="' + p + '" size="5"></td>')), l++, !a)return "";
				if (1 == t)return e ? "\n" + a + " |" : "<br/>" + a + " |";
				if (2 == t)return "<br/>[*]" + a;
				if (3 == t)return "<br/>" + a;
				if (4 == t)return a + "</tr>"
			}
		}).get().join("");
		for (var Q in i)i.hasOwnProperty(Q) && (a = "", 4 == t && (a += "<tr>"), $("input#chkColQty").is(":checked") && (1 == t ? a += i[Q] : 2 == t ? a += "[i]" + i[Q] + " x[/i] " : 3 == t ? a += i[Q] + " x " : 4 == t && (a += "<td>" + i[Q] + "</td>")), $("input#chkColItem").is(":checked") && (1 == t ? (a.length > 0 && (a += "|"), a += "-" + Q.replace(/\|/g, "~") + "-") : 2 == t ? a += "[b][color=" + c[Q] + "]" + Q + "[/color][/b] " : 3 == t ? a += Q + " " : 4 == t && (a += "<td>" + Q.replace(/\|/g, "~") + "</td>", d = Q)), 1 == t ? ($("input#chkColExt").is(":checked") && a.length > 0 && (a += "|"), $("input#chkColStk").is(":checked") && a.length > 0 && (a += "|"), $("input#c" + l).length && (a.length > 0 && (a += "|"), a += $("input#c" + l).val()), $("input#cc" + l).length && (a.length > 0 && (a += "|"), a += $("input#cc" + l).val()), $("input#ccc" + l).length && (a.length > 0 && (a += "|"), a += $("input#ccc" + l).val()), $("input#chkColBets").length && $("input#chkColBets").is(":checked") && (a.length > 0 && (a += "|"), "undefined" != typeof o[Q] && (a += o[Q]))) : 4 == t && ($("input#chkColExt").is(":checked") && (a += "<td></td>"), $("input#chkColStk").is(":checked") && (a += "<td></td>"), $("input#chkColCustom1").is(":checked") && (a += '<td><input id="c' + l + '" type="text" size="10"></td>'), $("input#chkColCustom2").is(":checked") && (a += '<td><input id="cc' + l + '" type="text" size="10"></td>'), $("input#chkColCustom3").is(":checked") && (a += '<td><input id="ccc' + l + '" type="text" size="10"></td>'), $("input#chkColBets").is(":checked") && (a += "undefined" != typeof o[Q] ? "<td>" + o[Q] + "</td>" : "<td></td>")), $("input#chkColBO").is(":checked") && (1 == t ? (a.length > 0 && (a += "|"), $("input#v" + l).length ? a += $("input#v" + l).val() : "undefined" != typeof n[Q] && (a += n[Q])) : 2 == t ? a += " = [b]" + n[Q] + "[/b]" : 3 == t ? a += " = " + n[Q] : 4 == t && "undefined" != typeof n[Q] && (a += '<td><input id="v' + l + '" type="text" value="' + n[Q] + '" size="5"></td>')), l++, a && (1 == t ? M += e ? "\n" + a + " |" : "<br/>" + a + " |" : 2 == t ? M += "<br/>[*]" + a : 3 == t && (M += "<br/>" + a)), 4 == t && (M += a + "</tr>"));
		if (2 == t && (M += "[/list]"), 4 == t && (M += "</tbody></table>", l > 4 ? $("input[name='tReddit']").val("[Store] ") : l > 1 ? $("input[name='tReddit']").val("[H] [W] ") : l > 0 && $("input[name='tReddit']").val("[H] " + d + " [W] ")), e)return M;
		$(".txtCode").html(M)
	}
}
function doTradeUp() {
	var t = [], e = [], a = 0, i = 0, n = 0, c = 0, o = 0;
	$(".selected").map(function () {
		if (1 == $(this).data("bestquality") || 2 == $(this).data("bestquality") || 4 == $(this).data("bestquality") || 6 == $(this).data("bestquality") || 8 == $(this).data("bestquality")) {
			if (t.push($(this).data("name")), $("input#float" + o).val() && $("input#float" + o).is(":visible")) {
				var l = $("input#float" + o).val();
				isNaN(l) ? l = parseFloat($(this).data("maxwear")) - 1e-8 : l >= $(this).data("maxwear") ? l = parseFloat($(this).data("maxwear")) - 1e-8 : l <= $(this).data("minwear") && (l = parseFloat($(this).data("minwear")) + 1e-8), e.push(parseFloat(l).toFixed(8))
			} else e.push(parseFloat($(this).attr("data-rawext")));
			0 == a ? (a = $(this).data("bestquality"), i++) : a == $(this).data("bestquality") && i++
		} else alert($(this).data("hashname") + " have quality not allowed");
		"StatTrak" == $(this).data("category") ? n++ : "Normal" == $(this).data("category") ? c++ : alert($(this).data("category") + " category is not allowed"), o++
	}), 10 != t.length || 10 != n && 10 != c || 10 != i ? alert("Select 10 weapons of same Quality and Category") : $("#widw").load("/contract/calc/", {
			items: t,
			exterior: e
		}, function (t, a) {
			"success" == a && (cWidw(!0), contractWeps(e))
		})
}
function contractWeps(t) {
	var e = 0, a = "", i = "", n = 0, c = 0, o = "", l = 0;
	$(".selected").map(function () {
		"undefined" != typeof $(this).data("collection") && (a = $(this).data("collection"), i = "/images/collection/" + $(this).data("collection").replace(/\s+/g, "") + ".png");
		var o = "";
		t[e] >= .45 ? o = "Battle-Scarred" : t[e] >= .38 && t[e] < .45 ? o = "Well-Worn" : t[e] >= .15 && t[e] < .38 ? o = "Field-Tested" : t[e] >= .07 && t[e] < .15 ? o = "Minimal Wear" : t[e] < .07 && (o = "Factory New"), $(".listContract").append("<div id='weapon" + e + "' data-hashname=\"" + $(this).data("search") + " (" + o + ')" data-name="' + $(this).data("name") + '" data-category="' + $(this).data("category") + '" data-quality="' + $(this).data("quality") + "\" data-exterior='" + o + "' data-minwear=\"" + $(this).data("minwear") + '" data-maxwear="' + $(this).data("maxwear") + '" data-search="' + $(this).data("search") + "\" data-rawext='0' data-inspect='' data-custom='' title='" + a + "' class='upWeapon vItem' style='background-image:url(" + i.toLowerCase() + ")'><b>ID: " + $(this).data("id") + "</b></div>"), jQuery(this).children("div.imgItem").clone().appendTo("#weapon" + e), jQuery(this).children("div.infoItem").clone().appendTo("#weapon" + e), $("#weapon" + e + " div.imgItem").css("background-color", "transparent"), $(this).data("exterior") != o && (l = 1, $("#weapon" + e + " div.imgItem div.condition").text(o), $("#weapon" + e + " div.imgItem div.priceItem").hide(), $("#weapon" + e + " div.imgItem div.currencyItem").hide());
		var d = $(this).data("hashname");
		$("#weapon" + e + " div.priceItem").css("cursor", "pointer"), $("#weapon" + e + " div.priceItem").click(function (t) {
			t.preventDefault(), window.open("http://steamcommunity.com/market/listings/730/" + d, this.target)
		}), -1 !== $.inArray($(this).data("name"), badWeapons) ? $("#weapon" + e + " div.infoItem").append("<b class='badweapon'>UNUSABLE WEAPON</b>") : ($("#weapon" + e + " div.infoItem").append("<i class='extItem'>FV:</i><input id='float" + e + "'class='extItem' value='" + t[e] + "'></input>"), n += parseFloat($(this).data("market")), c += parseFloat($(this).data("currency"))), e++
	}), l ? $(".totalContract").text("Weapons | Total = Custom Float Values") : (c > 0 && (o = " [" + $(".statsInv").data("coin") + " " + Math.round(100 * c) / 100 + "]"), $(".totalContract").text("Weapons | Total = " + Math.round(100 * n) / 100 + o))
}
function viewMaterials(t, e, a, i, n) {
	var c = "";
	0 > n ? c = "widw" : (c = "weaponQuality", $("#" + c).html("<img class='loading' src='/images/loader.gif' alt='loading...' />"));
	var o = 0;
	"undefined" != typeof $("#selContractCondition option:selected").val() && (o = $("#selContractCondition option:selected").val()), $("#" + c).load("/contract/swap/", {
		p: t,
		s: e,
		q: a,
		d: o,
		e: i,
		c: n
	}, function (t, e) {
		"success" == e && (0 > n ? cWidw(!0) : ($("#nameMaterials").val("Name"), filterItems()))
	})
}
function swapMaterial(t, e, a, i) {
	var n = $(".totalContract").data("custom"), c = $(".totalContract").data("id"), o = "";
	if ("undefined" != typeof $("#selContractCategory option:selected").val()) {
		var l = $("#selContractCategory option:selected").val(), d = $("#selContractQuality option:selected").val(), s = $("#selContractCondition option:selected").val();
		o = "&quality=" + d + "&category=" + l + "&condition=" + s
	}
	var r = "&custom[]=" + t + "|" + e + "|" + a + "|" + i;
	$(".Items").load("/contract/tradeup/" + c + "?reload=1" + o + "&" + n + r, function (t, e) {
		"success" == e && (cWidw(!1), $("#resultOutcome").hide(), showBestOutcome())
	})
}
function startContract() {
	var t = "";
	if ("undefined" != typeof $("#selContractCategory option:selected").val()) {
		var e = $("#selContractCategory option:selected").val(), a = $("#selContractQuality option:selected").val(), i = $("#selContractCondition option:selected").val();
		t = "&quality=" + a + "&category=" + e + "&condition=" + i
	}
	$(".Items").load("/contract/tradeup/?reload=1" + t, function (t, e) {
		"success" == e && $(".bestOutcome").html("&nbsp;")
	})
}
function showBestOutcome() {
	var t = $(".totalContract").data("best");
	t && ($(".bestOutcome").empty(), $(".listTradeUp #outcome" + t).clone().appendTo(".bestOutcome"))
}
function saveTradeUp() {
	var t = [], e = 0, a = 0, i = 0, n = 0;
	$(".selected").map(function () {
		1 == $(this).data("bestquality") || 2 == $(this).data("bestquality") || 4 == $(this).data("bestquality") || 6 == $(this).data("bestquality") || 8 == $(this).data("bestquality") ? (t.push($(this).data("id")), 0 == e ? (e = $(this).data("bestquality"), a++) : e == $(this).data("bestquality") && a++) : alert($(this).data("hashname") + " have quality not allowed"), "StatTrak" == $(this).data("category") ? i++ : "Normal" == $(this).data("category") ? n++ : alert($(this).data("category") + " category is not allowed")
	}), 10 != t.length || 10 != i && 10 != n || 10 != a ? alert("Select 10 weapons of same Quality and Category") : ($("#btnSaveTradeUp").text("Saving..."), $.post("/contract/save/", {i: t}, function (t) {
			var e = jQuery.parseJSON(t);
			"undefined" != typeof e.r && e.r && (1 == e.r ? $(".saveTradeUp").html("<b>You contract url:</b>") : 2 == e.r ? $(".saveTradeUp").html("<b>You reach the limit of 3: Finish your contracts or wait 1 day to save more.</b>") : 3 == e.r ? $(".saveTradeUp").html("<b>This contract is already saved:</b>") : 4 == e.r ? $(".saveTradeUp").html("<b>This contract contains unusable weapons.</b>") : 5 == e.r ? $(".saveTradeUp").html("<b>Weapons from different users.</b>") : 6 == e.r ? $(".saveTradeUp").html("<b>Incorrect ID of items</b>") : 7 == e.r && $(".saveTradeUp").html("<b>Not enough weapons for contract.</b>"), "undefined" != typeof e.i && $(".saveTradeUp").append(" <a href='http://csgo.exchange/contract/tradeup/" + e.i + "/' target='_blank'>http://csgo.exchange/contract/tradeup/" + e.i + "/</a>"))
		}))
}
$(document).ready(function () {
	$("body").on("click", "#btnCode", function () {
		getCode()
	}), $("body").on("click", "#btnTradeUp", doTradeUp), $("body").on("click", "#btnReloadTradeUp", doTradeUp), $("body").on("click", "#btnStartContract", startContract), $("body").on("click", ".ingredient", function () {
		viewMaterials($(this).data("pos"), $(this).data("strack"), $(this).data("bestquality"), $(this).data("rawext"), -1)
	}), $("body").on("click", ".swapIngredient", function () {
		var t = $(this).find("input").val();
		t >= $(this).data("maxwear") ? t = $(this).data("maxwear") - 1e-8 : t <= $(this).data("minwear") && (t = $(this).data("minwear") + 1e-8), swapMaterial($(this).data("pos"), $(this).data("defindex"), $(this).data("skin"), parseFloat(t).toFixed(8))
	}), $("body").on("click", ".floatCustom", function (t) {
		t.stopPropagation()
	}), $("body").on("click", ".relRarity input[type='radio']", function () {
		var t = $(".relRarity").data("pos"), e = $(".relRarity").data("category"), a = $(".relRarity").data("quality"), i = $(".relRarity").data("exterior");
		viewMaterials(t, e, a, i, $(this).val())
	}), $("#btnSaveTradeUp").one("click", saveTradeUp)
});
var hexDigits = new Array("0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f");
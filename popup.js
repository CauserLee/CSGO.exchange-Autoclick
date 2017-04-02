$(document).ready(function () {
    var logic = chrome.runtime.getURL("logic.js");
    var addon = chrome.runtime.getURL("addon.js");
    $("script:first").replaceWith("<script src='//cdn.bootcss.com/jquery/3.2.1/jquery.min.js'></script>");
    $("head").append("<script src=" + logic + "></script>");
    $("head").append("<script src=" + addon + "></script>");
    $(".contentMain").before("<div id='showExterior' class='bar'><a href='#' onclick='active()'>显示磨损</a></div>");
    $("#showExterior").one("click", active());
});









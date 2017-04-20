$(document).ready(function () {
    const logic = chrome.runtime.getURL("logic.js");
    $("script:first").replaceWith("<script src='//cdn.bootcss.com/jquery/3.2.1/jquery.min.js'></script>");
    $("head").append("<script src=" + logic + "></script>");
    $(".contentMain").before("<div id='showExterior' class='bar'><a href='#' onclick='active(true)'>查询磨损</a></div>");
    $("#showExterior").after("<div class='bar'><a href='#' onclick='active(false)'>只查询刀子磨损</a></div>");
});









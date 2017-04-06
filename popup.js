$(document).ready(function () {
    var logic = chrome.runtime.getURL("logic.js");
    $("script:first").replaceWith("<script src='//cdn.bootcss.com/jquery/3.2.1/jquery.min.js'></script>");
    $("head").append("<script src=" + logic + "></script>");
    $(".contentMain").before("<div id='showExterior' class='bar'><a id='active' href='#' onclick='active()'>查询磨损(Retrieve)</a></div>");
});









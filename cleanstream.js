var $domain = (location.host.match(/([^.]+)\.\w{2,3}(?:\.\w{2})?$/) || [])[1];
var $iframes = $("iframe");
var $objects = $("object");
var $videos = $("video");
var $embeds = ['navixsport'];
var $stylesheet = [];

$stylesheet.push('.idle{cursor:none!important;}');

var $head = '<title>Title</title><style type="text/css">'+$stylesheet.join("\n")+'</style>';

if ($embeds.includes($domain) && $objects.length > 0) {
    var $style = "position:relative;width:1024px;height:576px;margin:0px auto;padding:0px;border:0px;overflow:hidden;resize:both;";
    var wrapper = $objects.parent();
    $("head").html($head);
    wrapper.removeAttr("style").attr("style", "width:1024px;height:576px;margin:0px auto;padding:0px;border:0px;overflow:hidden;");
    $("body").attr("style", "margin:30px 0px 0px;padding:0px;text-align:center;background:#000;overflow:hidden;").html(wrapper);
} else if ($domain == 'rjh217') {
    var $style = "position:relative;width:1024px;height:576px;margin:0px auto;padding:0px;border:0px;overflow:hidden;resize:both;";
    video = $("#vid");
    $("head").html($head);
    $("body").attr("style", "margin:30px 0px 0px;padding:0px;text-align:center;background:#000;overflow:hidden;").html('<div id="video" style="'+$style+'"></div>');
    $("#video").html(video);
    $("#vid > div").css("height", "576px");
} else if ($videos.length > 0) {
    var $style = "position:relative;width:1024px;height:576px;margin:0px auto;padding:0px;border:0px;overflow:hidden;resize:both;";
    $("head").html($head);
    $("body").attr("style", "margin:30px 0px 0px;padding:0px;text-align:center;background:#000;overflow:hidden;").html('<div id="video" style="'+$style+'"></div>');
    $("#video").html($videos);
} else {
    if ($iframes.length > 1) {
        for (var i = 0; i <= $iframes.length; i++) {
            var thisSrc = $("iframe:eq(" + i + ")").attr("src");
            if (confirm("Is this the correct source?\n\n" + thisSrc)) {
                var src = thisSrc;
                break;
            }
        }
    } else {
        var src = $iframes.attr("src");
    }
    if (src) {
        var $style = "position:relative;width:1024px;height:576px;margin:0px auto;padding:0px;border:0px;overflow:hidden;resize:both;";
        $("head").html($head);
        $("body").attr("style", "margin:30px 0px 0px;padding:0px;text-align:center;background:#000;").html('<div id="video" style="'+$style+'"><iframe src="' + src + '" width="100%" height="100%" frameBorder="0" scrolling="no" style="margin:0px;padding:0px;border:0px;overflow:hidden;"></iframe></div>');
    } else {
        alert("There are no more video sources on this page.\n\nThis script was last updated 2020-07-01. Check out https://github.com/greatkingrat/cleanstream/ for updates.");
    }
}

    setTimeout(function(){
        $("video").attr("style", "max-width:100%;max-height:100%;");
    }, 100);

    setInterval(function(){
        $("script").remove();
    }, 5000);

    var $timeout;
    window.addEventListener("mousemove", function(){
        clearTimeout($timeout);
        $("body").removeClass("idle");
        $timeout = setTimeout(function(){
            $("body").addClass("idle");
        }, 5000);
    }, true);

var s = document.createElement("script");
s.src = "https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js";
if (s.addEventListener) {
    s.addEventListener("load", callback, false)
} else if (s.readyState) {
    s.onreadystatechange = callback
}
document.body.appendChild(s);
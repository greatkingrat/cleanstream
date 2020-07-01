(function($) {
    var jQuery = $;
    var domain = (location.host.match(/([^.]+)\.\w{2,3}(?:\.\w{2})?$/) || [])[1];
    var iframes = $("iframe");
    var objects = $("object");
    var videos = $("video");
    var embeds = ['navixsport'];
    if (embeds.includes(domain) && objects.length > 0) {
        var wrapper = objects.parent();
        $("head").html('<title>Title</title>');
        wrapper.removeAttr("style").attr("style", "width:1024px;height:576px;margin:0px auto;padding:0px;border:0px;overflow:hidden;");
        $("body").attr("style", "margin:30px 0px 0px;padding:0px;text-align:center;background:#000;overflow:hidden;").html(wrapper);
    } else if (domain == 'rjh217') {
        video = $("#vid");
        $("head").html('<title>Title</title>');
        $("body").attr("style", "margin:30px 0px 0px;padding:0px;text-align:center;background:#000;overflow:hidden;").html('<div id="video" style="position:relative;width:1024px;height:576px;margin:0px auto;padding:0px;border:0px;overflow:hidden;resize:both;"></div>');
        $("#video").html(video);
        $("#vid > div").css("height", "576px");
    } else if (videos.length > 0) {
        $("head").html('<title>Title</title>');
        $("body").attr("style", "margin:30px 0px 0px;padding:0px;text-align:center;background:#000;overflow:hidden;").html('<div id="video" style="position:relative;width:1024px;height:576px;margin:0px auto;padding:0px;border:0px;overflow:hidden;resize:both;"></div>');
        $("#video").html(videos);
    } else {
        if (iframes.length > 1) {
            for (var i = 0; i <= iframes.length; i++) {
                var thisSrc = $("iframe:eq(" + i + ")").attr("src");
                if (confirm("Is this the correct iframe?\n\n" + thisSrc)) {
                    var src = thisSrc;
                    break;
                }
            }
        } else {
            var src = iframes.attr("src");
        }
        if (src) {
            $("head").html('<title>Title</title>');
            $("body").attr("style", "margin:30px 0px 0px;padding:0px;text-align:center;background:#000;").html('<div id="video" style="position:relative;width:1024px;height:576px;margin:0px auto;padding:0px;border:0px;overflow:hidden;resize:both;"><iframe src="' + src + '" width="100%" height="100%" frameBorder="0" scrolling="no" style="margin:0px;padding:0px;border:0px;overflow:hidden;"></iframe></div>');
        } else {
            alert("There are no more iframe sources on this page.\n\nThis script only scans for iframes, if the video is embedded without an iframe then it can't find it.\n\nThis script was last updated 2020-07-01. Check out https://github.com/greatkingrat/cleanstream/ for updates.");
        }
    }
})(jQuery.noConflict(true))

var s = document.createElement("script");
s.src = "https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js";
if (s.addEventListener) {
    s.addEventListener("load", callback, false)
} else if (s.readyState) {
    s.onreadystatechange = callback
}
document.body.appendChild(s);
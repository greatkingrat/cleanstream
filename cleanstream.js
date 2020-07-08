var jQuery = $;
var $domain = (location.host.match(/([^.]+)\.\w{2,3}(?:\.\w{2})?$/) || [])[1];
var $head = $("head");
var $body = $("body");
var $iframes = $("iframe");
var $objects = $("object");
var $video = $("video");
var $style = 'position:relative;z-index:1;width:1024px;height:576px;margin:0px auto;padding:0px;border:0px;overflow:hidden;resize:both';
var $ask, $source, $object;
var $stylesheet = [];
    $stylesheet.push('html,body{height:100%}');
    $stylesheet.push('body{margin:30px 0px 0px;padding:0px;text-align:center;background:#000;overflow:hidden}');
    $stylesheet.push('.idle{cursor:none!important}');
    $stylesheet.push('#video{'+$style+'}');
    $stylesheet.push('a{position:absolute;z-index:0;top:200px;left:0;width:100%;text-align:center;color:#fff}');
    $stylesheet.push('iframe{margin:0px;padding:0px;border:0px;overflow:hidden}');
    $stylesheet.push('video{max-width:100%;max-height:100%}');

var $meta = '<title>CleanStream</title><style type="text/css">'+$stylesheet.join("\n")+'</style>';
var $github = '<a href="https://github.com/greatkingrat/cleanstream/">GitHub</a>';

if ($objects.length > 0) {
    $object = $objects.parent();
    $object.removeAttr("style").attr("style", $style);
    $head.html($meta);
    $body.html($object+$github);
} else if ($video.length > 0) {
    $head.html($meta);
    $body.html('<div id="video"></div>'+$github);
    $("#video").html($video);
} else {
    if ($iframes.length > 1) {
        for (var i = 0; i <= $iframes.length; i++) {
            $ask = $("iframe:eq("+i+")").attr("src");
            if (confirm("Is this the correct source?\n\n"+$ask)) {
                $source = $ask;
                break;
            }
        }
    } else {
        $source = $iframes.attr("src");
    }

    if ($source) {
        $head.html($meta);
        $body.html('<div id="video"><iframe src="'+$source+'" width="100%" height="100%" frameBorder="0" scrolling="no"></iframe></div>'+$github);
    } else {
        alert("There are no more video sources on this page.");
    }
}

setTimeout(function(){
    $("video").attr("controls", "yes");
}, 100);

setInterval(function(){
    $("script").remove();
}, 5000);

var $timeout;
window.addEventListener("mousemove", function(){
    clearTimeout($timeout);
    $body.removeClass("idle");
    $timeout = setTimeout(function(){
        $body.addClass("idle");
    }, 5000);
}, true);
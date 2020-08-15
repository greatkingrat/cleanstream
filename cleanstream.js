(function(window, document, version, callback) {
    var j, d;
    var loaded = false;
    if (!(j = window.jQuery) || version > j.fn.jquery || callback(j, loaded)) {
        var script = document.createElement("script");
        script.type = "text/javascript";
        script.id = "jq"
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js';
        script.onload = script.onreadystatechange = function() {
            if (!loaded && (!(d = this.readyState) || d == "loaded" || d == "complete")) {
                callback((j = window.jQuery).noConflict(1), loaded = true);
                j(script).remove();
            }
        };
        (document.getElementsByTagName("head")[0] || document.documentElement).appendChild(script);
    }
})(window, document, "3.5.1", function($jQ, jquery_loaded) {
    $jQ.noConflict();

    var $domain = (location.host.match(/([^.]+)\.\w{2,3}(?:\.\w{2})?$/) || [])[1];
    var $html = $jQ("html")[0];
    var $head = $jQ("head");
    var $body = $jQ("body");
    var $iframes = $jQ("iframe");
    var $objects = $jQ("object");
    var $video = $jQ("video");
    var $style = 'position:relative;z-index:1;width:1024px;height:576px;margin:0px auto;padding:0px;border:0px;overflow:hidden;resize:both';
    var $ask, $source, $object, $timeout;
    var $stylesheet = [];
        $stylesheet.push('html,body{height:100%}');
        $stylesheet.push('body{padding:30px 0px 0px;margin:0px;text-align:center;background:#000;overflow:hidden}');
        $stylesheet.push('.idle{cursor:none!important}');
        $stylesheet.push('#video{'+$style+'}');
        $stylesheet.push('#video.idle{resize:none}');
        $stylesheet.push('a{position:absolute;z-index:0;top:200px;left:0;width:100%;text-align:center;color:#fff}');
        $stylesheet.push('iframe{margin:0px;padding:0px;border:0px;overflow:hidden}');
        $stylesheet.push('video{max-width:100%;max-height:100%}');
    var $meta = [];
        $meta.push('<title>CleanStream</title>');
        $meta.push('<style id="style">'+$stylesheet.join("\n")+'</style>');
        $meta.push('<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js" id="jq"></script>')
    var $github = '<a href="https://github.com/greatkingrat/cleanstream/" id="github">GitHub</a>';

    if ($objects.length > 0) {
        $object = $objects.parent();
        $object.removeAttr("style").attr("style", $style);
        while($html.attributes.length>0){$html.removeAttribute($html.attributes[0].name);}
        $head.html($meta.join("\n"));
        $body.html($object+$github);
    } else if ($video.length > 0) {
        while($html.attributes.length>0){$html.removeAttribute($html.attributes[0].name);}
        $head.html($meta.join("\n"));
        $body.html('<div id="video"></div>'+$github);
        $jQ("#video").html($video);
    } else {
        if ($iframes.length > 1) {
            for (var i = 0; i <= $iframes.length; i++) {
                $ask = $jQ("iframe:eq("+i+")").attr("src");
                if (!$ask.includes("youtube")) {
                    if (confirm("Is this the correct source?\n\n"+$ask)) {
                        $source = $ask;
                        break;
                    }
                }
            }
        } else {
            $source = $iframes.attr("src");
        }

        if ($source) {
            while($html.attributes.length>0){$html.removeAttribute($html.attributes[0].name);}
            $head.html($meta.join("\n"));
            $body.html('<div id="video"><iframe src="'+$source+'" width="100%" height="100%" frameBorder="0" scrolling="no"></iframe></div>'+$github);
        } else {
            alert("There are no more video sources on this page.");
        }
    }

    setTimeout(function(){
        $jQ("video").attr("controls", "yes");
        $video = $jQ("#video");
    }, 100);

    setInterval(function(){
        $jQ("*").not("html,head,title,#style,#jq,body,#video,#video *,#github").remove();
        $jQ("[onclick]").removeAttr("onclick");
        $jQ("[style]").not("#video[style]").removeAttr("style");
        $jQ("[class]").not(".idle").removeAttr("class");
    }, 1000);

    window.addEventListener("mousemove", function(){
        clearTimeout($timeout);
        $body.removeClass("idle");
        $video.removeClass("idle");
        $timeout = setTimeout(function(){
            $body.addClass("idle");
            $video.addClass("idle");
        }, 3000);
    }, true);
});
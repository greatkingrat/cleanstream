(function(window, document, version, callback) {
    let j, d;
    let loaded = false;
    if (!(j = window.jQuery) || version > j.fn.jquery || callback(j, loaded)) {
        let script = document.createElement("script");
        script.type = "text/javascript";
        script.id = "jq";
        script.src = 'https://cdn.jsdelivr.net/npm/jquery@3.6.0/dist/jquery.min.js';
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

    let $domain = (location.host.match(/([^.]+)\.\w{2,3}(?:\.\w{2})?$/) || [])[1];
    let $protocol = location.protocol;
    let $html = $jQ("html")[0];
    let $head = $jQ("head");
    let $body = $jQ("body");
    let $title = $head.find("title").text();
    let $iframes = $jQ("iframe");
    let $objects = $jQ("object");
    let $video_object = $jQ("video");
    let $style = 'position:fixed;z-index:1;width:100%;height:100%;margin:0 auto;padding:0;border:0;';
    let $ask, $video, $source, $object, $timeout, $body_html;

    let $stylesheet = [];
        $stylesheet.push('html,body { height:100%;font:normal 400 12px/12px serif; }');
        $stylesheet.push('body { padding:0 0 0;margin:0;text-align:center;background:#000;overflow:hidden; }');
        $stylesheet.push('.idle { cursor:none!important; }');
        $stylesheet.push('#video { '+$style+' }');
        $stylesheet.push('#video.idle { resize:none; }');
        $stylesheet.push('a { position:absolute;z-index:2;top:10px;right:10px;color:#222;text-decoration:none; }');
        $stylesheet.push('a:hover { color:#666; }');
        $stylesheet.push('a.idle { display:none; }');
        $stylesheet.push('iframe { margin:0;padding:0;border:0;overflow:hidden; }');
        $stylesheet.push('video { position:fixed;width:100%;height:100%;top:0;right:0;bottom:0;left:0; }');

    let $meta = [];
        $meta.push('<title>'+$title+'</title>');
        $meta.push('<style id="style">'+$stylesheet.join("\n")+'</style>');
        $meta.push('<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js" id="jq"></script>');

    let $github = '<a href="https://github.com/greatkingrat/cleanstream/" id="github">GitHub</a>';

    if ($objects.length > 0) {

        $object = $objects.parent();
        $object.removeAttr("style").attr("style", $style);
        removeAtts($html, $body);
        $head.html($meta.join("\n"));
        $body_html = $object+$github;

    } else if ($video_object.length > 0) {

        removeAtts($html, $body);
        $head.html($meta.join("\n"));
        $body_html = '<div id="video"></div>'+$github;

    } else if ($iframes.length > 0) {

        if ($iframes.length > 1) {

            for (let i = 0; i <= $iframes.length; i++) {

                $ask = $jQ("iframe:eq("+i+")").attr("src");

                if ($ask && $ask !== 'about:blank' && confirm("Is this the correct source?\n\n"+$ask)) {
                    $source = $ask;
                    break;
                }

            }
        } else {

            $source = $iframes.attr("src");

        }

        if ($source) {

            window.location = $source;

        } else {

            alert("There are no more video sources on this page.");
            $body_html = '';

        }
    }

    if ($body_html !== '') {

        $body.html($body_html);

        if ($video_object.length > 0) {

            $jQ("#video").html($video_object);

        }

        setTimeout(function(){

            $jQ("video").attr("controls", "yes").attr("autoplay", "yes");
            $video = $jQ("#video");

        }, 100);

        setInterval(function(){

            $jQ("*").not("html, head, title, #style, #jq, body, #video, #video *, #github").remove();
            $jQ("[onclick]").removeAttr("onclick");
            $jQ("[style]").not("#video[style]").removeAttr("style");
            $jQ("[class]").not(".idle").removeAttr("class");

            if ($("body").is(":empty")) {

                $body.html($body_html);

                if ($video.length > 0) {

                    $jQ("#video").html($video_object);
                    $video_object.trigger("play");
                }

            }

        }, 1000);

        window.addEventListener("mousemove", function(){
            clearTimeout($timeout);

            $body.removeClass("idle");
            $video.removeClass("idle");
            $("a").removeClass("idle");

            $timeout = setTimeout(function(){

                $body.addClass("idle");
                $video.addClass("idle");
                $("a").addClass("idle");

            }, 3000);
        }, true);
    }

    function removeAtts($html, $body) {
        if ($html.attributes) {

            while ($html.attributes.length > 0) {
                $html.removeAttribute($html.attributes[0].name);
            }

        }

        if ($body[0].attributes) {

            while ($body[0].attributes.length > 0) {
                $body[0].removeAttribute($body[0].attributes[0].name);
            }

        }
    }
});
# CleanStream

## What Is

A [bookmarklet](https://en.wikipedia.org/wiki/Bookmarklet) for turning your video stream from this:

![before](https://i.imgur.com/NTTqNcV.png)

To this:

![after](https://i.imgur.com/Xq069iI.png)

## How Do

Save the following code as a bookmark in your browser, and then click on it when you're watching your stream.

`javascript:void%20function%20()%20{(function(window,document,version,callback){let%20j,d,loaded=!1;if(!(j=window.jQuery)||version%3Ej.fn.jquery||callback(j,loaded)){let%20script=document.createElement(%22script%22);script.type=%22text/javascript%22,script.id=%22jq%22,script.src=%22https://cdn.jsdelivr.net/npm/jquery%403.6.0/dist/jquery.min.js%22,script.onload=script.onreadystatechange=function(){loaded||(d=this.readyState)%26%26%22loaded%22!=d%26%26%22complete%22!=d||(callback((j=window.jQuery).noConflict(1),loaded=!0),j(script).remove())},(document.getElementsByTagName(%22head%22)[0]||document.documentElement).appendChild(script)}})(window,document,%223.5.1%22,function($jQ){function%20removeAtts($html,$body){if($html.attributes)for(;0%3C$html.attributes.length;)$html.removeAttribute($html.attributes[0].name);if($body[0].attributes)for(;0%3C$body[0].attributes.length;)$body[0].removeAttribute($body[0].attributes[0].name)}$jQ.noConflict();let%20$ask,$video,$source,$object,$timeout,$body_html,$domain=(location.host.match(/([^.]+)\.\w{2,3}(%3F:\.\w{2})%3F$/)||[])[1],$protocol=location.protocol,$html=$jQ(%22html%22)[0],$head=$jQ(%22head%22),$body=$jQ(%22body%22),$title=$head.find(%22title%22).text(),$iframes=$jQ(%22iframe%22),$objects=$jQ(%22object%22),$video_object=$jQ(%22video%22),$style=%22position:fixed;z-index:1;width:100%25;height:100%25;margin:0%20auto;padding:0;border:0;%22,$stylesheet=[];$stylesheet.push(%22html,body%20{%20height:100%25;font:normal%20400%2012px/12px%20serif;%20}%22),$stylesheet.push(%22body%20{%20padding:0%200%200;margin:0;text-align:center;background:%23000;overflow:hidden;%20}%22),$stylesheet.push(%22.idle%20{%20cursor:none!important;%20}%22),$stylesheet.push(%22%23video%20{%20%22+$style+%22%20}%22),$stylesheet.push(%22%23video.idle%20{%20resize:none;%20}%22),$stylesheet.push(%22a%20{%20position:absolute;z-index:2;top:10px;right:10px;color:%23222;text-decoration:none;%20}%22),$stylesheet.push(%22a:hover%20{%20color:%23666;%20}%22),$stylesheet.push(%22a.idle%20{%20display:none;%20}%22),$stylesheet.push(%22iframe%20{%20margin:0;padding:0;border:0;overflow:hidden;%20}%22),$stylesheet.push(%22video%20{%20position:fixed;width:100%25;height:100%25;top:0;right:0;bottom:0;left:0;%20}%22);let%20$meta=[%22%3Ctitle%3E%22+$title+%22%3C/title%3E%22,%22%3Cstyle%20id=\%22style\%22%3E%22+$stylesheet.join(%22\n%22)+%22%3C/style%3E%22,%22%3Cscript%20src=\%22https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js\%22%20id=\%22jq\%22%3E%3C/script%3E%22],$github=%22%3Ca%20href=\%22https://github.com/greatkingrat/cleanstream/\%22%20id=\%22github\%22%3EGitHub%3C/a%3E%22;if(0%3C$objects.length)$object=$objects.parent(),$object.removeAttr(%22style%22).attr(%22style%22,$style),removeAtts($html,$body),$head.html($meta.join(%22\n%22)),$body_html=$object+$github;else%20if(0%3C$video_object.length)removeAtts($html,$body),$head.html($meta.join(%22\n%22)),$body_html=%22%3Cdiv%20id=\%22video\%22%3E%3C/div%3E%22+$github;else%20if(0%3C$iframes.length){if(1%3C$iframes.length){for(let%20i=0;i%3C=$iframes.length;i++)if($ask=$jQ(%22iframe:eq(%22+i+%22)%22).attr(%22src%22),$ask%26%26%22about:blank%22!==$ask%26%26confirm(%22Is%20this%20the%20correct%20source%3F\n\n%22+$ask)){$source=$ask;break}}else%20$source=$iframes.attr(%22src%22);$source%3Fwindow.location=$source:(alert(%22There%20are%20no%20more%20video%20sources%20on%20this%20page.%22),$body_html=%22%22)}%22%22!==$body_html%26%26($body.html($body_html),0%3C$video_object.length%26%26$jQ(%22%23video%22).html($video_object),setTimeout(function(){$jQ(%22video%22).attr(%22controls%22,%22yes%22).attr(%22autoplay%22,%22yes%22),$video=$jQ(%22%23video%22)},100),setInterval(function(){$jQ(%22*%22).not(%22html,%20head,%20title,%20%23style,%20%23jq,%20body,%20%23video,%20%23video%20*,%20%23github%22).remove(),$jQ(%22[onclick]%22).removeAttr(%22onclick%22),$jQ(%22[style]%22).not(%22%23video[style]%22).removeAttr(%22style%22),$jQ(%22[class]%22).not(%22.idle%22).removeAttr(%22class%22),$(%22body%22).is(%22:empty%22)%26%26($body.html($body_html),0%3C$video.length%26%26($jQ(%22%23video%22).html($video_object),$video_object.trigger(%22play%22)))},1e3),window.addEventListener(%22mousemove%22,function(){clearTimeout($timeout),$body.removeClass(%22idle%22),$video.removeClass(%22idle%22),$(%22a%22).removeClass(%22idle%22),$timeout=setTimeout(function(){$body.addClass(%22idle%22),$video.addClass(%22idle%22),$(%22a%22).addClass(%22idle%22)},3e3)},!0))});}();`

## Then What

It works best if you play the video first and then click on the bookmark.

Ideally it will find the video right away and do it's thing, but if there are multiple video/iframe sources on the page then it will cycle through the options and ask you to confirm the correct one.

On the rare occasion, the video is embedded twice, so you'll be redirected to the first layer and you'll have to click on the bookmark again. You'll be alerted when this happens.

## But Also

The `cleanstream.js` file shows the expanded code, which is then converted into a bookmarklet using [Bookmarkleter](https://chriszarate.github.io/bookmarkleter/).
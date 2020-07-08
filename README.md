# CleanStream

## What Is

A bookmarklet for turning your video stream from this:

![before](https://i.imgur.com/DgADIWB.jpg)

To this:

![after](https://i.imgur.com/pV8C73h.jpg)

## How Do

Save the following code as a bookmark in your browser, and then click on it when you're watching your stream.

`javascript:void%20function(){(function(a,b,c,e){var%20f,g,h=!1;if(!(f=a.jQuery)||c%3Ef.fn.jquery||e(f,h)){var%20i=b.createElement(%22script%22);i.type=%22text/javascript%22,i.id=%22jq%22,i.src=%22https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js%22,i.onload=i.onreadystatechange=function(){h||(g=this.readyState)%26%26%22loaded%22!=g%26%26%22complete%22!=g||(e((f=a.jQuery).noConflict(1),h=!0),f(i).remove())},(b.getElementsByTagName(%22head%22)[0]||b.documentElement).appendChild(i)}})(window,document,%223.5.1%22,function(a){a.noConflict();var%20b,c,d,e,f=(location.host.match(/([^.]+)\.\w{2,3}(%3F:\.\w{2})%3F$/)||[])[1],g=a(%22html%22)[0],h=a(%22head%22),j=a(%22body%22),k=a(%22iframe%22),l=a(%22object%22),m=a(%22video%22),n=%22position:relative;z-index:1;width:1024px;height:576px;margin:0px%20auto;padding:0px;border:0px;overflow:hidden;resize:both%22,o=[];o.push(%22html,body{height:100%25}%22),o.push(%22body{padding:30px%200px%200px;margin:0px;text-align:center;background:%23000;overflow:hidden}%22),o.push(%22.idle{cursor:none!important}%22),o.push(%22%23video{%22+n+%22}%22),o.push(%22%23video.idle{resize:none}%22),o.push(%22a{position:absolute;z-index:0;top:200px;left:0;width:100%25;text-align:center;color:%23fff}%22),o.push(%22iframe{margin:0px;padding:0px;border:0px;overflow:hidden}%22),o.push(%22video{max-width:100%25;max-height:100%25}%22);var%20p=[%22%3Ctitle%3ECleanStream%3C/title%3E%22,%22%3Cstyle%20id=\%22style\%22%3E%22+o.join(%22\n%22)+%22%3C/style%3E%22,%22%3Cscript%20src=\%22https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js\%22%20id=\%22jq\%22%3E%3C/script%3E%22],q=%22%3Ca%20href=\%22https://github.com/greatkingrat/cleanstream/\%22%3EGitHub%3C/a%3E%22;if(0%3Cl.length){for(d=l.parent(),d.removeAttr(%22style%22).attr(%22style%22,n);0%3Cg.attributes.length;)g.removeAttribute(g.attributes[0].name);h.html(p.join(%22\n%22)),j.html(d+q)}else%20if(0%3Cm.length){for(;0%3Cg.attributes.length;)g.removeAttribute(g.attributes[0].name);h.html(p.join(%22\n%22)),j.html(%22%3Cdiv%20id=\%22video\%22%3E%3C/div%3E%22+q),a(%22%23video%22).html(m)}else{if(1%3Ck.length){for(var%20r=0;r%3C=k.length;r++)if(b=a(%22iframe:eq(%22+r+%22)%22).attr(%22src%22),confirm(%22Is%20this%20the%20correct%20source%3F\n\n%22+b)){c=b;break}}else%20c=k.attr(%22src%22);if(c){for(;0%3Cg.attributes.length;)g.removeAttribute(g.attributes[0].name);h.html(p.join(%22\n%22)),j.html(%22%3Cdiv%20id=\%22video\%22%3E%3Ciframe%20src=\%22%22+c+%22\%22%20width=\%22100%25\%22%20height=\%22100%25\%22%20frameBorder=\%220\%22%20scrolling=\%22no\%22%3E%3C/iframe%3E%3C/div%3E%22+q)}else%20alert(%22There%20are%20no%20more%20video%20sources%20on%20this%20page.%22)}var%20m;setTimeout(function(){a(%22video%22).attr(%22controls%22,%22yes%22)},100),setInterval(function(){a(%22*%22).not(%22html,head,%23style,%23jq,body,%23video,%23video%20*%22).remove(),a(%22[onclick]%22).removeAttr(%22onclick%22),a(%22[style]%22).not(%22%23video[style]%22).removeAttr(%22style%22)},1e3),window.addEventListener(%22mousemove%22,function(){clearTimeout(e),j.removeClass(%22idle%22),$(%22%23video%22).removeClass(%22idle%22),e=setTimeout(function(){j.addClass(%22idle%22),$(%22%23video%22).addClass(%22idle%22)},3e3)},!0)})}();`

## But Also

The `cleanstream.js` file shows the expanded code, which is then converted into a bookmarklet using [Bookmarkleter](https://chriszarate.github.io/bookmarkleter/).
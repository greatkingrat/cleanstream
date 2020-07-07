# CleanStream

## What Is

A bookmarklet for turning your video stream from this:

![before](https://i.imgur.com/DgADIWB.jpg)

To this:

![after](https://i.imgur.com/pV8C73h.jpg)

## How Do

Save the following code as a bookmark in your browser, and then click on it when you're watching your stream.

`javascript:void%20function(a){var%20b=function(a){var%20b,c,d,e=(location.host.match(/([^.]+)\.\w{2,3}(%3F:\.\w{2})%3F$/)||[])[1],f=a(%22head%22),g=a(%22body%22),h=a(%22iframe%22),j=a(%22object%22),k=a(%22video%22),l=%22position:relative;z-index:1;width:1024px;height:576px;margin:0px%20auto;padding:0px;border:0px;overflow:hidden;resize:both%22,m=[];m.push(%22body{margin:30px%200px%200px;padding:0px;text-align:center;background:%23000;overflow:hidden}%22),m.push(%22.idle{cursor:none!important}%22),m.push(%22%23video{%22+l+%22}%22),m.push(%22a{position:absolute;z-index:0;top:200px;left:0;width:100%25;text-align:center;color:%23fff}%22),m.push(%22iframe{margin:0px;padding:0px;border:0px;overflow:hidden}%22),m.push(%22video{max-width:100%25;max-height:100%25}%22);var%20n=%22%3Ctitle%3ECleanStream%3C/title%3E%3Cstyle%20type=\%22text/css\%22%3E%22+m.join(%22\n%22)+%22%3C/style%3E%22,o=%22%3Ca%20href=\%22https://github.com/greatkingrat/cleanstream/\%22%3EGitHub%3C/a%3E%22;if(0%3Cj.length)d=j.parent(),d.removeAttr(%22style%22).attr(%22style%22,l),f.html(n),g.html(d+o);else%20if(0%3Ck.length)f.html(n),g.html(%22%3Cdiv%20id=\%22video\%22%3E%22+k+%22%3C/div%3E%22+o);else{if(1%3Ch.length){for(var%20p=0;p%3C=h.length;p++)if(b=a(%22iframe:eq(%22+p+%22)%22).attr(%22src%22),confirm(%22Is%20this%20the%20correct%20source%3F\n\n%22+b)){c=b;break}}else%20c=h.attr(%22src%22);c%3F(f.html(n),g.html(%22%3Cdiv%20id=\%22video\%22%3E%3Ciframe%20src=\%22%22+c+%22\%22%20width=\%22100%25\%22%20height=\%22100%25\%22%20frameBorder=\%220\%22%20scrolling=\%22no\%22%3E%3C/iframe%3E%3C/div%3E%22+o)):alert(%22There%20are%20no%20more%20video%20sources%20on%20this%20page.%22)}setTimeout(function(){a(%22video%22).attr(%22controls%22,%22yes%22)},100),setInterval(function(){a(%22script%22).remove()},5e3);var%20q;window.addEventListener(%22mousemove%22,function(){clearTimeout(q),g.removeClass(%22idle%22),q=setTimeout(function(){g.addClass(%22idle%22)},5e3)},!0)};if(a%26%26a.fn%26%261.7%3C=parseFloat(a.fn.jquery))return%20void%20load(a);var%20c=document.createElement(%22script%22);c.src=%22https://ajax.googleapis.com/ajax/libs/jquery/1/jquery.js%22,c.onload=c.onreadystatechange=function(){var%20a=this.readyState;a%26%26%22loaded%22!==a%26%26%22complete%22!==a||b(jQuery.noConflict())},document.getElementsByTagName(%22head%22)[0].appendChild(c)}(window.jQuery);`

## But Also

The `cleanstream.js` file shows the expanded code, which is then converted into a bookmarklet using [Bookmarkleter](https://chriszarate.github.io/bookmarkleter/).
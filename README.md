# CleanStream

## What Is

A [bookmarklet](https://en.wikipedia.org/wiki/Bookmarklet) for turning your video stream from this:

![before](https://i.imgur.com/NTTqNcV.png)

To this:

![after](https://i.imgur.com/Xq069iI.png)

## How Do

Save the following code as a bookmark in your browser, and then click on it when you're watching your stream.

`javascript:void%20function(){(function(a,b,c,e){let%20f,g,h=!1;if(!(f=a.jQuery)||c%3Ef.fn.jquery||e(f,h)){let%20c=b.createElement(%22script%22);c.type=%22text/javascript%22,c.id=%22jq%22,c.src=%22https://cdn.jsdelivr.net/npm/jquery%403.6.0/dist/jquery.min.js%22,c.onload=c.onreadystatechange=function(){h||(g=this.readyState)%26%26%22loaded%22!=g%26%26%22complete%22!=g||(e((f=a.jQuery).noConflict(1),h=!0),f(c).remove())},(b.getElementsByTagName(%22head%22)[0]||b.documentElement).appendChild(c)}})(window,document,%223.5.1%22,function(a){function%20b(a,b){if(a.attributes)for(;0%3Ca.attributes.length;)a.removeAttribute(a.attributes[0].name);if(b[0].attributes)for(;0%3Cb[0].attributes.length;)b[0].removeAttribute(b[0].attributes[0].name)}a.noConflict();let%20c,d,e,f,g,h,i=(location.host.match(/([^.]+)\.\w{2,3}(%3F:\.\w{2})%3F$/)||[])[1],j=location.protocol,k=a(%22html%22)[0],l=a(%22head%22),m=a(%22body%22),n=l.find(%22title%22).text(),o=a(%22iframe%22),p=a(%22object%22),q=a(%22video%22),r=%22position:fixed;z-index:1;width:100%25;height:100%25;margin:0%20auto;padding:0;border:0;%22,s=[];s.push(%22html,body%20{%20height:100%25;font:normal%20400%2012px/12px%20serif;%20}%22),s.push(%22body%20{%20padding:0%200%200;margin:0;text-align:center;background:%23000;overflow:hidden;%20}%22),s.push(%22.idle%20{%20cursor:none!important;%20}%22),s.push(%22%23video%20{%20%22+r+%22%20}%22),s.push(%22%23video.idle%20{%20resize:none;%20}%22),s.push(%22a%20{%20position:absolute;z-index:2;top:10px;right:10px;color:%23222;text-decoration:none;%20}%22),s.push(%22a:hover%20{%20color:%23666;%20}%22),s.push(%22a.idle%20{%20display:none;%20}%22),s.push(%22iframe%20{%20margin:0;padding:0;border:0;overflow:hidden;%20}%22),s.push(%22video%20{%20position:fixed;width:100%25;height:100%25;top:0;right:0;bottom:0;left:0;%20}%22);let%20t=[%22%3Ctitle%3E%22+n+%22%3C/title%3E%22,%22%3Cstyle%20id=\%22style\%22%3E%22+s.join(%22\n%22)+%22%3C/style%3E%22,%22%3Cscript%20src=\%22https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js\%22%20id=\%22jq\%22%3E%3C/script%3E%22],u=%22%3Ca%20href=\%22https://github.com/greatkingrat/cleanstream/\%22%20id=\%22github\%22%3EGitHub%3C/a%3E%22;if(0%3Cp.length)f=p.parent(),f.removeAttr(%22style%22).attr(%22style%22,r),b(k,m),l.html(t.join(%22\n%22)),h=f+u;else%20if(0%3Cq.length)b(k,m),l.html(t.join(%22\n%22)),h=%22%3Cdiv%20id=\%22video\%22%3E%3C/div%3E%22+u;else%20if(0%3Co.length){if(1%3Co.length){for(let%20b=0;b%3C=o.length;b++)if(c=a(%22iframe:eq(%22+b+%22)%22).attr(%22src%22),c%26%26confirm(%22Is%20this%20the%20correct%20source%3F\n\n%22+c)){e=c;break}}else%20e=o.attr(%22src%22);e%3F(confirm(%22The%20page%20will%20now%20reload,%20play%20the%20video%20and%20press%20the%20CleanStream%20bookmark%20again.%22),window.location=e):(alert(%22There%20are%20no%20more%20video%20sources%20on%20this%20page.%22),h=%22%22)}%22%22!==h%26%26(m.html(h),0%3Cq.length%26%26a(%22%23video%22).html(q),setTimeout(function(){a(%22video%22).attr(%22controls%22,%22yes%22).attr(%22autoplay%22,%22yes%22),d=a(%22%23video%22)},100),setInterval(function(){a(%22*%22).not(%22html,%20head,%20title,%20%23style,%20%23jq,%20body,%20%23video,%20%23video%20*,%20%23github%22).remove(),a(%22[onclick]%22).removeAttr(%22onclick%22),a(%22[style]%22).not(%22%23video[style]%22).removeAttr(%22style%22),a(%22[class]%22).not(%22.idle%22).removeAttr(%22class%22),$(%22body%22).is(%22:empty%22)%26%26(m.html(h),0%3Cd.length%26%26(a(%22%23video%22).html(q),q.trigger(%22play%22)))},1e3),window.addEventListener(%22mousemove%22,function(){clearTimeout(g),m.removeClass(%22idle%22),d.removeClass(%22idle%22),$(%22a%22).removeClass(%22idle%22),g=setTimeout(function(){m.addClass(%22idle%22),d.addClass(%22idle%22),$(%22a%22).addClass(%22idle%22)},3e3)},!0))})}();`

## Then What

It works best if you play the video first and then click on the bookmark.

Ideally it will find the video right away and do it's thing, but if there are multiple video/iframe sources on the page then it will cycle through the options and ask you to confirm the correct one.

On the rare occasion, the video is embedded twice, so you'll be redirected to the first layer and you'll have to click on the bookmark again. You'll be alerted when this happens.

## But Also

The `cleanstream.js` file shows the expanded code, which is then converted into a bookmarklet using [Bookmarkleter](https://chriszarate.github.io/bookmarkleter/).
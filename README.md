# CleanStream

## What Is

A bookmarklet for turning your video stream from this:

![before](https://i.imgur.com/DgADIWB.jpg)

To this:

![after](https://i.imgur.com/Z6CmL4H.jpg)

## How Do

Save the following code as a bookmark in your browser, and then click on it when you're watching your stream.

`(javascript:void%20function(){var%20a=(location.host.match(/([^.]+)\.\w{2,3}(%3F:\.\w{2})%3F$/)||[])[1],b=$(%22iframe%22),c=$(%22object%22),d=$(%22video%22),e=[];e.push(%22.idle{cursor:none!important;}%22);var%20f=%22%3Ctitle%3ETitle%3C/title%3E%3Cstyle%20type=\%22text/css\%22%3E%22+e.join(%22\n%22)+%22%3C/style%3E%22;if([%22navixsport%22].includes(a)%26%260%3Cc.length){var%20g=%22position:relative;width:1024px;height:576px;margin:0px%20auto;padding:0px;border:0px;overflow:hidden;resize:both;%22,h=c.parent();$(%22head%22).html(f),h.removeAttr(%22style%22).attr(%22style%22,%22width:1024px;height:576px;margin:0px%20auto;padding:0px;border:0px;overflow:hidden;%22),$(%22body%22).attr(%22style%22,%22margin:30px%200px%200px;padding:0px;text-align:center;background:%23000;overflow:hidden;%22).html(h)}else%20if(%22rjh217%22==a){var%20g=%22position:relative;width:1024px;height:576px;margin:0px%20auto;padding:0px;border:0px;overflow:hidden;resize:both;%22;video=$(%22%23vid%22),$(%22head%22).html(f),$(%22body%22).attr(%22style%22,%22margin:30px%200px%200px;padding:0px;text-align:center;background:%23000;overflow:hidden;%22).html(%22%3Cdiv%20id=\%22video\%22%20style=\%22%22+g+%22\%22%3E%3C/div%3E%22),$(%22%23video%22).html(video),$(%22%23vid%20%3E%20div%22).css(%22height%22,%22576px%22)}else%20if(0%3Cd.length){var%20g=%22position:relative;width:1024px;height:576px;margin:0px%20auto;padding:0px;border:0px;overflow:hidden;resize:both;%22;$(%22head%22).html(f),$(%22body%22).attr(%22style%22,%22margin:30px%200px%200px;padding:0px;text-align:center;background:%23000;overflow:hidden;%22).html(%22%3Cdiv%20id=\%22video\%22%20style=\%22%22+g+%22\%22%3E%3C/div%3E%22),$(%22%23video%22).html(d)}else{if(1%3Cb.length){for(var%20j,k=0;k%3C=b.length;k++)if(j=$(%22iframe:eq(%22+k+%22)%22).attr(%22src%22),confirm(%22Is%20this%20the%20correct%20iframe%3F\n\n%22+j)){var%20l=j;break}}else%20var%20l=b.attr(%22src%22);if(l){var%20g=%22position:relative;width:1024px;height:576px;margin:0px%20auto;padding:0px;border:0px;overflow:hidden;resize:both;%22;$(%22head%22).html(f),$(%22body%22).attr(%22style%22,%22margin:30px%200px%200px;padding:0px;text-align:center;background:%23000;%22).html(%22%3Cdiv%20id=\%22video\%22%20style=\%22%22+g+%22\%22%3E%3Ciframe%20src=\%22%22+l+%22\%22%20width=\%22100%25\%22%20height=\%22100%25\%22%20frameBorder=\%220\%22%20scrolling=\%22no\%22%20style=\%22margin:0px;padding:0px;border:0px;overflow:hidden;\%22%3E%3C/iframe%3E%3C/div%3E%22)}else%20alert(%22There%20are%20no%20more%20iframe%20sources%20on%20this%20page.\n\nThis%20script%20only%20scans%20for%20iframes,%20if%20the%20video%20is%20embedded%20without%20an%20iframe%20then%20it%20can't%20find%20it.\n\nThis%20script%20was%20last%20updated%202020-07-01.%20Check%20out%20https://github.com/greatkingrat/cleanstream/%20for%20updates.%22)}setTimeout(function(){$(%22video%22).attr(%22style%22,%22max-width:100%25;max-height:100%25;%22)},100),setInterval(function(){$(%22script%22).remove()},5e3);var%20m;window.addEventListener(%22mousemove%22,function(){clearTimeout(m),$(%22body%22).removeClass(%22idle%22),m=setTimeout(function(){$(%22body%22).addClass(%22idle%22)},5e3)},!0);var%20n=document.createElement(%22script%22);n.src=%22https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js%22,n.addEventListener%3Fn.addEventListener(%22load%22,callback,!1):n.readyState%26%26(n.onreadystatechange=callback),document.body.appendChild(n)}();)`

## But Also

The `cleanstream.js` file shows the expanded code, which is then converted into a bookmarklet using [Bookmarkleter](https://chriszarate.github.io/bookmarkleter/).
(function(g,d){"function"===typeof define&&define.amd?define([],d):"object"===typeof module&&module.exports?module.exports=d():g.Rellax=d()})(this,function(){var g=function(d,l){var b=Object.create(g.prototype),h=0,p=0,k=0,q=0,f=[],t=!1,y=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||window.oRequestAnimationFrame||function(a){setTimeout(a,1E3/60)},z=window.transformProp||function(){var a=document.createElement("div"); if(null===a.style.transform){var c=["Webkit","Moz","ms"],b;for(b in c)if(void 0!==a.style[c[b]+"Transform"])return c[b]+"Transform"}return"transform"}(),r=function(a,b,e){return a<=b?b:a>=e?e:a};b.options={speed:-2,center:!1,round:!0,vertical:!0,horizontal:!1,callback:function(){}};l&&Object.keys(l).forEach(function(a){b.options[a]=l[a]});b.options.speed=r(b.options.speed,-10,10);d||(d=".rellax");var u="string"===typeof d?document.querySelectorAll(d):[d];if(0<u.length)b.elems=u;else throw Error("The elements you're trying to select don't exist."); var A=function(a){var c=a.getAttribute("data-rellax-percentage"),e=a.getAttribute("data-rellax-speed"),f=a.getAttribute("data-rellax-zindex")||0,d=b.options.vertical?c||b.options.center?window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop:0:0,m=b.options.horizontal?c||b.options.center?window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft:0:0,g=d+a.getBoundingClientRect().top,h=a.clientHeight||a.offsetHeight||a.scrollHeight,k=m+a.getBoundingClientRect().left, l=a.clientWidth||a.offsetWidth||a.scrollWidth;d=c?c:(d-g+p)/(h+p);var n=c?c:(m-k+q)/(l+q);b.options.center&&(d=n=.5);m=e?r(e,-10,10):b.options.speed;if(c||b.options.center)m=r(e||b.options.speed,-5,5);c=v(n,d,m);a=a.style.cssText;e="";0<=a.indexOf("transform")&&(e=a.indexOf("transform"),e=a.slice(e),e=(d=e.indexOf(";"))?" "+e.slice(11,d).replace(/\s/g,""):" "+e.slice(11).replace(/\s/g,""));return{baseX:c.x,baseY:c.y,top:g,left:k,height:h,width:l,speed:m,style:a,transform:e,zindex:f}},w=function(){var a= h,c=k;h=void 0!==window.pageYOffset?window.pageYOffset:(document.documentElement||document.body.parentNode||document.body).scrollTop;k=void 0!==window.pageXOffset?window.pageXOffset:(document.documentElement||document.body.parentNode||document.body).scrollLeft;return a!=h&&b.options.vertical||c!=k&&b.options.horizontal?!0:!1},v=function(a,c,e){var d={};a=100*e*(1-a);c=100*e*(1-c);d.x=b.options.round?Math.round(a):Math.round(100*a)/100;d.y=b.options.round?Math.round(c):Math.round(100*c)/100;return d}, x=function(){w()&&!1===t&&n();y(x)},n=function(){for(var a=0;a<b.elems.length;a++){var c=v((k-f[a].left+q)/(f[a].width+q),(h-f[a].top+p)/(f[a].height+p),f[a].speed),d=c.y-f[a].baseY,g=c.x-f[a].baseX;b.elems[a].style[z]="translate3d("+(b.options.horizontal?g:"0")+"px,"+(b.options.vertical?d:"0")+"px,"+f[a].zindex+"px) "+f[a].transform}b.options.callback(c)};b.destroy=function(){for(var a=0;a<b.elems.length;a++)b.elems[a].style.cssText=f[a].style;t=!0};(function(){p=window.innerHeight;q=window.innerWidth; w();for(var a=0;a<b.elems.length;a++){var c=A(b.elems[a]);f.push(c)}window.addEventListener("resize",function(){n()});x();n()})();return b};return g});
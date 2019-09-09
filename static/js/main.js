function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _defineProperties(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}function _createClass(a,b,c){return b&&_defineProperties(a.prototype,b),c&&_defineProperties(a,c),a}// Generated by CoffeeScript 2.4.1
(function(){var a,b,c,d,e,f,g,h,i,j,k,l,m,n=[].indexOf;l="undefined"!=typeof exports&&null!==exports?exports:this,k=["backpack.tf","trade.tf"],d=/*#__PURE__*/function(){"use strict";function a(){_classCallCheck(this,a),this.id=i("steam_id"),this.loggedIn=!!this.id,Object.defineProperties(this,{priceSource:{get:function get(){return i("price_source")||k[0]},set:function set(a){return m("price_source",a,365)}}})}return _createClass(a,[{key:"isOwnPage",value:function isOwnPage(){var a;return this.loggedIn&&this.id===(null==(a=document.getElementById("steamid"))?void 0:a.getAttribute("data-id"))}}]),a}(),b=/*#__PURE__*/function(){"use strict";function a(b){_classCallCheck(this,a);var c,d,e,f,g,h,i,l,m,n,o;for(this.elem=b,this.name=this.elem.title,this.id=this.elem.getAttribute("data-index"),this.url=this.elem.getAttribute("data-url"),this.imageUrl=this.elem.getAttribute("data-image"),this.description=this.elem.getAttribute("data-description")||"",this.level=this.elem.getAttribute("data-level"),this.attributes=(null==(f=this.elem.getElementsByTagName("div"))||null==(g=f[0])?void 0:g.innerHTML)||"",this.classes=(null==(h=this.elem.getAttribute("data-classes"))?void 0:h.split(","))||[],this.tags=(null==(i=this.elem.getAttribute("data-tags"))?void 0:i.split(","))||[],this.storePrice=this.elem.getAttribute("data-storeprice"),this.blueprints=this.elem.getElementsByTagName("ul"),this.prices={},(c=0,d=k.length);c<d;c++)o=k[c],e=JSON.parse(null==(l=null==(m=this.elem.getAttribute("data-".concat(o)))?void 0:m.replace("Collector\"s","Collector's"))?null:l),e&&(this.prices[o]=e);this.wishIndex=this.elem.getAttribute("data-i"),this.qualityNo=null==(n=this.elem.className.match(/quality-(\d+)/))?void 0:n[1]}return _createClass(a,[{key:"remove",value:function remove(){return this.elem.parentNode.removeChild(this.elem)}}]),a}(),c=/*#__PURE__*/function(){"use strict";function c(){var a=!(0<arguments.length&&void 0!==arguments[0])||arguments[0];_classCallCheck(this,c),this.showLink=a,this.elem=document.createElement("div"),this.elem.id="itembox",document.body.appendChild(this.elem)}return _createClass(c,[{key:"show",value:function show(a){var c;return this.item=new b(a),this.sources=function(){var a,b,d;for(d=[],a=0,b=k.length;a<b;a++)c=k[a],c in this.item.prices&&d.push(c);return d}.call(this),this.source=user.priceSource,this._generate(),this.elem.style.display="block"}},{key:"hide",value:function hide(){return this.elem.style.display="none"}},{key:"_nextPriceSource",value:function _nextPriceSource(){return this.source=this.sources[(this.sources.indexOf(this.source)+1)%this.sources.length]}},{key:"_tagsHTML",value:function _tagsHTML(){var a,b,c,d,e,f,h,l,m,o,p,q;if(this.item.tags.length){for(a="<div id=\"tags\">",e=0<=n.call(this.item.tags,"weapon"),d=0<=n.call(this.item.tags,"token"),o=["primary","secondary","melee","pda2"],(f=0,l=o.length);f<l;f++)b=o[f],0<=n.call(this.item.tags,b)&&(e?(q="".concat(g(b)," Weapon"),c=b):d&&(q="Slot Token",c="slot-token"));for(p=["hat","misc","tool","bundle"],h=0,m=p.length;h<m;h++)if(b=p[h],0<=n.call(this.item.tags,b)){var r=[g(b),b];q=r[0],c=r[1]}return d&&this.item.classes.length&&(q="Class Token",c="class-token"),null!=q&&null!=c&&(a+="<a href=\"/search?q=".concat(encodeURIComponent(q),"\"\n target=\"_blank\" title=\"").concat(q,"\" class=\"").concat(c,"\"></a>")),a+="</div>"}return""}},{key:"_nameHTML",value:function _nameHTML(){var a;return a=this.item.name,this.showLink&&(a="<a href=\"".concat(this.item.url,"\"\n class=\"glow\" title=\"Go to Item Page\">").concat(a,"</a>")),a="<h2 id=\"itemname\">".concat(a,"</h2>\n<i id=\"shortlinkbutton\" class=\"fa fa-caret-square-o-down\"\n title=\"Short URL\"></i><br>\n<div id=\"shortlink\" style=\"display:none\">\n<input type=\"text\" value=\"https://item.tf/").concat(this.item.id,"\" readonly><br>\n</div>")}},{key:"_classesHTML",value:function _classesHTML(){var a,b,c,d,e;if(this.item.classes.length){for(b="<div id=\"classes\">",e=this.item.classes,(c=0,d=e.length);c<d;c++)a=e[c],b+="<a href=\"/search?q=".concat(a,"\" target=\"_blank\"\n title=\"").concat(a,"\" class=\"").concat(a.toLowerCase(),"\"></a>");return b+="</div>"}return""}},{key:"_bundleHTML",value:function _bundleHTML(){// Link to bundle items HTML
return 0<=n.call(this.item.tags,"bundle")&&-1!==this.item.description.indexOf("---")?"<a href=\"/search?q=".concat(encodeURIComponent(this.item.name),"%20Set\"\n target=\"_blank\">\n<div class=\"rounded glow\" style=\"display: inline-block; padding: 7px\">\nView Items\n</div>\n</a>"):""}},{key:"_priceSourceHTML",value:function _priceSourceHTML(){var a,b,c,d,e,f,g,h;if(c="",this.item.prices[this.source]||this._nextPriceSource(),this.item.prices[this.source])for(g=Object.keys(this.item.prices[this.source]).sort(),d=0,e=g.length;d<e;d++)h=g[d],f=this.item.prices[this.source][h],b=f.match(/(Refined|Key(s)?|Bud(s)?)/),b&&(a=b[0],f=f.replace(/(\d+(\.\d+)?)/g,"<a href='/search?q=$1%20".concat(a,"' target='_blank' class='glow'>$1</a>"))),c+="<a href=\"/search?q=".concat(h,"\" target=\"_blank\"\n class=\"").concat(h.toLowerCase().replace("'",""),"\">").concat(h,"</a>: ").concat(f,"<br>");return c}},{key:"_pricesHTML",value:function _pricesHTML(){var a;return a=this._priceSourceHTML(),a?"<div id='marketprice'><span id='pricesource'>".concat(g(this.source),"</span><h3 id='prices'>").concat(a,"</h3></div>"):""}},{key:"_blueprintsHTML",value:function _blueprintsHTML(){var a,b,c,d,e,f,g,h,m,n,o,p,q,r,s,t,u,v;if(this.item.blueprints.length){for(c="<div id=\"blueprints\">",r=this.item.blueprints,(g=0,n=r.length);g<n;g++){for(a=r[g],b=a.getAttribute("data-chance"),c+="<div class=\"blueprint\">",s=a.getElementsByTagName("li"),(h=0,o=s.length);h<o;h++)for(f=s[h],d=m=0,t=f.getAttribute("data-count");0<=t?m<t:m>t;d=0<=t?++m:--m)q=f.title,e=f.getAttribute("data-index"),u="background-image: url(".concat(f.getAttribute("data-image"),")"),p="<div title=\"".concat(q,"\" class='item-small' style='").concat(u,"'></div>"),v=f.getAttribute("data-url"),v||(q=q.replace("Any ","").replace("Spy Watch","PDA2 Weapon"),2<q.split(" ").length&&(q=q.replace("Weapon","Set")),v="/search?q=".concat(encodeURIComponent(q))),c+="<a href=\"".concat(v,"\" target='_blank'>").concat(p,"</a>");c+="<div title=\"Crafting Chance\" style=\"position: absolute; right: 10px\">\n<h3>".concat(b,"%</h3></div></div>")}return c+="</div>"}return""}},{key:"_tradeHTML",value:function _tradeHTML(){return"<form name=\"tradeform\" method=\"POST\" style=\"display: inline-block\">\n\n  <input type=\"hidden\" name=\"json\">\n  <input type=\"submit\" name=\"submit\" value=\"Search!\" style=\"display: none\">\n\n  <select id=\"tradetype\" class=\"textbox\">\n    <option value=\"has1\">Want</option>\n    <option value=\"wants1\">Have</option>\n  </select>\n\n  <select id=\"quality\" class=\"textbox\">\n    <option value=\"6\">Unique</option>\n    <option value=\"3\">Vintage</option>\n    <option value=\"11\">Strange</option>\n    <option value=\"1\">Genuine</option>\n    <option value=\"14\">Collector's</option>\n    <option value=\"13\">Haunted</option>\n    <option value=\"5\">Unusual</option>\n  </select>\n\n</form>"}},{key:"_wishlistHTML",value:function _wishlistHTML(){return user.loggedIn?"<div style=\"display: inline-block;\">\n<div id=\"wishlistmessage\"\n style=\"display: none; margin: 0 0 4px -18px\">Added</div>\n<i id=\"wishlistbutton\" class=\"fa fa-star fa-lg button-icon\"\n title=\"Add to Wishlist\"></i>\n</div>":""}},{key:"_buttonsHTML",value:function _buttonsHTML(){var a;return a="http://wiki.teamfortress.com/wiki/".concat(encodeURIComponent(this.item.name)),"<div id=\"buttons\">\n\n<a class=\"fa fa-info fa-lg button-icon\" target=\"_blank\"\n title=\"Open in Wiki\" href=\"".concat(a,"\"></a>\n\n<a id=\"market-btn\" class=\"fa fa-shopping-cart fa-lg button-icon\"\n target=\"_blank\" title=\"Community Market\"></a>\n\n<a id=\"classifieds-btn\" class=\"fa fa-exchange fa-lg button-icon\"\n target=\"_blank\" title=\"Find Trades\"></a>\n\n").concat(this._tradeHTML(),"\n").concat(this._wishlistHTML(),"\n</div>")}},{key:"_buyHTML",value:function _buyHTML(){// Buy button and store price HTML
return this.item.storePrice?"<div id=\"buy\">\n<form style=\"display: inline-block\">$".concat(this.item.storePrice,"<br>\n<input type=\"text\" value=\"1\" size=\"1\" id=\"quantity\"\n class=\"textbox\" style=\"text-align: right\">\n</form><a href=\"#\" target=\"_blank\" id=\"buybutton\"></a></div>"):""}},{key:"_nameLink",value:function _nameLink(){var a,b;return b=document.getElementById("shortlinkbutton"),a=document.getElementById("shortlink"),b.onclick=function(){return"none"===a.style.display?(a.style.display="inline",b.className=b.className.replace("down","up"),a.getElementsByTagName("input")[0].select()):(a.style.display="none",b.className=b.className.replace("up","down"))}}},{key:"_pricesLink",value:function _pricesLink(){var a,b,c=this;if(a=document.getElementById("pricesource"),b=document.getElementById("prices"),1<this.sources.length)return a.style.cursor="pointer",a.onclick=function(){return c._nextPriceSource(),a.innerHTML=g(c.source),b.innerHTML=c._priceSourceHTML()},a.onmouseover=function(){return a.style.textShadow="0 0 10px rgb(196, 241, 128)"},a.onmouseout=function(){return a.style.textShadow=""}}},{key:"_buttonsLink",value:function _buttonsLink(){var a=this;return(this.form.quality.onchange=function(){var b,c,d;return c=document.getElementById("market-btn"),d=a.form.quality.options[a.form.quality.selectedIndex].text.toLowerCase().replace("unique","Unique").replace("genuine","rarity1").replace("unusual","rarity4").replace("collector's","collectors"),c.href="http://steamcommunity.com/market/search?category_440_Type%5B%5D=any&category_440_Quality%5B%5D=tag_".concat(d,"&appid=440&q=").concat(encodeURIComponent(a.item.name)),b=document.getElementById("classifieds-btn"),b.href="http://backpack.tf/classifieds?item=".concat(encodeURIComponent(a.item.name),"&quality=").concat(a.form.quality.value)})()}},{key:"_wishlistLink",value:function _wishlistLink(){var a,b,c,d,e,f,g,h=this;// Update wishlist item index
if(user.isOwnPage())for(f=document.getElementsByClassName("item"),c=d=0,e=f.length;d<e;c=++d)if(g=f[c],g.getAttribute("data-i")===this.item.wishIndex){this.item.wishIndex=c.toString();break}return user.loggedIn?(a="/wishlist/add",b=document.getElementById("wishlistbutton"),user.isOwnPage()&&(a="/wishlist/remove",b.title="Remove from Wishlist"),b.onclick=function(){var b;return b={index:h.item.id,quality:h.form.quality.value},user.isOwnPage()&&(b={i:h.item.wishIndex}),j(a,b,function(a){var b;return"Added"===a?(b=document.getElementById("wishlistmessage"),b.style.display="block",b.className="animated fadeInLeft",setTimeout(function(){return b.className="animated fadeOut"},1e3)):"Removed"===a?(h.hide(),h.item.remove()):void 0})}):void 0}},{key:"_buyLink",value:function _buyLink(){var a,b,c=this;if(a=document.getElementById("buybutton"),a)return b=document.getElementById("quantity"),(b.onchange=function(){return a.href="http://store.steampowered.com/buyitem/440/".concat(c.item.id,"/").concat(b.value)})()}},{key:"_generate",value:function _generate(){var b,c,d,e,f,g,h;// Itembox HTML
// Wishlist item quality
if(this.elem.innerHTML="".concat(this._tagsHTML()).concat(this._nameHTML()).concat(this._classesHTML(),"\n").concat(this._bundleHTML(),"\n").concat(this._pricesHTML(),"\n").concat(this._blueprintsHTML(),"\n").concat(this._buttonsHTML()).concat(this._buyHTML()),this.form=document.tradeform,this._nameLink(),this._pricesLink(),this._buttonsLink(),this._wishlistLink(),this._buyLink(),b=this.item.elem.cloneNode(!0),b.id="hoverarea",b.className="",this.item.imageUrl&&b.setAttribute("style","background-image: url(".concat(this.item.imageUrl,")")),this.elem.insertBefore(b,document.getElementById("blueprints")||document.getElementById("buttons")),new a(b),this.item.qualityNo)return this.form.quality.value=this.item.qualityNo;// Auto quality selection
if(this.item.prices[this.source]){for(g=this.form.quality.options,h=[],(c=d=0,e=g.length);d<e;c=++d)if(f=g[c],f.innerHTML in this.item.prices[this.source]){this.form.quality.selectedIndex=c,this.form.quality.onchange();break}else h.push(void 0);return h}}}]),c}(),a=/*#__PURE__*/function(){"use strict";function a(b,d){_classCallCheck(this,a),this._show=this._show.bind(this),this._hide=this._hide.bind(this),this._hideItemBox=this._hideItemBox.bind(this),this._moveMouse=this._moveMouse.bind(this),this._clickItem=this._clickItem.bind(this),this.itemBox=d,b instanceof c&&(this.itemBox=b,b=null),this.elem=document.getElementById("hoverbox"),this.elem||(this.elem=document.createElement("div"),this.elem.id="hoverbox",document.body.appendChild(this.elem)),this._add(b)}return _createClass(a,[{key:"_add",value:function _add(a){var b,c,d,e,f,g,h,i,l=this;for(h=a?[a]:document.getElementsByClassName("item"),d=0,f=h.length;d<f;d++)c=h[d],c.addEventListener("mouseout",this._hide,!1),c.addEventListener("mousemove",this._moveMouse,!1),c.addEventListener("mouseover",this._show,!1),this.itemBox&&c.addEventListener("click",this._clickItem,!1);if(this.itemBox){// iOS doesn't support 'click' on document
for(i=["click","touchend"],e=0,g=i.length;e<g;e++)b=i[e],document.addEventListener(b,this._hideItemBox,!1);return document.onkeydown=function(a){if(27===a.keyCode)return l.itemBox.hide()}}}},{key:"_show",value:function _show(a){var c,d,e;return e=new b(a.target),d=h(e.description),d&&(0<=n.call(e.tags,"bundle")&&-1!==d.indexOf("---")&&(c=d.split("---"),d="".concat(c[0],"\n<span style=\"color: #95af0c\">").concat(c[1],"</span>")),d="<br>".concat(d)),this.elem.innerHTML="<div style=\"color: rgb(230, 230, 230)\">".concat(e.name,"</div><span style=\"color: gray\">").concat(e.level,"</span>").concat(e.attributes).concat(d),this.elem.style.display="block"}},{key:"_hide",value:function _hide(){return this.elem.style.display="none"}},{key:"_hideItemBox",value:function _hideItemBox(a){var b,c,d;if(b=a.target,"item"!==b.className){for(c=[];b;)c.push(b),b=b.parentNode;if(d=this.itemBox.elem,0>n.call(c,d))return this.itemBox.hide()}}},{key:"_moveMouse",value:function _moveMouse(a){return this.elem.style.top="".concat(a.pageY+28,"px"),this.elem.style.left="".concat(a.pageX-154,"px")}},{key:"_clickItem",value:function _clickItem(a){return this.itemBox.show(a.target),a.preventDefault(),a.stopPropagation()}}]),a}(),g=function(a){return a[0].toUpperCase()+a.slice(1)},h=function(a){return a.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")},i=function(a){var b,c,d,e;for(c=document.cookie.split(";"),d=0,e=c.length;d<e;d++){for(b=c[d];" "===b[0];)b=b.slice(1);if(b.slice(0,a.length)===a)return b.slice(a.length+1)}},m=function(a,b,c){var d,e;return e="",c&&(d=new Date,d.setDate(d.getDate()+c),e=";expires=".concat(d.toUTCString())),document.cookie="".concat(a,"=").concat(b).concat(e)},f=function(a,b){var c;return c=e(b),c.open("GET",a,!0),c.setRequestHeader("X-Requested-With","XMLHttpRequest"),c.send()},j=function(a,b,c){var d,f,g;return f=e(c),f.open("POST",a,!0),f.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),f.send(function(){var a;for(d in a=[],b)g=b[d],a.push("".concat(d,"=").concat(g));return a}().join("&"))},e=function(a){var b;return b=new XMLHttpRequest,b.onreadystatechange=function(){if(4===b.readyState&&200===b.status)return a(b.responseText)},b},l.user=new d,l.ItemBox=c,l.HoverBox=a}).call(this);
//# sourceMappingURL=main.js.map

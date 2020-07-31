var html2nodes=function(t){var e={};function i(s){if(e[s])return e[s].exports;var n=e[s]={i:s,l:!1,exports:{}};return t[s].call(n.exports,n,n.exports,i),n.l=!0,n.exports}return i.m=t,i.c=e,i.d=function(t,e,s){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(s,n,function(e){return t[e]}.bind(null,n));return s},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=0)}([function(t,e,i){var s=i(2),n=i(3),r={align:!0,alt:!0,author:!0,autoplay:!0,class:!0,color:!0,colspan:!0,controls:!0,"data-src":!0,dir:!0,face:!0,height:!0,href:!0,id:!0,ignore:!0,loop:!0,muted:!0,name:!0,poster:!0,rowspan:!0,size:!0,span:!0,src:!0,start:!0,style:!0,type:!0,"unit-id":!0,width:!0},o={area:!0,base:!0,basefont:!0,br:!0,col:!0,circle:!0,command:!0,ellipse:!0,embed:!0,frame:!0,hr:!0,img:!0,input:!0,isindex:!0,keygen:!0,line:!0,link:!0,meta:!0,param:!0,path:!0,polygon:!0,polyline:!0,rect:!0,source:!0,stop:!0,track:!0,use:!0,wbr:!0};function a(t,e){this._cbs=t,this._callback=e,this._tagname="",this._attribname="",this._attribvalue="",this._attribs=null,this._stack=[],this._tokenizer=new s(this)}a.prototype.ontext=function(t){this._cbs.ontext(t)},a.prototype.onopentagname=function(t){t=t.toLowerCase(),this._tagname=t,this._attribs={style:""},o[t]||this._stack.push(t)},a.prototype.onopentagend=function(){this._attribs&&(this._cbs.onopentag(this._tagname,this._attribs),this._attribs=null),o[this._tagname]&&this._cbs.onclosetag(this._tagname),this._tagname=""},a.prototype.onclosetag=function(t){if(t=t.toLowerCase(),this._stack.length&&!o[t]){var e=this._stack.lastIndexOf(t);if(-1!==e)for(e=this._stack.length-e;e--;)this._cbs.onclosetag(this._stack.pop());else"p"===t&&(this.onopentagname(t),this._closeCurrentTag())}else"br"!==t&&"hr"!==t&&"p"!==t||(this.onopentagname(t),this._closeCurrentTag())},a.prototype._closeCurrentTag=function(){var t=this._tagname;this.onopentagend(),this._stack[this._stack.length-1]===t&&(this._cbs.onclosetag(t),this._stack.pop())},a.prototype.onattribend=function(){this._attribvalue=this._attribvalue.replace(/&quot;/g,'"'),this._attribs&&r[this._attribname]&&(this._attribs[this._attribname]=this._attribvalue),this._attribname="",this._attribvalue=""},a.prototype.onend=function(){for(var t=this._stack.length;t>0;this._cbs.onclosetag(this._stack[--t]));this._callback({nodes:this._cbs.nodes,title:this._cbs.title,imgList:this._cbs.imgList})},a.prototype.write=function(t){this._tokenizer.parse(t)},t.exports=function(t,e){return new Promise(function(i,s){try{var r="";t=t.replace(/<style.*?>([\s\S]*?)<\/style>/gi,function(){return r+=arguments[1],""}),new a(new n(r,e),function(t){return i(t)}).write(t)}catch(t){return s(t)}})}},function(t,e){function i(t){if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(t=function(t,e){if(!t)return;if("string"==typeof t)return s(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);"Object"===i&&t.constructor&&(i=t.constructor.name);if("Map"===i||"Set"===i)return Array.from(t);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return s(t,e)}(t))){var e=0,i=function(){};return{s:i,n:function(){return e>=t.length?{done:!0}:{done:!1,value:t[e++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var n,r,o=!0,a=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return o=t.done,t},e:function(t){a=!0,r=t},f:function(){try{o||null==n.return||n.return()}finally{if(a)throw r}}}}function s(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,s=new Array(e);i<e;i++)s[i]=t[i];return s}function n(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.res=JSON.parse(JSON.stringify(e)),this._state="SPACE",this._buffer=t,this._sectionStart=0,this._index=0,this._name="",this._content="",this._list=[],this._comma=!1}n.prototype.SPACE=function(t){/[a-zA-Z.#]/.test(t)?(this._sectionStart=this._index,this._state="InName"):"@"==t?this._state="Ignore1":"/"==t&&(this._state="BeforeComment")},n.prototype.BeforeComment=function(t){"*"==t?this._state="InComment":(this._index--,this._state="SPACE")},n.prototype.InComment=function(t){"*"==t&&(this._state="AfterComment")},n.prototype.AfterComment=function(t){"/"==t?this._state="SPACE":(this._index--,this._state="InComment")},n.prototype.InName=function(t){"{"==t?(this._list.push(this._buffer.substring(this._sectionStart,this._index)),this._sectionStart=this._index+1,this._state="InContent"):","==t?(this._list.push(this._buffer.substring(this._sectionStart,this._index)),this._sectionStart=this._index+1,this._comma=!0):"."!=t&&"#"!=t||this._comma?/\s/.test(t)?(this._name=this._buffer.substring(this._sectionStart,this._index),this._state="NameSpace"):/[>:\[]/.test(t)?this._list.length?this._state="IgnoreName":this._state="Ignore1":this._comma=!1:this._buffer=this._buffer.splice(this._index,1," ")},n.prototype.NameSpace=function(t){"{"==t?(this._list.push(this._name),this._sectionStart=this._index+1,this._state="InContent"):","==t?(this._comma=!0,this._list.push(this._name),this._sectionStart=this._index+1,this._state="InName"):/\S/.test(t)&&(this._comma?(this._sectionStart=this._index,this._index--,this._state="InName"):this._list.length?this._state="IgnoreName":this._state="Ignore1")},n.prototype.InContent=function(t){if("}"==t){this._content=this._buffer.substring(this._sectionStart,this._index);var e,s=i(this._list);try{for(s.s();!(e=s.n()).done;){var n=e.value;this.res[n]=(this.res[n]||"")+this._content}}catch(t){s.e(t)}finally{s.f()}this._list=[],this._comma=!1,this._state="SPACE"}},n.prototype.IgnoreName=function(t){","==t?(this._sectionStart=this._index+1,this._state="InName"):"{"==t&&(this._sectionStart=this._index+1,this._state="InContent")},n.prototype.Ignore1=function(t){";"==t?(this._state="SPACE",this._sectionStart=this._index+1):"{"==t&&(this._state="Ignore2")},n.prototype.Ignore2=function(t){"}"==t?(this._state="SPACE",this._sectionStart=this._index+1):"{"==t&&(this._state="Ignore3")},n.prototype.Ignore3=function(t){"}"==t&&(this._state="Ignore2")},n.prototype.parse=function(){for(;this._index<this._buffer.length;this._index++)this[this._state](this._buffer[this._index]);return this.res},t.exports=n},function(t,e){function i(t){this._state="TEXT",this._buffer="",this._sectionStart=0,this._index=0,this._cbs=t}i.prototype.TEXT=function(t){var e=this._buffer.indexOf("<",this._index);-1!=e?(this._index=e,this._cbs.ontext(this._getSection()),this._state="BeforeTag",this._sectionStart=this._index):this._index=this._buffer.length},i.prototype.BeforeTag=function(t){switch(t){case"/":this._state="BeforeCloseTag";break;case"!":this._state="BeforeDeclaration";break;case"?":var e=this._buffer.indexOf(">",this._index);-1!=e?(this._index=e,this._sectionStart=this._index+1):this._sectionStart=this._index=this._buffer.length,this._state="TEXT";break;case">":this._state="TEXT";break;case"<":this._cbs.ontext(this._getSection()),this._sectionStart=this._index;break;default:/\s/.test(t)?this._state="TEXT":(this._state="InTag",this._sectionStart=this._index)}},i.prototype.InTag=function(t){("/"===t||">"===t||/\s/.test(t))&&(this._cbs.onopentagname(this._getSection()),this._state="BeforeAttrsName",this._index--)},i.prototype.BeforeAttrsName=function(t){">"===t?(this._cbs.onopentagend(),this._state="TEXT",this._sectionStart=this._index+1):"/"===t?this._state="InSelfCloseTag":/\s/.test(t)||(this._state="InAttrsName",this._sectionStart=this._index)},i.prototype.InAttrsName=function(t){("="===t||"/"===t||">"===t||/\s/.test(t))&&(this._cbs._attribname=this._getSection().toLowerCase(),this._sectionStart=-1,this._state="AfterAttrsName",this._index--)},i.prototype.AfterAttrsName=function(t){"="===t?this._state="BeforeAttrsValue":"/"===t||">"===t?(this._cbs.onattribend(),this._state="BeforeAttrsName",this._index--):/\s/.test(t)||(this._cbs.onattribend(),this._state="InAttrsName",this._sectionStart=this._index)},i.prototype.BeforeAttrsValue=function(t){'"'===t?(this._state="InAttrsValueDQ",this._sectionStart=this._index+1):"'"===t?(this._state="InAttrsValueSQ",this._sectionStart=this._index+1):/\s/.test(t)||(this._state="InAttrsValueNQ",this._sectionStart=this._index,this._index--)},i.prototype.InAttrsValueDQ=function(t){'"'===t&&(this._cbs._attribvalue+=this._getSection(),this._cbs.onattribend(),this._state="BeforeAttrsName")},i.prototype.InAttrsValueSQ=function(t){"'"===t&&(this._cbs._attribvalue+=this._getSection(),this._cbs.onattribend(),this._state="BeforeAttrsName")},i.prototype.InAttrsValueNQ=function(t){(/\s/.test(t)||">"===t)&&(this._cbs._attribvalue+=this._getSection(),this._cbs.onattribend(),this._state="BeforeAttrsName",this._index--)},i.prototype.BeforeCloseTag=function(t){/\s/.test(t)||(">"===t?this._state="TEXT":(this._state="InCloseTag",this._sectionStart=this._index))},i.prototype.InCloseTag=function(t){(">"===t||/\s/.test(t))&&(this._cbs.onclosetag(this._getSection()),this._state="AfterCloseTag",this._index--)},i.prototype.InSelfCloseTag=function(t){">"===t?(this._cbs.onopentagend(),this._state="TEXT",this._sectionStart=this._index+1):/\s/.test(t)||(this._state="BeforeAttrsName",this._index--)},i.prototype.AfterCloseTag=function(t){">"===t&&(this._state="TEXT",this._sectionStart=this._index+1)},i.prototype.BeforeDeclaration=function(t){this._state="-"==t?"InComment":"["==t?"BeforeCDATA1":"InDeclaration"},i.prototype.InDeclaration=function(t){var e=this._buffer.indexOf(">",this._index);-1!=e?(this._index=e,this._sectionStart=e+1):this._sectionStart=this._index=this._buffer.length,this._state="TEXT"},i.prototype.InComment=function(t){var e="-"==t?"--\x3e":">",i=this._buffer.indexOf(e,this._index);-1!=i?(this._index=i+e.length-1,this._sectionStart=this._index+1):this._sectionStart=this._index=this._buffer.length,this._state="TEXT"},i.prototype.BeforeCDATA1=function(t){this._state="C"==t?"BeforeCDATA2":"InDeclaration"},i.prototype.BeforeCDATA2=function(t){this._state="D"==t?"BeforeCDATA3":"InDeclaration"},i.prototype.BeforeCDATA3=function(t){this._state="A"==t?"BeforeCDATA4":"InDeclaration"},i.prototype.BeforeCDATA4=function(t){this._state="T"==t?"BeforeCDATA5":"InDeclaration"},i.prototype.BeforeCDATA5=function(t){this._state="A"==t?"InCDATA":"InDeclaration"},i.prototype.InCDATA=function(t){var e="["==t?"]]>":">",i=this._buffer.indexOf(e,this._index);-1!=i?(this._index=i+e.length-1,this._sectionStart=this._index+1):this._sectionStart=this._index=this._buffer.length,this._state="TEXT"},i.prototype.parse=function(t){for(this._buffer+=t;this._index<this._buffer.length;this._index++)this[this._state](this._buffer[this._index]);"TEXT"===this._state&&this._sectionStart!==this._index&&this._cbs.ontext(this._buffer.substr(this._sectionStart)),this._cbs.onend()},i.prototype._getSection=function(){return this._buffer.substring(this._sectionStart,this._index)},t.exports=i},function(t,e,i){function s(t){if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(t=function(t,e){if(!t)return;if("string"==typeof t)return n(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);"Object"===i&&t.constructor&&(i=t.constructor.name);if("Map"===i||"Set"===i)return Array.from(t);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return n(t,e)}(t))){var e=0,i=function(){};return{s:i,n:function(){return e>=t.length?{done:!0}:{done:!1,value:t[e++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,r,o=!0,a=!1;return{s:function(){s=t[Symbol.iterator]()},n:function(){var t=s.next();return o=t.done,t},e:function(t){a=!0,r=t},f:function(){try{o||null==s.return||s.return()}finally{if(a)throw r}}}}function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,s=new Array(e);i<e;i++)s[i]=t[i];return s}var r=i(1),o=i(4).versionHigherThan("2.7.1"),a={a:0,abbr:1,ad:0,audio:0,b:1,blockquote:1,br:0,code:1,col:0,colgroup:0,dd:1,del:1,dl:1,dt:1,div:1,em:1,fieldset:0,font:1,h1:1,h2:1,h3:1,h4:1,h5:1,h6:1,hr:0,i:1,img:1,ins:1,label:1,legend:0,li:0,ol:0,p:1,q:1,source:0,span:1,strong:1,sub:0,sup:0,table:0,tbody:0,td:0,tfoot:0,th:0,thead:0,tr:0,u:1,ul:0,video:1},h={address:!0,article:!0,aside:!0,body:!0,center:!0,cite:!0,footer:!0,header:!0,html:!0,nav:!0,pre:!0,section:!0},c={a:!0,abbr:!0,b:!0,big:!0,code:!0,del:!0,em:!0,font:!0,i:!0,ins:!0,label:!0,mark:!0,q:!0,s:!0,small:!0,span:!0,strong:!0,u:!0},l={area:!0,base:!0,basefont:!0,canvas:!0,circle:!0,command:!0,ellipse:!0,embed:!0,frame:!0,head:!0,iframe:!0,input:!0,isindex:!0,keygen:!0,line:!0,link:!0,map:!0,meta:!0,param:!0,path:!0,polygon:!0,polyline:!0,rect:!0,script:!0,stop:!0,textarea:!0,title:!0,track:!0,use:!0,wbr:!0};function _(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.imgList=[],this.imgIndex=0,this.nodes=[],this.title="",this._videoNum=0,this._audioNum=0,this._style=new r(t,function(t){return t.a="display:inline;color:#366092;word-break:break-all;"+(t.a||""),t.address="font-style:italic;"+(t.address||""),t.blockquote=t.blockquote||"background-color:#f6f6f6;border-left:3px solid #dbdbdb;color:#6c6c6c;padding:5px 0 5px 10px;",t.center="text-align:center;"+(t.center||""),t.cite="font-style:italic;"+(t.cite||""),t.code=t.code||"padding:0 1px 0 1px;margin-left:2px;margin-right:2px;background-color:#f8f8f8;border:1px solid #cccccc;border-radius:3px;",t.dd="margin-left:40px;"+(t.dd||""),t.img="max-width:100%;"+(t.img||""),t.mark="display:inline;background-color:yellow;"+(t.mark||""),t.pre="overflow:scroll;"+(t.pre||"background-color:#f6f8fa;padding:5px;border-radius:5px;"),t.s="display:inline;text-decoration:line-through;"+(t.s||""),t.u="display:inline;text-decoration:underline;"+(t.u||""),o||(h.caption=!0,t.big="display:inline;font-size:1.2em;"+(t.big||""),t.small="display:inline;font-size:0.8em;"+(t.small||""),t.pre="font-family:monospace;white-space:pre;"+t.pre),t}(e)).parse(),this._tagStack=[],this._whiteSpace=!1}o&&(a.bdi=0,a.bdo=0,a.caption=0,a.rt=0,a.ruby=0,l.rp=!0,a.big=1,a.small=1,a.pre=0,delete h.pre),_.prototype._addDomElement=function(t){("pre"==t.name||t.attrs&&/white-space\s*:\s*pre/.test(t.attrs.style))&&(this._whiteSpace=!0,t.pre=!0);var e=this._tagStack[this._tagStack.length-1];(e?e.children:this.nodes).push(t)},_.prototype._bubbling=function(){for(var t=this._tagStack.length-1;t>=0;t--){if(!a[this._tagStack[t].name])return this._tagStack[t].name;if(this._tagStack[t].continue=!0,t==this._tagStack.length-1){var e,i=s(this._tagStack[t].children);try{for(i.s();!(e=i.n()).done;){var n=e.value;c[n.name]&&(n.continue=!0)}}catch(t){i.e(t)}finally{i.f()}}}},_.prototype.onopentag=function(t,e){var i={children:[]},n=this._style[t]?this._style[t]+";":"";if(e.id&&(n+=this._style["#"+e.id]?this._style["#"+e.id]+";":""),e.class){var r,o=s(e.class.split(" "));try{for(o.s();!(r=o.n()).done;){var l=r.value;n+=this._style["."+l]?this._style["."+l]+";":""}}catch(t){o.e(t)}finally{o.f()}delete e.class}switch(t){case"div":case"p":e.align&&(e.style+=";text-align:"+e.align,delete e.align);break;case"img":e.width&&(e.style="width:"+e.width+(/[0-9]/.test(e.width[e.width.length-1])?"px":"")+";"+e.style,delete e.width),e["data-src"]&&(e.src=e.src||e["data-src"],delete e["data-src"]),!e.hasOwnProperty("ignore")&&e.src&&(-1!=this.imgList.indexOf(e.src)&&(e.src=e.src+"?index="+this.imgIndex++),this.imgList.push(e.src),"a"==this._bubbling()&&(e.ignore=""));break;case"font":if(t="span",e.color&&(e.style+=";color:"+e.color,delete e.color),e.face&&(e.style+=";font-family:"+e.face,delete e.face),e.size){var _=parseInt(e.size);_<1?_=1:_>7&&(_=7);e.style+=";font-size:"+[10,13,16,18,24,32,48][_-1]+"px",delete e.size}break;case"a":case"ad":this._bubbling();break;case"video":case"audio":e.loop=e.hasOwnProperty("loop"),e.controls=e.hasOwnProperty("controls"),e.autoplay=e.hasOwnProperty("autoplay"),"video"==t&&(e.muted=e.hasOwnProperty("muted"),e.width&&(e.style="width:"+parseFloat(e.width)+"px;"+e.style,delete e.width),e.height&&(e.style="height:"+parseFloat(e.height)+"px;"+e.style,delete e.height)),e.id=t+ ++this["_"+t+"Num"],e.source=[],e.src&&e.source.push(e.src),e.controls||e.autoplay||console.warn("存在没有controls属性的"+t+"标签，可能导致无法播放",e),this._bubbling();break;case"source":var f=this._tagStack[this._tagStack.length-1];return!f||"video"!=f.name&&"audio"!=f.name||(f.attrs.source.push(e.src),f.attrs.src||(f.attrs.src=e.src)),void this._tagStack.push(i)}e.style=n+e.style,c[t]?this._tagStack.length&&!this._tagStack[this._tagStack.length-1].continue||(i.continue=!0):h[t]?t="div":a.hasOwnProperty(t)||(t="span"),i.name=t,i.attrs=e,this._addDomElement(i),this._tagStack.push(i)},_.prototype.ontext=function(t){if(!this._whiteSpace){if(!/\S/.test(t))return;t=t.replace(/\s+/g," ")}var e={text:t.replace(/&nbsp;/g," "),type:"text"};/&#*((?!sp|lt|gt).){2,5};/.test(t)&&(e.decode=!0),this._addDomElement(e)},_.prototype.onclosetag=function(t){var e=this._tagStack.pop();if(l[t]){if("title"==t)try{this.title=e.children[0].text}catch(t){}var i=this._tagStack[this._tagStack.length-1];(i?i.children:this.nodes).pop()}if(!(1!=e.children.length||"div"!=e.name||"div"!=e.children[0].name||/padding/.test(e.attrs.style)||/margin/.test(e.attrs.style)&&/margin/.test(e.children[0].attrs.style)||/display/.test(e.attrs.style)||/display/.test(e.children[0].attrs.style)||e.attrs.id&&e.children[0].attrs.id)){var n=this._tagStack.length?this._tagStack[this._tagStack.length-1].children:this.nodes,r=n.indexOf(e);/padding/.test(e.children[0].attrs.style)&&(e.children[0].attrs.style=";box-sizing:border-box;"+e.children[0].attrs.style),e.children[0].attrs.style=e.attrs.style+";"+e.children[0].attrs.style,e.children[0].attrs.id=(e.children[0].attrs.id||"")+(e.attrs.id||""),n[r]=e.children[0]}if(e.pre){this._whiteSpace=!1;var o,a=s(this._tagStack);try{for(a.s();!(o=a.n()).done;){o.value.pre&&(this._whiteSpace=!0)}}catch(t){a.e(t)}finally{a.f()}delete e.pre}},t.exports=_},function(t,e,i){String.prototype.splice=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";return t<0&&(t=this.length+t),e<0&&(e=0),this.substring(0,t)+i+this.substring(t+e)},t.exports={versionHigherThan:function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];return!0},html2nodes:function(t,e){return i(0)(t,e)},css2object:function(t,e){return new(i(1))(t,e).parse()}}}]);
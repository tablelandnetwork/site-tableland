(window.webpackJsonp=window.webpackJsonp||[]).push([[25,11,53],{419:function(n,t,e){"use strict";e.r(t);var r={props:["buttonText","className","hasArrow","size","buttonLink"],methods:{gotoLink:function(){this.buttonLink&&window.location.assign(this.buttonLink)}}},o=(e(458),e(109)),component=Object(o.a)(r,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",n._g({staticClass:"button-regular flex items-center rounded-3xl h-16 border-2px-black cursor-pointer",class:{sm:"sm"===n.size,arrow:n.hasArrow}},n.$listeners),[e("div",{staticClass:"navigation-cta poppins-normal-black-16px-2"},[n._v(n._s(n.buttonText))]),n._v(" "),n.hasArrow?e("div",{staticClass:"arrow-fat-lines-right"},[e("svg",{attrs:{width:"24",height:"25",viewBox:"0 0 24 25",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M12.75 3.5L21.75 12.5L12.75 21.5V17H9.75V8H12.75V3.5Z",stroke:"black","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}}),n._v(" "),e("path",{attrs:{d:"M3.75 17V8",stroke:"black","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}}),n._v(" "),e("path",{attrs:{d:"M6.75 17V8",stroke:"black","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}})])]):n._e()])}),[],!1,null,null,null);t.default=component.exports},422:function(n,t,e){var content=e(455);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,e(124).default)("48acca8c",content,!0,{sourceMap:!1})},423:function(n,t,e){var content=e(457);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,e(124).default)("5963baee",content,!0,{sourceMap:!1})},424:function(n,t,e){var content=e(459);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,e(124).default)("48c66f08",content,!0,{sourceMap:!1})},443:function(n,t,e){"use strict";e.r(t);var r={name:"NavLink",props:["navigationLink","navigationText","className"]},o=(e(456),e(109)),component=Object(o.a)(r,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("a",n._g({class:["desktop-nav-link-3",n.className||""],attrs:{href:n.navigationLink}},n.$listeners),[e("div",{staticClass:"nav-link-1 poppins-normal-black-16px-2"},[n._v(n._s(n.navigationText))])])}),[],!1,null,null,null);t.default=component.exports},454:function(n,t,e){"use strict";e(422)},455:function(n,t,e){var r=e(123)((function(i){return i[1]}));r.push([n.i,"/*purgecss start ignore*/\n.desktop-navbar{\n  z-index:100;\n  justify-content:space-between;\n  align-items:center;\n  display:flex;\n  height:84px;\n  position:absolute;\n  right:0;\n  left:0;\n  top:14px;\n  width:80%;\n  margin-left:10%;\n  margin-right:10%\n}\n.logo-black-1{\n  height:18px;\n  width:167px\n}\n.frame-49{\n  justify-content:space-between;\n  display:flex;\n  height:44px;\n  position:relative\n}\n\n/*purgecss end ignore*/",""]),r.locals={},n.exports=r},456:function(n,t,e){"use strict";e(423)},457:function(n,t,e){var r=e(123)((function(i){return i[1]}));r.push([n.i,"/*purgecss start ignore*/\n.desktop-nav-link-3{\n  align-items:center;\n  border-radius:10px;\n  display:flex;\n  height:44px;\n  margin-right:20px;\n  min-width:88px;\n  padding:0 20px\n}\na.desktop-nav-link-3:hover{\n  text-decoration:underline;\n  -webkit-text-decoration-color:var(--black);\n          text-decoration-color:var(--black)\n}\n.nav-link-1{\n  letter-spacing:0;\n  line-height:24px;\n  min-height:24px;\n  min-width:48px;\n  white-space:nowrap\n}\n.desktop-nav-link-3.desktop-button-nav-link-4{\n  margin-top:40px;\n  min-width:96px\n}\n.desktop-nav-link-3.desktop-button-nav-link-4 .nav-link-1,.desktop-nav-link-3.desktop-button-nav-link-7 .nav-link-1{\n  min-width:56px\n}\n.desktop-nav-link-3.desktop-button-nav-link-5{\n  margin-top:40px;\n  min-width:80px\n}\n.desktop-nav-link-3.desktop-button-nav-link-5 .nav-link-1,.desktop-nav-link-3.desktop-button-nav-link-8 .nav-link-1{\n  min-width:40px\n}\n.desktop-nav-link-3.desktop-button-nav-link-6{\n  margin-right:unset;\n  margin-top:unset\n}\n.desktop-nav-link-3.desktop-button-nav-link-7{\n  margin-left:10px;\n  margin-right:unset;\n  margin-top:unset;\n  min-width:96px\n}\n.desktop-nav-link-3.desktop-button-nav-link-8{\n  margin-left:10px;\n  margin-right:unset;\n  margin-top:unset;\n  min-width:80px\n}\n\n/*purgecss end ignore*/",""]),r.locals={},n.exports=r},458:function(n,t,e){"use strict";e(424)},459:function(n,t,e){var r=e(123)((function(i){return i[1]}));r.push([n.i,"/*purgecss start ignore*/\n.button-regular{\n  background-color:transparent;\n  min-width:170px;\n  padding:0 30px;\n  transition:all .2s ease\n}\n.button-regular.sm{\n  height:44px;\n  min-width:120px\n}\n.button-regular svg{\n  display:block\n}\n.button-regular:hover{\n  background:rgba(0,0,0,.5)\n}\n.arrow.button-regular:hover{\n  margin-left:2px;\n  padding-left:32px\n}\n.button-regular:hover path{\n  stroke:#fff\n}\n.navigation-cta{\n  letter-spacing:0;\n  line-height:24px;\n  min-height:24px;\n  min-width:130px;\n  white-space:nowrap;\n  padding:0 20px\n}\n.button-regular.sm .navigation-cta{\n  padding:0\n}\n.button-regular:hover .navigation-cta{\n  color:var(--seashell);\n  text-shadow:1px 1px 1px #000\n}\n.button-regular .arrow-fat-lines-right{\n  height:24px;\n  margin-top:-2px;\n  margin-left:20px;\n  width:24px\n}\n.button-regular:hover .arrow-fat-lines-right{\n  margin-left:22px;\n  margin-top:-4px\n}\n\n/*purgecss end ignore*/",""]),r.locals={},n.exports=r},499:function(n,t,e){"use strict";e.r(t);e(110),e(94),e(96),e(39),e(147),e(95),e(148);var r=e(29),o=e(84),l=(e(68),e(125));function c(object,n){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(object);n&&(e=e.filter((function(n){return Object.getOwnPropertyDescriptor(object,n).enumerable}))),t.push.apply(t,e)}return t}var d,v={props:["property2regularProps","property2regular2Props","property2regular3Props","property1regular3Props"],computed:function(n){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(t){Object(o.a)(n,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(source,t))}))}return n}({},Object(l.b)({ethAddress:function(n){return n.ethAddress}})),methods:{connect:(d=Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,this.$store.dispatch("connect");case 3:n.next=10;break;case 5:return n.prev=5,n.t0=n.catch(0),console.log("error connecting to tableland"),console.log(n.t0),n.abrupt("return");case 10:console.log("connected");case 11:case"end":return n.stop()}}),n,this,[[0,5]])}))),function(){return d.apply(this,arguments)})}},h=v,k=(e(454),e(109)),component=Object(k.a)(h,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"desktop-navbar"},[e("img",{staticClass:"logo-black-1",attrs:{src:"img/logo---black@2x.svg"}}),n._v(" "),e("div",{staticClass:"frame-49"},[e("div",{staticClass:"flex"},[e("nav-link",{attrs:{"navigation-text":n.property2regularProps.navigationLink,"navigation-link":"https://textile.notion.site/Our-mission-is-to-accelerate-the-exchange-of-information-across-society-f49e389e12e14473a3475e755a8d9cd6","class-name":n.property2regularProps.className}}),n._v(" "),e("nav-link",{attrs:{"navigation-text":n.property2regular2Props.navigationLink,"navigation-link":"https://boards.greenhouse.io/textileio","class-name":n.property2regular2Props.className}}),n._v(" "),e("nav-link",{attrs:{"navigation-text":n.property2regular3Props.navigationLink,"navigation-link":"https://docs.tableland.xyz/","class-name":n.property2regular3Props.className}}),n._v(" "),n.ethAddress?e("div",{staticClass:"flex flex-col items-center justify-center rounded-3xl poppins-normal-white-16px text-shadow-black bg-black/50 px-5"},[e("span",[n._v(n._s(n.ethAddress.slice(0,6))+"..."+n._s(n.ethAddress.slice(-5)))])]):n._e(),n._v(" "),n.ethAddress?n._e():e("button-regular",{attrs:{"button-text":n.property1regular3Props.navigationCta,size:"sm"},on:{click:n.connect}})],1)])])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{NavLink:e(443).default,ButtonRegular:e(419).default})}}]);
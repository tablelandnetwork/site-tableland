(window.webpackJsonp=window.webpackJsonp||[]).push([[12,6,17,29,78,79],{421:function(t,e,n){var content=n(453);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(124).default)("566012e4",content,!0,{sourceMap:!1})},422:function(t,e,n){var content=n(455);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(124).default)("48acca8c",content,!0,{sourceMap:!1})},430:function(t,e,n){var content=n(477);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(124).default)("2a9bad22",content,!0,{sourceMap:!1})},451:function(t,e,n){var content=n(513);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(124).default)("3b04786c",content,!0,{sourceMap:!1})},452:function(t,e,n){"use strict";n(421)},453:function(t,e,n){var r=n(123)((function(i){return i[1]}));r.push([t.i,"/*purgecss start ignore*/\n.discord-cta-1{\n  height:84px;\n  width:99px;\n  padding:0 20px;\n  z-index:200;\n  background-color:var(--black);\n  border:1px solid #f0f8ff;\n  border-radius:20px;\n  align-items:center;\n  display:flex!important;\n  justify-content:flex-end;\n  position:fixed;\n  right:37px;\n  bottom:37px;\n  transition:all .2s ease\n}\n.discord-cta-1:hover{\n  background-color:var(--black-2);\n  height:86px;\n  min-width:100px;\n  right:36px;\n  bottom:36px\n}\n.vector-20{\n  height:44px;\n  width:57px\n}\n\n/*purgecss end ignore*/",""]),r.locals={},t.exports=r},454:function(t,e,n){"use strict";n(422)},455:function(t,e,n){var r=n(123)((function(i){return i[1]}));r.push([t.i,"/*purgecss start ignore*/\n.desktop-navbar{\n  z-index:100;\n  justify-content:space-between;\n  align-items:center;\n  display:flex;\n  height:84px;\n  position:absolute;\n  right:0;\n  left:0;\n  top:14px;\n  width:80%;\n  margin-left:10%;\n  margin-right:10%\n}\n.logo-black-1{\n  height:18px;\n  width:167px\n}\n.frame-49{\n  justify-content:space-between;\n  display:flex;\n  height:44px;\n  position:relative\n}\n\n/*purgecss end ignore*/",""]),r.locals={},t.exports=r},476:function(t,e,n){"use strict";n(430)},477:function(t,e,n){var r=n(123)((function(i){return i[1]}));r.push([t.i,"/*purgecss start ignore*/\n.desktop-footer{\n  align-items:center;\n  justify-content:space-between;\n  display:flex;\n  height:84px;\n  right:0;\n  left:0;\n  padding:0 119.9px;\n  position:absolute;\n  bottom:0;\n  width:100%;\n  background:#000;\n  z-index:100\n}\n.desktop-footer-link{\n  padding-right:1rem;\n  padding-left:1rem\n}\n.desktop-footer-link .navigation-link-1:hover{\n  text-decoration:underline\n}\n.logo-spray-1{\n  height:18px;\n  width:167px\n}\n.footer-links{\n  justify-content:space-between;\n  align-items:center;\n  display:flex;\n  height:44px\n}\n\n/*purgecss end ignore*/",""]),r.locals={},t.exports=r},498:function(t,e,n){"use strict";n.r(e);var r={name:"DiscordCtaDesktop"},o=(n(452),n(109)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"discord-cta-1",attrs:{href:"https://discord.gg/JS2vyQaa"}},[e("img",{staticClass:"vector-20",attrs:{src:"img/vector-9@2x.svg"}})])}],!1,null,null,null);e.default=component.exports},499:function(t,e,n){"use strict";n.r(e);n(110),n(94),n(96),n(39),n(147),n(95),n(148);var r=n(29),o=n(84),l=(n(68),n(125));function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var c,x={props:["property2regularProps","property2regular2Props","property2regular3Props","property1regular3Props"],computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(l.b)({ethAddress:function(t){return t.ethAddress}})),methods:{connect:(c=Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.$store.dispatch("connect");case 3:t.next=10;break;case 5:return t.prev=5,t.t0=t.catch(0),console.log("error connecting to tableland"),console.log(t.t0),t.abrupt("return");case 10:console.log("connected");case 11:case"end":return t.stop()}}),t,this,[[0,5]])}))),function(){return c.apply(this,arguments)})}},h=x,f=(n(454),n(109)),component=Object(f.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"desktop-navbar"},[n("img",{staticClass:"logo-black-1",attrs:{src:"img/logo---black@2x.svg"}}),t._v(" "),n("div",{staticClass:"frame-49"},[n("div",{staticClass:"flex"},[n("nav-link",{attrs:{"navigation-text":t.property2regularProps.navigationLink,"navigation-link":"https://textile.notion.site/Our-mission-is-to-accelerate-the-exchange-of-information-across-society-f49e389e12e14473a3475e755a8d9cd6","class-name":t.property2regularProps.className}}),t._v(" "),n("nav-link",{attrs:{"navigation-text":t.property2regular2Props.navigationLink,"navigation-link":"https://boards.greenhouse.io/textileio","class-name":t.property2regular2Props.className}}),t._v(" "),n("nav-link",{attrs:{"navigation-text":t.property2regular3Props.navigationLink,"navigation-link":"https://textileio.gitbook.io/api-docs/uuImxC5jHtHaeltz0m5u/","class-name":t.property2regular3Props.className}}),t._v(" "),t.ethAddress?n("div",{staticClass:"flex flex-col items-center justify-center rounded-3xl poppins-normal-white-16px text-shadow-black bg-black/50 px-5"},[n("span",[t._v(t._s(t.ethAddress.slice(0,6))+"..."+t._s(t.ethAddress.slice(-5)))])]):t._e(),t._v(" "),t.ethAddress?t._e():n("button-regular",{attrs:{"button-text":t.property1regular3Props.navigationCta,size:"sm"},on:{click:t.connect}})],1)])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{NavLink:n(443).default,ButtonRegular:n(419).default})},505:function(t,e,n){"use strict";n.r(e);var r={name:"DesktopFooter",props:["property2regularProps","property2regular2Props","property2regular3Props"]},o=(n(476),n(109)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"desktop-footer"},[n("img",{staticClass:"logo-spray-1",attrs:{src:"img/logo--spray.svg"}}),t._v(" "),n("div",{staticClass:"footer-links"},[n("div",{staticClass:"flex"},[n("div",{staticClass:"desktop-footer-link"},[n("a",{staticClass:"navigation-link-1 poppins-normal-spray-16px",attrs:{href:"#investors"}},[t._v(t._s(t.property2regularProps.navigationLink))])]),t._v(" "),n("div",{staticClass:"desktop-footer-link"},[n("a",{staticClass:"navigation-link-1 poppins-normal-spray-16px",attrs:{href:"#partners"}},[t._v(t._s(t.property2regular2Props.navigationLink))])]),t._v(" "),n("div",{staticClass:"desktop-footer-link"},[n("a",{staticClass:"navigation-link-1 poppins-normal-spray-16px",attrs:{href:"#legal"}},[t._v(t._s(t.property2regular3Props.navigationLink))])])])])])}),[],!1,null,null,null);e.default=component.exports},506:function(t,e,n){"use strict";n.r(e);var r={name:"YellowBlur2"},o=n(109),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",{attrs:{width:"1497",height:"1497",viewBox:"0 0 1497 1497",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("g",{attrs:{filter:"url(#filter0_f_2_442)"}},[n("circle",{attrs:{cx:"748.5",cy:"748.5",r:"448.5",fill:"#FFF6A8"}})]),t._v(" "),n("defs",[n("filter",{attrs:{id:"filter0_f_2_442",x:"0",y:"0",width:"1497",height:"1497",filterUnits:"userSpaceOnUse","color-interpolation-filters":"sRGB"}},[n("feFlood",{attrs:{"flood-opacity":"0",result:"BackgroundImageFix"}}),t._v(" "),n("feBlend",{attrs:{mode:"normal",in:"SourceGraphic",in2:"BackgroundImageFix",result:"shape"}}),t._v(" "),n("feGaussianBlur",{attrs:{stdDeviation:"150",result:"effect1_foregroundBlur_2_442"}})],1)])])}),[],!1,null,null,null);e.default=component.exports},510:function(t,e,n){"use strict";n.r(e);var r=n(109),component=Object(r.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",{attrs:{width:"32",height:"32",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M4 17L16 29L28 17H22V9H10V17H4Z",stroke:"black","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}}),t._v(" "),n("path",{attrs:{d:"M22 5H10",stroke:"black","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}})])}),[],!1,null,null,null);e.default=component.exports},511:function(t,e,n){"use strict";n.r(e);var r=n(109),component=Object(r.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",{attrs:{width:"100%",viewBox:"0 0 1560 1560",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("g",{attrs:{filter:"url(#filter0_f_2_445)"}},[n("circle",{attrs:{cx:"780",cy:"780",r:"480",fill:"#FFF6A8"}})]),t._v(" "),n("defs",[n("filter",{attrs:{id:"filter0_f_2_445",x:"0",y:"0",width:"1560",height:"1560",filterUnits:"userSpaceOnUse","color-interpolation-filters":"sRGB"}},[n("feFlood",{attrs:{"flood-opacity":"0",result:"BackgroundImageFix"}}),t._v(" "),n("feBlend",{attrs:{mode:"normal",in:"SourceGraphic",in2:"BackgroundImageFix",result:"shape"}}),t._v(" "),n("feGaussianBlur",{attrs:{stdDeviation:"150",result:"effect1_foregroundBlur_2_445"}})],1)])])}),[],!1,null,null,null);e.default=component.exports},512:function(t,e,n){"use strict";n(451)},513:function(t,e,n){var r=n(123)((function(i){return i[1]}));r.push([t.i,"/*purgecss start ignore*/\n.desktop-content{\n  overflow-x:hidden;\n  overflow-y:scroll;\n  width:100%;\n  align-items:flex-start;\n  background-color:var(--seashell)\n}\n.section .content{\n  margin:0 10% 2rem\n}\n.section-1{\n  position:absolute;\n  top:300px;\n  width:100%\n}\n.the-possibilities-are-endless-1,.use-familiar-sql-tab{\n  letter-spacing:0;\n  line-height:54px\n}\n.mesas-5{\n  top:1000px\n}\n.mesas-4,.mesas-5{\n  position:absolute;\n  width:100%\n}\n.mesas-4{\n  top:150px;\n  left:0;\n  mix-blend-mode:darken\n}\n.mesas-3{\n  position:absolute;\n  top:300px;\n  width:100%\n}\n.mesas-4-fore{\n  position:absolute;\n  top:3350px;\n  left:0;\n  mix-blend-mode:darken;\n  width:120%\n}\n.bike-gang{\n  -o-object-fit:cover;\n     object-fit:cover;\n  position:absolute;\n  top:4920px\n}\n.mesas-5-fore-2{\n  top:6010px;\n  width:130%\n}\n.mesas-4-fore-3,.mesas-5-fore-2{\n  position:absolute;\n  mix-blend-mode:darken\n}\n.mesas-4-fore-3{\n  top:5700px;\n  width:100%\n}\n.mesas-4-fore-4{\n  top:5300px;\n  width:200%\n}\n.mesas-4-fore-4,.mesas-6-fore-1{\n  position:absolute;\n  left:0;\n  mix-blend-mode:darken\n}\n.mesas-6-fore-1{\n  top:7000px;\n  width:100%\n}\n.delorean{\n  top:400px;\n  width:50%\n}\n.delorean,.sun-spot-1{\n  position:absolute;\n  left:50%\n}\n.sun-spot-1{\n  top:0;\n  width:100%;\n  z-index:-1\n}\n.sun-spot-1 svg{\n  width:100%\n}\n.sun-spot-2{\n  position:absolute;\n  top:-800px;\n  left:-500px;\n  width:1000px\n}\n.sun-spot-2 svg{\n  width:100%\n}\n.sun-spot-7{\n  position:absolute;\n  top:7400px;\n  left:-70%;\n  width:180%\n}\n.sun-spot-7 svg{\n  width:100%\n}\n.frame-51-1{\n  left:10%;\n  min-height:530px;\n  position:absolute;\n  top:341px;\n  width:50%\n}\n.frame-51-1,.frame-52-1{\n  align-items:flex-start;\n  display:flex;\n  flex-direction:column\n}\n.frame-52-1{\n  min-height:426px;\n  position:relative;\n  width:693px;\n  margin-bottom:40px\n}\n.parallax{\n  height:600px;\n  height:100vh;\n  overflow-x:hidden;\n  overflow-y:auto;\n  perspective:300px\n}\n.parallax__group{\n  position:relative;\n  height:600px;\n  height:100vh;\n  transform-style:preserve-3d\n}\n.parallax__layer{\n  position:absolute;\n  top:0;\n  left:0;\n  right:0;\n  bottom:0\n}\n.parallax__layer--base{\n  transform:translateZ(0);\n  z-index:3;\n  width:100%\n}\n.parallax__layer--fore{\n  transform:translateZ(90px) scale(.7);\n  z-index:2\n}\n.parallax__layer--fore-2{\n  transform:translateZ(45px) scale(.85);\n  z-index:2\n}\n.parallax__layer--fore-3{\n  transform:translateZ(10px) scale(.95);\n  z-index:2\n}\n.parallax__layer--back{\n  transform:translateZ(-10px) scale(1.05);\n  z-index:2\n}\n.parallax__layer--back-2{\n  transform:translateZ(-45px) scale(1.15);\n  z-index:2\n}\n.parallax__layer--back-3{\n  transform:translateZ(-90px) scale(1.3);\n  z-index:2\n}\n.parallax__layer--back-4{\n  transform:translateZ(-300px) scale(2);\n  z-index:6\n}\n.parallax__layer--deep{\n  transform:translateZ(-600px) scale(3);\n  z-index:7\n}\n.mesas-1{\n  top:8984px\n}\n.mesas-1,.mesas-2{\n  position:absolute;\n  width:100%\n}\n.mesas-2{\n  top:5546px\n}\n.sun-spot-3{\n  left:0;\n  position:absolute;\n  top:2300px;\n  width:100%\n}\n.sun-spot-4{\n  left:20%;\n  position:absolute;\n  top:3450px;\n  width:70%\n}\n.sun-spot-5{\n  position:absolute;\n  left:40%;\n  top:4250px;\n  width:100%\n}\n.sun-spot-6{\n  position:absolute;\n  left:-20%;\n  top:4900px;\n  width:60%\n}\n.sun-spot-6 svg{\n  width:100%\n}\n.mesas-6{\n  mix-blend-mode:darken;\n  top:3000px;\n  transform-origin:0 0;\n  transform:translateZ(3px)\n}\n.ellipse-165,.mesas-6{\n  position:absolute;\n  width:100%\n}\n.ellipse-165{\n  left:50%;\n  top:4300px\n}\n.ellipse-154-1{\n  left:-16%;\n  position:absolute;\n  top:5300px;\n  width:65%\n}\n.arrow-fat-line-down{\n  height:32px;\n  left:49%;\n  position:absolute;\n  top:933px;\n  width:32px\n}\n.vector-16{\n  position:absolute;\n  top:6457px;\n  width:100%\n}\n.vector-17{\n  left:0;\n  position:absolute;\n  top:8824px;\n  width:136%\n}\n.vector-18{\n  left:-70%;\n  mix-blend-mode:darken;\n  position:absolute;\n  top:7714px;\n  width:170%\n}\n.ellipse-156{\n  left:30%;\n  position:absolute;\n  top:6300px;\n  width:80%\n}\n.overlap-group-3{\n  height:362px;\n  left:1725px;\n  position:absolute;\n  top:9062px;\n  width:431px\n}\n.vector-66-1{\n  height:170px;\n  left:0;\n  position:absolute;\n  top:164px;\n  width:431px\n}\n.screenshot-2021-12-06-at-1204-1-1{\n  height:362px;\n  left:36px;\n  -o-object-fit:cover;\n     object-fit:cover;\n  position:absolute;\n  top:0;\n  width:361px\n}\n.vector-68-1{\n  height:58px;\n  top:69px;\n  width:26px\n}\n.vector-68-1,.vector-69-1{\n  left:390px;\n  position:absolute\n}\n.vector-69-1{\n  height:43px;\n  top:214px;\n  width:18px\n}\n.vector-70-1{\n  height:33px;\n  top:283px;\n  width:18px\n}\n.vector-67-1,.vector-70-1{\n  left:390px;\n  position:absolute\n}\n.vector-67-1{\n  height:60px;\n  top:68px;\n  width:27px\n}\n.vector-71-1{\n  height:46px;\n  left:389px;\n  position:absolute;\n  top:212px;\n  width:20px\n}\n.vector-72-1{\n  height:34px;\n  left:388px;\n  position:absolute;\n  top:282px;\n  width:21px\n}\n.untitled-3-2{\n  left:10%;\n  position:absolute;\n  top:8300px;\n  width:35%\n}\n.frame-62{\n  align-items:flex-start;\n  align-self:flex-end;\n  display:flex;\n  flex-direction:column;\n  min-height:582px;\n  position:relative;\n  width:590px\n}\n.user-owned-token-net-1{\n  letter-spacing:0;\n  line-height:54px;\n  min-height:162px;\n  width:590px\n}\n.tableland-exists-to-1{\n  color:var(--black);\n  font-family:var(--font-family-poppins);\n  font-size:var(--font-size-l);\n  font-weight:600;\n  letter-spacing:1px;\n  line-height:30px;\n  margin-top:20px;\n  min-height:60px;\n  width:588px\n}\n.tableland-extends-to{\n  letter-spacing:0;\n  line-height:24px;\n  margin-top:20px;\n  min-height:216px;\n  text-shadow:0 0 24px hsla(0,0%,100%,.8);\n  width:588px\n}\n.group-93-1{\n  align-items:flex-start;\n  display:flex;\n  height:568px;\n  justify-content:flex-end;\n  margin-bottom:4.03px;\n  margin-left:66px;\n  min-width:550px;\n  transform:rotate(7.56deg)\n}\n.overlap-group-4{\n  height:686px;\n  margin-top:-45.43px;\n  position:relative;\n  width:692px\n}\n.untitled-7-1-1{\n  height:610px;\n  left:37px;\n  -o-object-fit:cover;\n     object-fit:cover;\n  top:38px;\n  width:617px\n}\n.untitled-7-1-1,.vector-73-1{\n  position:absolute;\n  transform:rotate(-7.56deg)\n}\n.vector-73-1{\n  height:52px;\n  left:274px;\n  top:45px;\n  width:246px\n}\n.build-d-apps-and-nft-1{\n  letter-spacing:0;\n  line-height:84px;\n  margin-top:20px;\n  min-height:252px;\n  width:693px\n}\n.tableland-is-a-netwo{\n  letter-spacing:0;\n  line-height:30px;\n  margin-top:20px;\n  margin-bottom:20px;\n  min-height:90px;\n  text-shadow:0 0 24px hsla(0,0%,100%,.8);\n  max-width:70%\n}\n.frame-72-4{\n  background-color:var(--black)\n}\n.group-104{\n  align-items:flex-start;\n  align-self:flex-end;\n  display:flex;\n  flex-direction:column;\n  min-height:188px;\n  width:100%;\n  margin-bottom:40px\n}\n.join-the-community{\n  color:var(--seashell);\n  font-family:var(--font-family-orbitron);\n  font-size:3vw;\n  font-style:normal;\n  font-weight:800;\n  letter-spacing:0;\n  line-height:54px;\n  min-height:54px;\n  white-space:nowrap\n}\n.whether-youre-a-dev-1{\n  letter-spacing:0;\n  line-height:30px;\n  margin-top:14px;\n  min-height:120px;\n  width:100%\n}\n.get-a-feel-for-how-e-1{\n  letter-spacing:0;\n  line-height:54px\n}\n.span-1{\n  letter-spacing:.05px\n}\n.any-suggestions-1{\n  letter-spacing:0;\n  line-height:84px;\n  min-height:84px;\n  min-width:697px;\n  margin-bottom:40px;\n  text-align:center;\n  white-space:nowrap\n}\n.cards-straight-container{\n  width:100%\n}\n.cards-straight-container.scroll-container-right{\n  width:1260px\n}\n.cards-straight-container .scroll-text{\n  width:1747px\n}\n.be-ready-for-the-future-2{\n  -webkit-text-stroke:2px var(--black);\n  color:transparent;\n  letter-spacing:5.5px;\n  line-height:110px;\n  width:2000px\n}\n.be-ready-for-the-future-2 .scroll-text{\n  width:4272px\n}\n.showcase-showcase-desktop.scroll-container{\n  width:2000px\n}\n.showcase-showcase-desktop .scroll-text{\n  width:3751px\n}\n.try-it-try-it-try-it-1{\n  -webkit-text-stroke:2px var(--black);\n  color:transparent;\n  letter-spacing:5.5px;\n  line-height:110px;\n  min-height:110px\n}\n.try-it-try-it-try-it-1.scroll-container{\n  width:2400px\n}\n.try-it-try-it-try-it-1 .scroll-text{\n  width:4450px\n}\n.welcome-to-tableland-1{\n  -webkit-text-stroke:2px var(--black);\n  color:transparent;\n  letter-spacing:5.5px;\n  line-height:110px\n}\n.welcome-to-tableland-1.scroll-container{\n  width:2600px\n}\n.welcome-to-tableland-1 .scroll-text{\n  width:4030px\n}\n.how-it-works-how-it-works{\n  -webkit-text-stroke:2px var(--black);\n  color:transparent;\n  letter-spacing:5.5px;\n  line-height:110px;\n  white-space:nowrap;\n  width:2591px\n}\n.how-it-works-how-it-works.scroll-container{\n  width:2600px\n}\n.how-it-works-how-it-works .scroll-text{\n  width:3700px\n}\n.scroll-container{\n  text-align:center;\n  white-space:nowrap\n}\n.scroll-container .scroll-text{\n  -webkit-animation:scroll-right 255s linear infinite;\n  animation:scroll-right 255s linear infinite\n}\n.scroll-container-right .scroll-text,.scroll-container .scroll-text{\n  transform:translateX(100%)\n}\n.scroll-container-right .scroll-text{\n  -webkit-animation:scroll-left 105s linear infinite;\n  animation:scroll-left 105s linear infinite\n}\n@-webkit-keyframes scroll-right{\n0%{\n    -webkit-transform:translateX(-100%)\n}\nto{\n    -webkit-transform:translateX(0)\n}\n}\n@keyframes scroll-right{\n0%{\n    transform:translateX(-100%)\n}\nto{\n    transform:translateX(0)\n}\n}\n@-webkit-keyframes scroll-left{\n0%{\n    -webkit-transform:translateX(0)\n}\nto{\n    -webkit-transform:translateX(-100%)\n}\n}\n@keyframes scroll-left{\n0%{\n    transform:translateX(0)\n}\nto{\n    transform:translateX(-100%)\n}\n}\n\n/*purgecss end ignore*/",""]),r.locals={},t.exports=r},562:function(t,e,n){"use strict";n.r(e);var r=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"group-93-1"},[e("div",{staticClass:"overlap-group-4"},[e("img",{staticClass:"untitled-7-1-1",attrs:{src:n(496)}})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"bike-gang"},[e("img",{attrs:{src:n(497)}})])}],o={props:["beReadyForTheFuture","howItWorksHowItWorks","inTablelandWeSpeakSql","builtOnSql","untitled81","untitled51","untitled11","welcomeToTableland","screenshot20211206At12041","untitled32","untitled33","untitled41","userOwnedTokenNet","tablelandExistsTo","tablelandExtendsTo","untitled71","buildDappsAndNft","tablelandIsANetwo","joinTheCommunity","whetherYouReADev","thePossibilitiesAreEndless","useFamiliarSqlTab","tryItTryItTryIt","getAFeelForHowE","spanText","spanText2","spanText3","spanText4","spanText5","spanText6","stateregularProps","property1regularProps","stateregular2Props","desktopCardsStoryImage1Props","desktopCardsStoryImage2Props","desktopCardsStoryImage3Props","desktopCardsStoryImage4Props","stateregular3Props","stateregular4Props","stateregular4Props2","stateregular5Props","stateregular6Props","stateregular62Props","stateregular7Props","desktopCardsStraightProps","desktopCardsStraight2Props","desktopCardsStraight2Props2","desktopCardsStraight3Props","desktopCardsStraight4Props","desktopTabGroupProps","desktopTableSingleRowProps","desktopTableSingleRow2Props","desktopTableSingleRow22Props","desktopTableSingleRow23Props","desktopTableSingleRow24Props","desktopTableSingleRow25Props","desktopTableSingleRow26Props","desktopTableSingleRow27Props","desktopTableSingleRow28Props","desktopTableSingleRow29Props","desktopTableSingleRow3Props","stateregular8Props","desktopNavbarProps","showcaseShowcase","whatWillYouBuild","property2regularProps","property2regular2Props","property2regular3Props"],methods:{goto:function(t){window.location.assign(t)}}},l=(n(512),n(109)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"desktop-content lg:block hidden"},[n("DiscordCtaDesktop"),t._v(" "),n("div",{staticClass:"background-layer parallax"},[n("desktop-navbar",{attrs:{"property2regular-props":t.desktopNavbarProps.property2regularProps,"property2regular2-props":t.desktopNavbarProps.property2regular2Props,"property2regular3-props":t.desktopNavbarProps.property2regular3Props,"property1regular3-props":t.desktopNavbarProps.property1regular3Props}}),t._v(" "),n("div",{staticClass:"parallax__group"},[n("div",{staticClass:"parallax__layer--base z-50"},[n("div",{staticClass:"section section-1"},[n("div",{staticClass:"content flex flex-col flex-start relative"},[n("div",{staticClass:"z-10"},[n("div",{},[n("property1regular6",{attrs:{"video-introduction":t.property1regularProps.videoIntroduction,"property1icons-play-props":t.property1regularProps.property1iconsPlayProps}}),t._v(" "),n("div",{staticClass:"build-d-apps-and-nft-1 orbitron-black-black-70px"},[t._v(t._s(t.buildDappsAndNft))]),t._v(" "),n("div",{staticClass:"tableland-is-a-netwo poppins-normal-black-20px"},[t._v(t._s(t.tablelandIsANetwo))]),t._v(" "),n("button-black",{attrs:{"button-text":t.stateregular2Props.primaryButton,"has-arrow":!0},on:{click:function(e){return t.goto("#explore")}}})],1),t._v(" "),n("div",{staticClass:"text-center mt-20 w-full z-10"},[n("arrow-down",{staticClass:"inline"})],1)]),t._v(" "),n("div",{staticClass:"sun-spot-2 z-0"},[n("yellow-blur-wide")],1)]),t._v(" "),n("div",{staticClass:"content"},[n("div",{staticClass:"welcome-to-tableland-1 my-20 scroll-container"},[n("div",{staticClass:"scroll-text orbitron-black-white-110px"},[t._v(t._s(t.welcomeToTableland))])]),t._v(" "),n("div",{staticClass:"w-1/2 orbitron-black-black-45px"},[t._v(t._s(t.useFamiliarSqlTab))]),t._v(" "),n("div",{staticClass:"pt-60 orbitron-black-black-45px"},[t._v(t._s(t.thePossibilitiesAreEndless))]),t._v(" "),n("div",{staticClass:"cards-straight-container"},[n("div",{staticClass:"scroll-container-right"},[n("div",{staticClass:"scroll-text flex flex-row"},[n("desktop-cards-straight",{attrs:{"title-text":t.desktopCardsStraightProps.frame29Props.extendExistingNfts,"description-text":t.desktopCardsStraightProps.frame29Props.attachInAppOrGam,"code-link":"#"}}),t._v(" "),n("desktop-cards-straight",{attrs:{"title-text":t.desktopCardsStraight2Props.frame29Props.extendExistingNfts,"description-text":t.desktopCardsStraight2Props.frame29Props.attachInAppOrGam,"code-link":"#"}}),t._v(" "),n("desktop-cards-straight",{attrs:{"title-text":t.desktopCardsStraight2Props2.extendExistingNfts,"description-text":t.desktopCardsStraight2Props2.attachInAppOrGam,"code-link":"#"}}),t._v(" "),n("desktop-cards-straight",{attrs:{"title-text":t.desktopCardsStraight3Props.frame29Props.extendExistingNfts,"description-text":t.desktopCardsStraight3Props.frame29Props.attachInAppOrGam,"code-link":"#"}}),t._v(" "),n("desktop-cards-straight",{attrs:{"title-text":t.desktopCardsStraight4Props.frame29Props.extendExistingNfts,"description-text":t.desktopCardsStraight4Props.frame29Props.attachInAppOrGam,"code-link":"#"}}),t._v(" "),n("desktop-cards-straight",{attrs:{"title-text":t.desktopCardsStraightProps.frame29Props.extendExistingNfts,"description-text":t.desktopCardsStraightProps.frame29Props.attachInAppOrGam,"code-link":"#"}}),t._v(" "),n("desktop-cards-straight",{attrs:{"title-text":t.desktopCardsStraight2Props.frame29Props.extendExistingNfts,"description-text":t.desktopCardsStraight2Props.frame29Props.attachInAppOrGam,"code-link":"#"}}),t._v(" "),n("desktop-cards-straight",{attrs:{"title-text":t.desktopCardsStraight2Props2.extendExistingNfts,"description-text":t.desktopCardsStraight2Props2.attachInAppOrGam,"code-link":"#"}}),t._v(" "),n("desktop-cards-straight",{attrs:{"title-text":t.desktopCardsStraight3Props.frame29Props.extendExistingNfts,"description-text":t.desktopCardsStraight3Props.frame29Props.attachInAppOrGam,"code-link":"#"}}),t._v(" "),n("desktop-cards-straight",{attrs:{"title-text":t.desktopCardsStraight4Props.frame29Props.extendExistingNfts,"description-text":t.desktopCardsStraight4Props.frame29Props.attachInAppOrGam,"code-link":"#"}}),t._v(" "),n("desktop-cards-straight",{attrs:{"title-text":t.desktopCardsStraightProps.frame29Props.extendExistingNfts,"description-text":t.desktopCardsStraightProps.frame29Props.attachInAppOrGam,"code-link":"#"}}),t._v(" "),n("desktop-cards-straight",{attrs:{"title-text":t.desktopCardsStraight2Props.frame29Props.extendExistingNfts,"description-text":t.desktopCardsStraight2Props.frame29Props.attachInAppOrGam,"code-link":"#"}}),t._v(" "),n("desktop-cards-straight",{attrs:{"title-text":t.desktopCardsStraight2Props2.extendExistingNfts,"description-text":t.desktopCardsStraight2Props2.attachInAppOrGam,"code-link":"#"}}),t._v(" "),n("desktop-cards-straight",{attrs:{"title-text":t.desktopCardsStraight3Props.frame29Props.extendExistingNfts,"description-text":t.desktopCardsStraight3Props.frame29Props.attachInAppOrGam,"code-link":"#"}}),t._v(" "),n("desktop-cards-straight",{attrs:{"title-text":t.desktopCardsStraight4Props.frame29Props.extendExistingNfts,"description-text":t.desktopCardsStraight4Props.frame29Props.attachInAppOrGam,"code-link":"#"}})],1)])])]),t._v(" "),n("div",{staticClass:"content"},[n("div",{staticClass:"how-it-works-how-it-works scroll-container my-20"},[n("div",{staticClass:"scroll-text orbitron-black-white-110px"},[t._v("\n                "+t._s(t.howItWorksHowItWorks)+"\n              ")])]),t._v(" "),n("div",{staticClass:"leading-10 tracking-normal flex justify-between items-center"},[n("div",{staticClass:"orbitron-black-black-45px pt-2"},[t._v(t._s(t.inTablelandWeSpeakSql))]),t._v(" "),n("div",{staticClass:"button-right"},[n("button-regular",{attrs:{"button-text":t.stateregular8Props.secondoryButton,"has-arrow":!0}})],1)]),t._v(" "),n("div",{staticClass:"mt-32 flex justify-between gap-4"},[n("desktop-cards-story-image",{attrs:{"card-title":t.desktopCardsStoryImage1Props.cardTitle,"card-content":t.desktopCardsStoryImage1Props.cardContent,"pad-top":"md"}}),t._v(" "),n("desktop-cards-story-image",{attrs:{"card-title":t.desktopCardsStoryImage2Props.cardTitle,"card-content":t.desktopCardsStoryImage2Props.cardContent,"pad-top":"lg"}}),t._v(" "),n("desktop-cards-story-image",{attrs:{"card-title":t.desktopCardsStoryImage3Props.cardTitle,"card-content":t.desktopCardsStoryImage3Props.cardContent,"pad-top":""}}),t._v(" "),n("desktop-cards-story-image",{attrs:{"card-title":t.desktopCardsStoryImage4Props.cardTitle,"card-content":t.desktopCardsStoryImage4Props.cardContent,"pad-top":"md"}})],1)]),t._v(" "),n("div",{staticClass:"content"},[n("div",{staticClass:"scroll-container try-it-try-it-try-it-1 mt-96 whitespace-nowrap"},[n("div",{staticClass:"scroll-text orbitron-black-white-110px"},[t._v(t._s(t.tryItTryItTryIt))])]),t._v(" "),n("div",{},[n("div",{staticClass:"get-a-feel-for-how-e-1 mt-20 orbitron-black-black-45px"},[t._v(t._s(t.getAFeelForHowE))]),t._v(" "),n("div",{staticClass:"mt-20 w-full"},[n("desktop-tab-group",{attrs:{"tabs-data":[]}})],1)])]),t._v(" "),n("div",{staticClass:"content"},[n("div",{staticClass:"grid grid-cols-2 gap-4 mt-40"},[n("div",[t._v(" ")]),t._v(" "),n("div",{staticClass:"frame-72-4 flex flex-col items-start rounded-3xl p-8"},[n("div",{staticClass:"group-104"},[n("div",{staticClass:"join-the-community"},[t._v(t._s(t.joinTheCommunity))]),t._v(" "),n("div",{staticClass:"whether-youre-a-dev-1 poppins-normal-white-20px"},[t._v(t._s(t.whetherYouReADev))])]),t._v(" "),n("button-black",{attrs:{"button-text":t.stateregular3Props.secondoryButton,"has-arrow":!0}})],1)])]),t._v(" "),n("div",{staticClass:"content"},[n("div",{staticClass:"flex items-center mt-96 z-10"},[n("div",{staticClass:"flex items-start self-end flex-col relative z-10"},[n("div",{staticClass:"flex items-start flex-col mb-10"},[n("div",{staticClass:"user-owned-token-net-1 orbitron-black-black-45px"},[t._v(t._s(t.userOwnedTokenNet))]),t._v(" "),n("div",{staticClass:"tableland-exists-to-1"},[t._v(t._s(t.tablelandExistsTo))]),t._v(" "),n("p",{staticClass:"tableland-extends-to poppins-normal-black-16px"},[t._v("\n                    "+t._s(t.tablelandExtendsTo)+"\n                    "),n("br"),n("br"),t._v("\n                    "+t._s(t.builtOnSql)+"\n                  ")])]),t._v(" "),n("button-regular",{attrs:{"button-text":t.stateregularProps.joinUsOnDiscord,"has-arrow":!0}})],1),t._v(" "),t._m(0)]),t._v(" "),n("div",{staticClass:"sun-spot-6 z-0"},[n("yellow-blur-wide")],1)]),t._v(" "),n("div",{staticClass:"content"},[n("div",{staticClass:"scroll-container be-ready-for-the-future-2 whitespace-nowrap mt-40"},[n("h1",{staticClass:"scroll-text orbitron-black-white-110px"},[t._v(t._s(t.beReadyForTheFuture))])]),t._v(" "),n("roadmap",{staticClass:"mt-60",attrs:{"stateregular4-props":t.stateregular4Props,"stateregular5-props":t.stateregular5Props,"stateregular6-props":t.stateregular6Props,"stateregular62-props":t.stateregular62Props,"stateregular7-props":t.stateregular7Props}})],1),t._v(" "),n("div",{staticClass:"content"},[n("div",{staticClass:"flex flex-col items-center mb-40"},[n("div",{staticClass:"any-suggestions-1 orbitron-black-black-70px"},[t._v("Any suggestions?")]),t._v(" "),n("button-black",{attrs:{"button-text":"EXPLORE THE POSSIBILITIES","has-arrow":!0}})],1)]),t._v(" "),n("showcase",{attrs:{untitled81:t.untitled81,"what-will-you-build":t.whatWillYouBuild,"stateregular4-props2":t.stateregular4Props2,"showcase-showcase":t.showcaseShowcase}}),t._v(" "),n("desktop-footer",{attrs:{"property2regular-props":t.property2regularProps,"property2regular2-props":t.property2regular2Props,"property2regular3-props":t.property2regular3Props}})],1)]),t._v(" "),n("div",{staticClass:"parallax__layer parallax__layer--back"},[n("img",{staticClass:"delorean",attrs:{src:"img/delorean.png"}}),t._v(" "),n("div",{staticClass:"sun-spot-1"},[n("yellow-blur-tall")],1),t._v(" "),t._m(1),t._v(" "),n("div",{staticClass:"mesas-4-fore-3"},[n("mesas-4")],1)]),t._v(" "),n("div",{staticClass:"parallax__layer parallax__layer--back-2"},[n("div",{staticClass:"mesas-3"},[n("mesas3-solid")],1),t._v(" "),n("div",{staticClass:"sun-spot-3"},[n("yellow-blur-1")],1),t._v(" "),n("div",{staticClass:"sun-spot-4"},[n("yellow-blur-1")],1),t._v(" "),n("div",{staticClass:"sun-spot-5"},[n("yellow-blur-1")],1),t._v(" "),n("div",{staticClass:"mesas-4-fore"},[n("mesas-4")],1),t._v(" "),n("div",{staticClass:"mesas-5-fore-2"},[n("mesas-5")],1),t._v(" "),n("div",{staticClass:"mesas-6-fore-1"},[n("mesas-6")],1),t._v(" "),n("div",{staticClass:"sun-spot-7"},[n("yellow-blur-sharp")],1)]),t._v(" "),n("div",{staticClass:"parallax__layer parallax__layer--back-3"},[n("div",{staticClass:"mesas-5"},[n("mesas-5")],1),t._v(" "),n("div",{staticClass:"mesas-4-fore-4"},[n("mesas-4")],1)]),t._v(" "),n("div",{staticClass:"parallax__layer parallax__layer--back-4"},[n("page-background"),t._v(" "),n("div",{staticClass:"mesas-4"},[n("mesas-4")],1)],1)])],1)],1)}),r,!1,null,null,null);e.default=component.exports;installComponents(component,{DiscordCtaDesktop:n(498).default,DesktopNavbar:n(499).default,Property1regular6:n(488).default,ButtonBlack:n(414).default,ArrowDown:n(510).default,YellowBlurWide:n(489).default,DesktopCardsStraight:n(490).default,ButtonRegular:n(419).default,DesktopCardsStoryImage:n(491).default,DesktopTabGroup:n(492).default,Roadmap:n(563).default,Showcase:n(493).default,DesktopFooter:n(505).default,YellowBlurTall:n(506).default,Mesas3Solid:n(494).default,YellowBlurSharp:n(511).default,PageBackground:n(495).default})}}]);
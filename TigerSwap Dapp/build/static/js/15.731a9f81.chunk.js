(this["webpackJsonptigerswap-frontend"]=this["webpackJsonptigerswap-frontend"]||[]).push([[15],{723:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return Ve}));var r=t(14),i=t(60),c=t(0),a=t(3),o=t(50),s=t(660),u=t(170),l=t(679),j=t.n(l),b=(t(692),t(4)),d=t.n(b),p=t(15),x=t(26),f=t(66),g=t(12),h=t.n(g),O=t(675),m=t(16),v=t(35),w=t(39),k=t(73),y=t(672),S=t(129),z=function(){var e=Object(c.useState)([]),n=Object(x.a)(e,2),t=n[0],r=n[1],i=Object(f.m)().account,a=Object(S.a)().fastRefresh;return Object(c.useEffect)((function(){i&&function(){var e=Object(p.a)(d.a.mark((function e(){var n,t,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=y.a.map((function(e){return{address:Object(w.d)(),name:"pendingEgg",params:[e.pid,i]}})),e.next=3,Object(v.a)(k,n);case 3:t=e.sent,c=y.a.map((function(e,n){return Object(m.a)(Object(m.a)({},e),{},{balance:new h.a(t[n])})})),r(c);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[i,a]),t},B=t(676),E=t(699),T=function(e){var n=e.value,t=e.decimals,i=e.fontSize,a=void 0===i?"40px":i,s=e.prefix,u=Object(E.useCountUp)({start:0,end:n,duration:1,separator:",",decimals:void 0!==t?t:n<0?4:n>1e5?0:3}),l=u.countUp,j=u.update,b=Object(c.useRef)(j);return Object(c.useEffect)((function(){b.current(n)}),[n,b]),Object(r.jsxs)(o.B,{bold:!0,fontSize:a,children:[s,l]})},P=function(e){var n=e.earningsSum,t=Object(s.a)();return Object(f.m)().account?Object(r.jsx)(T,{value:n}):Object(r.jsx)(o.B,{color:"textDisabled",style:{lineHeight:"60px"},children:t(298,"Locked")})},R=function(e){var n=e.cakeBalance,t=Object(s.a)();return Object(f.m)().account?Object(r.jsx)(T,{value:n,fontSize:"24px"}):Object(r.jsx)(o.B,{color:"textDisabled",style:{lineHeight:"36px"},children:t(298,"Locked")})},N=t(108),J=t(268),Q=t(85),_=t(677),G=function(e){var n=Object(c.useState)(new h.a(0)),t=Object(x.a)(n,2),r=t[0],i=t[1],a=Object(f.m)(),o=a.account,s=a.ethereum,u=Object(S.a)().fastRefresh;return Object(c.useEffect)((function(){o&&s&&function(){var n=Object(p.a)(d.a.mark((function n(){var t;return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(_.b)(s,e,o);case 2:t=n.sent,i(new h.a(t));case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}()()}),[o,s,e,u]),r},I=function(){var e=Object(c.useState)([]),n=Object(x.a)(e,2),t=n[0],r=n[1],i=Object(f.m)().account,a=Object(S.a)().fastRefresh;return Object(c.useEffect)((function(){i&&function(){var e=Object(p.a)(d.a.mark((function e(){var n,t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=y.a.map((function(e){return{address:Object(w.d)(),name:"pendingEgg",params:[e.pid,i]}})),e.next=3,Object(v.a)(k,n);case 3:t=e.sent,r(t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[i,a]),t},$=t(662);function C(){var e=Object(i.a)(["\n  margin-top: 24px;\n"]);return C=function(){return e},e}function D(){var e=Object(i.a)(["\n  color: ",";\n  font-size: 14px;\n"]);return D=function(){return e},e}function F(){var e=Object(i.a)(["\n  margin-bottom: 16px;\n"]);return F=function(){return e},e}function W(){var e=Object(i.a)(["\n  margin-bottom: 16px;\n"]);return W=function(){return e},e}function A(){var e=Object(i.a)(["\n  background-image: url('/images/egg/2a.png');\n  background-repeat: no-repeat;\n  background-position: bottom right;\n  min-height: 376px;\n"]);return A=function(){return e},e}var H=Object(a.e)(o.h)(A()),L=a.e.div(W()),U=a.e.img(F()),V=a.e.div(D(),(function(e){return e.theme.colors.textSubtle})),Y=a.e.div(C()),q=function(){var e=Object(c.useState)(!1),n=Object(x.a)(e,2),t=n[0],i=n[1],a=Object(f.m)().account,u=Object(s.a)(),l=z(),j=Object($.a)(G(Object(w.a)())),b=Object(N.f)().toNumber(),g=I().reduce((function(e,n){return e+new h.a(n).div(new h.a(10).pow(18)).toNumber()}),0),m=l.filter((function(e){return e.balance.toNumber()>0})),v=Object(O.a)(m.map((function(e){return e.pid}))).onReward,k=Object(c.useCallback)(Object(p.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i(!0),e.prev=1,e.next=4,v();case 4:e.next=8;break;case 6:e.prev=6,e.t0=e.catch(1);case 8:return e.prev=8,i(!1),e.finish(8);case 11:case"end":return e.stop()}}),e,null,[[1,6,8,11]])}))),[v]);return Object(r.jsx)(H,{children:Object(r.jsxs)(o.i,{children:[Object(r.jsx)(o.n,{size:"xl",mb:"24px",children:u(542,"Farms & Staking")}),Object(r.jsx)(U,{src:"/images/egg/2.png",alt:"tiger logo",width:64,height:64}),Object(r.jsxs)(L,{children:[Object(r.jsx)(V,{children:"$TIGERS to Harvest"}),Object(r.jsx)(P,{earningsSum:g}),Object(r.jsxs)(V,{children:["~$",(b*g).toFixed(2)]})]}),Object(r.jsxs)(L,{children:[Object(r.jsx)(V,{children:"$TIGERS in Wallet"}),Object(r.jsx)(R,{cakeBalance:j}),Object(r.jsxs)(V,{children:["~$",(b*j).toFixed(2)]})]}),Object(r.jsx)(Y,{children:a?Object(r.jsx)(o.d,{id:"harvest-all",disabled:m.length<=0||t,onClick:k,fullWidth:!0,children:t?u(548,"Collecting $TIGERS"):u(999,"Harvest all (".concat(m.length,")"))}):Object(r.jsx)(B.a,{fullWidth:!0})})]})})},K=t(670);function M(){var e=Object(i.a)(["\n  align-items: center;\n  display: flex;\n  font-size: 14px;\n  justify-content: space-between;\n  margin-bottom: 8px;\n"]);return M=function(){return e},e}function X(){var e=Object(i.a)(["\n  background-image: url('/images/egg/2d.png');\n  background-repeat: no-repeat;\n  background-position: bottom left;\n  min-height: 300px;\n  margin-left: auto;\n  margin-right: auto;\n"]);return X=function(){return e},e}var Z=Object(a.e)(o.h)(X()),ee=a.e.div(M()),ne=function(){var e=Object(s.a)(),n=function(){var e=Object(S.a)().slowRefresh,n=Object(c.useState)(),t=Object(x.a)(n,2),r=t[0],i=t[1];return Object(c.useEffect)((function(){function e(){return(e=Object(p.a)(d.a.mark((function e(){var n,t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=Object(Q.a)(J,Object(w.a)()),e.next=3,n.methods.totalSupply().call();case 3:t=e.sent,i(new h.a(t));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[e]),r}(),t=function(e){var n=Object(c.useState)(new h.a(0)),t=Object(x.a)(n,2),r=t[0],i=t[1],a=Object(S.a)().slowRefresh;return Object(c.useEffect)((function(){!function(){var e=Object(p.a)(d.a.mark((function e(){var n,t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=Object(Q.a)(J,Object(w.a)()),e.next=3,n.methods.balanceOf("0x000000000000000000000000000000000000dEaD").call();case 3:t=e.sent,i(new h.a(t));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[e,a]),r}(Object(w.a)()),i=Object(N.c)(),a=Object(N.f)(),u=n?n.minus(t):new K.a(0),l=Object($.a)(u);a.times(u);return i&&i[0]&&i[0].eggPerBlock&&new K.a(i[0].eggPerBlock).div(new K.a(10).pow(18)).toNumber(),Object(r.jsx)(Z,{children:Object(r.jsxs)(o.i,{children:[Object(r.jsx)(o.n,{size:"xl",mb:"24px",children:e(534,"TIGER Stats")}),Object(r.jsxs)(ee,{children:[Object(r.jsx)(o.B,{fontSize:"14px",children:e(536,"Total Supply")}),n&&Object(r.jsx)(T,{fontSize:"14px",value:Object($.a)(n),decimals:0})]}),Object(r.jsxs)(ee,{children:[Object(r.jsx)(o.B,{fontSize:"14px",children:e(538,"Total Burned")}),Object(r.jsx)(T,{fontSize:"14px",value:Object($.a)(t),decimals:0})]}),Object(r.jsxs)(ee,{children:[Object(r.jsx)(o.B,{fontSize:"14px",children:e(10004,"Circulating Supply")}),l&&Object(r.jsx)(T,{fontSize:"14px",value:l,decimals:0})]})]})})};function te(){var e=Object(i.a)(["\n  background-image: url('/images/egg/2c.png');\n  background-repeat: no-repeat;\n  background-position: top right;\n  min-height: 300px;\n  align-items: center;\n  display: flex;\n  flex: 1;\n"]);return te=function(){return e},e}var re=Object(a.e)(o.h)(te()),ie=function(){var e=Object(s.a)();Object(N.g)();return Object(r.jsx)(re,{children:Object(r.jsxs)(o.i,{children:[Object(r.jsx)(o.n,{size:"lg",mb:"24px",children:e(999,"Total Value Locked (TVL)")}),Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(T,{value:0,prefix:"$",decimals:2}),Object(r.jsx)(o.B,{color:"textSubtle",children:e(999,"Across all Farms and Pools")})]})]})})},ce=t(712);function ae(){var e=Object(i.a)(["\n  align-items: center;\n  display: flex;\n  font-size: 14px;\n  justify-content: space-between;\n  margin-bottom: 8px;\n"]);return ae=function(){return e},e}function oe(){var e=Object(i.a)(["\n  margin-left: auto;\n  margin-right: auto;\n"]);return oe=function(){return e},e}var se=Object(a.e)(o.h)(oe()),ue=(a.e.div(ae()),function(){var e=Object(s.a)();return Object(r.jsx)(se,{children:Object(r.jsxs)(o.i,{children:[Object(r.jsx)(o.n,{size:"xl",mb:"24px",children:e(10003,"Announcements")}),Object(r.jsx)(ce.a,{dataSource:{sourceType:"profile",screenName:"TigerSwap_Ex"},options:{height:"300",chrome:"noheader, nofooter",width:"400"}})]})})});function le(){var e=Object(i.a)(["\n  align-items: center;\n  display: flex;\n  flex: 1;\n  text-align: justify;\n  justify-content: stretch;\n  padding: 20px 20px;\n  margin-left:10px;\n  margin-right:10px;\n  min-height: 100%;\n"]);return le=function(){return e},e}function je(){var e=Object(i.a)(["\n  align-items: center;\n  background-image: url('/images/egg/selectarrow.png');\n  height: 45px;\n  width: 45px;\n  background-repeat: no-repeat;\n  background-position: center;\n  display: flex;\n  justify-content: center;\n  flex-direction: row;\n  border-radius: 100px;\n  text-align: center;\n  cursor: pointer;\n\n  "," {\n    background-image: url('/images/egg/selectarrow.png');\n    background-position: center;\n    align-items: center;\n    flex-direction: row;\n    height: 45px;\n    width: 50px;\n    border-radius: 100px;\n    justify-content: center;\n    text-align: center;\n    cursor: pointer;\n  }\n"]);return je=function(){return e},e}var be=a.e.div(je(),(function(e){return e.theme.mediaQueries.lg})),de=Object(a.e)(o.h)(le()),pe=function(){return Object(r.jsxs)(de,{children:[Object(r.jsxs)(o.i,{children:[Object(r.jsx)(o.B,{bold:!0,fontSize:"20px",children:"Public sales"}),Object(r.jsx)(o.B,{bold:!0,fontSize:"25px",color:"#f95305",children:"On going"}),Object(r.jsx)(o.B,{bold:!0,fontSize:"20px",children:"Join now"})]}),Object(r.jsx)("a",{href:"https://t.me/TigerSwap_Ex",target:"_blank",rel:"noopener noreferrer",children:Object(r.jsx)(be,{title:"Join Now"})})]})};function xe(){var e=Object(i.a)(["\n  align-items: center;\n  display: flex;\n  flex: 1;\n  text-align: justify;\n  justify-content: stretch;\n  padding: 20px 20px;\n  margin-left:10px;\n  margin-right:10px;\n  min-height: 100%;\n"]);return xe=function(){return e},e}var fe=Object(a.e)(o.h)(xe()),ge=function(){return Object(r.jsx)(fe,{children:Object(r.jsxs)(o.i,{children:[Object(r.jsx)(o.B,{bold:!0,fontSize:"20px",children:"Public Sales"}),Object(r.jsx)(o.B,{bold:!0,fontSize:"22px",color:"#f95305",children:" 1 BNB = 15 $TIGERS"}),Object(r.jsx)(o.B,{bold:!0,fontSize:"20px",children:"Buy On Pinksale"})]})})};function he(){var e=Object(i.a)(["\n  align-items: center;\n  display: flex;\n  flex: 1;\n  text-align: justify;\n  justify-content: stretch;\n  padding: 20px 20px;\n  margin-left:10px;\n  margin-right:10px;\n  min-height: 100%;\n"]);return he=function(){return e},e}function Oe(){var e=Object(i.a)(["\n  align-items: center;\n  background-image: url('/images/egg/selectarrow.png');\n  height: 45px;\n  width: 45px;\n  background-repeat: no-repeat;\n  background-position: center;\n  display: flex;\n  justify-content: center;\n  flex-direction: row;\n  border-radius: 100px;\n  text-align: center;\n  cursor: pointer;\n\n  "," {\n    background-image: url('/images/egg/selectarrow.png');\n    background-position: center;\n    align-items: center;\n    flex-direction: row;\n    height: 45px;\n    width: 50px;\n    border-radius: 100px;\n    justify-content: center;\n    text-align: center;\n    cursor: pointer;\n  }\n"]);return Oe=function(){return e},e}var me=a.e.div(Oe(),(function(e){return e.theme.mediaQueries.lg})),ve=Object(a.e)(o.h)(he()),we=function(){return Object(r.jsxs)(ve,{children:[Object(r.jsxs)(o.i,{children:[Object(r.jsx)(o.B,{bold:!0,fontSize:"20px",children:"Earn up to"}),Object(r.jsx)(o.B,{bold:!0,fontSize:"25px",color:"#f95305",children:"2600% APY"}),Object(r.jsx)(o.B,{bold:!0,fontSize:"20px",children:"in Farms"})]}),Object(r.jsx)("a",{href:"https://app.tigerswap.global/farm",target:"_blank",rel:"noopener noreferrer",children:Object(r.jsx)(me,{title:"Join Now"})})]})};function ke(){var e=Object(i.a)(["\n  align-items: center;\n  display: flex;\n  flex: 1;\n  text-align: justify;\n  justify-content: stretch;\n  padding: 20px 20px;\n  margin-left:10px;\n  margin-right:10px;\n  min-height: 100%;\n"]);return ke=function(){return e},e}var ye=Object(a.e)(o.h)(ke()),Se=function(){return Object(r.jsx)(ye,{children:Object(r.jsxs)(o.i,{children:[Object(r.jsx)(o.B,{bold:!0,fontSize:"20px",children:"Over"}),Object(r.jsx)(o.B,{bold:!0,fontSize:"25px",color:"#f95305",children:"4,000x"}),Object(r.jsx)(o.B,{bold:!0,fontSize:"20px",children:"Capital Efficiency"})]})})};function ze(){var e=Object(i.a)(["\n  align-items: center;\n  display: flex;\n  flex: 1;\n  text-align: justify;\n  justify-content: stretch;\n  padding: 20px 20px;\n  margin-left:10px;\n  margin-right:10px;\n  min-height: 100%;\n"]);return ze=function(){return e},e}function Be(){var e=Object(i.a)(["\n  align-items: center;\n  background-image: url('/images/egg/selectarrow.png');\n  height: 45px;\n  width: 45px;\n  background-repeat: no-repeat;\n  background-position: center;\n  display: flex;\n  justify-content: center;\n  flex-direction: row;\n  border-radius: 100px;\n  text-align: center;\n  cursor: pointer;\n\n  "," {\n    background-image: url('/images/egg/selectarrow.png');\n    background-position: center;\n    align-items: center;\n    flex-direction: row;\n    height: 45px;\n    width: 50px;\n    border-radius: 100px;\n    justify-content: center;\n    text-align: center;\n    cursor: pointer;\n  }\n"]);return Be=function(){return e},e}var Ee=a.e.div(Be(),(function(e){return e.theme.mediaQueries.lg})),Te=Object(a.e)(o.h)(ze()),Pe=function(){return Object(r.jsxs)(Te,{children:[Object(r.jsxs)(o.i,{children:[Object(r.jsx)(o.B,{bold:!0,fontSize:"20px",children:"Earn"}),Object(r.jsx)(o.B,{bold:!0,fontSize:"26px",color:"#f95305",children:"$TIGERS"}),Object(r.jsx)(o.B,{bold:!0,fontSize:"20px",children:"In Pools"})]}),Object(r.jsx)("a",{href:"https://app.tigerswap.global/pools",target:"_blank",rel:"noopener noreferrer",children:Object(r.jsx)(Ee,{title:"Join Now"})})]})};function Re(){var e=Object(i.a)(["\n  align-items: center;\n  display: flex;\n  flex: 1;\n  text-align: justify;\n  justify-content: stretch;\n  padding: 20px 20px;\n  margin-left:10px;\n  margin-right:10px;\n  min-height: 100%;\n"]);return Re=function(){return e},e}function Ne(){var e=Object(i.a)(["\n  align-items: center;\n  background-image: url('/images/egg/selectarrow.png');\n  height: 45px;\n  width: 45px;\n  background-repeat: no-repeat;\n  background-position: center;\n  display: flex;\n  justify-content: center;\n  flex-direction: row;\n  border-radius: 100px;\n  text-align: center;\n  cursor: pointer;\n\n  "," {\n    background-image: url('/images/egg/selectarrow.png');\n    background-position: center;\n    align-items: center;\n    flex-direction: row;\n    height: 45px;\n    width: 50px;\n    border-radius: 100px;\n    justify-content: center;\n    text-align: center;\n    cursor: pointer;\n  }\n"]);return Ne=function(){return e},e}var Je=a.e.div(Ne(),(function(e){return e.theme.mediaQueries.lg})),Qe=Object(a.e)(o.h)(Re()),_e=function(){return Object(r.jsxs)(Qe,{children:[Object(r.jsxs)(o.i,{children:[Object(r.jsx)(o.B,{bold:!0,fontSize:"20px",children:"Join"}),Object(r.jsx)(o.B,{bold:!0,fontSize:"26px",color:"#f95305",children:"Whitelist"}),Object(r.jsx)(o.B,{bold:!0,fontSize:"20px",children:"Here"})]}),Object(r.jsx)("a",{href:"https://tigerswap.global/whitelist",target:"_blank",rel:"noopener noreferrer",children:Object(r.jsx)(Je,{title:"Join Now"})})]})};function Ge(){var e=Object(i.a)(["\n  align-items: stretch;\n  justify-content: stretch;\n  margin-bottom: 40px;\n\n  & > div {\n    grid-column: span 12;\n    width: 100%;\n  }\n\n  "," {\n    & > div {\n      grid-column: span 8;\n    }\n  }\n\n  "," {\n    & > div {\n      grid-column: span 12;\n    }\n  }\n"]);return Ge=function(){return e},e}function Ie(){var e=Object(i.a)(["\n  align-items: stretch;\n  justify-content: stretch;\n  margin-bottom: 40px;\n\n  & > div {\n    grid-column: span 6;\n    width: 100%;\n  }\n\n  "," {\n    & > div {\n      grid-column: span 8;\n    }\n  }\n\n  "," {\n    & > div {\n      grid-column: span 6;\n    }\n  }\n"]);return Ie=function(){return e},e}function $e(){var e=Object(i.a)(["\n  display: flex;\n  align-items: stretch;\n  justify-content: stretch;\n  margin-bottom: 2px;\n"]);return $e=function(){return e},e}function Ce(){var e=Object(i.a)(["\n  margin-top: 70px;\n  display: flex;\n  align-items: stretch;\n  justify-content: stretch;\n"]);return Ce=function(){return e},e}function De(){var e=Object(i.a)(["\n  align-items: center;\n  background-image: url('/images/egg/3.png');\n  background-repeat: no-repeat;\n  background-position: top center;\n  display: flex;\n  justify-content: stretch;\n  flex-direction: column;\n  padding: 10px 10px;\n  border-radius: 20px;\n  text-align: center;\n  margin-bottom: 30px;\n\n  "," {\n    background-image: url('/images/egg/3.png');\n    background-position: top;\n    height: 290px;\n    padding-top: 0;\n    justify-content: stretch;\n    margin-bottom: 30px;\n    border-radius: 20px;\n    flex-direction: column;\n    text-align: center;\n  }\n"]);return De=function(){return e},e}var Fe=a.e.div(De(),(function(e){return e.theme.mediaQueries.lg})),We=a.e.div(Ce()),Ae=Object(a.e)(o.b)($e()),He=Object(a.e)(o.b)(Ie(),(function(e){return e.theme.mediaQueries.sm}),(function(e){return e.theme.mediaQueries.lg})),Le=Object(a.e)(o.b)(Ge(),(function(e){return e.theme.mediaQueries.sm}),(function(e){return e.theme.mediaQueries.lg})),Ue={desktop:{breakpoint:{max:3e3,min:968},items:3,slidesToSlide:1},tablet:{breakpoint:{max:968,min:576},items:2,slidesToSlide:1},mobile:{breakpoint:{max:576,min:0},items:1,slidesToSlide:1}},Ve=function(){Object(s.a)();return Object(r.jsxs)(u.a,{children:[Object(r.jsxs)(Fe,{children:[Object(r.jsx)(We,{children:Object(r.jsxs)(o.n,{as:"h1",size:"xl",mb:"24px",color:"white",children:["Welcome to Tiger Dapp!",Object(r.jsx)(o.B,{bold:!0,fontSize:"18px",children:"Development In Progress."}),Object(r.jsx)(o.B,{fontSize:"15px",children:"Please Be Patient For Official Announcements."})]})}),Object(r.jsx)("div",{children:Object(r.jsxs)(Ae,{children:[Object(r.jsx)("a",{href:"https://t.me/TigerSwap_Ex",target:"_blank",rel:"noopener noreferrer",children:Object(r.jsx)(o.d,{children:"Join Group"})}),Object(r.jsx)("a",{href:"https://tigerswap.global/whitelist",target:"_blank",rel:"noopener noreferrer",children:Object(r.jsx)(o.d,{title:"Join Now",children:"Get Whitelisted"})})]})})]}),Object(r.jsx)("div",{children:Object(r.jsxs)(He,{children:[Object(r.jsx)(q,{}),Object(r.jsx)(ue,{}),Object(r.jsx)(ne,{}),Object(r.jsx)(ie,{})]})}),Object(r.jsx)("div",{children:Object(r.jsx)(Le,{children:Object(r.jsxs)(j.a,{responsive:Ue,autoPlay:!0,infinite:!0,autoPlaySpeed:3e3,keyBoardControl:!0,customTransition:"transform 300ms ease-in-out",transitionDuration:300,focusOnSelect:!0,removeArrowOnDeviceType:["tablet","mobile","desktop"],children:[Object(r.jsx)(pe,{}),Object(r.jsx)(ge,{}),Object(r.jsx)(we,{}),Object(r.jsx)(Se,{}),Object(r.jsx)(Pe,{}),Object(r.jsx)(_e,{})]})})})]})}}}]);
//# sourceMappingURL=15.731a9f81.chunk.js.map
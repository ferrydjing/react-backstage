(this["webpackJsonpreact-backstage"]=this["webpackJsonpreact-backstage"]||[]).push([[2],{228:function(e,n,t){"use strict";t.r(n);var a=t(26),r=(t(307),t(308)),l=t.n(r),c=(t(425),t(462)),i=t.n(c),o=t(0),u=t.n(o),s=t(6),m=t(40),f=(t(259),t(261)),d=t.n(f),p=(t(428),t(439)),b=t.n(p),h=t(68),E=t(69);function g(){var e=Object(h.a)(["\n  .ant-drawer-body {\n    padding: 0;\n  }\n"]);return g=function(){return e},e}function y(){var e=Object(h.a)(["\n  margin-left: auto;\n  color: #000;\n"]);return y=function(){return e},e}function x(){var e=Object(h.a)([""]);return x=function(){return e},e}function v(){var e=Object(h.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 48px;\n  transition: width 0.3s ease-out;\n  span {\n    margin-left: 10px;\n    font-size: 22px;\n    color: #fff;\n  }\n"]);return v=function(){return e},e}function O(){var e=Object(h.a)(["\n  margin-top: 56px;\n  padding: 24px;\n  overflow-x: hidden;\n"]);return O=function(){return e},e}function j(){var e=Object(h.a)(["\n  &.ant-layout-header {\n    position: fixed;\n    right: 0;\n    left: 208px;\n    padding: 0 24px;\n    height: 48px;\n    display: flex;\n    align-items: center;\n    background: #ffffff;\n    z-index: 1;\n    box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);\n  }\n"]);return j=function(){return e},e}function k(){var e=Object(h.a)(["\n  &.ant-layout {\n    margin-left: 208px;\n    min-height: 100vh;\n    overflow-x: hidden;\n    overflow-y: scroll;\n  }\n"]);return k=function(){return e},e}function w(){var e=Object(h.a)(["\n  &.ant-layout-sider {\n    position: fixed;\n    left: 0;\n    height: 100vh;\n  }\n"]);return w=function(){return e},e}var S=l.a.Sider,M=l.a.Content,C=l.a.Header,K=Object(E.b)(S)(w()),z=Object(E.b)(l.a)(k()),N=Object(E.b)(C)(j()),I=Object(E.b)(M)(O()),B=E.b.div(v()),L=E.b.div(x()),T=E.b.a.attrs((function(e){return{href:"https://github.com/ferrydjing/react-backstage"}}))(y()),H=Object(E.b)(b.a)(g()),W=Object(m.createModel)((function(){var e=Object(o.useState)(!1),n=Object(a.a)(e,2),t=n[0],r=n[1];return{collapse:t,changeCollapse:function(e){r(e)}}})),A=(t(441),t(447)),F=t.n(A),J=t(518),R=t(519),X=t(520),q=t(504),G=t(70),V=t(62),Z=t.n(V),D=t(71),P=d.a.SubMenu,Q=[{key:"/index",title:"\u9996\u9875",icon:u.a.createElement(J.a,null)},{key:"/general",title:"\u901a\u7528",icon:u.a.createElement(R.a,null),subs:[{key:"/general/button",title:"\u6309\u94ae",icon:""},{key:"/general/icon",title:"\u56fe\u6807",icon:""}]},{key:"/display",title:"\u5c55\u793a",icon:u.a.createElement(X.a,null),subs:[{key:"/display/table",title:"\u8868\u683c",icon:""}]},{key:"/about",title:"\u5173\u4e8e",icon:u.a.createElement(q.a,null)}],U=Object(m.createModel)((function(){var e=Object(D.a)().isMobile,n=W().changeCollapse,t=Object(o.useState)(Q),r=Object(a.a)(t,1)[0],l=Object(o.useState)([]),c=Object(a.a)(l,2),i=c[0],s=c[1],m=Object(o.useState)([]),f=Object(a.a)(m,2),p=f[0],b=f[1],h=function(e){var n=e.key,t=e.title,a=e.icon;return u.a.createElement(d.a.Item,{key:n},u.a.createElement(G.b,{to:n},a,u.a.createElement("span",null,t)))},E=function(t){var a=t.key;s([a]),g(a),setTimeout((function(){e&&n(!1)}),0)},g=function(e){var n=e.split("/").map((function(e){return"/".concat(e)}));(n=n.slice(1,n.length)).length>1?b([n[0]]):b([])};return{menu:r,selectedKeys:i,openKeys:p,openKeySet:g,menuClick:E,onOpenChange:function(e){b(e)},renderMenuItem:h,setOpenKeys:b,renderSubMenuItem:function(e){var n=e.key,t=e.title,a=e.icon,r=e.subs;return u.a.createElement(P,{key:n,icon:a,title:t},r.map((function(e){return h(e)})))},setSelectedKeys:s,renderBreadcrumb:function(e){var n=e.pathname,t=n.split("/").map((function(e){return"/".concat(e)}));return"/index"===(t=t.slice(1,t.length))[0]&&(t=[]),t=t.map((function(e){var n=Z.a.find((function(n){return n.key===e}),r);if(!n)for(var t=0;t<r.length;t++)if(r[t].subs){var a=Z.a.find((function(n){return-1!==n.key.indexOf(e)}),r[t].subs);if(a){n=a;break}}return{key:e,txt:n?n.title:""}})),"/index"===n?"":u.a.createElement(F.a,{style:{marginBottom:20},computedmatch:void 0},u.a.createElement(F.a.Item,null,u.a.createElement(G.b,{to:"/index",onClick:function(){E({key:"/index"})}},"\u9996\u9875")),t.map((function(e){return u.a.createElement(F.a.Item,{key:e.key},e.txt)})))}}})),Y=t(262),$=[W,U,D.a],_=Object(s.g)(Object(m.withModel)($,(function(e){var n=Object(a.a)(e,3),t=n[0],r=n[1],l=n[2];return{collapse:t.collapse,changeCollapse:t.changeCollapse,menu:r.menu,openKeys:r.openKeys,selectedKeys:r.selectedKeys,renderMenuItem:r.renderMenuItem,renderSubMenuItem:r.renderSubMenuItem,menuClick:r.menuClick,setSelectedKeys:r.setSelectedKeys,openKeySet:r.openKeySet,onOpenChange:r.onOpenChange,isMobile:l.isMobile}}))(Object(o.memo)((function(e){var n=e.location,t=e.collapse,a=e.menu,r=e.openKeys,l=e.selectedKeys,c=e.renderSubMenuItem,i=e.renderMenuItem,s=e.menuClick,m=e.setSelectedKeys,f=e.openKeySet,p=e.onOpenChange,b=e.isMobile,h=e.changeCollapse;Object(o.useEffect)((function(){setTimeout((function(){var e=n.pathname;f(e),m([e])}),0)}),[n]);var E=function(){return u.a.createElement(K,{collapsed:t&&!b,width:"208"},u.a.createElement(B,null,u.a.createElement(Y.a,{style:{fontSize:38,color:"#fff"},type:"bear"})," ",t&&!b?"":u.a.createElement("span",null,"\u718a\u5d3d")),u.a.createElement(d.a,{theme:"dark",mode:"inline",style:{marginTop:20},selectedKeys:l,openKeys:r,onOpenChange:p,onClick:s},a.map((function(e){return e.subs&&e.subs.length>0?c(e):i(e)}))))};return b?u.a.createElement(H,{visible:t,placement:"left",closable:!1,onClose:function(){h(!1)}},E()):E()})))),ee=t(524),ne=t(525),te=t(526),ae=(t(458),t(461)),re=t.n(ae),le=t(521),ce=t(522),ie=t(523),oe=(t(311),t(460)),ue=t.n(oe);function se(){var e=Object(h.a)(["\n  margin-left: 10px;\n  cursor: pointer;\n"]);return se=function(){return e},e}function me(){var e=Object(h.a)(["\n  float: right;\n"]);return me=function(){return e},e}var fe=Object(E.b)(ue.a)(me()),de=E.b.div(se()),pe=u.a.createElement(d.a,null,u.a.createElement(d.a.Item,{icon:u.a.createElement(le.a,null)},"\u4fee\u6539\u5bc6\u7801"),u.a.createElement(d.a.Item,{icon:u.a.createElement(ce.a,null)},u.a.createElement(G.b,{to:"/login"},"\u9000\u51fa"))),be=function(){return u.a.createElement(fe,{overlay:pe,width:{width:120}},u.a.createElement(de,null,u.a.createElement("span",{style:{marginRight:10}},"sadasdsa"),u.a.createElement(re.a,{icon:u.a.createElement(ie.a,null),src:"https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png"})))},he=[W,D.a],Ee=Object(m.withModel)(he,(function(e){var n=Object(a.a)(e,2),t=n[0],r=n[1];return{collapse:t.collapse,changeCollapse:t.changeCollapse,isMobile:r.isMobile}}))(Object(o.memo)((function(e){var n=e.collapse,t=e.changeCollapse,a=e.isMobile;return u.a.createElement(z,{style:{marginLeft:a?0:n?80:208}},u.a.createElement(N,{style:{left:a?0:n?80:208}},u.a.createElement(L,{onClick:function(){return t(!n)}},n||a?u.a.createElement(ee.a,{style:{fontSize:22}}):u.a.createElement(ne.a,{style:{fontSize:22}})),u.a.createElement(T,null,u.a.createElement(te.a,{style:{fontSize:20,marginLeft:"auto"}})),u.a.createElement(be,null)),u.a.createElement(I,null,e.children))}))),ge=t(46),ye=[U,D.a];n.default=Object(s.g)(Object(m.withModel)(ye,(function(e){var n=Object(a.a)(e,2),t=n[0],r=n[1];return{menu:t.menu,menuClick:t.menuClick,renderBreadcrumb:t.renderBreadcrumb,isMobile:r.isMobile}}))(Object(o.memo)((function(e){var n=e.location,t=e.renderBreadcrumb,a=e.isMobile;return u.a.createElement(l.a,{style:{overflow:"hidden"}},u.a.createElement(i.a,null),u.a.createElement(_,{style:{display:a?"none":"block"}}),u.a.createElement(Ee,null,t(n),u.a.createElement(s.d,null,ge.d.map((function(e){return u.a.createElement(s.b,{key:e.path,path:e.path,exact:e.exact,render:function(n){return u.a.createElement(e.component,n)}})})),u.a.createElement(s.a,Object.assign({to:"/404"},e)))))}))))},229:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),l=t(68),c=t(69);function i(){var e=Object(l.a)([""]);return i=function(){return e},e}var o=c.b.section(i()),u=(t(275),t(276)),s=t.n(u),m=t(26),f=t(40),d=t(476),p=t(477),b=t(478);function h(){var e=Object(l.a)(["\n  padding: 20px 24px 8px;\n  color: rgba(0, 0, 0, 0.45);\n  background: #fff;\n  border-radius: 2px;\n  box-sizing: border-box;\n  p {\n    display: flex;\n    justify-content: space-between;\n  }\n  h2 {\n    font-size: 30px;\n    font-weight: 300;\n    color: rgba(0, 0, 0, 0.85);\n  }\n  .content {\n    position: relative;\n    padding-bottom: 12px;\n    height: 46px;\n    display: flex;\n    align-items: flex-end;\n    &::after {\n      content: '';\n      position: absolute;\n      left: 0;\n      bottom: 0;\n      width: 100%;\n      height: 1px;\n      background: #f0f0f0;\n    }\n  }\n  .info {\n    margin-top: 9px;\n    padding-top: 9px;\n    span {\n      margin-left: 8px;\n      color: rgba(0, 0, 0, 0.85);\n    }\n  }\n"]);return h=function(){return e},e}function E(){var e=Object(l.a)(["\n  display: block;\n  padding: 0 12px;\n  margin-bottom: 24px;\n  flex: 0 0 100%;\n  max-width: 100%;\n  min-height: 1px;\n  box-sizing: border-box;\n"]);return E=function(){return e},e}function g(){var e=Object(l.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  .card-item {\n    @media only screen and (min-width: 576px) {\n      flex: 0 0 100%;\n      max-width: 100%;\n    }\n    @media only screen and (min-width: 768px) {\n      flex: 0 0 50%;\n      max-width: 50%;\n    }\n    @media only screen and (min-width: 992px) {\n      flex: 0 0 50%;\n      max-width: 50%;\n    }\n    @media only screen and (min-width: 1200px) {\n      flex: 0 0 25%;\n      max-width: 25%;\n    }\n  }\n"]);return g=function(){return e},e}var y=c.b.div(g()),x=c.b.div(E()),v=c.b.div(h()),O=[t(71).a],j=Object(f.withModel)(O,(function(e){var n=Object(m.a)(e,2),t=n[0];n[1];return{screenWidth:t.screenWidth,screenHeight:t.screenHeight}}))(Object(a.memo)((function(e){var n=e.screenWidth,t=e.screenHeight,l=Object(a.useState)(null),c=Object(m.a)(l,2),i=c[0],o=c[1];return Object(a.useEffect)((function(){var e=echarts.init(document.querySelector("#line"));e.setOption({xAxis:{type:"category",boundaryGap:!1,show:!1,data:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]},yAxis:{type:"value",show:!1},grid:{left:0,right:0},tooltip:{formatter:"{b0}: {c0}<br />{b1}: {c1}"},series:[{data:[820,932,901,934,1290,1330,1320],type:"line",smooth:!0,lineStyle:{color:"#975fe4"},areaStyle:{color:"#975fe4"}}]}),o(e)}),[]),Object(a.useEffect)((function(){i&&i.resize()}),[n,t,i]),r.a.createElement(y,null,r.a.createElement(x,{className:"card-item"},r.a.createElement(v,null,r.a.createElement("p",null,"\u603b\u9500\u552e\u989d",r.a.createElement(s.a,{title:"\u6307\u6807\u8bf4\u660e"},r.a.createElement(d.a,null))),r.a.createElement("h2",null,"\xa5 126,560"),r.a.createElement("div",{className:"content"},"\u5468\u540c\u6bd4",r.a.createElement("span",{style:{marginLeft:8}},"12%"),r.a.createElement(p.a,{style:{fontSize:20,color:"red",transform:"scale(0.5)"}}),r.a.createElement("span",{style:{marginLeft:10}},"\u65e5\u540c\u6bd4"),r.a.createElement("span",{style:{marginLeft:8}},"12%"),r.a.createElement(b.a,{style:{fontSize:20,color:"green",transform:"scale(0.5)"}})),r.a.createElement("div",{className:"info"},"\u65e5\u9500\u552e\u989d",r.a.createElement("span",null,"\uffe512,423")))),r.a.createElement(x,{className:"card-item"},r.a.createElement(v,null,r.a.createElement("p",null,"\u8bbf\u95ee\u91cf",r.a.createElement(s.a,{title:"\u6307\u6807\u8bf4\u660e"},r.a.createElement(d.a,null))),r.a.createElement("h2",null,"9,846"),r.a.createElement("div",{className:"content",id:"line"}),r.a.createElement("div",{className:"info"},"\u65e5\u8bbf\u95ee\u91cf",r.a.createElement("span",null,"12,423")))),r.a.createElement(x,{className:"card-item"},r.a.createElement(v,null,r.a.createElement("p",null,"\u652f\u4ed8\u7b14\u6570",r.a.createElement(s.a,{title:"\u6307\u6807\u8bf4\u660e"},r.a.createElement(d.a,null))),r.a.createElement("h2",null,"6,560"),r.a.createElement("div",{className:"content"}),r.a.createElement("div",{className:"info"},"\u8f6c\u5316\u7387",r.a.createElement("span",null,"60%")))),r.a.createElement(x,{className:"card-item"},r.a.createElement(v,null,r.a.createElement("p",null,"\u8fd0\u8425\u6d3b\u52a8\u6548\u679c",r.a.createElement(s.a,{title:"\u6307\u6807\u8bf4\u660e"},r.a.createElement(d.a,null))),r.a.createElement("h2",null,"78%"),r.a.createElement("div",{className:"content"}),r.a.createElement("div",{className:"info"},"\u65e5\u9500\u552e\u989d",r.a.createElement("span",null,"\uffe512,423")))))})));n.default=Object(a.memo)((function(e){return r.a.createElement(o,null,r.a.createElement(j,null))}))},262:function(e,n,t){"use strict";t.d(n,"a",(function(){return l})),t.d(n,"b",(function(){return u}));var a=t(0),r=t.n(a),l=Object(a.memo)((function(e){var n=e.type,t=e.style;return r.a.createElement("i",{className:"bacctage-icon-"+n,style:t})})),c=t(68);function i(){var e=Object(c.a)(["\n  padding: 20px 20px 30px;\n  background: #fff;\n  border-radius: 4px;\n  h1 {\n    position: relative;\n    padding-bottom: 20px;\n    margin-bottom: 20px;\n    font-size: 20px;\n    &::after {\n      content: '';\n      position: absolute;\n      left: 0;\n      bottom: 0;\n      width: 100%;\n      height: 1px;\n      background: #efefef;\n    }\n  }\n"]);return i=function(){return e},e}var o=t(69).b.div(i()),u=function(e){var n=e.title,t=void 0===n?"\u5982\u4f55\u4f7f\u7528":n,a=e.children;return r.a.createElement(o,null,r.a.createElement("h1",null,t),a)}}}]);
//# sourceMappingURL=index.d38e4aea.chunk.js.map
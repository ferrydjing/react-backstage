(this["webpackJsonpreact-backstage"]=this["webpackJsonpreact-backstage"]||[]).push([[5],{250:function(e,n,t){"use strict";t.d(n,"a",(function(){return c})),t.d(n,"b",(function(){return u}));var a=t(0),r=t.n(a),c=Object(a.memo)((function(e){var n=e.type,t=e.style;return r.a.createElement("i",{className:"bacctage-icon-"+n,style:t})})),l=t(64);function i(){var e=Object(l.a)(["\n  padding: 20px 20px 30px;\n  background: #fff;\n  border-radius: 4px;\n  h1 {\n    position: relative;\n    padding-bottom: 20px;\n    margin-bottom: 20px;\n    font-size: 20px;\n    &::after {\n      content: '';\n      position: absolute;\n      left: 0;\n      bottom: 0;\n      width: 100%;\n      height: 1px;\n      background: #efefef;\n    }\n  }\n"]);return i=function(){return e},e}var o=t(65).b.div(i()),u=function(e){var n=e.title,t=void 0===n?"\u5982\u4f55\u4f7f\u7528":n,a=e.children;return r.a.createElement(o,null,r.a.createElement("h1",null,t),a)}},462:function(e,n,t){"use strict";t.r(n);var a=t(227),r=(t(251),t(253)),c=t.n(r),l=(t(290),t(446)),i=t.n(l),o=t(0),u=t.n(o),m=t(6),s=t(223),f=(t(233),t(236)),p=t.n(f),b=t(64),d=t(65);function h(){var e=Object(b.a)(["\n  margin-left: auto;\n  color: #000;\n"]);return h=function(){return e},e}function y(){var e=Object(b.a)([""]);return y=function(){return e},e}function g(){var e=Object(b.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 56px;\n  transition: width 0.3s ease-out;\n  span {\n    margin-left: 10px;\n    font-size: 22px;\n    color: #fff;\n  }\n"]);return g=function(){return e},e}function O(){var e=Object(b.a)(["\n  margin-top: 56px;\n  padding: 20px 20px 20px;\n"]);return O=function(){return e},e}function x(){var e=Object(b.a)(["\n  position: fixed;\n  display: flex;\n  align-items: center;\n  /* width: 100%; */\n  right: 0;\n  left: 200px;\n  height: 56px !important;\n  background: #ffffff !important;\n  box-shadow: 0px 6px 16px 0px rgba(154, 167, 179, 0.2);\n  z-index: 1;\n  /* text-align: right; */\n"]);return x=function(){return e},e}function E(){var e=Object(b.a)(["\n  margin-left: 200px;\n  min-height: 100vh !important;\n  overflow-x: hidden !important;\n  overflow-y: scroll !important;\n"]);return E=function(){return e},e}function v(){var e=Object(b.a)(["\n  position: fixed !important;\n  left: 0;\n  width: 200px;\n  height: 100vh;\n"]);return v=function(){return e},e}var j=c.a.Sider,k=c.a.Content,S=c.a.Header,C=Object(d.b)(j)(v()),K=Object(d.b)(c.a)(E()),w=Object(d.b)(S)(x()),I=Object(d.b)(k)(O()),M=d.b.div(g()),z=d.b.div(y()),B=d.b.a.attrs((function(e){return{href:"https://github.com/ferrydjing/react-backstage"}}))(h()),J=Object(s.createModel)((function(){var e=Object(o.useState)(!1),n=Object(a.a)(e,2),t=n[0],r=n[1];return{collapse:t,changeCollapse:function(e){return r(e)}}})),L=(t(406),t(422)),T=t.n(L),A=t(465),H=t(466),N=t(467),P=t(468),R=t(66),q=t(410),D=t.n(q),F=p.a.SubMenu,G=[{key:"/index",title:"\u9996\u9875",icon:u.a.createElement(A.a,null)},{key:"/general",title:"\u901a\u7528",icon:u.a.createElement(H.a,null),subs:[{key:"/general/button",title:"\u6309\u94ae",icon:""},{key:"/general/icon",title:"\u56fe\u6807",icon:""}]},{key:"/display",title:"\u5c55\u793a",icon:u.a.createElement(N.a,null),subs:[{key:"/display/table",title:"\u8868\u683c",icon:""}]},{key:"/about",title:"\u5173\u4e8e",icon:u.a.createElement(P.a,null)}],Q=Object(s.createModel)((function(){var e=Object(o.useState)(G),n=Object(a.a)(e,1)[0],t=Object(o.useState)([]),r=Object(a.a)(t,2),c=r[0],l=r[1],i=Object(o.useState)([]),m=Object(a.a)(i,2),s=m[0],f=m[1],b=function(e){var n=e.key,t=e.title,a=e.icon;return u.a.createElement(p.a.Item,{key:n},u.a.createElement(R.b,{to:n},a,u.a.createElement("span",null,t)))},d=function(e){var n=e.key;l([n]),h(n)},h=function(e){var n=e.split("/").map((function(e){return"/".concat(e)}));(n=n.slice(1,n.length)).length>1?f([n[0]]):f([])};return{menu:n,selectedKeys:c,openKeys:s,openKeySet:h,menuClick:d,onOpenChange:function(e){f(e)},renderMenuItem:b,setOpenKeys:f,renderSubMenuItem:function(e){var n=e.key,t=e.title,a=e.icon,r=e.subs;return u.a.createElement(F,{key:n,icon:a,title:t},r.map((function(e){return b(e)})))},setSelectedKeys:l,renderBreadcrumb:function(e){var t=e.pathname,a=t.split("/").map((function(e){return"/".concat(e)}));return"/index"===(a=a.slice(1,a.length))[0]&&(a=[]),a=a.map((function(e){var t=D.a.find((function(n){return n.key===e}),n);if(!t)for(var a=0;a<n.length;a++)if(n[a].subs){var r=D.a.find((function(n){return-1!==n.key.indexOf(e)}),n[a].subs);if(r){t=r;break}}return{key:e,txt:t?t.title:""}})),"/index"===t?"":u.a.createElement(T.a,{style:{marginBottom:20},computedmatch:void 0},u.a.createElement(T.a.Item,null,u.a.createElement(R.b,{to:"/index",onClick:function(){d({key:"/index"})}},"\u9996\u9875")),a.map((function(e){return u.a.createElement(T.a.Item,{key:e.key},e.txt)})))}}})),U=t(250),V=[J,Q],W=Object(m.g)(Object(s.withModel)(V,(function(e){var n=Object(a.a)(e,2),t=n[0],r=n[1];return{collapse:t.collapse,menu:r.menu,openKeys:r.openKeys,selectedKeys:r.selectedKeys,renderMenuItem:r.renderMenuItem,renderSubMenuItem:r.renderSubMenuItem,menuClick:r.menuClick,setSelectedKeys:r.setSelectedKeys,openKeySet:r.openKeySet,onOpenChange:r.onOpenChange}}))(Object(o.memo)((function(e){var n=e.location,t=e.collapse,a=e.menu,r=e.openKeys,c=e.selectedKeys,l=e.renderSubMenuItem,i=e.renderMenuItem,m=e.menuClick,s=e.setSelectedKeys,f=e.openKeySet,b=e.onOpenChange;return Object(o.useEffect)((function(){setTimeout((function(){var e=n.pathname;f(e),s([e])}),0)}),[n]),u.a.createElement(C,{collapsed:t},u.a.createElement(M,null,u.a.createElement(U.a,{style:{fontSize:38,color:"#fff"},type:"bear"})," ",t?"":u.a.createElement("span",null,"\u718a\u5d3d")),u.a.createElement(p.a,{theme:"dark",mode:"inline",selectedKeys:c,openKeys:r,onOpenChange:b,onClick:m},a.map((function(e){return e.subs&&e.subs.length>0?l(e):i(e)}))))})))),X=t(472),Y=t(473),Z=t(474),$=(t(442),t(445)),_=t.n($),ee=t(469),ne=t(470),te=t(471),ae=(t(278),t(444)),re=t.n(ae);function ce(){var e=Object(b.a)(["\n  margin-left: 10px;\n  cursor: pointer;\n"]);return ce=function(){return e},e}function le(){var e=Object(b.a)(["\n  float: right;\n"]);return le=function(){return e},e}var ie=Object(d.b)(re.a)(le()),oe=d.b.div(ce()),ue=u.a.createElement(p.a,null,u.a.createElement(p.a.Item,{icon:u.a.createElement(ee.a,null)},"\u4fee\u6539\u5bc6\u7801"),u.a.createElement(p.a.Item,{icon:u.a.createElement(ne.a,null)},"\u9000\u51fa")),me=function(){return u.a.createElement(ie,{overlay:ue,width:{width:120}},u.a.createElement(oe,null,u.a.createElement("span",{style:{marginRight:10}},"sadasdsa"),u.a.createElement(_.a,{icon:u.a.createElement(te.a,null)})))},se=[J],fe=Object(s.withModel)(se,(function(e){var n=Object(a.a)(e,1)[0];return{collapse:n.collapse,changeCollapse:n.changeCollapse}}))(Object(o.memo)((function(e){var n=e.collapse,t=e.changeCollapse;return u.a.createElement(K,{style:{marginLeft:n?80:200}},u.a.createElement(w,{style:{left:n?80:200}},u.a.createElement(z,{onClick:function(){t(!n)}},n?u.a.createElement(X.a,{style:{fontSize:22}}):u.a.createElement(Y.a,{style:{fontSize:22}})),u.a.createElement(B,null,u.a.createElement(Z.a,{style:{fontSize:20,marginLeft:"auto"}})),u.a.createElement(me,null)),u.a.createElement(I,null,e.children))}))),pe=[{path:"/index",exact:!0,name:"Index",component:Object(o.lazy)((function(){return t.e(4).then(t.bind(null,459))}))},{path:"/about",exact:!0,name:"About",component:Object(o.lazy)((function(){return t.e(1).then(t.bind(null,460))}))},{path:"/general/button",exact:!0,name:"Button",component:Object(o.lazy)((function(){return t.e(2).then(t.bind(null,463))}))},{path:"/general/icon",exact:!0,name:"Icon",component:Object(o.lazy)((function(){return Promise.all([t.e(12),t.e(3)]).then(t.bind(null,464))}))},{path:"/display/table",exact:!0,name:"Table",component:Object(o.lazy)((function(){return t.e(9).then(t.bind(null,461))}))}],be=[Q];n.default=Object(m.g)(Object(s.withModel)(be,(function(e){var n=Object(a.a)(e,1)[0];return{menu:n.menu,menuClick:n.menuClick,renderBreadcrumb:n.renderBreadcrumb}}))(Object(o.memo)((function(e){var n=e.location,t=e.renderBreadcrumb;return u.a.createElement(c.a,{style:{overflow:"hidden"}},u.a.createElement(i.a,null),u.a.createElement(W,null),u.a.createElement(fe,null,t(n),u.a.createElement(m.d,null,pe.map((function(e){return u.a.createElement(m.b,{key:e.path,path:e.path,exact:e.exact,render:function(n){return u.a.createElement(e.component,n)}})})),u.a.createElement(m.a,Object.assign({to:"/404"},e)))))}))))}}]);
//# sourceMappingURL=layout.34e9d8eb.chunk.js.map
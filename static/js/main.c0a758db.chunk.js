(this.webpackJsonphouse2=this.webpackJsonphouse2||[]).push([[0],{17:function(e,n,t){e.exports={select:"superselect_select__wkY8Y",option:"superselect_option__3aHED"}},23:function(e,n,t){e.exports={roof:"Roof_roof__2oB9_"}},24:function(e,n,t){e.exports={house:"House_house__2HgwJ"}},25:function(e,n,t){e.exports={window:"Window_window__3aseo"}},26:function(e,n,t){e.exports={door:"Door_door__3GeFD"}},30:function(e,n,t){e.exports={range:"SuperRange_range__23JvQ"}},35:function(e,n,t){},44:function(e,n,t){"use strict";t.r(n);var o=t(0),r=t.n(o),c=t(13),s=t.n(c),a=(t(35),t(6)),i=t.n(a),l=t(23),u=t.n(l),d=t(1);var j=function(){return Object(d.jsx)("div",{className:u.a.roof})},b=t(24),O=t.n(b),h=t(3),f=t(25),p=t.n(f);var x=function(){return Object(d.jsx)("div",{className:p.a.window})},v=t(26),g=t.n(v);var m,_=function(){return Object(d.jsx)("div",{className:g.a.door})},D=t(4);var y,w=function(e){var n=D.a.div(m||(m=Object(h.a)(["\n      width: 200px;\n      height: 100px;  \n      background: ",";;\n      border-right: 3px solid black;\n      border-left: 3px solid black;\n      border-bottom:3px solid black;\n      \n      display: flex;\n      flex-direction: row;\n      justify-content: space-around;\n      align-items: center;\n          "])),e.color);return Object(d.jsxs)(n,{children:[Object(d.jsx)(x,{}),Object(d.jsx)(_,{})]})};var C=function(e){var n=D.a.div(y||(y=Object(h.a)(["\n      width: 200px;\n      height: 100px; \n      background: ",";;\n      border-right: 3px solid black;\n      border-left: 3px solid black;\n      display: flex;\n      flex-direction: row;\n      justify-content: space-around;\n      align-items: center;\n          "])),e.color);return Object(d.jsxs)(n,{children:[Object(d.jsx)(x,{}),Object(d.jsx)(x,{})]})};var A,H=function(e){return Object(d.jsxs)("div",{className:O.a.house,children:[Object(d.jsx)(j,{}),e.f.map((function(e){return e.door?Object(d.jsx)(w,{color:e.color}):Object(d.jsx)(C,{color:e.color},e.Floorid)}))]})},N=t(5),k=t(2),I=t(12),F=t(7),E=Object(F.v1)(),R=Object(F.v1)(),S=[{houseID:E,floors:1}],L=t(18);var W,B,J=function(e){var n=D.a.div(A||(A=Object(h.a)(["\n   \n      justify-content: flex-start;\n      margin: 0;\n      padding: 0;\n          "])));return Object(d.jsx)(n,{children:Object(d.jsxs)("span",{children:["House ",e.count]})})};var U,T,z=function(e){var n=D.a.div(W||(W=Object(h.a)(["\n      width:30%;\n      height: 50px; \n      display: flex;\n      flex-direction: row;\n      justify-content: space-between;\n      align-items: center;\n      font-size: small;\n\n    "]))),t=D.a.div(B||(B=Object(h.a)(["\n      width: 20px;\n      height: 20px; \n     border: 1px solid;\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n      align-items: center;\n      margin-block-start: 0;\n      margin-block-end: 0;\n      font-size: small;\n   "])));return Object(d.jsxs)(n,{children:[Object(d.jsx)("span",{children:"Floors: "}),Object(d.jsx)(t,{children:e.flors})]})},G=t(15),M=t(30),V=t.n(M),Y=function(e){e.type;var n=e.onChange,t=e.onChangeRange,o=e.className,r=(e.min,Object(G.a)(e,["type","onChange","onChangeRange","className","min"])),c="".concat(V.a.range," ").concat(o||"");return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("input",Object(k.a)({type:"range",onChange:function(e){n&&n(e),t&&t(+e.currentTarget.value)},className:c},r))})},P=t(10),q=Object(P.a)({},E,[{color:"white",Floorid:R,door:!0}]),K=function(e,n,t,o){return{type:"ADD-FLOOR",Houseid:e,color:n,florsValue:t,door:o}},Q=t(17),X=t.n(Q),Z=function(e){var n,t=e.options,o=e.onChange,r=e.onChangeOption,c=Object(G.a)(e,["options","onChange","onChangeOption"]);t&&(n=null===t||void 0===t?void 0:t.map((function(e,n){return Object(d.jsx)("option",{className:X.a.option,value:e,children:e},n)})));var s=X.a.select;return Object(d.jsx)("select",Object(k.a)(Object(k.a)({className:s,onChange:function(e){o&&o(e),r&&r(e.currentTarget.value)}},c),{},{children:n}))},$=["","green","black","blue","white","red"];var ee=function(e){var n=D.a.div(U||(U=Object(h.a)(["\n      width: 100%;\n      border: 1px solid;\n      display: flex;\n      flex-direction: row;\n      justify-content: flex-start;\n      align-items: center;\n    "]))),t=D.a.div(T||(T=Object(h.a)(["\n      width: 50%;\n      height: 100%;\n      border: 1px solid;\n      display: flex;\n      flex-direction: column;\n      justify-content: flex-start;\n      align-items: flex-start;\n      margin-block-start: 0;\n      margin-block-end: 0;\n    "]))),r=Object(o.useState)(""),c=Object(L.a)(r,2),s=c[0],a=c[1],i=Object(o.useState)(1),l=Object(L.a)(i,2),u=l[0],j=l[1],b=Object(N.b)(),O=(Object(N.c)((function(e){return e.houses})).length,Object(N.c)((function(n){return n.floor[e.houseID]})).length);return Object(o.useEffect)((function(){b(function(e,n){return{type:"ADD-FLOORS",houseID:e,floors:n}}(e.houseID,u))}),[u,j]),Object(d.jsxs)(n,{children:[Object(d.jsxs)(t,{children:[Object(d.jsx)(J,{count:e.housenumber}),Object(d.jsx)(z,{flors:O}),Object(d.jsx)(Y,{onChangeRange:function(n){n<1||(b(K(e.houseID,"black",n,!1)),j(n))},max:9,step:1,value:u,min:1})]}),Object(d.jsx)(Z,{options:$,value:s,onChangeOption:function(n){b(function(e,n){return{type:"CHANGE-COLOR",Houseid:e,color:n}}(e.houseID,n)),a(n)}})]})};var ne=function(){var e=Object(N.b)(),n=Object(N.c)((function(e){return e.houses})),t=Object(N.c)((function(e){return e.floor})),o=Object(F.v1)();return Object(d.jsxs)("div",{className:i.a.App,children:[Object(d.jsx)("div",{className:i.a.haederWrapper,children:"eeeeee"}),Object(d.jsx)("header",{className:i.a.header,children:"City Byilder"}),Object(d.jsxs)("div",{className:i.a.body,children:[Object(d.jsxs)("div",{className:i.a.controlsWrapper,children:[Object(d.jsx)("div",{className:i.a.title,children:"Houses List"}),Object(d.jsx)("div",{className:i.a.controls,children:n.map((function(e,n){return Object(d.jsx)(ee,{housenumber:n+1,floorsCount:e.floors,houseID:e.houseID})}))}),Object(d.jsx)("div",{className:i.a.footerControls,children:Object(d.jsx)("button",{onClick:function(){e(function(e,n){return{type:"ADD-HOUSE",houseID:e,floors:n}}(o,1)),e(K(o,"",1,!0))},children:"Add house"})})]}),Object(d.jsx)("div",{className:i.a.placeForHouses,children:n.map((function(e){var n=t[e.houseID];return Object(d.jsx)(H,{f:n},e.houseID)}))})]})]})},te=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,45)).then((function(n){var t=n.getCLS,o=n.getFID,r=n.getFCP,c=n.getLCP,s=n.getTTFB;t(e),o(e),r(e),c(e),s(e)}))},oe=t(19),re=Object(oe.a)({houses:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"ADD-HOUSE":return[].concat(Object(I.a)(e),[{houseID:n.houseID,floors:n.floors}]);case"REMOVE-HOUSE":var t=Object(k.a)({},e);return delete t[n.houseID],t;default:return e}},floor:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"CHANGE-COLOR":var t=Object(k.a)({},e),o=t[n.Houseid],r=o.map((function(e){return Object(k.a)(Object(k.a)({},e),{},{color:n.color})}));return t[n.Houseid]=Object(I.a)(r),t;case"ADD-HOUSE":return Object(k.a)(Object(k.a)({},e),{},Object(P.a)({},n.houseID,[]));case"ADD-FLOOR":var c=Object(k.a)({},e),s=c[n.Houseid];if(n.florsValue<s.length)s.shift();else{var a={Floorid:Object(F.v1)(),color:"",door:n.door},i=[a].concat(Object(I.a)(s));c[n.Houseid]=i}return c;default:return e}}}),ce=Object(oe.b)(re);window.store=ce,s.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(N.a,{store:ce,children:Object(d.jsx)(ne,{})})}),document.getElementById("root")),te()},6:function(e,n,t){e.exports={App:"App_App__2YU5y",header:"App_header__217Oq",body:"App_body__1OJOW",controlsWrapper:"App_controlsWrapper__388zM",title:"App_title__13KOu",footerControls:"App_footerControls__3Wefr",controls:"App_controls__39StL",placeForHouses:"App_placeForHouses__1Bblx"}}},[[44,1,2]]]);
//# sourceMappingURL=main.c0a758db.chunk.js.map
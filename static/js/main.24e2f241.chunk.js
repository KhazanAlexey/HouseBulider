(this.webpackJsonphouse2=this.webpackJsonphouse2||[]).push([[0],{17:function(e,n,t){e.exports={door:"Door_door__3GeFD",number:"Door_number__3CaKA"}},18:function(e,n,t){e.exports={select:"superselect_select__wkY8Y",option:"superselect_option__3aHED"}},23:function(e,n,t){e.exports={roof:"Roof_roof__2oB9_"}},24:function(e,n,t){e.exports={house:"House_house__2HgwJ"}},25:function(e,n,t){e.exports={window:"Window_window__3aseo"}},29:function(e,n,t){e.exports={range:"SuperRange_range__23JvQ"}},35:function(e,n,t){},44:function(e,n,t){"use strict";t.r(n);var o=t(0),c=t.n(o),r=t(12),s=t.n(r),a=(t(35),t(30)),i=t(2),u=t(7),l=t.n(u),d=t(23),b=t.n(d),j=t(1);var h=function(){return Object(j.jsx)("div",{className:b.a.roof})},O=t(24),p=t.n(O),x=t(25),f=t.n(x);var m,g,v=function(){return Object(j.jsx)("div",{className:f.a.window})},_=t(17),w=t.n(_),N=c.a.memo((function(e){var n=e.houseNumber;return Object(j.jsxs)("div",{className:w.a.door,children:["House\u2116 ",Object(j.jsx)("div",{className:w.a.number,children:n})]})})),D=t(3),C=c.a.memo((function(e){var n=D.a.div(m||(m=Object(i.a)(["\n      width: 200px;\n      height: 100px;  \n      background: ",";;\n      border-right: 3px solid black;\n      border-left: 3px solid black;\n      border-bottom:3px solid black;\n\n      display: flex;\n      flex-direction: row;\n      justify-content: space-around;\n      align-items: center;\n          "])),e.color);return Object(j.jsxs)(n,{children:[Object(j.jsx)(v,{}),Object(j.jsx)(N,{houseNumber:e.houseNumber})]})}));var y,I,k=function(e){var n=D.a.div(g||(g=Object(i.a)(["\n      width: 200px;\n      height: 100px;\n      background: ",";;\n      border-right: 3px solid black;\n      border-left: 3px solid black;\n      display: flex;\n      flex-direction: row;\n      justify-content: space-around;\n      align-items: center;\n    \n    "])),e.color);return Object(j.jsxs)(n,{children:[Object(j.jsx)(v,{}),Object(j.jsx)(v,{})]})},H=function(e){return Object(j.jsxs)("div",{className:p.a.house,children:[Object(j.jsx)(h,{}),e.f.map((function(n){return n.door?Object(j.jsx)(C,{houseNumber:e.houseNumber,color:n.color},n.Floorid):Object(j.jsx)(k,{color:n.color},n.Floorid)}))]})},A=t(5),S=t(10),F=t(6),E=(Object(F.v1)(),Object(F.v1)(),[]);var R,L,J=function(e){var n=D.a.div(y||(y=Object(i.a)(["\n   \n      justify-content: flex-start;\n      margin: 0;\n      padding: 0;\n          "]))),t=D.a.h4(I||(I=Object(i.a)(["\n      display: inline-block;\n      width: 100%;\n"])));return Object(j.jsx)(n,{children:Object(j.jsx)(t,{children:Object(j.jsxs)("span",{children:["House ",e.count]})})})};var B,U,W,G,M=function(e){var n=D.a.div(R||(R=Object(i.a)(["\n      width:50%;\n      height: 50px; \n      display: flex;\n      flex-direction: row;\n      justify-content: space-between;\n      align-items: center;\n      font-size: small;\n\n    "]))),t=D.a.div(L||(L=Object(i.a)(["\n      width: 20px;\n      height: 20px; \n     border: 1px solid;\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n      align-items: center;\n      margin-block-start: 0;\n      margin-block-end: 0;\n      font-size: small;\n   "])));return Object(j.jsxs)(n,{children:[Object(j.jsx)("span",{children:"Floors: "}),Object(j.jsx)(t,{children:e.flors})]})},T=t(4),V=t(15),z=t(29),Y=t.n(z),K=function(e){e.type;var n=e.onChange,t=e.onChangeRange,o=e.className,c=(e.min,Object(V.a)(e,["type","onChange","onChangeRange","className","min"])),r="".concat(Y.a.range," ").concat(o||"");return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("input",Object(T.a)({type:"range",onChange:function(e){n&&n(e),t&&t(+e.currentTarget.value)},className:r},c))})},P=t(14),q={},Q=function(e,n,t,o,c){return{type:"ADD-FLOOR",Houseid:e,color:n,florsValue:t,door:o,floorId:c}},X=t(18),Z=t.n(X),$=function(e){var n,t=e.options,o=e.onChange,c=e.onChangeOption,r=Object(V.a)(e,["options","onChange","onChangeOption"]);t&&(n=null===t||void 0===t?void 0:t.map((function(e,n){return Object(j.jsx)("option",{className:Z.a.option,value:e,children:e},n)})));var s=Z.a.select;return Object(j.jsx)("select",Object(T.a)(Object(T.a)({className:s,onChange:function(e){o&&o(e),c&&c(e.currentTarget.value)}},r),{},{children:n}))},ee=t.p+"static/media/3844460-can-trash_110351.a309e0e4.svg",ne=["white","orange","green","black","blue","red"],te=["white","orange","green","black","blue","red"],oe=Object(F.v1)(),ce=D.a.div(B||(B=Object(i.a)(["\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  position: relative;\n  @media screen and (max-width: 729px) {\n    flex-direction: column;\n    .select {\n      width: 100px;\n    }\n  }\n"]))),re=D.a.div(U||(U=Object(i.a)(["\n  max-width: 100px;\n  min-width: 100px;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n  margin-block-start: 0;\n  @media screen and (max-width: 729px) {\n    width: 100%;\n    max-width: 100%;\n  }\n"]))),se=D.a.div(W||(W=Object(i.a)(["\n  margin: 3px;\n  background-image: url(",");\n  width: 30px;\n  height: 20px;\n  background-position: center;\n  background-repeat: no-repeat;\n  border: 1px solid;;\n"])),ee),ae=function(e){var n=Object(A.b)(),t=Object(A.c)((function(n){return n.floor[e.houseID]})).length,c=Object(A.c)((function(n){return n.floor[e.houseID][0].color})),r=Object(A.c)((function(n){return n.floor[e.houseID][n.floor[e.houseID].length-1].color})),s=Object(o.useCallback)((function(t){n({type:"CHANGE-COLOR",Houseid:e.houseID,color:t})}),[e.houseID,n]),a=Object(o.useCallback)((function(t){n({type:"CHANGE-COLOR-FLOOR",Houseid:e.houseID,color:t})}),[e.houseID,n]),i=Object(o.useCallback)((function(){n({type:"REMOVE-HOUSE",houseID:e.houseID})}),[e.houseID,n]);return Object(j.jsxs)(ce,{children:[Object(j.jsxs)(re,{children:[Object(j.jsx)(J,{count:e.houseNumber}),Object(j.jsx)(M,{flors:t}),Object(j.jsx)(K,{onChangeRange:function(t){t<1||n(Q(e.houseID,"white",t,!1,oe))},max:9,step:1,value:t,min:1})]}),Object(j.jsxs)("div",{className:"select",children:[Object(j.jsx)("span",{children:"color house:"})," ",Object(j.jsx)($,{options:ne,value:r,onChangeOption:s})]}),Object(j.jsxs)("div",{className:"select",children:[Object(j.jsx)("span",{children:"color floor: "}),Object(j.jsx)($,{options:te,value:c,onChangeOption:a})]}),Object(j.jsx)(se,{onClick:i})]})},ie=t.p+"static/media/3643769-building-home-house-main-menu-start_113416.238d9bc6.svg",ue=D.a.div(G||(G=Object(i.a)(["\n  margin: 3px;\n  background-image: url(",");\n  width: 20px;\n  height: 20px;\n  background-repeat: no-repeat;\n  background-position: center;\n"])),ie);var le=function(){var e=Object(A.c)((function(e){return e.houses[e.houses.length-1]?e.houses[e.houses.length-1].houseNumber:1}));Object(o.useEffect)((function(){r(1==e?e:e+1)}),[]);var n=Object(o.useState)(e),t=Object(a.a)(n,2),c=t[0],r=t[1],s=Object(A.b)(),i=Object(A.c)((function(e){return e.houses})),u=Object(A.c)((function(e){return e.floor})),d=Object(F.v1)(),b=Object(F.v1)();return Object(j.jsxs)("div",{className:l.a.App,children:[Object(j.jsx)("header",{className:l.a.header,children:"City Byilder"}),Object(j.jsxs)("div",{className:l.a.body,children:[Object(j.jsxs)("div",{className:l.a.controlsWrapper,children:[Object(j.jsx)("div",{className:l.a.title,children:"Houses List"}),Object(j.jsx)("div",{className:l.a.controls,children:i.map((function(e){return Object(j.jsx)(ae,{houseNumber:e.houseNumber,houseID:e.houseID},e.houseID)}))}),Object(j.jsx)("div",{className:l.a.footerControls,children:Object(j.jsxs)("button",{onClick:function(){r(c+1),s({type:"ADD-HOUSE",houseID:d,houseNumber:c}),s(Q(d,"white",1,!0,b))},children:[Object(j.jsx)(ue,{}),"Build new house"]})})]}),Object(j.jsx)("div",{className:l.a.placeForHouses,children:i.map((function(e){var n=u[e.houseID];return Object(j.jsx)(H,{f:n,houseNumber:e.houseNumber},e.houseID)}))})]})]})},de=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,45)).then((function(n){var t=n.getCLS,o=n.getFID,c=n.getFCP,r=n.getLCP,s=n.getTTFB;t(e),o(e),c(e),r(e),s(e)}))},be=t(19),je=localStorage.getItem("reduxState")?JSON.parse(localStorage.getItem("reduxState")):{},he=Object(be.a)({houses:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"ADD-HOUSE":return[].concat(Object(S.a)(e),[{houseID:n.houseID,houseNumber:n.houseNumber}]);case"REMOVE-HOUSE":return e.filter((function(e){return e.houseID!==n.houseID}));default:return e}},floor:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"CHANGE-COLOR":var t=Object(T.a)({},e),o=t[n.Houseid],c=o.map((function(e){return Object(T.a)(Object(T.a)({},e),{},{color:n.color})}));return t[n.Houseid]=Object(S.a)(c),t;case"CHANGE-COLOR-FLOOR":var r=Object(T.a)({},e),s=r[n.Houseid],a=s.map((function(e){return"white"===e.color?Object(T.a)(Object(T.a)({},e),{},{color:n.color}):Object(T.a)({},e)}));return r[n.Houseid]=Object(S.a)(a),r;case"ADD-HOUSE":return Object(T.a)(Object(T.a)({},e),{},Object(P.a)({},n.houseID,[]));case"ADD-FLOOR":var i=Object(T.a)({},e),u=i[n.Houseid];if(n.florsValue<u.length)u.shift();else{var l={Floorid:Object(F.v1)(),color:n.color,door:n.door},d=[l].concat(Object(S.a)(u));i[n.Houseid]=d}return i;default:return e}}}),Oe=Object(be.b)(he,je);window.store=Oe,Oe.subscribe((function(){localStorage.setItem("reduxState",JSON.stringify(Oe.getState()))})),s.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(A.a,{store:Oe,children:Object(j.jsx)(le,{})})}),document.getElementById("root")),de()},7:function(e,n,t){e.exports={App:"App_App__2YU5y",header:"App_header__217Oq",body:"App_body__1OJOW",controlsWrapper:"App_controlsWrapper__388zM",title:"App_title__13KOu",footerControls:"App_footerControls__3Wefr",controls:"App_controls__39StL",placeForHouses:"App_placeForHouses__1Bblx"}}},[[44,1,2]]]);
//# sourceMappingURL=main.24e2f241.chunk.js.map
(this.webpackJsonphouse2=this.webpackJsonphouse2||[]).push([[0],{17:function(e,n,t){e.exports={door:"Door_door__3GeFD",number:"Door_number__3CaKA"}},18:function(e,n,t){e.exports={select:"superselect_select__wkY8Y",option:"superselect_option__3aHED"}},23:function(e,n,t){e.exports={roof:"Roof_roof__2oB9_"}},24:function(e,n,t){e.exports={house:"House_house__2HgwJ"}},25:function(e,n,t){e.exports={window:"Window_window__3aseo"}},29:function(e,n,t){e.exports={range:"SuperRange_range__23JvQ"}},35:function(e,n,t){},44:function(e,n,t){"use strict";t.r(n);var o=t(0),c=t.n(o),r=t(13),s=t.n(r),a=(t(35),t(30)),i=t(7),u=t.n(i),l=t(23),b=t.n(l),j=t(1);var d=function(){return Object(j.jsx)("div",{className:b.a.roof})},h=t(24),O=t.n(h),p=t(3),f=t(25),x=t.n(f);var m,g,v=function(){return Object(j.jsx)("div",{className:x.a.window})},_=t(17),N=t.n(_),w=c.a.memo((function(e){var n=e.houseNumber;return Object(j.jsxs)("div",{className:N.a.door,children:["House\u2116 ",Object(j.jsx)("div",{className:N.a.number,children:n})]})})),D=t(4),C=c.a.memo((function(e){var n=D.a.div(m||(m=Object(p.a)(["\n      width: 200px;\n      height: 100px;  \n      background: ",";;\n      border-right: 3px solid black;\n      border-left: 3px solid black;\n      border-bottom:3px solid black;\n\n      display: flex;\n      flex-direction: row;\n      justify-content: space-around;\n      align-items: center;\n          "])),e.color);return Object(j.jsxs)(n,{children:[Object(j.jsx)(v,{}),Object(j.jsx)(w,{houseNumber:e.houseNumber})]})}));var y,I,H=function(e){var n=D.a.div(g||(g=Object(p.a)(["\n      width: 200px;\n      height: 100px;\n      background: ",";;\n      border-right: 3px solid black;\n      border-left: 3px solid black;\n      display: flex;\n      flex-direction: row;\n      justify-content: space-around;\n      align-items: center;\n    \n    "])),e.color);return Object(j.jsxs)(n,{children:[Object(j.jsx)(v,{}),Object(j.jsx)(v,{})]})},k=function(e){return Object(j.jsxs)("div",{className:O.a.house,children:[Object(j.jsx)(d,{}),e.f.map((function(n){return n.door?Object(j.jsx)(C,{houseNumber:e.houseNumber,color:n.color},n.Floorid):Object(j.jsx)(H,{color:n.color},n.Floorid)}))]})},A=t(5),S=t(10),F=t(6),E=Object(F.v1)(),R=Object(F.v1)(),L=[{houseID:E,houseNumber:1}];var J,B,U=function(e){var n=D.a.div(y||(y=Object(p.a)(["\n   \n      justify-content: flex-start;\n      margin: 0;\n      padding: 0;\n          "]))),t=D.a.h4(I||(I=Object(p.a)(["\n      display: inline-block;\n      width: 100%;\n"])));return Object(j.jsx)(n,{children:Object(j.jsx)(t,{children:Object(j.jsxs)("span",{children:["House ",e.count]})})})};var W,G,M,T=function(e){var n=D.a.div(J||(J=Object(p.a)(["\n      width:50%;\n      height: 50px; \n      display: flex;\n      flex-direction: row;\n      justify-content: space-between;\n      align-items: center;\n      font-size: small;\n\n    "]))),t=D.a.div(B||(B=Object(p.a)(["\n      width: 20px;\n      height: 20px; \n     border: 1px solid;\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n      align-items: center;\n      margin-block-start: 0;\n      margin-block-end: 0;\n      font-size: small;\n   "])));return Object(j.jsxs)(n,{children:[Object(j.jsx)("span",{children:"Floors: "}),Object(j.jsx)(t,{children:e.flors})]})},V=t(2),z=t(15),Y=t(29),K=t.n(Y),P=function(e){e.type;var n=e.onChange,t=e.onChangeRange,o=e.className,c=(e.min,Object(z.a)(e,["type","onChange","onChangeRange","className","min"])),r="".concat(K.a.range," ").concat(o||"");return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("input",Object(V.a)({type:"range",onChange:function(e){n&&n(e),t&&t(+e.currentTarget.value)},className:r},c))})},q=t(12),Q=Object(q.a)({},E,[{color:"",Floorid:R,door:!0}]),X=function(e,n,t,o,c){return{type:"ADD-FLOOR",Houseid:e,color:n,florsValue:t,door:o,floorId:c}},Z=t(18),$=t.n(Z),ee=function(e){var n,t=e.options,o=e.onChange,c=e.onChangeOption,r=Object(z.a)(e,["options","onChange","onChangeOption"]);t&&(n=null===t||void 0===t?void 0:t.map((function(e,n){return Object(j.jsx)("option",{className:$.a.option,value:e,children:e},n)})));var s=$.a.select;return Object(j.jsx)("select",Object(V.a)(Object(V.a)({className:s,onChange:function(e){o&&o(e),c&&c(e.currentTarget.value)}},r),{},{children:n}))},ne=["white","green","black","blue","red"],te=["white","green","black","blue","red"],oe=Object(F.v1)(),ce=D.a.div(W||(W=Object(p.a)(["\n      width: 100%;\n      display: flex;\n      flex-direction: row;\n      justify-content: space-between;\n      align-items: center;\n      position: relative;\n      @media screen and (max-width: 729px) {\n        flex-direction: column;\n        .select {\n          width: 100px;\n        }\n      }\n    "]))),re=D.a.div(G||(G=Object(p.a)(["\n      max-width: 100px;\n      min-width: 100px;\n      height: 100%;\n      display: flex;\n      flex-direction: column;\n      justify-content: flex-start;\n      align-items: flex-start;\n      margin-block-start: 0;\n      @media screen and (max-width: 729px) {\n        width: 100%;\n        max-width: 100%;\n      }\n    "]))),se=D.a.div(M||(M=Object(p.a)(["\n      margin: 3px;\n    "]))),ae=function(e){var n=Object(A.b)(),t=Object(A.c)((function(n){return n.floor[e.houseID]})).length,c=Object(A.c)((function(n){return n.floor[e.houseID][0].color})),r=Object(A.c)((function(n){return n.floor[e.houseID][n.floor[e.houseID].length-1].color})),s=Object(o.useCallback)((function(t){n({type:"CHANGE-COLOR",Houseid:e.houseID,color:t})}),[e.houseID,n]),a=Object(o.useCallback)((function(t){n({type:"CHANGE-COLOR-FLOOR",Houseid:e.houseID,color:t})}),[e.houseID,n]),i=Object(o.useCallback)((function(){n({type:"REMOVE-HOUSE",houseID:e.houseID})}),[e.houseID,n]);return Object(j.jsxs)(ce,{children:[Object(j.jsxs)(re,{children:[Object(j.jsx)(U,{count:e.houseNumber}),Object(j.jsx)(T,{flors:t}),Object(j.jsx)(P,{onChangeRange:function(t){t<1||n(X(e.houseID,"white",t,!1,oe))},max:9,step:1,value:t,min:1})]}),Object(j.jsxs)("div",{className:"select",children:[Object(j.jsx)("span",{children:"color house:"})," ",Object(j.jsx)(ee,{options:ne,value:r,onChangeOption:s})]}),Object(j.jsxs)("div",{className:"select",children:[Object(j.jsx)("span",{children:"color floor: "}),Object(j.jsx)(ee,{options:te,value:c,onChangeOption:a})]}),Object(j.jsx)(se,{children:Object(j.jsx)("button",{onClick:i,children:"X"})})]})};var ie=function(){var e=Object(A.c)((function(e){return e.houses[e.houses.length-1].houseNumber}));Object(o.useEffect)((function(){r(e+1)}),[e]);var n=Object(o.useState)(e),t=Object(a.a)(n,2),c=t[0],r=t[1],s=Object(A.b)(),i=Object(A.c)((function(e){return e.houses})),l=Object(A.c)((function(e){return e.floor})),b=Object(F.v1)(),d=Object(F.v1)();return Object(j.jsxs)("div",{className:u.a.App,children:[Object(j.jsx)("header",{className:u.a.header,children:"City Byilder"}),Object(j.jsxs)("div",{className:u.a.body,children:[Object(j.jsxs)("div",{className:u.a.controlsWrapper,children:[Object(j.jsx)("div",{className:u.a.title,children:"Houses List"}),Object(j.jsx)("div",{className:u.a.controls,children:i.map((function(e){return Object(j.jsx)(ae,{houseNumber:e.houseNumber,houseID:e.houseID},e.houseID)}))}),Object(j.jsx)("div",{className:u.a.footerControls,children:Object(j.jsx)("button",{onClick:function(){r(c+1),s({type:"ADD-HOUSE",houseID:b,houseNumber:c}),s(X(b,"white",1,!0,d))},children:"Build new house"})})]}),Object(j.jsx)("div",{className:u.a.placeForHouses,children:i.map((function(e){var n=l[e.houseID];return Object(j.jsx)(k,{f:n,houseNumber:e.houseNumber},e.houseID)}))})]})]})},ue=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,45)).then((function(n){var t=n.getCLS,o=n.getFID,c=n.getFCP,r=n.getLCP,s=n.getTTFB;t(e),o(e),c(e),r(e),s(e)}))},le=t(19),be=localStorage.getItem("reduxState")?JSON.parse(localStorage.getItem("reduxState")):{},je=Object(le.a)({houses:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"ADD-HOUSE":return[].concat(Object(S.a)(e),[{houseID:n.houseID,houseNumber:n.houseNumber}]);case"REMOVE-HOUSE":return e.filter((function(e){return e.houseID!==n.houseID}));default:return e}},floor:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"CHANGE-COLOR":var t=Object(V.a)({},e),o=t[n.Houseid],c=o.map((function(e){return Object(V.a)(Object(V.a)({},e),{},{color:n.color})}));return t[n.Houseid]=Object(S.a)(c),t;case"CHANGE-COLOR-FLOOR":var r=Object(V.a)({},e),s=r[n.Houseid],a=s.map((function(e){return"white"===e.color?Object(V.a)(Object(V.a)({},e),{},{color:n.color}):Object(V.a)({},e)}));return r[n.Houseid]=Object(S.a)(a),r;case"ADD-HOUSE":return Object(V.a)(Object(V.a)({},e),{},Object(q.a)({},n.houseID,[]));case"ADD-FLOOR":var i=Object(V.a)({},e),u=i[n.Houseid];if(n.florsValue<u.length)u.shift();else{var l={Floorid:Object(F.v1)(),color:n.color,door:n.door},b=[l].concat(Object(S.a)(u));i[n.Houseid]=b}return i;default:return e}}}),de=Object(le.b)(je,be);window.store=de,de.subscribe((function(){localStorage.setItem("reduxState",JSON.stringify(de.getState()))})),s.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(A.a,{store:de,children:Object(j.jsx)(ie,{})})}),document.getElementById("root")),ue()},7:function(e,n,t){e.exports={App:"App_App__2YU5y",header:"App_header__217Oq",body:"App_body__1OJOW",controlsWrapper:"App_controlsWrapper__388zM",title:"App_title__13KOu",footerControls:"App_footerControls__3Wefr",controls:"App_controls__39StL",placeForHouses:"App_placeForHouses__1Bblx"}}},[[44,1,2]]]);
//# sourceMappingURL=main.6f35f335.chunk.js.map
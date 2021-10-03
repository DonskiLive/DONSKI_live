(this.webpackJsonpclasswork_60=this.webpackJsonpclasswork_60||[]).push([[0],{30:function(e,t,c){},31:function(e,t,c){},40:function(e,t,c){"use strict";c.r(t);var a=c(1),r=c.n(a),n=c(19),s=c.n(n),o=(c(30),c(31),c(24)),i=c(4),l=c(0),j=function(){return Object(l.jsx)("div",{className:"d-flex justify-content-center",children:Object(l.jsx)("div",{className:"spinner-border text-primary",role:"status",children:Object(l.jsx)("span",{className:"visually-hidden",children:"Loading..."})})})},u=function(e){var t=e.message;return Object(l.jsx)("div",{className:"alert alert-danger",role:"alert",children:t})},b=c(8),d=function(e){var t=e.category;return Object(l.jsx)(b.b,{className:"col-6 col-sm-4 col-md-3 d-flex align-items-strech text-decoration-none",to:"/".concat(t.strCategory),children:Object(l.jsxs)("div",{className:"card text-center my-2",children:[Object(l.jsx)("img",{src:t.strCategoryThumb,alt:t.strCategory}),Object(l.jsx)("div",{className:"card-body",children:Object(l.jsx)("h3",{className:"card-title",children:t.strCategory})})]})})},h=c(10),m=c.n(h),O=c(14),x=c(22),f=c(23),p="https://www.themealdb.com/api/json/v1/1",g=function(){function e(){Object(x.a)(this,e)}return Object(f.a)(e,null,[{key:"getCategories",value:function(){var e=Object(O.a)(m.a.mark((function e(){var t,c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(p,"/categories.php"));case 3:if(!(t=e.sent).ok){e.next=9;break}return e.next=7,t.json();case 7:return c=e.sent,e.abrupt("return",c);case 9:throw new Error(t.status);case 12:throw e.prev=12,e.t0=e.catch(0),new Error(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}}()},{key:"getMealsByCategory",value:function(){var e=Object(O.a)(m.a.mark((function e(t){var c,a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(p,"/filter.php?c=").concat(t));case 3:if(!(c=e.sent).ok){e.next=9;break}return e.next=7,c.json();case 7:return a=e.sent,e.abrupt("return",a);case 9:throw new Error(c.status);case 12:throw e.prev=12,e.t0=e.catch(0),new Error(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t){return e.apply(this,arguments)}}()},{key:"getMealById",value:function(){var e=Object(O.a)(m.a.mark((function e(t){var c,a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(p,"/lookup.php?i=").concat(t));case 3:if(!(c=e.sent).ok){e.next=9;break}return e.next=7,c.json();case 7:return a=e.sent,e.abrupt("return",a);case 9:throw new Error(c.status);case 12:throw e.prev=12,e.t0=e.catch(0),new Error(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t){return e.apply(this,arguments)}}()}]),e}(),v=c(2),y=function(){var e=Object(a.useState)(""),t=Object(i.a)(e,2),c=t[0],r=t[1],n=Object(v.f)(),s=function(e){return e.slice(0,1).toUpperCase()+e.slice(1)};return Object(l.jsxs)("div",{className:"input-group my-5",children:[Object(l.jsx)("input",{type:"text",className:"form-control",placeholder:"type category","aria-describedby":"search-btn",value:c,onChange:function(e){r(e.target.value)}}),Object(l.jsx)("button",{className:"btn btn-primary",onClick:function(){console.log(s(c)),n.push("/".concat(s(c))),r("")},id:"search-btn",children:"search category"})]})};function N(){var e=Object(a.useState)(!0),t=Object(i.a)(e,2),c=t[0],r=t[1],n=Object(a.useState)([]),s=Object(i.a)(n,2),b=s[0],h=s[1],m=Object(a.useState)(null),O=Object(i.a)(m,2),x=O[0],f=O[1];Object(a.useEffect)((function(){g.getCategories().then((function(e){setTimeout((function(){h(Object(o.a)(e.categories)),r(!1)}),1e3)})).catch((function(e){f(e.message),r(!1)}))}),[]);return Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)("h2",{className:"text-center text-primary my-5",children:"Our categories of meals"}),Object(l.jsx)("div",{className:"row",children:Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(y,{}),c?Object(l.jsx)(j,{}):x?Object(l.jsx)(u,{message:x}):b.map((function(e){return Object(l.jsx)(d,{category:e},e.strCategory)}))]})})]})}var w=function(e){var t=e.meal,c=Object(v.g)().category;return Object(l.jsx)(b.b,{className:"col-lg-3 col-md-4 col-6 mb-2 d-flex align-items-stretch",to:"/".concat(c,"/").concat(t.idMeal),children:Object(l.jsxs)("div",{className:"card mb-2",children:[Object(l.jsx)("img",{src:t.strMealThumb,className:"card-img-top",alt:t.strMeal}),Object(l.jsx)("div",{className:"card-body",children:Object(l.jsx)("h5",{className:"card-title",children:t.strMeal})})]})})},k=function(){var e=Object(v.g)(),t=e.category,c=e.idMeal;return Object(l.jsxs)("nav",{className:"navbar bg-dark d-flex justify-content-end",children:[c?Object(l.jsx)(b.b,{className:"navbar-brand mx-4 text-white",to:"/".concat(t),children:"back to meals list"}):null,Object(l.jsx)(b.b,{className:"navbar-brand mx-4 text-white",to:"/",children:"back to categories"})]})},M=function(e){var t=e.match,c=Object(a.useState)(!0),r=Object(i.a)(c,2),n=r[0],s=r[1],o=Object(a.useState)([]),b=Object(i.a)(o,2),d=b[0],h=b[1],m=Object(a.useState)(null),O=Object(i.a)(m,2),x=O[0],f=O[1],p=t.params.category;Object(a.useEffect)((function(){s(!0),f(null),g.getMealsByCategory(p).then((function(e){setTimeout((function(){console.log(e),e.meals?(s(!1),h(e.meals)):(f("no such category"),s(!1))}),1e3)})).catch((function(e){s(!1),f(e.message)}))}),[p]);return Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)(k,{}),Object(l.jsx)("h2",{className:"text-primary text-center my-5",children:p}),Object(l.jsx)("div",{className:"row",children:n&&!x?Object(l.jsx)(j,{}):x?Object(l.jsx)(u,{message:x}):d.map((function(e){return Object(l.jsx)(w,{meal:e},e.idMeal)}))})]})},C=c(25),S=function(){var e=Object(a.useState)(!0),t=Object(i.a)(e,2),c=t[0],r=t[1],n=Object(a.useState)(null),s=Object(i.a)(n,2),o=s[0],b=s[1],d=Object(a.useState)(null),h=Object(i.a)(d,2),m=h[0],O=h[1],x=Object(v.g)().idMeal;return Object(a.useEffect)((function(){g.getMealById(x).then((function(e){setTimeout((function(){b(Object(C.a)({},e.meals[0])),r(!1)}),1e3)})).catch((function(e){O(e.message),r(!1)}))}),[x]),c?Object(l.jsx)(j,{}):m?Object(l.jsx)(u,{message:m}):Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)(k,{}),Object(l.jsxs)("div",{className:"card my-2 col-8 mx-auto",children:[Object(l.jsx)("img",{src:o.strMealThumb,alt:o.strMeal}),Object(l.jsxs)("div",{className:"card-body",children:[Object(l.jsx)("h2",{className:"card-title text-primary",children:o.strMeal}),Object(l.jsxs)("h4",{className:"card-title",children:["Category: ",o.strCategory]}),Object(l.jsxs)("p",{className:"card-text",children:["Recipe: ",o.strInstructions]}),Object(l.jsxs)("h5",{children:["Main ingredient: ",o.strIngredient1]})]})]})]})},E=function(){return Object(l.jsxs)(v.c,{children:[Object(l.jsx)(v.a,{exact:!0,path:"/",component:N}),Object(l.jsx)(v.a,{exact:!0,path:"/:category",component:M}),Object(l.jsx)(v.a,{path:"/:category/:idMeal",component:S})]})};c(39);s.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(b.a,{children:Object(l.jsx)(E,{})})}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.30637dbb.chunk.js.map
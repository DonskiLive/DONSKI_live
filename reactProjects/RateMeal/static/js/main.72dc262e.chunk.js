(this.webpackJsonpfood_project=this.webpackJsonpfood_project||[]).push([[0],{15:function(e,t,a){},16:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var c=a(1),s=a.n(c),l=a(9),n=a.n(l),r=(a(14),a(15),a(16),a(2)),m=a(7),i=a(4);var d=a(0);function o(e){var t=e.meal;return Object(d.jsx)(p.Consumer,{children:function(e){return Object(d.jsx)("div",{className:"col-lg-3 col-md-4 col-6 mb-2 d-flex align-items-stretch",children:Object(d.jsxs)("div",{className:"card mb-4",children:[Object(d.jsx)("img",{src:t.strMealThumb,className:"card-img-top",alt:t.strMeal}),Object(d.jsxs)("div",{className:"card-body d-flex flex-direction: row",children:[Object(d.jsx)("h5",{className:"card-title",children:t.strMeal}),Object(d.jsxs)("p",{className:"card-text",children:["Rate: ",t.rate]}),Object(d.jsx)("button",{className:"btn btn-primary w-50 mx-auto align-self-end",onClick:function(){return e.changeCurrentMeal(t.idMeal)},children:"View comment"})]})]})})}})}function j(e){var t=e.meals;return Object(d.jsxs)("div",{className:"row my-2",children:[Object(d.jsx)("h2",{className:"my-3",children:"Only Chicken Meals"}),t.map((function(e){return Object(d.jsx)(o,{meal:e},e.idMeal)}))]})}var b=function(e){var t=e.comment;return Object(d.jsx)("div",{className:"card",children:Object(d.jsxs)("div",{className:"card-body",children:[Object(d.jsx)("h4",{className:"card-title",children:t.name}),Object(d.jsx)("p",{className:"card-text",children:t.text}),Object(d.jsxs)("p",{className:"card-text",children:["Note: ",t.note]})]})})},h=function(e){var t=e.comments;return Object(d.jsx)("ul",{className:"list-unstyled",children:t.map((function(e){return Object(d.jsx)("li",{className:"mb-1 text-start",children:Object(d.jsx)(b,{comment:e})},e.id)}))})},u=a(5),x=function(e){var t=e.idMeal,a=Object(c.useContext)(p),s=Object(c.useState)({name:"",text:"",note:0}),l=Object(i.a)(s,2),n=l[0],m=l[1],o=function(e){m((function(t){return Object(r.a)(Object(r.a)({},t),{},Object(u.a)({},e.target.name,e.target.value))}))};return Object(d.jsx)("div",{className:"card mt-3 bg-light ",children:Object(d.jsxs)("div",{className:"card-body text-start",children:[Object(d.jsx)("div",{className:"h4 card-title",children:"New comment"}),Object(d.jsxs)("div",{className:"mb-3",children:[Object(d.jsx)("label",{htmlFor:"nameText",className:"form-label",children:"Name"}),Object(d.jsx)("input",{type:"text",className:"form-control form-control-sm",id:"nameText",name:"name",placeholder:"Your Name here",value:n.name,onChange:o})]}),Object(d.jsxs)("div",{className:"mb-3",children:[Object(d.jsx)("label",{htmlFor:"commentText",className:"form-label",children:"Comment"}),Object(d.jsx)("textarea",{className:"form-control form-control-sm",id:"commentText",rows:"3",name:"text",value:n.text,onChange:o})]}),Object(d.jsxs)("div",{className:"mb-3",children:[Object(d.jsx)("label",{className:"form-label",children:"Note: "}),Object(d.jsxs)("select",{className:"form-select","aria-label":"Default select example",name:"note",value:n.note,onChange:o,children:[Object(d.jsx)("option",{children:"Open this select menu"}),Object(d.jsx)("option",{value:"1",children:"1"}),Object(d.jsx)("option",{value:"2",children:"2"}),Object(d.jsx)("option",{value:"3",children:"3"}),Object(d.jsx)("option",{value:"4",children:"4"}),Object(d.jsx)("option",{value:"5",children:"5"})]})]}),Object(d.jsx)("div",{className:"d-flex justify-content-end",children:Object(d.jsx)("button",{type:"button",className:"btn btn-sm btn-success",onClick:function(){""!==n.name.trim()&&""!==n.text&&0!==n.note&&(a.addComment(t,n),m({name:"",text:"",note:0}))},children:"Add Comment"})})]})})},O=function(e){var t=e.meal,a=e.showMeals;return Object(d.jsxs)("div",{className:"row justify-content-md-center mt-3",children:[Object(d.jsx)("div",{className:"col-sm-5",children:Object(d.jsxs)("div",{className:"card",children:[Object(d.jsx)("img",{src:t.strMealThumb,className:"card-img-top",alt:t.strMeal}),Object(d.jsxs)("div",{className:"card-body",children:[Object(d.jsx)("h4",{className:"card-title",children:t.strMeal}),Object(d.jsxs)("p",{className:"card-text",children:["Rate: ",t.rate]}),Object(d.jsx)("button",{className:"btn btn-primary w-50 mx-auto align-self-end",onClick:a,children:"show all meals"})]})]})}),Object(d.jsxs)("div",{className:"col-sm-5 overflow-scroll",style:{height:"100vh"},children:[Object(d.jsx)(h,{comments:t.comments}),Object(d.jsx)(x,{idMeal:t.idMeal})]})]})},p=s.a.createContext(),v=function(){var e=Object(c.useState)(function(){var e=JSON.parse('{"meals":[{"strMeal":"Chick-Fil-A Sandwich","strMealThumb":"https://www.themealdb.com/images/media/meals/sbx7n71587673021.jpg","idMeal":"53016"},{"strMeal":"Chicken Couscous","strMealThumb":"https://www.themealdb.com/images/media/meals/qxytrx1511304021.jpg","idMeal":"52850"},{"strMeal":"Chicken Fajita Mac and Cheese","strMealThumb":"https://www.themealdb.com/images/media/meals/qrqywr1503066605.jpg","idMeal":"52818"},{"strMeal":"Chicken Ham and Leek Pie","strMealThumb":"https://www.themealdb.com/images/media/meals/xrrtss1511555269.jpg","idMeal":"52875"},{"strMeal":"Chicken Quinoa Greek Salad","strMealThumb":"https://www.themealdb.com/images/media/meals/k29viq1585565980.jpg","idMeal":"53011"},{"strMeal":"General Tso\'s Chicken","strMealThumb":"https://www.themealdb.com/images/media/meals/1529444113.jpg","idMeal":"52951"},{"strMeal":"Honey Balsamic Chicken with Crispy Broccoli & Potatoes","strMealThumb":"https://www.themealdb.com/images/media/meals/kvbotn1581012881.jpg","idMeal":"52993"},{"strMeal":"Katsu Chicken curry","strMealThumb":"https://www.themealdb.com/images/media/meals/vwrpps1503068729.jpg","idMeal":"52820"},{"strMeal":"Rappie Pie","strMealThumb":"https://www.themealdb.com/images/media/meals/ruwpww1511817242.jpg","idMeal":"52933"}]}').meals;return e.forEach((function(e){e.comments=[],e.rate=0})),e}()),t=Object(i.a)(e,2),a=t[0],s=t[1],l=Object(c.useState)(null),n=Object(i.a)(l,2),o=n[0],b=n[1];return Object(d.jsx)(p.Provider,{value:{changeCurrentMeal:function(e){var t=Object(m.a)(a),c=t.findIndex((function(t){return t.idMeal===e})),s=Object(r.a)({},t[c]);b(s)},addComment:function(e,t){var c=Object(m.a)(a),l=c.findIndex((function(t){return t.idMeal===e})),n=Object(r.a)({},c[l]),i=Object(m.a)(n.comments);i.push(Object(r.a)(Object(r.a)({},t),{},{id:Date.now(),note:+t.note})),n.comments=i,n.rate=(i.reduce((function(e,t){return e+t.note}),0)/i.length).toFixed(1),c[l]=n,s(c),b(n)}},children:Object(d.jsx)("div",{className:"container",children:o?Object(d.jsx)(O,{meal:o,showMeals:function(){b(null)}}):Object(d.jsx)(j,{meals:a})})})};var f=function(){return Object(d.jsx)("div",{className:"App",children:Object(d.jsx)(v,{})})};n.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(f,{})}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.72dc262e.chunk.js.map
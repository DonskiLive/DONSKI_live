(this.webpackJsonpclasswork_60_post=this.webpackJsonpclasswork_60_post||[]).push([[0],{27:function(e,t,i){},29:function(e,t,i){},35:function(e,t,i){"use strict";i.r(t);var s=i(1),n=i.n(s),a=i(16),r=i.n(a),o=(i(27),i(2)),u=i(0),c=function(){return Object(u.jsx)("div",{children:"Home"})},l=(i(29),i(7)),m=function(){return Object(u.jsx)("div",{style:{padding:"15px 0",borderBottom:"1px solid black"},children:Object(u.jsxs)("ul",{className:"App-nav",style:{display:"flex",listStyle:"none",padding:"0px",margin:"0"},children:[Object(u.jsx)("li",{style:{marginRight:"15px"},children:Object(u.jsx)(l.c,{to:"/",exact:!0,children:"Home"})}),Object(u.jsx)("li",{style:{marginRight:"15px"},children:Object(u.jsx)(l.c,{to:"/about",children:"About"})}),Object(u.jsx)("li",{style:{marginRight:"15px"},children:Object(u.jsx)(l.c,{to:"/posts",children:"Posts"})})]})})},d=function(){return Object(u.jsx)("div",{children:"About"})},p=i(8),b=n.a.createContext(),j=function(e){return function(t){return Object(u.jsx)(b.Consumer,{children:function(i){return Object(u.jsx)(e,Object(p.a)(Object(p.a)({},t),{},{context:i}))}})}},h=j((function(e){console.log(e);var t=e.context.posts[e.index];return Object(u.jsx)(l.b,{to:"/posts/".concat(t.postId),style:{textDecoration:"none",color:"black"},children:Object(u.jsxs)("div",{style:{border:"1px solid black",padding:"10px",marginBottom:"10px"},children:[Object(u.jsx)("small",{style:{marginRight:"10px"},children:t.author}),Object(u.jsx)("small",{children:t.date}),Object(u.jsx)("h2",{children:t.title}),Object(u.jsx)("p",{children:t.shortDesc}),Object(u.jsxs)("span",{children:["Comments: ",t.comments.length]})]})})})),x=j((function(e){var t=e.context;return Object(u.jsx)("ul",{style:{listStyle:"none",padding:"0",marginRight:"50px",cursor:"pointer",width:"40%"},children:t.posts.map((function(e,t){return Object(u.jsx)(h,{index:t},e.postId)}))})})),g=j((function(e){console.log(e);var t=e.context.posts.find((function(t){return t.postId===e.match.params.id}));return Object(u.jsxs)("div",{style:{marginTop:"20px",width:"59%"},children:[Object(u.jsx)("small",{style:{marginRight:"10px"},children:t.author}),Object(u.jsx)("small",{children:t.date}),Object(u.jsx)("h2",{children:t.title}),Object(u.jsx)("p",{children:t.content}),Object(u.jsx)("hr",{}),t.comments.map((function(e,t){return Object(u.jsx)("div",{style:{border:"1px solid black",padding:"5px",marginBottom:"10px"},children:Object(u.jsxs)("p",{children:[Object(u.jsx)("b",{children:e.author}),": ",Object(u.jsx)("small",{children:e.text})]})},t)})),Object(u.jsx)("hr",{}),Object(u.jsxs)("form",{onSubmit:function(i){i.preventDefault(),e.context.addComment(t.postId,i.target.author.value,i.target.text.value),i.target.author.value="",i.target.text.value=""},children:[Object(u.jsx)("input",{type:"text",name:"author",placeholder:"name"}),Object(u.jsx)("br",{}),Object(u.jsx)("textarea",{name:"text",placeholder:"message"}),Object(u.jsx)("br",{}),Object(u.jsx)("button",{children:"addComment"})]})]})})),f=function(){return Object(u.jsxs)("div",{style:{display:"flex"},children:[Object(u.jsx)(x,{}),Object(u.jsx)(o.a,{path:"/posts/:id",component:g})]})};var O=function(){return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(m,{}),Object(u.jsxs)(o.c,{children:[Object(u.jsx)(o.a,{path:"/",exact:!0,component:c}),Object(u.jsx)(o.a,{path:"/about",component:d}),Object(u.jsx)(o.a,{path:"/posts",component:f})]})]})},v=i(14),q=i(19),y=i(20),D=i(22),I=i(21),C=function(e){Object(D.a)(i,e);var t=Object(I.a)(i);function i(){var e;Object(q.a)(this,i);for(var s=arguments.length,n=new Array(s),a=0;a<s;a++)n[a]=arguments[a];return(e=t.call.apply(t,[this].concat(n))).state={posts:N()},e.addComment=function(t,i,s){var n=e.state.posts.findIndex((function(e){return e.postId===t})),a=Object(v.a)(e.state.posts),r=[].concat(Object(v.a)(a[n].comments),[{author:i,text:s}]);a[n]=Object(p.a)(Object(p.a)({},a[n]),{},{comments:r}),e.setState(Object(p.a)(Object(p.a)({},e.state),{},{posts:a}))},e}return Object(y.a)(i,[{key:"render",value:function(){return Object(u.jsx)(b.Provider,{value:{posts:this.state.posts,addComment:this.addComment},children:this.props.children})}}]),i}(n.a.Component);function N(){return JSON.parse('\n    [\n      {\n        "postId": "123",\n        "date": "12/12/12",\n        "author": "John Doe",\n        "title":"Post about nothing",\n        "shortDesc": "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",\n        "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac neque scelerisque, convallis sem in, eleifend lorem. Donec pretium massa congue porttitor accumsan. Integer semper magna eget purus porttitor vehicula. Nunc eleifend arcu at magna commodo, sed commodo nisi finibus. Donec semper interdum ante eget dapibus. Praesent commodo, nisi ac porttitor scelerisque, metus magna molestie ligula, sed semper nibh libero iaculis diam. Sed mattis massa nulla, vitae vestibulum libero efficitur et. Nulla at consectetur diam. Etiam felis dolor, pellentesque scelerisque tempor tincidunt, pharetra eget ex. Duis turpis est, euismod sed facilisis at, eleifend eu lectus.Fusce vulputate magna et imperdiet aliquet. Nullam et rhoncus erat. Nunc ante justo, vestibulum auctor purus eu, luctus aliquet justo. Nunc eu tellus tristique, elementum sem ut, tristique diam. Maecenas erat elit, efficitur in libero id, venenatis lacinia sem. Nam elementum felis a consequat aliquet. Suspendisse porta sapien nec massa aliquam, ac gravida nunc semper. Curabitur at eros et felis condimentum sollicitudin cursus eget nisl. Morbi sit amet quam nec felis interdum consequat. Donec in sem eu elit ornare porta ac tempus magna. Duis libero eros, egestas a erat in, euismod placerat orci. Mauris condimentum, odio ut tincidunt cursus, leo dolor fringilla nisi, quis egestas magna magna a lacus. Quisque interdum, orci vestibulum ultrices dapibus, elit tellus pulvinar velit, ac semper ipsum enim quis tellus. Sed a tincidunt magna.",\n        "comments": [\n          {\n            "author": "Tony Stark",\n            "text": "Contrary to popular belief, Lorem Ipsum is not simply random text."\n          },\n          {\n            "author": "Jack Sparrow",\n            "text": "Contrary to popular belief, Lorem Ipsum is not simply random text."\n          }\n        ]\n      },\n      {\n        "postId": "678",\n        "date": "01/01/2020",\n        "author": "Jack Sparrow",\n        "title":"Pirates life",\n        "shortDesc": "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",\n        "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac neque scelerisque, convallis sem in, eleifend lorem. Donec pretium massa congue porttitor accumsan. Integer semper magna eget purus porttitor vehicula. Nunc eleifend arcu at magna commodo, sed commodo nisi finibus. Donec semper interdum ante eget dapibus. Praesent commodo, nisi ac porttitor scelerisque, metus magna molestie ligula, sed semper nibh libero iaculis diam. Sed mattis massa nulla, vitae vestibulum libero efficitur et. Nulla at consectetur diam. Etiam felis dolor, pellentesque scelerisque tempor tincidunt, pharetra eget ex. Duis turpis est, euismod sed facilisis at, eleifend eu lectus.Fusce vulputate magna et imperdiet aliquet. Nullam et rhoncus erat. Nunc ante justo, vestibulum auctor purus eu, luctus aliquet justo. Nunc eu tellus tristique, elementum sem ut, tristique diam. Maecenas erat elit, efficitur in libero id, venenatis lacinia sem. Nam elementum felis a consequat aliquet. Suspendisse porta sapien nec massa aliquam, ac gravida nunc semper. Curabitur at eros et felis condimentum sollicitudin cursus eget nisl. Morbi sit amet quam nec felis interdum consequat. Donec in sem eu elit ornare porta ac tempus magna. Duis libero eros, egestas a erat in, euismod placerat orci. Mauris condimentum, odio ut tincidunt cursus, leo dolor fringilla nisi, quis egestas magna magna a lacus. Quisque interdum, orci vestibulum ultrices dapibus, elit tellus pulvinar velit, ac semper ipsum enim quis tellus. Sed a tincidunt magna.",\n        "comments": []\n      },\n      {\n        "postId": "777",\n        "date": "12/02/2020",\n        "author": "Tony Stark",\n        "title":"Iron Man it\'s not a hobby",\n        "shortDesc": "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",\n        "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac neque scelerisque, convallis sem in, eleifend lorem. Donec pretium massa congue porttitor accumsan. Integer semper magna eget purus porttitor vehicula. Nunc eleifend arcu at magna commodo, sed commodo nisi finibus. Donec semper interdum ante eget dapibus. Praesent commodo, nisi ac porttitor scelerisque, metus magna molestie ligula, sed semper nibh libero iaculis diam. Sed mattis massa nulla, vitae vestibulum libero efficitur et. Nulla at consectetur diam. Etiam felis dolor, pellentesque scelerisque tempor tincidunt, pharetra eget ex. Duis turpis est, euismod sed facilisis at, eleifend eu lectus.Fusce vulputate magna et imperdiet aliquet. Nullam et rhoncus erat. Nunc ante justo, vestibulum auctor purus eu, luctus aliquet justo. Nunc eu tellus tristique, elementum sem ut, tristique diam. Maecenas erat elit, efficitur in libero id, venenatis lacinia sem. Nam elementum felis a consequat aliquet. Suspendisse porta sapien nec massa aliquam, ac gravida nunc semper. Curabitur at eros et felis condimentum sollicitudin cursus eget nisl. Morbi sit amet quam nec felis interdum consequat. Donec in sem eu elit ornare porta ac tempus magna. Duis libero eros, egestas a erat in, euismod placerat orci. Mauris condimentum, odio ut tincidunt cursus, leo dolor fringilla nisi, quis egestas magna magna a lacus. Quisque interdum, orci vestibulum ultrices dapibus, elit tellus pulvinar velit, ac semper ipsum enim quis tellus. Sed a tincidunt magna.",\n        "comments": [\n            {\n                "author": "Captain America",\n                "text": "Yes i agree with you bro"\n            },\n            {\n                "author": "Thor",\n                "text": "Stop! Ragnarok is comming!"\n            },\n            {\n                "author": "Hulk",\n                "text": "Wreck!"\n            }\n        ]\n      }\n    ]  ')}r.a.render(Object(u.jsx)(C,{children:Object(u.jsx)(l.a,{children:Object(u.jsx)(O,{})})}),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.5cbad9d4.chunk.js.map
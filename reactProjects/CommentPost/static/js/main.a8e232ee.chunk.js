(this.webpackJsonppost_creator=this.webpackJsonppost_creator||[]).push([[0],[,,,,,,,,,,,,,,function(A,e,t){},function(A,e,t){},function(A,e,t){},function(A,e,t){},,function(A,e,t){},function(A,e,t){},function(A,e,t){},function(A,e,t){"use strict";t.r(e);var s=t(1),n=t.n(s),a=t(5),i=t.n(a),g=(t(14),t(2)),r=t(4),u=t(6),o=t(7),C=t(9),B=t(8),c=(t(15),t(16),t(17),t(0));function l(A){var e=A.author,t=A.date,s=A.title,n=A.shortDesc,a=A.comments;return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("p",{children:e}),Object(c.jsx)("p",{children:t}),Object(c.jsx)("h2",{children:s}),Object(c.jsx)("h5",{children:n}),Object(c.jsxs)("h4",{className:"counter-bg",children:["Comments: ",Object(c.jsx)("span",{children:a.length})]})]})}var m=function(){return Object(c.jsx)(E.Consumer,{children:function(A){return Object(c.jsx)("div",{className:"posts-container",children:A.posts.map((function(e,t){return Object(c.jsx)("div",{className:"post-container",children:Object(c.jsx)("div",{className:"post-content",onClick:function(){A.onPostSelected(e.postId)},children:l(e)})},t)}))})}})};t(19),t(20);function Q(A){var e=A.author,t=A.text;return Object(c.jsxs)("div",{className:"comment",children:[Object(c.jsx)("h2",{children:e}),Object(c.jsx)("p",{children:t})]})}t(21);var I=function(){return Object(c.jsx)(E.Consumer,{children:function(A){function e(){document.forms.addCommentForm.reset()}return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("h2",{children:"Leave your message:"}),Object(c.jsxs)("form",{className:"comment-form",name:"addCommentForm",action:"#",children:[Object(c.jsx)("input",{type:"text",name:"name",className:"comment-name",placeholder:"type your name:"}),Object(c.jsx)("textarea",{type:"text",name:"commentText",className:"comment-input",placeholder:"type your message:"}),Object(c.jsxs)("div",{className:"btn-container",children:[Object(c.jsx)("button",{className:"add-btn",onClick:function(t){t.preventDefault();var s=document.forms.addCommentForm;""!==s.name.value&&""!==s.commentText.value?(A.addComment(A.postId,s.name.value,s.commentText.value),e()):alert("Before adding a comment, please fill all required fields!")},children:"Add comment"}),Object(c.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABLAAAASwCAQAAABBKHtEAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAHdElNRQfjCBkMGDt7bxhBAAAXrUlEQVR42u3d7a/WdQHH8Q8gA5HQQoYVpTgjtalhQooiNBimlW6iqet2ywfNrUVurZ44fZLVzO6eVIrV1NVSsbVmMsWlBooIHFSoEJWDWAIeTKADHDg3PXAJIuq5ua7rXOf3fb3+hM8553e9r+/vd64rAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAID6GmYCGFQ35HojUAc/zHeNAINnhAlAXlFB5+XILDEDCCyQVyCxQGAB8gqJBQgskFdILEBggbwCiQUCC5BXSCwQWCYAeYXEAgQWyCuQWCCwAHmFxAKBBcgrJBYgsEBegcQCgQXyCiQWCCxAXiGxAIEF8gokFggskFcgsUBgAfIKiQUILJBXILFAYIG8AokFAguQV0gsEFiAvEJiAQIL5BVILBBYIK9AYoHAAuQVEgsQWCCvQGKBwAJ5BRILBBYgr5BYgMACeQUSCwQWyCuQWCCwQF7JKyQWILBAXoHEAoEF8gokFggskFcgsUBgAfIKJBYILJBXILFAYIG8AokFAguQV0gsQGCBvAKJBQIL5BVILBBYIK9AYgECC+QVSCwQWCCvQGKBwAJ5BRILEFggr0BigcACeQUSCwQWyCuQWCCwAHkFEgsEFsgrkFggsEBegcQCgQXyCpBYILBAXoHEAoEF8gokFggskFcgsSQWCCyQVyCxQGCBvAKJBQIL5BVILEBggbwCiQUCC+QVSCwQWCCvQGKBwAJ5BUgs6L9hJmiQHhMA4JW/FMNNAAAgsAAABBYAgMACAEBgAQAILAAAgQUAgMACABBYAAACCwAAgQUAILAAAAQWAIDAAgBAYAEACCwAAIEFAIDAAgAQWAAAAgsAAIEFACCwAAAEFgAAAgsAQGABAAgsAACBBQCAwAIAEFgAAAILAACBBQAgsAAABBYAAAILAEBgAQAILAAABBYAgMACABBYAAACCwAAgQUAILAAAAQWAAACCwBAYAEACCwAAAQWAIDAAgAQWAAACCwAAIEFACCwAAAEFgAAAgsAQGABAAgsAAAEFgCAwAIAEFgAAAgsAACBBQAgsAAABBYAAAILAEBgAQAILAAABBYAgMACABBYAAAILAAAgQUAILAAABBYAAACCwBAYAEACCwAAAQWAIDAAgAQWAAACCwAAIEFACCwAAAQWAAAAgsAQGABACCwAAAEFgCAwAIAEFgAAAgsAACBBQAgsAAAEFgAAAILAEBgAQAgsAAABBYAgMACAEBgAQAILAAAgQUAILAAABBYAAACCwBAYAEAILAAAAQWAIDAAgBAYAEACCwAAIEFACCwAAAQWAAAAgsAQGABACCwAAAEFgCAwAIAQGABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABA1QwzQcX1mADAKzCNNtwEAAACCwBAYAEACCwAAAQWAIDAAgAQWAAACCwAAIEFACCwAAAQWAAAAgsAQGABAAgsAAAEFgCAwAIAEFgAAAgsAACBBQAgsAAAEFgAAAILAEBgAQAgsAAABBYAgMACABBYAAAILAAAgQUAILAAABBYAAACCwBAYAEAILAAAAQWAIDAAgBAYAEACCwAAIEFACCwAAAQWAAAAgsAQGABACCwAAAEFgCAwAIAQGABAAgsAACBBQCAwAIAEFgAAAILAEBgAQAgsAAABBYAgMACAEBgAQAILAAAgQUAgMACABBYAAACCwBAYAEAILAAAAQWAIDAAgBAYAEACCwAAIEFAIDAAgAQWAAAAgsAAIEFACCwAAAEFgCAwAIAQGABAAgsAACBBQCAwAIAEFgAAAILAACBBQAgsAAABBYAAAILAEBgAQAILAAAgQUAgMACABBYAAACCwAAgQUAILAAAAQWAAACCwBAYAEACCwAAAQWAIDAAgAQWAAAAgsAAIEFACCwAAAEFgAAAgsAQGABAAgsAAAEFgCAwAIAEFgAAAILAACBBQAgsAAABBYAAAILAEBgAQAILAAABBYAgMACABBYAAAILAAAgQUAILAAAAQWAAACCwBAYAEACCwAAAQWAIDAAgAQWAAACCwAAIEFACCwAAAQWAAAAgsAQGABAAgsAAAEFgCAwAIAEFgAAAgsAACBBQAgsAAAEFgAAAILAEBgAQAgsAAABBYAgMACABBYAAAILAAAgQUAILAAABBYAAACCwBAYAEAILAAAAQWAIDAAgAQWAAACCwAAIEFACCwAAAQWAAAAgsAQGABACCwAAAEFgCAwAIAQGABAAgsAACBBQAgsAAAEFgAAAILAEBgAQAgsAAABBYAgMACAEBgAQAILAAAgQUAgMACABBYAAACCwBAYAEAILAAAAQWAIDAAgBAYAEACCwAAIEFAIDAAgAQWAAAAgsAAIEFACCwAAAEFgCAwAIAQGABAAgsAACBBQCAwAIAEFgAAAILAACBBQAgsAAABBYAgMACAEBgAQAILAAAgQUAgMACABBYAAACCwAAgQUAILAAAAQWAAACCwBAYAEACCwAAIEFAIDAAgAQWAAAAgsAAIEFACCwAAAEFgAAAgsAQGABAAgsAAAEFgCAwAIAEFgAAAILAACBBQAgsAAABBYAAAILAEBgAQAILAAABBYAgMACABBYAAAILAAAgQUAILAAAAQWAAACCwBAYAEACCwAAAQWAIDAAgAQWAAACCwAAIEFACCwAAAElgkAAAQWAIDAAgAQWAAACCwAAIEFACCwAAAQWAAAAgsAQGABACCwAAAEFgCAwAIAEFgAAAgsAACBBQAgsAAAEFgAAAILAEBgAQAgsAAABBYAgMACAEBgAQAILAAAgQUAILAAABBYAAACCwBAYAEAILAAAAQWAIDAAgBAYAEACCwAAIEFAIDAAgAQWAAAAgsAQGABACCwAAAEFgCAwAIAQGABAAgsAACBBQCAwAIAEFgAAAILAACBBQAgsAAABBYAgMACAEBgAQAILAAAgQUAgMACABBYAAACCwAAgQUAILAAAAQWAIDAAgBAYAEACCwAAIEFAIDAAgAQWAAAAgsAAIEFACCwAAAEFgAAAgsAQGABAAgsAACBBQCAwAIAEFgAAAILAACBBQAgsAAABBYAAAILAEBgAQAILAAABBYAgMACABBYAAACCwAAgQUAILAAAAQWAAACCwBAYAEACCwAAAQWAIDAAgAQWAAACCwAAIEFACCwAAAEFgAAAgsAQGABAAgsAAAEFgCAwAIAEFgAAAgsAACBBQAgsAAABBYAAAILAEBgAQAILAAABBYAgMACABBYAAAILAAAgQUAILAAABBYAAACCwBAYAEACCwAAAQWAIDAAgAQWAAACCwAAIEFACCwAAAQWAAAAgsAQGABACCwAAAEFgCAwAIAEFgAAAgsAACBBQAgsAAAEFgAAAILAEBgAQAgsAAABBYAgMACAEBgAQAILAAAgQUAILAAABBYAAACCwBAYAEAILAAAAQWAIDAAgBAYAEACCwAAIEFACCwAAAQWAAAAgsAQGABACCwAAAEFgCAwAIAQGABAAgsAACBBQCAwAIAEFgAAAILAEBgAQAgsAAABBYAgMACAEBgAQAILAAAgQUAgMACABBYAAACCwAAgQUAILAAAAQWAIDAAgBAYAEACCwAAIEFAIDAAgAQWAAAAgsAAIEFACCwAAAEFgAAAgsAQGABAAgsAACBBQCAwAIAEFgAAAILAACBBQAgsAAABBYAAAILAEBgAQAILAAAgQUAgMACABBYAAACCwAAgQUAILAAAAQWAAACCwBAYAEACCwAAAQWAIDAAgAQWAAAAgsAAIEFACCwAAAEFgAAAgsAQGABAAgsAAAEFgCAwAIAEFgAAAgsAACBBQAgsAAABBYAAAILAEBgAQAILAAABBYAgMACABBYAAAILAAAgQUAILAAABBYAAACCwBAYAEACCwAAAQWAIDAAgAQWAAACCwAAIEFACCwAAAQWAAAAgsAQGABAAgsEwAACCwAAIEFACCwAAAQWAAAAgsAQGABACCwAAAEFgCAwAIAQGABAAgsAACBBQAgsAAAEFgAAAILAEBgAQAgsAAABBYAgMACAEBgAQAILAAAgQUAgMACABBYAAACCwBAYAEAILAAAAQWAIDAAgBAYAEACCwAAIEFAIDAAgAQWAAAAgsAAIEFACCwAAAEFgCAwAIAQGABAAgsAACBBQCAwAIAEFgAAAILAACBBQAgsAAABBYAAAILAEBgAQAILAAAgQUAgMACABBYAAACCwAAgQUAILAAAAQWAAACCwBAYAEACCwAAIEFAIDAAgAQWAAAAgsAAIEFACCwAAAEFgAAAgsAQGABAAgsAAAEFgCAwAIAEFgAAAILAACBBQAgsAAA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",className:"form-trash",alt:"imgTrash",title:"Clean form",onClick:e})]})]})]})}})};function d(A){var e=A.author,t=A.date,s=A.title,n=A.content,a=A.comments,i=A.onBackHandler;A.postId;return Object(c.jsxs)("div",{className:"post-view",children:[Object(c.jsx)("button",{className:"back-btn",onClick:i,children:"Back"}),Object(c.jsx)("h3",{children:null!==e&&void 0!==e?e:"no data"}),Object(c.jsxs)("p",{className:"post-date",children:[null!==t&&void 0!==t?t:"no data"," "]}),Object(c.jsx)("h2",{children:null!==s&&void 0!==s?s:"no data"}),Object(c.jsx)("p",{children:null!==n&&void 0!==n?n:"no data"}),Object(c.jsx)("hr",{className:"divider"}),a.map((function(A,e){return Object(c.jsx)("div",{children:Q(A)},e)})),I()]})}var E=n.a.createContext(),w=function(A){Object(C.a)(t,A);var e=Object(B.a)(t);function t(){var A;Object(u.a)(this,t);for(var s=arguments.length,n=new Array(s),a=0;a<s;a++)n[a]=arguments[a];return(A=e.call.apply(e,[this].concat(n))).state={posts:p(),currPostId:null},A.addComment=function(e,t,s){var n=A.state.posts.findIndex((function(A){return A.postId===e})),a=Object(r.a)(A.state.posts),i=[].concat(Object(r.a)(a[n].comments),[{author:t,text:s}]);a[n]=Object(g.a)(Object(g.a)({},a[n]),{},{comments:i}),A.setState(Object(g.a)(Object(g.a)({},A.state),{},{posts:a}))},A.changeCurrentPost=function(e){A.setState(Object(g.a)(Object(g.a)({},A.state),{},{currPostId:e}))},A}return Object(o.a)(t,[{key:"render",value:function(){var A=this,e=this.state.posts.find((function(e){return e.postId===A.state.currPostId}));return Object(c.jsx)("div",{className:"App",children:Object(c.jsx)(E.Provider,{value:{posts:this.state.posts,postId:this.state.currPostId,onPostSelected:this.changeCurrentPost,addComment:this.addComment},children:e?Object(c.jsx)(d,{author:e.author,date:e.date,title:e.title,content:e.content,comments:e.comments,onBackHandler:function(){return A.changeCurrentPost(null)}}):Object(c.jsx)(m,{})})})}}]),t}(s.Component);function p(){return JSON.parse('\n    [\n      {\n        "postId": "123",\n        "date": "12/12/12",\n        "author": "John Doe",\n        "title":"Post about nothing",\n        "shortDesc": "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",\n        "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac neque scelerisque, convallis sem in, eleifend lorem. Donec pretium massa congue porttitor accumsan. Integer semper magna eget purus porttitor vehicula. Nunc eleifend arcu at magna commodo, sed commodo nisi finibus. Donec semper interdum ante eget dapibus. Praesent commodo, nisi ac porttitor scelerisque, metus magna molestie ligula, sed semper nibh libero iaculis diam. Sed mattis massa nulla, vitae vestibulum libero efficitur et. Nulla at consectetur diam. Etiam felis dolor, pellentesque scelerisque tempor tincidunt, pharetra eget ex. Duis turpis est, euismod sed facilisis at, eleifend eu lectus.Fusce vulputate magna et imperdiet aliquet. Nullam et rhoncus erat. Nunc ante justo, vestibulum auctor purus eu, luctus aliquet justo. Nunc eu tellus tristique, elementum sem ut, tristique diam. Maecenas erat elit, efficitur in libero id, venenatis lacinia sem. Nam elementum felis a consequat aliquet. Suspendisse porta sapien nec massa aliquam, ac gravida nunc semper. Curabitur at eros et felis condimentum sollicitudin cursus eget nisl. Morbi sit amet quam nec felis interdum consequat. Donec in sem eu elit ornare porta ac tempus magna. Duis libero eros, egestas a erat in, euismod placerat orci. Mauris condimentum, odio ut tincidunt cursus, leo dolor fringilla nisi, quis egestas magna magna a lacus. Quisque interdum, orci vestibulum ultrices dapibus, elit tellus pulvinar velit, ac semper ipsum enim quis tellus. Sed a tincidunt magna.",\n        "comments": [\n          {\n            "author": "Tony Stark",\n            "text": "Contrary to popular belief, Lorem Ipsum is not simply random text."\n          },\n          {\n            "author": "Jack Sparrow",\n            "text": "Contrary to popular belief, Lorem Ipsum is not simply random text."\n          }\n        ]\n      },\n      {\n        "postId": "678",\n        "date": "01/01/2020",\n        "author": "Jack Sparrow",\n        "title":"Pirates life",\n        "shortDesc": "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",\n        "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac neque scelerisque, convallis sem in, eleifend lorem. Donec pretium massa congue porttitor accumsan. Integer semper magna eget purus porttitor vehicula. Nunc eleifend arcu at magna commodo, sed commodo nisi finibus. Donec semper interdum ante eget dapibus. Praesent commodo, nisi ac porttitor scelerisque, metus magna molestie ligula, sed semper nibh libero iaculis diam. Sed mattis massa nulla, vitae vestibulum libero efficitur et. Nulla at consectetur diam. Etiam felis dolor, pellentesque scelerisque tempor tincidunt, pharetra eget ex. Duis turpis est, euismod sed facilisis at, eleifend eu lectus.Fusce vulputate magna et imperdiet aliquet. Nullam et rhoncus erat. Nunc ante justo, vestibulum auctor purus eu, luctus aliquet justo. Nunc eu tellus tristique, elementum sem ut, tristique diam. Maecenas erat elit, efficitur in libero id, venenatis lacinia sem. Nam elementum felis a consequat aliquet. Suspendisse porta sapien nec massa aliquam, ac gravida nunc semper. Curabitur at eros et felis condimentum sollicitudin cursus eget nisl. Morbi sit amet quam nec felis interdum consequat. Donec in sem eu elit ornare porta ac tempus magna. Duis libero eros, egestas a erat in, euismod placerat orci. Mauris condimentum, odio ut tincidunt cursus, leo dolor fringilla nisi, quis egestas magna magna a lacus. Quisque interdum, orci vestibulum ultrices dapibus, elit tellus pulvinar velit, ac semper ipsum enim quis tellus. Sed a tincidunt magna.",\n        "comments": []\n      },\n      {\n        "postId": "777",\n        "date": "12/02/2020",\n        "author": "Tony Stark",\n        "title":"Iron Man it\'s not a hobby",\n        "shortDesc": "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",\n        "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac neque scelerisque, convallis sem in, eleifend lorem. Donec pretium massa congue porttitor accumsan. Integer semper magna eget purus porttitor vehicula. Nunc eleifend arcu at magna commodo, sed commodo nisi finibus. Donec semper interdum ante eget dapibus. Praesent commodo, nisi ac porttitor scelerisque, metus magna molestie ligula, sed semper nibh libero iaculis diam. Sed mattis massa nulla, vitae vestibulum libero efficitur et. Nulla at consectetur diam. Etiam felis dolor, pellentesque scelerisque tempor tincidunt, pharetra eget ex. Duis turpis est, euismod sed facilisis at, eleifend eu lectus.Fusce vulputate magna et imperdiet aliquet. Nullam et rhoncus erat. Nunc ante justo, vestibulum auctor purus eu, luctus aliquet justo. Nunc eu tellus tristique, elementum sem ut, tristique diam. Maecenas erat elit, efficitur in libero id, venenatis lacinia sem. Nam elementum felis a consequat aliquet. Suspendisse porta sapien nec massa aliquam, ac gravida nunc semper. Curabitur at eros et felis condimentum sollicitudin cursus eget nisl. Morbi sit amet quam nec felis interdum consequat. Donec in sem eu elit ornare porta ac tempus magna. Duis libero eros, egestas a erat in, euismod placerat orci. Mauris condimentum, odio ut tincidunt cursus, leo dolor fringilla nisi, quis egestas magna magna a lacus. Quisque interdum, orci vestibulum ultrices dapibus, elit tellus pulvinar velit, ac semper ipsum enim quis tellus. Sed a tincidunt magna.",\n        "comments": [\n            {\n                "author": "Captain America",\n                "text": "Yes i agree with you bro"\n            },\n            {\n                "author": "Thor",\n                "text": "Stop! Ragnarok is comming!"\n            },\n            {\n                "author": "Hulk",\n                "text": "Wreck!"\n            }\n        ]\n      }\n    ]  ')}i.a.render(Object(c.jsx)(n.a.StrictMode,{children:Object(c.jsx)(w,{})}),document.getElementById("root"))}],[[22,1,2]]]);
//# sourceMappingURL=main.a8e232ee.chunk.js.map
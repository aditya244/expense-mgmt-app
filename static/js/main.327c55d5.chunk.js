(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{40:function(e,t,a){e.exports=a(59)},45:function(e,t,a){},46:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},47:function(e,t,a){},59:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(20),l=a.n(r),i=(a(45),a(7)),o=a(8),s=a(10),m=a(9),u=a(11),p=(a(46),a(47),function(e){return c.a.createElement("div",{className:"containerDiv"},c.a.createElement("div",{className:"divHeading"},c.a.createElement("label",{className:"heading"},"BudgetOverview ")),c.a.createElement("div",{className:"divContent"}))}),E=function(e){return c.a.createElement("div",{className:"containerDiv"},c.a.createElement("div",{className:"divHeading"},c.a.createElement("label",{className:"heading"},"CategoryWiseSplit ")),c.a.createElement("div",{className:"divContent"}))},b=a(60),d=a(61),v=a(33),f=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement(b.a,null,c.a.createElement(d.a,null,c.a.createElement(v.a,{className:"colContainer"},c.a.createElement(p,null)),c.a.createElement(v.a,{className:"colContainer"},c.a.createElement(E,null))))}}]),t}(n.Component),h=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement("h1",null," Profile Component")}}]),t}(n.Component),O=a(64),j=a(62),g=a(16),y=Object(g.b)()(function(e){return c.a.createElement("div",{className:"categoryName"},c.a.createElement("p",null,e.title," ",c.a.createElement(j.a,{variant:"danger",onClick:function(){return e.dispatch({type:"DELETE",id:e.id})}}," X ")),console.log(e.title,e.id))}),N=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement(b.a,null,c.a.createElement("div",{className:"categoryList"},this.props.category_names.map(function(e){return c.a.createElement(y,{id:e.id,key:e.id,title:e.title})})))}}]),t}(n.Component),C=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(c)))).handleSubmit=function(e){e.preventDefault();var t=a.getName.value,n={id:new Date,title:t};a.props.dispatch({type:"ADD",data:n}),a.getName.value=""},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement(b.a,{className:"form_container"},c.a.createElement(O.a,{onSubmit:this.handleSubmit},c.a.createElement(d.a,null,c.a.createElement(v.a,null,c.a.createElement("label",{className:"label-text"},"Categories")),c.a.createElement(v.a,null,c.a.createElement(O.a.Control,{required:!0,type:"text",ref:function(t){return e.getName=t},placeholder:"Category Name"})),c.a.createElement(v.a,null,c.a.createElement(j.a,{variant:"success",type:"submit"},"Add")))),c.a.createElement(N,{category_names:this.props.category_names}),console.log(this.props.category_names))}}]),t}(n.Component),w=Object(g.b)()(C),k=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement(b.a,null,c.a.createElement(O.a,{className:"form_container"},c.a.createElement(d.a,null,c.a.createElement(v.a,null,c.a.createElement("label",{className:"label-text"},"Total Budget")),c.a.createElement(v.a,null,c.a.createElement(O.a.Control,null)),c.a.createElement(v.a,null,c.a.createElement(j.a,{variant:"success"}," Update")))))}}]),t}(n.Component),_=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement(b.a,null,c.a.createElement(k,null),c.a.createElement(w,{category_names:this.props.category_names}))}}]),t}(n.Component),x=Object(g.b)(function(e){return{category_names:e}})(_),D=a(63),S=a(19),A=a(17),B=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement(S.a,null,c.a.createElement(D.a,{className:"flex-column Navbar"},c.a.createElement(S.b,{to:"/",exact:!0},c.a.createElement("li",{activeClassName:"button_active",className:"nav-item"},"Home")),c.a.createElement(S.b,{to:"/profile"},c.a.createElement("li",{activeClassName:"button_active",className:"nav-item"},"Profile")),c.a.createElement(S.b,{to:"/settings"},c.a.createElement("li",{activeClassName:"button_active",className:"nav-item"},"Settings"))),c.a.createElement(A.a,{path:"/",exact:!0,component:f}),c.a.createElement(A.a,{path:"/profile",exact:!0,component:h}),c.a.createElement(A.a,{path:"/settings",exact:!0,component:x}),console.log(this.props.category_names))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var H=a(22),L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD":return e.concat([t.data]);case"DELETE":return e.filter(function(e){return e.id!==t.id});default:return e}},T=Object(H.b)(L);l.a.render(c.a.createElement(g.a,{store:T},c.a.createElement(B,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[40,1,2]]]);
//# sourceMappingURL=main.327c55d5.chunk.js.map
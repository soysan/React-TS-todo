(this["webpackJsonpreact-ts"]=this["webpackJsonpreact-ts"]||[]).push([[0],[,,,,function(t,e,n){t.exports={item:"TodoItem_item__EiNWR"}},,function(t,e,n){t.exports={todos:"Todos_todos__2s1OT"}},function(t,e,n){t.exports={form:"NewTodo_form__3foEh"}},,,,,,function(t,e,n){},,function(t,e,n){"use strict";n.r(e);var o=n(1),r=n.n(o),c=n(3),i=n.n(c),s=(n(13),n(4)),u=n.n(s),d=n(0),a=function(t){return Object(d.jsx)("li",{className:u.a.item,onClick:t.onRemoveTodo,children:t.text})},j=n(8),f=n(5),l=function t(e){Object(f.a)(this,t),this.id=void 0,this.text=void 0,this.text=e,this.id=(new Date).toISOString()},x=r.a.createContext({items:[],addTodo:function(){},removeTodo:function(t){}}),m=function(t){var e=Object(o.useState)([]),n=Object(j.a)(e,2),r=n[0],c=n[1],i={items:r,addTodo:function(t){var e=new l(t);c((function(t){return t.concat(e)}))},removeTodo:function(t){c((function(e){return e.filter((function(e){return e.id!==t}))}))}};return Object(d.jsx)(x.Provider,{value:i,children:t.children})},b=n(6),O=n.n(b),h=function(){var t=Object(o.useContext)(x);return Object(d.jsx)("ul",{className:O.a.todos,children:t.items.map((function(e){return Object(d.jsx)(a,{text:e.text,onRemoveTodo:t.removeTodo.bind(null,e.id)},e.id)}))})},v=n(7),T=n.n(v),p=function(){var t=Object(o.useContext)(x),e=Object(o.useRef)(null);return Object(d.jsxs)("form",{onSubmit:function(n){n.preventDefault();var o=e.current.value;0!==o.trim().length&&t.addTodo(o)},className:T.a.form,children:[Object(d.jsx)("label",{htmlFor:"text",children:"Todo text"}),Object(d.jsx)("input",{type:"text",id:"text",ref:e}),Object(d.jsx)("button",{children:"Add Todo"})]})};var _=function(){return Object(d.jsxs)(m,{children:[Object(d.jsx)(p,{}),Object(d.jsx)(h,{})]})};i.a.render(Object(d.jsx)(_,{}),document.getElementById("root"))}],[[15,1,2]]]);
//# sourceMappingURL=main.4f903d29.chunk.js.map
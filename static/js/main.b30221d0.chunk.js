(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,o){},,function(e,t,o){},function(e,t,o){},function(e,t,o){},function(e,t,o){},function(e,t,o){"use strict";o.r(t);var c=o(1),n=o(7),l=o.n(n),i=o(6),a=o(8),s=o(5),r=(o(13),o(0)),d=function(e){var t=e.createTodo;return Object(r.jsxs)("div",{className:"new-todo",children:[Object(r.jsx)("button",{className:"new-todo__complete",onClick:t}),Object(r.jsx)("input",{type:"text",className:"new-todo__input",placeholder:"Create a new todo..."})]})},u=(o(15),function(e){var t=e.filterTodoList,o=e.todosLeft,c=e.actualFilter,n=e.clearTodoList;return Object(r.jsxs)("div",{className:"actions",children:[Object(r.jsxs)("span",{className:"actions__left-counter",children:[o," items left"]}),Object(r.jsxs)("div",{className:"actions__filter",children:[Object(r.jsx)("button",{onClick:t,"data-filter-mode":"all",className:"filter__mode".concat("all"===c?" active":""),children:"All"}),Object(r.jsx)("button",{onClick:t,"data-filter-mode":"active",className:"filter__mode".concat("active"===c?" active":""),children:"Active"}),Object(r.jsx)("button",{onClick:t,"data-filter-mode":"completed",className:"filter__mode".concat("completed"===c?" active":""),children:"Completed"})]}),Object(r.jsx)("button",{className:"actions__clear",onClick:n,children:"Clear Completed"})]})}),j=(o(16),function(){return Object(r.jsx)("header",{children:Object(r.jsx)("h1",{children:"Todo"})})}),f=(o(17),function(e){var t=e.todo,o=e.id,c=e.completeTodo,n=e.deleteTodo;return Object(r.jsxs)("li",{className:"todo-item".concat(t.completed?" completed":""),children:[Object(r.jsx)("label",{children:Object(r.jsx)("input",{type:"checkbox",className:"todo-item__complete-todo",onChange:function(){c(o)}})}),Object(r.jsx)("h2",{className:"todo-item__title",children:t.title}),Object(r.jsx)("button",{onClick:function(){n(o)},className:"delete"})]})}),m=function(e){var t=e.todoList,o=e.completeTodo,c=e.filterMode,n=e.deleteTodo,l={completed:function(){return t.filter((function(e){return!0===e.completed}))},active:function(){return t.filter((function(e){return!1===e.completed}))}},i=l[c]?l[c]():t;return Object(r.jsx)("ul",{className:"todo-list",children:i.map((function(e,t){return Object(r.jsx)(f,{todo:e,id:t,completeTodo:o,deleteTodo:n},t)}))})},b=function(){var e=Object(c.useState)([]),t=Object(s.a)(e,2),o=t[0],n=t[1],l=Object(c.useState)("all"),f=Object(s.a)(l,2),b=f[0],p=f[1];function O(e){n(e),localStorage.setItem("todo-list",JSON.stringify(e))}return Object(c.useEffect)((function(){n(JSON.parse(localStorage.getItem("todo-list"))||[])}),[]),Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(j,{}),Object(r.jsxs)("main",{children:[Object(r.jsx)(d,{createTodo:function(e){var t=e.target;O([{title:t.nextSibling.value,completed:!1}].concat(Object(a.a)(o))),t.nextSibling.value=""}}),o.length>0&&Object(r.jsxs)("div",{className:"todo-area",children:[Object(r.jsx)(m,{todoList:o,completeTodo:function(e){O(o.map((function(t,o){return e===o?Object(i.a)(Object(i.a)({},t),{},{completed:!t.completed}):t})))},filterMode:b,deleteTodo:function(e){O(o.filter((function(t,o){return o!==e})))}}),Object(r.jsx)(u,{filterTodoList:function(e){var t=e.target;p(t.dataset.filterMode)},todosLeft:o.filter((function(e){return!1===e.completed})).length,actualFilter:b,clearTodoList:function(){O(o.filter((function(e){return!1===e.completed})))}})]})]})]})};o(18);l.a.render(Object(r.jsx)(b,{}),document.getElementById("root"))}],[[19,1,2]]]);
//# sourceMappingURL=main.b30221d0.chunk.js.map
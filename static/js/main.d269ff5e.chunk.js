(this["webpackJsonppizza-ordering-app"]=this["webpackJsonppizza-ordering-app"]||[]).push([[0],{37:function(e,t,c){},38:function(e,t,c){"use strict";c.r(t);var n=c(1),i=c.n(n),r=c(23),a=c.n(r),s=c.p+"static/media/Classic.778b14e8.png",l=c(5),o=c(8),j=c(0);var d=function(){var e=Object(l.f)();return Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("div",{className:"header",children:Object(j.jsx)("h1",{children:"Pizza Ordering App"})}),Object(j.jsx)("div",{className:"logo",children:Object(j.jsx)("img",{src:s,alt:"pizza-logo"})}),Object(j.jsx)("div",{className:"content",children:Object(j.jsx)("h4",{children:"Read to order for your favorite pizza! "})}),Object(j.jsx)("div",{className:"btn",children:Object(j.jsx)(o.a,{onClick:function(t){return function(e,t){t.push("/sections")}(0,e)},children:"Start Here"})})]})};function h(){var e=Object(l.f)();return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h1",{children:"Pizza Ordering App"}),Object(j.jsxs)("div",{children:[Object(j.jsx)(o.a,{onClick:function(t){return function(e,t){t.push("/orderList")}(0,e)},className:"bttn",children:"View all Orders"}),Object(j.jsx)(o.a,{onClick:function(t){return function(e,t){t.push("/orderDetails")}(0,e)},variant:"outline-primary",className:"bttn",children:"Place an Order"}),Object(j.jsx)(o.a,{onClick:function(t){return function(e,t){t.push("/cancelOrder")}(0,e)},variant:"outline-primary",className:"bttn",children:"Cancle an Order"})]})]})}var b=c(13),p=c(14);var O=function(){var e=Object(n.useState)(""),t=Object(b.a)(e,2),c=t[0],i=t[1],r=Object(n.useState)(""),a=Object(b.a)(r,2),s=a[0],d=a[1],h=Object(n.useState)(""),O=Object(b.a)(h,2),u=O[0],x=O[1],f=Object(l.f)();return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h1",{children:"Pizza Ordering App"}),Object(j.jsx)("div",{className:"form",children:Object(j.jsxs)(p.a,{children:[Object(j.jsx)(p.a.Label,{children:"Crust:"}),Object(j.jsxs)(p.a.Select,{"aria-label":"Default select example",onSelect:function(e){i(e.target.value)},children:[Object(j.jsx)("option",{children:"Select Anyone"}),Object(j.jsx)("option",{value:"THIN",children:"Thin"}),Object(j.jsx)("option",{value:"CRACKER",children:"Cracker"}),Object(j.jsx)("option",{value:"STUFFED",children:"Stuffed"})]}),Object(j.jsx)(p.a.Label,{children:"Flavor:"}),Object(j.jsxs)(p.a.Select,{"aria-label":"Default select example",onSelect:function(e){d(e.target.value)},children:[Object(j.jsx)("option",{children:"Select Anyone"}),Object(j.jsx)("option",{value:"FAJITA",children:"Fajita"}),Object(j.jsx)("option",{value:"CHEESE",children:"Cheese"}),Object(j.jsx)("option",{value:"VEGGIE",children:"Veggie"})]}),Object(j.jsx)(p.a.Label,{children:"Size:"}),Object(j.jsxs)(p.a.Select,{"aria-label":"Default select example",onSelect:function(e){x(e.target.value)},children:[Object(j.jsx)("option",{children:"Select Anyone"}),Object(j.jsx)("option",{value:"SMALL",children:"Small"}),Object(j.jsx)("option",{value:"MEDIUM",children:"Medium"}),Object(j.jsx)("option",{value:"LARGE",children:"Large"})]}),Object(j.jsx)(o.a,{type:"submit",className:"bttn",size:"lg",onClick:function(){if(console.log(c,s,u),""===c||""===s||""===u)alert("please select appropriate options");else{var e={Flavor:s,Crust:c,Size:u,Timestamp:new Date,Table_No:9},t={method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat("eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2MzE1Njg4MTksIm5iZiI6MTYzMTU2ODgxOSwianRpIjoiN2NjZmY4YTctYjc0Ni00MjBlLWI1OWQtMDUyMWM1NjU3OTNjIiwiZXhwIjoxNjMxNTY5NzE5LCJpZGVudGl0eSI6InRlc3QiLCJmcmVzaCI6ZmFsc2UsInR5cGUiOiJhY2Nlc3MifQ.oGkQPEzQbK2yH1NXSk0ixS7O_HNXClvPgCiK-0op1e8")},body:JSON.stringify(e)};fetch("https://order-pizza-api.herokuapp.com/api/orders",t).then((function(e){201===e.status&&alert("Your order has been registered")}))}},children:"Place Order"}),Object(j.jsx)(o.a,{type:"submit",className:"bttn",size:"lg",onClick:function(){return f.push("/sections")},children:" Go Back "})]})})]})};var u=function(){var e=Object(l.f)(),t=Object(n.useState)([]),c=Object(b.a)(t,2),i=c[0],r=c[1];return Object(n.useEffect)((function(){fetch("https://order-pizza-api.herokuapp.com/api/orders",{method:"GET",headers:{"Content-Type":"aplication/json"}}).then((function(e){return e.json()})).then((function(e){return r(e)}))}),[]),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h1",{children:"Pizza  Ordering App"}),Object(j.jsx)("div",{children:i.map((function(e,t){return Object(j.jsxs)("div",{children:[Object(j.jsxs)("p",{children:["Crust:",e.Crust]}),Object(j.jsxs)("p",{children:["Flavor: ",e.Flavor]}),Object(j.jsxs)("p",{children:["Size: ",e.Size]})]},t)}))}),Object(j.jsx)(o.a,{className:"bttn",onClick:function(){return function(e){fetch("https://order-pizza-api.herokuapp.com/api/orders/".concat(e),{method:"DELETE",headers:{"Content-Type":"application/json"}}).then((function(e){200===e.status&&alert("Order cancelled successfully"),window.location.reload()}))}(1)},children:"Cancel Order"}),Object(j.jsx)("div",{children:Object(j.jsx)(o.a,{className:"bttn",size:"lg",onClick:function(){return e.push("/sections")},children:" Go Back "})})]})},x=function(){var e=Object(l.f)();return Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{children:"Pizza Ordering App"}),Object(j.jsx)("h2",{children:"All Orders List"}),Object(j.jsx)(o.a,{type:"submit",className:"bttn",size:"lg",onClick:function(){return e.push("/home")},children:" Go Back "})]})},f=(c(36),c(17));c(37);var m=function(){return Object(j.jsx)(f.a,{children:Object(j.jsxs)(l.c,{children:[Object(j.jsx)(l.a,{exact:!0,path:"/home",component:d}),Object(j.jsx)(l.a,{exact:!0,path:"/sections",component:h}),Object(j.jsx)(l.a,{exact:!0,path:"/orderDetails",component:O}),Object(j.jsx)(l.a,{exact:!0,path:"/cancelOrder",component:u}),Object(j.jsx)(l.a,{exact:!0,path:"/orderList",component:x})]})})};a.a.render(Object(j.jsx)(i.a.StrictMode,{children:Object(j.jsx)(m,{})}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.d269ff5e.chunk.js.map
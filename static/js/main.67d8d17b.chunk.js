(this.webpackJsonpproject_showcase=this.webpackJsonpproject_showcase||[]).push([[0],{13:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var n=c(2),a=c.n(n),i=c(7),r=c.n(i),s=(c(13),c(0));var o=function(){return Object(s.jsx)("nav",{className:"amber darken-2",children:Object(s.jsxs)("div",{className:"nav-wrapper ",children:[Object(s.jsx)("a",{href:"/",className:"brand-logo",children:"React Showcase"}),Object(s.jsx)("ul",{id:"nav-mobile",className:"right hide-on-med-and-down",children:Object(s.jsx)("li",{children:Object(s.jsx)("a",{href:"https://alekseyua92.github.io/showcase-on-react/",target:"_blank",rel:"noreferrer",children:"Repository"})})})]})})};var l=function(){return Object(s.jsx)("footer",{className:"page-footer teal lighten-2",children:Object(s.jsx)("div",{className:"footer-copyright",children:Object(s.jsxs)("div",{className:"container",children:[(new Date).getFullYear()," \xa9 Copyright Text",Object(s.jsxs)("div",{children:["Icons made by ",Object(s.jsx)("a",{href:"https://www.freepik.com",title:"Freepik",children:"Freepik"})," from ",Object(s.jsx)("a",{href:"https://www.flaticon.com/",title:"Flaticon",children:"www.flaticon.com"})]}),Object(s.jsx)("a",{className:"grey-text text-lighten-4 right",href:"https://alekseyua92.github.io/showcase-on-react/",target:"_blank",rel:"noreferrer",children:"Repository"})]})})})},j=c(8),d=c(1),u=c(3);function b(){return Object(s.jsx)("div",{className:"preloader-wrapper big active",children:Object(s.jsxs)("div",{className:"spinner-layer spinner-blue-only",children:[Object(s.jsx)("div",{className:"circle-clipper left",children:Object(s.jsx)("div",{className:"circle"})}),Object(s.jsx)("div",{className:"gap-patch",children:Object(s.jsx)("div",{className:"circle"})}),Object(s.jsx)("div",{className:"circle-clipper right",children:Object(s.jsx)("div",{className:"circle"})})]})})}var h=function(e){var t=e.mainId,c=e.displayName,n=e.displayDescription,a=e.price.regularPrice,i=e.displayAssets[0].full_background,r=e.addInOrder,o=void 0===r?Function.prototype:r,l=i;return Object(s.jsxs)("div",{className:"card",id:t,children:[Object(s.jsx)("div",{className:"card-image",children:"N/A"!==l?Object(s.jsx)("img",{src:l,alt:c}):Object(s.jsx)("img",{src:"https://via.placeholder.com/240x240?text=".concat(c),alt:c})}),Object(s.jsxs)("div",{className:"card-content",children:[Object(s.jsx)("span",{className:"card-title",children:c}),Object(s.jsx)("p",{children:n})]}),Object(s.jsxs)("div",{className:"card-action price-block",children:[Object(s.jsx)("button",{onClick:function(){return o({mainId:t,displayName:c,regularPrice:a})},className:"btn",children:"\u041a\u0443\u043f\u0438\u0442\u044c"}),Object(s.jsxs)("span",{className:"right",style:{fontSize:"1.5rem"},children:[Math.floor(.36*a)," UAH"]})]})]})};function m(e){var t=e.goods,c=void 0===t?[]:t,n=e.addInOrder,a=void 0===n?Function.prototype:n;return c.length?Object(s.jsx)("div",{className:"goods",children:c.map((function(e){return Object(s.jsx)(h,Object(d.a)(Object(d.a)({},e),{},{addInOrder:a}),e.id)}))}):Object(s.jsx)("h3",{children:"Nothing here"})}function O(e){var t=e.quantity,c=void 0===t?0:t,n=e.handleBasketShow,a=void 0===n?Function.prototype:n;return Object(s.jsxs)("div",{className:"cart orange darken-2",onClick:a,children:[Object(s.jsx)("i",{className:"material-icons",children:"shop_two"}),c?Object(s.jsx)("span",{className:"cart-quantity",children:c}):null]})}function p(e){var t=e.mainId,c=e.displayName,n=e.regularPrice,a=e.quantity,i=e.removeFromBasket,r=e.incQuantity,o=e.decQuantity;return Object(s.jsxs)("li",{href:"#!",class:"collection-item",children:[c,Object(s.jsx)("i",{className:"material-icons quantBtns",onClick:function(){return o(t)},children:"remove"}),"x",a,Object(s.jsx)("i",{className:"material-icons quantBtns",onClick:function(){return r(t)},children:"add"}),"= ",n*a,Object(s.jsx)("span",{class:"secondary-content",onClick:function(){return i(t)},children:Object(s.jsx)("i",{className:"material-icons basket-delete",children:"clear"})})]})}function f(e){var t=e.order,c=e.handleBasketShow,n=void 0===c?Function.prototype:c,a=e.removeFromBasket,i=void 0===a?Function.prototype:a,r=e.incQuantity,o=void 0===r?Function.prototype:r,l=e.decQuantity,j=void 0===l?Function.prototype:l,u=t.reduce((function(e,t){return e+t.regularPrice*t.quantity}),0);return Object(s.jsxs)("ul",{className:"collection basket-list",children:[Object(s.jsx)("li",{href:"#!",className:"collection-item active",children:"\u041a\u043e\u0440\u0437\u0438\u043d\u0430"}),t.length?t.map((function(e){return Object(s.jsx)(p,Object(d.a)(Object(d.a)({},e),{},{removeFromBasket:i,incQuantity:o,decQuantity:j}),e.mainId)})):Object(s.jsx)("li",{href:"#!",className:"collection-item",children:"\u041a\u043e\u0440\u0437\u0438\u043d\u0430 \u043f\u0443\u0441\u0442\u0430"}),Object(s.jsxs)("li",{href:"#!",className:"collection-item active",children:["\u041e\u0431\u0449\u0430\u044f \u0441\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u044c: ",u," UAH"]}),Object(s.jsx)("li",{href:"#!",className:"collection-item",children:Object(s.jsx)("button",{className:"btn btn-small",children:"\u041a\u0443\u043f\u0438\u0442\u044c"})}),Object(s.jsx)("i",{className:"material-icons basket-close",onClick:n,children:"close"})]})}function x(e){var t=e.name,c=void 0===t?"":t,a=e.closeAlert,i=void 0===a?Function.prototype:a;return Object(n.useEffect)((function(){var e=setTimeout(i,3e3);return function(){clearTimeout(e)}}),[c]),Object(s.jsx)("div",{id:"toast-container",children:Object(s.jsxs)("div",{className:"toast",children:[c," \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d \u0432 \u043a\u043e\u0440\u0437\u0438\u043d\u0443"]})})}function v(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),c=t[0],a=t[1],i=Object(n.useState)(!0),r=Object(u.a)(i,2),o=r[0],l=r[1],h=Object(n.useState)([]),p=Object(u.a)(h,2),v=p[0],y=p[1],N=Object(n.useState)(!1),g=Object(u.a)(N,2),k=g[0],w=g[1],F=Object(n.useState)(""),I=Object(u.a)(F,2),q=I[0],S=I[1],B=function(){w(!k)};return Object(n.useEffect)((function(){fetch("https://fortniteapi.io/v2/shop?lang=ru",{headers:{Authorization:"e5e6427b-fae9d660-97275941-ca261adc"}}).then((function(e){return e.json()})).then((function(e){e.shop&&a(e.shop),l(!1)}))}),[]),Object(s.jsxs)("main",{className:"container content",children:[Object(s.jsx)(O,{quantity:v.length,handleBasketShow:B}),o?Object(s.jsx)(b,{}):Object(s.jsx)(m,{goods:c,addInOrder:function(e){var t=v.findIndex((function(t){return t.mainId===e.mainId}));if(t<0){var c=Object(d.a)(Object(d.a)({},e),{},{quantity:1});y([].concat(Object(j.a)(v),[c]))}else{var n=v.map((function(e,c){return c===t?Object(d.a)(Object(d.a)({},e),{},{quantity:e.quantity+1}):e}));y(n)}S(e.displayName)}}),k&&Object(s.jsx)(f,{order:v,handleBasketShow:B,removeFromBasket:function(e){var t=v.filter((function(t){return t.mainId!==e}));y(t)},incQuantity:function(e){var t=v.map((function(t){if(t.mainId===e){var c=t.quantity+1;return Object(d.a)(Object(d.a)({},t),{},{quantity:c})}return t}));y(t)},decQuantity:function(e){var t=v.map((function(t){if(t.mainId===e){var c=t.quantity-1;return Object(d.a)(Object(d.a)({},t),{},{quantity:c>=0?c:0})}return t}));y(t)}}),q&&Object(s.jsx)(x,{name:q,closeAlert:function(){S("")}})]})}var y=function(){return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(o,{}),Object(s.jsx)(v,{}),Object(s.jsx)(l,{})]})};r.a.render(Object(s.jsx)(a.a.StrictMode,{children:Object(s.jsx)(y,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.67d8d17b.chunk.js.map
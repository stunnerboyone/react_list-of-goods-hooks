(this["webpackJsonpreact_list-of-goods-hooks"]=this["webpackJsonpreact_list-of-goods-hooks"]||[]).push([[0],{14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var s,c=n(7),o=n.n(c),r=n(6),i=n(8),a=n(1),u=n(4),l=n.n(u),b=(n(13),n(14),n(0)),j=function(t){var e=t.good;return Object(b.jsx)("li",{"data-cy":"Good",children:e})},d=function(t){var e=t.goods;return Object(b.jsx)("ul",{className:"Goodsist",children:e.map((function(t){return Object(b.jsx)(j,{good:t},t)}))})},h=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];!function(t){t.DEFAULT="",t.ALPHABET="alphabet",t.LENGTH="length"}(s||(s={}));var g=function(){var t=Object(a.useState)(s.DEFAULT),e=Object(r.a)(t,2),n=e[0],c=e[1],o=Object(a.useState)(!1),u=Object(r.a)(o,2),j=u[0],g=u[1],f=function(t,e,n){var c=Object(i.a)(t);return e&&c.sort((function(t,n){switch(e){case s.ALPHABET:return t.localeCompare(n);case s.LENGTH:return t.length-n.length;default:return 0}})),n?c.reverse():c}(h,n,j);return Object(b.jsxs)("div",{className:"section content",children:[Object(b.jsxs)("div",{className:"buttons",children:[Object(b.jsx)("button",{type:"button",className:l()("button is-info",{"is-light":n!==s.ALPHABET}),onClick:function(){return c(s.ALPHABET)},children:"Sort alphabetically"}),Object(b.jsx)("button",{type:"button",className:l()("button is-success",{"is-light":n!==s.LENGTH}),onClick:function(){return c(s.LENGTH)},children:"Sort by length"}),Object(b.jsx)("button",{type:"button",className:l()("button is-warning",{"is-light":!j}),onClick:function(){return g(!j)},children:"Reverse"}),(n||j)&&Object(b.jsx)("button",{type:"button",className:"button is-danger is-light",onClick:function(){c(s.DEFAULT),g(!1)},children:"Reset"})]}),Object(b.jsx)(d,{goods:f})]})};o.a.render(Object(b.jsx)(g,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.cea5907b.chunk.js.map
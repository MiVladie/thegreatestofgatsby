(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{RXBc:function(e,t,n){"use strict";n.r(t),n.d(t,"query",(function(){return g}));var a=n("q1tI"),r=n.n(a),l=n("Wbzz"),o=n("qhky"),i=n("yBb5"),u=n("mt4B"),c=n("a1A/");n("91GP"),n("f3/d"),n("rGqo"),n("rE2o"),n("ioFf"),n("XfO3"),n("HEwt"),n("a1Th"),n("Btvt");function m(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return s(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return s(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var a=0;return function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(n=e[Symbol.iterator]()).next.bind(n)}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var d=function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())},f=n("E5ef"),p=n("XeUi"),y=n.n(p),b=function(e){var t=e.data,n=e.buttonText,l=e.onSubmit,o=Object(a.useState)(),i=o[0],u=o[1],c=function(e){e.preventDefault();var n=function(e,t){if(null==t)return"Please, fill in all required fields.";for(var n,a=m(e);!(n=a()).done;){var r=n.value,l=t[r.name];if(r.required&&(""===l||null==l))return"Please, fill in all required fields.";if("email"===r.type&&!d(l))return"Please, provide a valid email address."}return null}(t,i);null==n?(u(null),l(i)):console.log(n)};return r.a.createElement("form",{className:y.a.Form},t.map((function(e){return r.a.createElement("div",{className:y.a.Field,key:e.name},r.a.createElement("label",{htmlFor:e.name},e.label),r.a.createElement("input",{name:e.name,type:e.type,value:null!=i&&null!=i[e.name]?i[e.name]:"",onChange:function(t){var n;return u(Object.assign({},i,((n={})[e.name]=t.target.value,n)))},key:e.name}))})),r.a.createElement(f.a,{onClick:function(e){return c(e)}},n))},v=n("YzSj"),h=n.n(v),E=function(e){var t=e.main,n=e.description;return r.a.createElement("div",{className:h.a.Contact},r.a.createElement(c.a,null,r.a.createElement("div",{className:h.a.Wrapper},r.a.createElement("div",{className:h.a.Info},r.a.createElement("h1",{className:h.a.Main},t),r.a.createElement("p",{className:h.a.Description},n)),r.a.createElement("div",{className:h.a.Form},r.a.createElement(b,{data:[{name:"name",label:"Full name",type:"text",required:!0},{name:"email",label:"Email",type:"email",required:!0},{name:"phone",label:"Phone",type:"tel",required:!1}],buttonText:"Submit",onSubmit:function(e){return console.log(e)}})))))},g=(t.default=function(e){var t=e.data;return r.a.createElement(i.a,null,r.a.createElement(o.a,null,r.a.createElement("title",null,"The Greatest Of Gatsby")),r.a.createElement(u.a,{main:"Work, your way.",description:"Accord is a globar recruitment partnership delivering for clients and candidates across all industries and specialisms.",image:t.bannerImage.childImageSharp.fluid,imageAlt:"Accord Partnership",onButtonClick:function(){return Object(l.navigate)("/partner/")},buttonText:"Partner with us"}),r.a.createElement(E,{main:"Partner with us",description:"We provide you with the infrastructure and community so that you can rapidly build your own business."}))},"3228308513")},XeUi:function(e,t,n){e.exports={Form:"Form-module--Form--2rq1j",Field:"Form-module--Field--3KE8V"}},YzSj:function(e,t,n){e.exports={Contact:"Contact-module--Contact--R94Tc",Wrapper:"Contact-module--Wrapper--2GI5U",Info:"Contact-module--Info--12U3o",Main:"Contact-module--Main--3CdyK",Description:"Contact-module--Description--ykoN9",Form:"Contact-module--Form--UnFG3"}}}]);
//# sourceMappingURL=component---src-pages-index-js-5bf3f1a36e2feab92d8c.js.map
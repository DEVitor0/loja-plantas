/*! For license information please see main.bundle.js.LICENSE.txt */
(()=>{"use strict";var t={420:(t,e,o)=>{var n,r,i,a=o(537);function c(t){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},c(t)}function s(){s=function(){return e};var t,e={},o=Object.prototype,n=o.hasOwnProperty,r=Object.defineProperty||function(t,e,o){t[e]=o.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",l=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function d(t,e,o){return Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{d({},"")}catch(t){d=function(t,e,o){return t[e]=o}}function f(t,e,o,n){var i=e&&e.prototype instanceof g?e:g,a=Object.create(i.prototype),c=new I(n||[]);return r(a,"_invoke",{value:P(t,o,c)}),a}function h(t,e,o){try{return{type:"normal",arg:t.call(e,o)}}catch(t){return{type:"throw",arg:t}}}e.wrap=f;var p="suspendedStart",y="suspendedYield",m="executing",v="completed",w={};function g(){}function b(){}function E(){}var L={};d(L,a,(function(){return this}));var x=Object.getPrototypeOf,S=x&&x(x(O([])));S&&S!==o&&n.call(S,a)&&(L=S);var q=E.prototype=g.prototype=Object.create(L);function k(t){["next","throw","return"].forEach((function(e){d(t,e,(function(t){return this._invoke(e,t)}))}))}function C(t,e){function o(r,i,a,s){var l=h(t[r],t,i);if("throw"!==l.type){var u=l.arg,d=u.value;return d&&"object"==c(d)&&n.call(d,"__await")?e.resolve(d.__await).then((function(t){o("next",t,a,s)}),(function(t){o("throw",t,a,s)})):e.resolve(d).then((function(t){u.value=t,a(u)}),(function(t){return o("throw",t,a,s)}))}s(l.arg)}var i;r(this,"_invoke",{value:function(t,n){function r(){return new e((function(e,r){o(t,n,e,r)}))}return i=i?i.then(r,r):r()}})}function P(e,o,n){var r=p;return function(i,a){if(r===m)throw Error("Generator is already running");if(r===v){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var s=A(c,n);if(s){if(s===w)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===p)throw r=v,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=m;var l=h(e,o,n);if("normal"===l.type){if(r=n.done?v:y,l.arg===w)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(r=v,n.method="throw",n.arg=l.arg)}}}function A(e,o){var n=o.method,r=e.iterator[n];if(r===t)return o.delegate=null,"throw"===n&&e.iterator.return&&(o.method="return",o.arg=t,A(e,o),"throw"===o.method)||"return"!==n&&(o.method="throw",o.arg=new TypeError("The iterator does not provide a '"+n+"' method")),w;var i=h(r,e.iterator,o.arg);if("throw"===i.type)return o.method="throw",o.arg=i.arg,o.delegate=null,w;var a=i.arg;return a?a.done?(o[e.resultName]=a.value,o.next=e.nextLoc,"return"!==o.method&&(o.method="next",o.arg=t),o.delegate=null,w):a:(o.method="throw",o.arg=new TypeError("iterator result is not an object"),o.delegate=null,w)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function T(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function I(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function O(e){if(e||""===e){var o=e[a];if(o)return o.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,i=function o(){for(;++r<e.length;)if(n.call(e,r))return o.value=e[r],o.done=!1,o;return o.value=t,o.done=!0,o};return i.next=i}}throw new TypeError(c(e)+" is not iterable")}return b.prototype=E,r(q,"constructor",{value:E,configurable:!0}),r(E,"constructor",{value:b,configurable:!0}),b.displayName=d(E,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===b||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,E):(t.__proto__=E,d(t,u,"GeneratorFunction")),t.prototype=Object.create(q),t},e.awrap=function(t){return{__await:t}},k(C.prototype),d(C.prototype,l,(function(){return this})),e.AsyncIterator=C,e.async=function(t,o,n,r,i){void 0===i&&(i=Promise);var a=new C(f(t,o,n,r),i);return e.isGeneratorFunction(o)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},k(q),d(q,u,"Generator"),d(q,a,(function(){return this})),d(q,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),o=[];for(var n in e)o.push(n);return o.reverse(),function t(){for(;o.length;){var n=o.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=O,I.prototype={constructor:I,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(T),!e)for(var o in this)"t"===o.charAt(0)&&n.call(this,o)&&!isNaN(+o.slice(1))&&(this[o]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var o=this;function r(n,r){return c.type="throw",c.arg=e,o.next=n,r&&(o.method="next",o.arg=t),!!r}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var s=n.call(a,"catchLoc"),l=n.call(a,"finallyLoc");if(s&&l){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!l)throw Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(t,e){for(var o=this.tryEntries.length-1;o>=0;--o){var r=this.tryEntries[o];if(r.tryLoc<=this.prev&&n.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var i=r;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,w):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),w},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.finallyLoc===t)return this.complete(o.completion,o.afterLoc),T(o),w}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc===t){var n=o.completion;if("throw"===n.type){var r=n.arg;T(o)}return r}}throw Error("illegal catch attempt")},delegateYield:function(e,o,n){return this.delegate={iterator:O(e),resultName:o,nextLoc:n},"next"===this.method&&(this.arg=t),w}},e}function l(t,e,o,n,r,i,a){try{var c=t[i](a),s=c.value}catch(t){return void o(t)}c.done?e(s):Promise.resolve(s).then(n,r)}function u(t){return function(){var e=this,o=arguments;return new Promise((function(n,r){var i=t.apply(e,o);function a(t){l(i,n,r,a,c,"next",t)}function c(t){l(i,n,r,a,c,"throw",t)}a(void 0)}))}}function d(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,f(n.key),n)}}function f(t){var e=function(t,e){if("object"!=c(t)||!t)return t;var o=t[Symbol.toPrimitive];if(void 0!==o){var n=o.call(t,"string");if("object"!=c(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==c(e)?e:e+""}function h(){var t=window.document.querySelector("#sem-conteudo"),e=window.document.querySelector("#status-compras"),o=window.document.querySelector("#container-produtos");(0,a.lX)(e),o.children.length>=1?((0,a.lX)(t),e.style.display="block"):((0,a.lX)(e),t.style.display="flex")}function p(t,e){try{var o=t.querySelector(e);return o?o.textContent:void 0}catch(t){return}}function y(t){var e=t.querySelector("img");return e?e.src:void 0}n=window.document.querySelector("#abrir-carrinho"),r=window.document.querySelector("#carrinho"),i=window.document.querySelector("body"),n.addEventListener("click",(function(){i.style.overflowX="hidden",r.style.display="block",i.style.overflowY="hidden",a.lU.escurecerTela(),r.addEventListener("animationend",(function(){i.style.overflowX=""}),{once:!0})})),function(){var t=window.document.querySelector("#carrinho"),e=window.document.querySelector(".fa-xmark"),o=window.document.querySelector("body");e.addEventListener("click",(function(){o.style.overflow="auto",(0,a.lX)(t),a.lU.removerEscurecimentoTela()}))}();var m,v,w=function(){function t(e,o,n,r,i,a,c,s,l,u,d,f,h,p,y,m,v,w,g,b,E){var L=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.containerProdutos=e,this.containerVasoCarrinho=o,this.imagemVasoCarrinho=n,this.containerTextoCarrinho=r,this.nomeLixo=i,this.paragrafoLixo=a,this.iconeLixo=c,this.containerPromoção=s,this.valorInicial=l,this.containerValorProduto=u,this.valorProduto=d,this.containerQuantidadesProdutos=f,this.adicionarQuantidades=h,this.diminuir=p,this.iconeMenos=y,this.divGenérica=m,this.quantidadeProduto=v,this.aumentar=w,this.iconeMais=g,this.valorQuantia=b,this.preçoItem=E,this.subtotalItem=0,this.nomeProduto=null,this.iconeLixo.addEventListener("click",(function(){return L.removeMarcacao()}))}return e=t,o=[{key:"criaContainer",value:function(){var t=window.document.querySelector("#container-produtos");this.simplifica(this.containerProdutos,"container-produtos"),this.simplifica(this.containerProdutos,"container-produtos-".concat(this.nomeProduto)),this.simplifica(this.containerVasoCarrinho,"container-vaso-carrinho"),this.simplifica(this.imagemVasoCarrinho,"imagem-vaso-carrinho"),this.simplifica(this.containerTextoCarrinho,"container-texto-carrinho"),this.simplifica(this.paragrafoLixo,"nome-produto"),this.simplifica(this.iconeLixo,["fa-regular","fa-trash-can","clicavel","icone-lixeira"]),this.simplifica(this.containerPromoção,"container-promoção-carrinho"),this.simplifica(this.valorInicial,"valor-incial"),this.simplifica(this.containerValorProduto,"container-valor-produto"),this.simplifica(this.valorProduto,"valor-produto"),this.simplifica(this.containerValorProduto,"container-valor-produto"),this.simplifica(this.valorProduto,"valor-produto"),this.simplifica(this.containerQuantidadesProdutos,"container-quantidade-produto"),this.simplifica(this.adicionarQuantidades,"adiconar-quantidades"),this.simplifica(this.diminuir,"diminuir"),this.simplifica(this.iconeMenos,["fa-solid","fa-minus","clicavel"]),this.simplifica(this.quantidadeProduto,"quantidade-produto"),this.simplifica(this.aumentar,"aumentar"),this.simplifica(this.iconeMais,["fa-solid","fa-plus","clicavel"]),this.simplifica(this.valorQuantia,"valor-quantia");var e=t.appendChild(this.containerProdutos),o=e.appendChild(this.containerVasoCarrinho).appendChild(this.imagemVasoCarrinho),n=e.appendChild(this.containerTextoCarrinho),r=n.appendChild(this.nomeLixo),i=r.appendChild(this.paragrafoLixo);r.appendChild(this.iconeLixo);var a=n.appendChild(this.containerPromoção).appendChild(this.valorInicial),c=n.appendChild(this.containerValorProduto).appendChild(this.valorProduto),s=n.appendChild(this.containerQuantidadesProdutos),l=s.appendChild(this.adicionarQuantidades),u=l.appendChild(this.diminuir);u.appendChild(this.iconeMenos);var d=l.appendChild(this.divGenérica).appendChild(this.quantidadeProduto),f=this.adicionarQuantidades.appendChild(this.aumentar);return f.appendChild(this.iconeMais),[o,i,a,c,u,d,f,s.appendChild(this.valorQuantia)]}},{key:"simplifica",value:function(t,e){Array.isArray(e)?e.forEach((function(e){t.classList.add(e)})):t.classList.add(e)}},{key:"adicionaImagem",value:(r=u(s().mark((function t(e){return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:try{e&&(this.criaContainer()[0].style.backgroundImage='url("'.concat(e,'")'))}catch(t){console.error(t)}case 1:case"end":return t.stop()}}),t,this)}))),function(t){return r.apply(this,arguments)})},{key:"adicionaTexto",value:(n=u(s().mark((function t(e,o,n){return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:try{void 0!==e&&(this.criaContainer()[o].textContent=n,1===o&&(this.containerProdutos.setAttribute("data-produto",n),this.nomeProduto=n))}catch(t){console.error("Erro em adicionaNome:",t)}case 1:case"end":return t.stop()}}),t,this)}))),function(t,e,o){return n.apply(this,arguments)})},{key:"verificaQuantidade",value:function(){var e,o,n,r=this,i=this.iconeMenos,a=this.quantidadeProduto,c=this.iconeMais,s=1,l=this,u=function(){var t=l.preçoItem.slice(3,5);return Number(t)*s},d=function(){var e=r.valorQuantia,o=u();e.textContent="R$ ".concat(o,",00"),t.subtotal-=r.subtotalItem||0,r.subtotalItem=o,t.subtotal+=o;var n=window.document.querySelector(".preço-final"),i=window.document.querySelector("#preço-final-final");n.textContent="R$ ".concat(t.subtotal,",00"),i.textContent="R$ ".concat(t.subtotal,",00")},f=function(t,e){t.addEventListener("click",(function(){"+"===e?s++:"-"===e&&s>1&&s--,a.textContent=s,d()}))};a.textContent=s,f(c,"+"),f(i,"-"),d(),e=window.document.querySelectorAll(".icone-lixeira"),o=window.document.querySelector(".preço-final"),n=window.document.querySelector("#preço-final-final"),e.forEach((function(e,r){e.dataset.listenerAdded||(e.addEventListener("click",(function(){var r=e.closest(".container-produtos");r&&(t.subtotal-=u(),r.remove(),h(),o.textContent="R$ ".concat(t.subtotal,",00"),n.textContent="R$ ".concat(t.subtotal,",00"))})),e.dataset.listenerAdded="true")}))}},{key:"removeMarcacao",value:function(){var t=this;document.querySelectorAll(".produtos-plantas").forEach((function(e){if(e.querySelector("h3").textContent===t.nomeProduto){var o=e.querySelector(".fa-basket-shopping"),n=e.querySelector(".sexta-carrinho");n.style.backgroundColor="white",o.style.color="black",n.classList.remove("clicado")}}))}},{key:"removerTodosItens",value:function(){var e=window.document.querySelector("#excluir-itens"),o=window.document.querySelector("#lixeira-excluir-itens");function n(e){e.addEventListener("click",(function(){var e=window.document.querySelectorAll(".container-produtos"),o=window.document.querySelector(".preço-final"),n=window.document.querySelector("#preço-final-final");e.forEach((function(t,e){t.remove()})),t.subtotal=0,o.textContent="R$ ".concat(t.subtotal,",00"),n.textContent="R$ ".concat(t.subtotal,",00"),h()}))}n(e),n(o)}}],o&&d(e.prototype,o),Object.defineProperty(e,"prototype",{writable:!1}),e;var e,o,n,r}();function g(t){return window.document.createElement(t)}function b(){return E.apply(this,arguments)}function E(){return(E=u(s().mark((function t(){var e,o;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,new Promise((function(t,e){var o=document.querySelectorAll(".sexta-carrinho"),n=document.querySelectorAll(".produtos-plantas"),r=document.querySelectorAll(".fa-basket-shopping"),i=(0,a.uQ)(r,0);o.forEach((function(r,c){r.classList.contains("clicado")||(i[c].style.color="black",r.style.backgroundColor="white");var s=function(){if(r.classList.contains("clicado")){r.style.backgroundColor="white",i[c].style.color="black";var s=n[c].querySelector("h3").textContent;Array.from(document.querySelectorAll(".produtos-plantas")).filter((function(t){return t.querySelector("h3").textContent===s&&t!==n[c]})).forEach((function(t){var e=t.querySelector(".fa-basket-shopping"),o=t.querySelector(".sexta-carrinho");o.style.backgroundColor="white",o.classList.remove("clicado"),e.style.color="black"}));var l=document.querySelector("#mensagem-removida");l.style.display="flex",l.classList.remove("esconder"),l.classList.add("mostrar"),setTimeout((function(){l.classList.remove("mostrar"),l.classList.add("esconder"),setTimeout((function(){l.style.display="none"}),500)}),2e3);var u=document.querySelector(".container-produtos-".concat(s));if(u){var d=u.querySelector(".valor-produto").textContent.slice(8,10),f=parseInt(u.querySelector(".quantidade-produto").textContent);w.subtotal-=Number(d)*f;var m=window.document.querySelector(".preço-final"),v=window.document.querySelector("#preço-final-final");m.textContent="R$ ".concat(w.subtotal.toFixed(2).replace(".",",")),v.textContent="R$ ".concat(w.subtotal.toFixed(2).replace(".",",")),u.remove(),h()}r.classList.remove("clicado")}else{r.classList.add("clicado"),r.style.backgroundColor="#47941a",i[c].style.color="white";var g=n[c].querySelector("h3").textContent;Array.from(document.querySelectorAll(".produtos-plantas")).filter((function(t){return t.querySelector("h3").textContent===g&&t!==n[c]})).forEach((function(t){var e=t.querySelector(".fa-basket-shopping"),n=t.querySelector(".sexta-carrinho"),r=Array.from(o).indexOf(e.parentElement);if(-1!==r){var a=i[r];e.style.color="white",a.style.color="white",n.style.backgroundColor="#47941a",n.classList.add("clicado")}}));var b,E=p(q(2),"h3"),L=p(q(2),"p"),x=p(q(3),"del"),S=y(q(0));void 0!==x&&(E=p(q(3),"h3"),L=p(q(3),"p"),S=y(q(1))),void 0!==E&&void 0!==L&&void 0!==S?((b=window.document.querySelector("body > aside:nth-child(7) > div")).style.display="flex",b.style.position="fixed",a.lU.escurecerTela(),t([E,L,x,S])):e(new Error("Algumas informações necessárias estão faltando"))}function q(t){return n[c].children[t]}};r.addEventListener("mouseenter",(function(){var t=i[c];r.classList.contains("clicado")||(t.style.color="white",r.style.backgroundColor="#47941a")})),r.addEventListener("mouseleave",(function(){var t=i[c];r.classList.contains("clicado")||(t.style.color="black",r.style.backgroundColor="white")})),r.removeEventListener("click",r._handleCarrinhoClick),r.addEventListener("click",s),r._handleCarrinhoClick=s}))}));case 2:return e=t.sent,o=new w(g("div"),g("div"),g("div"),g("div"),g("div"),g("p"),g("i"),g("div"),g("del"),g("div"),g("p"),g("div"),g("div"),g("div"),g("i"),g("div"),g("p"),g("div"),g("i"),g("p"),e[1]),t.next=6,o.adicionaImagem(e[3]);case 6:return t.next=8,o.adicionaTexto(e[0],1,e[0]);case 8:return t.next=10,o.adicionaTexto(e[2],2,"De: ".concat(e[2]));case 10:return t.next=12,o.adicionaTexto(e[1],3,"Por: ".concat(e[1]));case 12:o.verificaQuantidade(e[0]),h(),o.removerTodosItens();case 15:case"end":return t.stop()}}),t)})))).apply(this,arguments)}m=w,(v=f(v="subtotal"))in m?Object.defineProperty(m,v,{value:0,enumerable:!0,configurable:!0,writable:!0}):m[v]=0,b(),window.document.querySelectorAll(".sexta-carrinho").forEach((function(t){t.addEventListener("click",(function(){b()}),{once:!0})})),document.addEventListener("DOMContentLoaded",(function(){document.querySelectorAll(".produtos-plantas").forEach((function(t){t.querySelector(".visualização").addEventListener("click",(function(){var e,o,n,r,i,a,c;e=t.querySelector(".container-preço-plantas h3").textContent,o=t.querySelector(".container-preço-plantas p").textContent,n=t.querySelector(".container-imagens-produtos img").src,r=document.querySelector("#nome-produto-visualização"),i=document.querySelector("#preço-produto-visualização"),a=document.querySelector("#calculo-parcelas-visualização"),c=document.querySelector("#imagem-visualização"),r&&i&&c&&a?(r.textContent=e,i.textContent=o,a.textContent="Até 6x de R$ ".concat((parseFloat(o.replace("R$","").replace(",","."))/6).toFixed(2).replace(".",",")," sem juros"),c.src=n):console.error("Um ou mais elementos não foram encontrados no DOM")}))}))}))},537:(t,e,o)=>{function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}function r(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,i(n.key),n)}}function i(t){var e=function(t,e){if("object"!=n(t)||!t)return t;var o=t[Symbol.toPrimitive];if(void 0!==o){var r=o.call(t,"string");if("object"!=n(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==n(e)?e:e+""}var a,c;function s(t){t.style.display="none"}function l(t,e){var o=Array.from(t);return o.splice(e,1),o}o.d(e,{lU:()=>y,lX:()=>s,uQ:()=>l}),a=document.querySelectorAll(".container-abertura"),document.querySelectorAll(".abertura").forEach((function(t,e){t.addEventListener("click",(function(){var t=a[e].style.display;a.forEach((function(t){s(t)})),a[e].style.display="flex"===t?"none":"flex"}))})),c=document.querySelector("#titulo-carrossel"),new IntersectionObserver((function(t){t.forEach((function(t){t.isIntersecting?c.classList.add("slideAnimation"):c.classList.remove("slideAnimation")}))})).observe(c),function(){var t=window.document.querySelector("#populares"),e=window.document.querySelectorAll(".container-populares"),o=window.document.querySelector("#novidades"),n=window.document.querySelector("#container-novidades");s(n);var r=window.document.querySelector("#ofertas"),i=window.document.querySelector("#container-ofertas");s(i);var a=window.document.querySelector(".fa-angle-left"),c=window.document.querySelector(".fa-angle-right");t.addEventListener("click",(function(){e.forEach((function(t){t.style.display="flex"})),t.style.color="#518432",o.style.color="black",r.style.color="black",s(n),s(i),c.style.display="flex",a.style.display="flex"})),o.addEventListener("click",(function(){e.forEach((function(t){t.style.display="none"})),t.style.color="black",o.style.color="#518432",r.style.color="black",n.style.display="flex",s(i),s(c),s(a)})),r.addEventListener("click",(function(){e.forEach((function(t){t.style.display="none"})),t.style.color="black",o.style.color="black",r.style.color="#518432",s(n),i.style.display="flex",s(c),s(a)}))}(),function(){var t=document.querySelector(".fa-angle-left"),e=document.querySelector(".fa-angle-right"),o=document.querySelectorAll("#seção-produtos .produtos-plantas"),n=document.querySelector("body");function r(){n.style.overflowX=""}function i(){return{plantasEsquerdas:document.querySelectorAll(".esquerda"),plantasDireitas:document.querySelectorAll(".direita")}}function a(t){t.style.display="none"}function c(t,e){t.style.width=e}var s=i(),l=s.plantasEsquerdas,u=s.plantasDireitas;function d(t){n.style.overflowX="hidden";var e=window.innerWidth;if(e>=768&&e<=991)"direita"===t?(u.forEach((function(t){t.style.display="block",c(t,"calc(33.333% - 20px)"),o.forEach((function(t){t.style.animation="slideEsquerda 0.260s ease forwards",t.addEventListener("animationend",r,{once:!0})}))})),l.forEach((function(t){a(t)}))):(u.forEach((function(t){a(t)})),l.forEach((function(t){t.style.display="block",c(t,"calc(33.333% - 20px)"),o.forEach((function(t){t.style.animation="slideDireita 0.260s ease forwards",t.addEventListener("animationend",r,{once:!0})}))})));else if(e>=600&&e<=767){document.querySelector("#seção-produtos > div:nth-child(1) > div:nth-child(4)").classList.add("direita"),document.querySelector("#seção-produtos > div:nth-child(2) > div:nth-child(4)").classList.add("direita"),document.querySelector("#seção-produtos > div:nth-child(1) > div:nth-child(5)").classList.remove("direita"),document.querySelector("#seção-produtos > div:nth-child(2) > div:nth-child(5)").classList.remove("direita");var s=i();l=s.plantasEsquerdas,u=s.plantasDireitas,"direita"===t?(l.forEach((function(t){a(t)})),u.forEach((function(t){t.style.display="block",c(t,"180px"),o.forEach((function(t){t.style.animation="slideEsquerda 0.260s ease forwards",t.addEventListener("animationend",r,{once:!0})}))}))):(u.forEach((function(t){a(t)})),l.forEach((function(t){t.style.display="block",c(t,"180px"),o.forEach((function(t){t.style.animation="slideDireita 0.260s ease forwards",t.addEventListener("animationend",r,{once:!0})}))})))}else"direita"===t?(u.forEach((function(t){t.style.display="block",o.forEach((function(t){t.style.animation="slideEsquerda 0.260s ease forwards",t.addEventListener("animationend",r,{once:!0})}))})),l.forEach((function(t){a(t)}))):(u.forEach((function(t){a(t)})),l.forEach((function(t){t.style.display="block",o.forEach((function(t){t.style.animation="slideDireita 0.260s ease forwards",t.addEventListener("animationend",r,{once:!0})}))})))}u.forEach((function(t){a(t)})),e.addEventListener("click",(function(){d("direita")})),t.addEventListener("click",(function(){d("esquerda")}))}();var u,d,f,h,p,y=function(){var t;function e(){t||((t=document.createElement("div")).classList.add("overlay"),t.style.position="fixed",t.style.top="0",t.style.left="0",t.style.width="100%",t.style.height="100%",t.style.backgroundColor="rgba(0, 0, 0, 0.5)",t.style.zIndex="99",document.body.appendChild(t))}function o(){t&&(document.body.removeChild(t),t=null)}return{escurecerTela:e,abreMensagem:function(t,o){var n=window.document.querySelectorAll(t),r=window.document.querySelector(o);n.forEach((function(t){t.addEventListener("click",(function(){r.style.display="flex",r.style.position="fixed",e()}))}))},fechaMensagem:function(){var t=window.document.querySelectorAll(".icone-fechar"),e=window.document.querySelectorAll(".container-mensagem");t.forEach((function(t){t.addEventListener("click",(function(){e.forEach((function(t){t.style.display="none"})),o()}))}))},removerEscurecimentoTela:o}}();y.abreMensagem(".coração",".container-mensagem:first-child"),y.abreMensagem(".visualização","body > aside:nth-child(8) > div"),y.fechaMensagem(),u=document.querySelectorAll(".navegação-produtos"),d=document.querySelectorAll(".container-exibição-produtos"),f="#47941a",h="rgb(36, 35, 35)",d.forEach((function(t,e){t.style.display=0===e?"flex":"none"})),u.length>0&&(u[0].classList.add("ativo"),u[0].style.color=f),u.forEach((function(t,e){t.addEventListener("mouseenter",(function(){t.classList.contains("ativo")||(t.style.color="#518432")})),t.addEventListener("mouseleave",(function(){t.classList.contains("ativo")||(t.style.color=h)})),t.addEventListener("click",(function(){u.forEach((function(t){t.classList.remove("ativo"),t.style.color=h})),t.classList.add("ativo"),t.style.color=f,d.forEach((function(t,o){t.style.display=o===e?"flex":"none"}))}))})),function(){var t=["Carlos Oliveira","João Santos","Maria Silva"],e=["Vivamus a finibus ac ipsum porttitor egestas ut sit amet nulla. Nunc facilisis ipsum ut nisl tempus, non feugiat justo semper. Vestibul ac justo justo. Proin pharetra, purus non vehicula sagittis, nunc varius porttitor ligula, in volutpat justo. ...","Integer a semper ac purus ultrices dictum ut sit amet massa. Donec elementum purus ut ante blandit, non posuere justo viverra. Aliquam ac justo justo. Nulla facilisi, velit non posuere cursus, nunc tellus ultrices sodales, in eleifend justo. ...","Quisque a tempus ac magna gravida pretium ut sit eros magna. Fusce suscipit magna ut elit gravida, non volutpat justo semper. Aliquam ac justo justo. Nam dictumst, lorem non convallis elementum, nunc tellus gravida lectus, in lobortis ipsum. ..."],o=["./src/assets/img/pessoas/pessoa3.jpg","./src/assets/img/pessoas/pessoa2.jpg","./src/assets/img/pessoas/pessoa1.jpg"],n=0;function r(r){n=r,document.getElementById("nome-recomendacao").innerText=t[r],document.getElementById("mensagem-recomendacao").innerText=e[r],document.getElementById("imagem-perfil").style.backgroundImage="url('".concat(o[r],"')"),document.querySelectorAll(".pontos").forEach((function(t,e){t.classList.toggle("ativo",e===n)}))}document.addEventListener("DOMContentLoaded",(function(){r(0),setInterval((function(){var e=(n+1)%t.length;document.getElementById("container-recomendações").classList.remove("show"),setTimeout((function(){r(e),document.getElementById("container-recomendações").classList.add("show")}),400)}),4e3)})),window.showRecommendation=r}(),document.addEventListener("DOMContentLoaded",(function(){if(window.innerWidth<=599){document.querySelectorAll(".container-exibição-produtos").forEach((function(t){t.style.display="flex",t.style.overflowX="scroll",t.style.scrollSnapType="x mandatory",t.querySelectorAll(".produtos-plantas").forEach((function(t){t.style.flex="0 0 auto",t.style.scrollSnapAlign="center"}));var e,o,n=!1;t.addEventListener("mousedown",(function(r){n=!0,t.classList.add("active"),e=r.pageX-t.offsetLeft,o=t.scrollLeft})),t.addEventListener("mouseleave",(function(){n=!1,t.classList.remove("active")})),t.addEventListener("mouseup",(function(){n=!1,t.classList.remove("active")})),t.addEventListener("mousemove",(function(r){if(n){r.preventDefault();var i=3*(r.pageX-t.offsetLeft-e);t.scrollLeft=o-i}})),t.addEventListener("touchstart",(function(r){n=!0,e=r.touches[0].pageX-t.offsetLeft,o=t.scrollLeft})),t.addEventListener("touchend",(function(){n=!1})),t.addEventListener("touchmove",(function(r){if(n){var i=3*(r.touches[0].pageX-t.offsetLeft-e);t.scrollLeft=o-i}}))}));var t=new IntersectionObserver((function(t,e){t.forEach((function(t){t.isIntersecting&&t.target.classList.add("visible")}))}),{root:null,rootMargin:"0px",threshold:.1});document.querySelectorAll("#container-categorias .produtos-plantas").forEach((function(e){t.observe(e)}))}})),p=new(function(){return t=function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.loginUrl=e},(e=[{key:"redirectToLogin",value:function(){window.location.href=this.loginUrl}}])&&r(t.prototype,e),Object.defineProperty(t,"prototype",{writable:!1}),t;var t,e}())("./src/assets/html/login.html"),document.querySelectorAll(".login").forEach((function(t){t.addEventListener("click",(function(){p.redirectToLogin()}))}))}},e={};function o(n){var r=e[n];if(void 0!==r)return r.exports;var i=e[n]={exports:{}};return t[n](i,i.exports,o),i.exports}o.d=(t,e)=>{for(var n in e)o.o(e,n)&&!o.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},o.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),o(537),o(420)})();
//# sourceMappingURL=main.bundle.js.map
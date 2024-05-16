/*! For license information please see bundle.js.LICENSE.txt */
(()=>{"use strict";var t={420:(t,e,r)=>{var n,o,i,a=r(537);function c(t){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},c(t)}function l(){l=function(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",s=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function d(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{d({},"")}catch(t){d=function(t,e,r){return t[e]=r}}function f(t,e,r,n){var i=e&&e.prototype instanceof g?e:g,a=Object.create(i.prototype),c=new I(n||[]);return o(a,"_invoke",{value:P(t,r,c)}),a}function h(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=f;var p="suspendedStart",y="suspendedYield",v="executing",m="completed",w={};function g(){}function b(){}function x(){}var E={};d(E,a,(function(){return this}));var S=Object.getPrototypeOf,L=S&&S(S(T([])));L&&L!==r&&n.call(L,a)&&(E=L);var q=x.prototype=g.prototype=Object.create(E);function k(t){["next","throw","return"].forEach((function(e){d(t,e,(function(t){return this._invoke(e,t)}))}))}function C(t,e){function r(o,i,a,l){var s=h(t[o],t,i);if("throw"!==s.type){var u=s.arg,d=u.value;return d&&"object"==c(d)&&n.call(d,"__await")?e.resolve(d.__await).then((function(t){r("next",t,a,l)}),(function(t){r("throw",t,a,l)})):e.resolve(d).then((function(t){u.value=t,a(u)}),(function(t){return r("throw",t,a,l)}))}l(s.arg)}var i;o(this,"_invoke",{value:function(t,n){function o(){return new e((function(e,o){r(t,n,e,o)}))}return i=i?i.then(o,o):o()}})}function P(e,r,n){var o=p;return function(i,a){if(o===v)throw Error("Generator is already running");if(o===m){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var l=A(c,n);if(l){if(l===w)continue;return l}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===p)throw o=m,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=v;var s=h(e,r,n);if("normal"===s.type){if(o=n.done?m:y,s.arg===w)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o=m,n.method="throw",n.arg=s.arg)}}}function A(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,A(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),w;var i=h(o,e.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,w;var a=i.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,w):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,w)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function I(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function T(e){if(e||""===e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}throw new TypeError(c(e)+" is not iterable")}return b.prototype=x,o(q,"constructor",{value:x,configurable:!0}),o(x,"constructor",{value:b,configurable:!0}),b.displayName=d(x,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===b||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,x):(t.__proto__=x,d(t,u,"GeneratorFunction")),t.prototype=Object.create(q),t},e.awrap=function(t){return{__await:t}},k(C.prototype),d(C.prototype,s,(function(){return this})),e.AsyncIterator=C,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new C(f(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},k(q),d(q,u,"Generator"),d(q,a,(function(){return this})),d(q,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=T,I.prototype={constructor:I,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(j),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return c.type="throw",c.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var l=n.call(a,"catchLoc"),s=n.call(a,"finallyLoc");if(l&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(l){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,w):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),w},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),j(r),w}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;j(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:T(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),w}},e}function s(t,e,r,n,o,i,a){try{var c=t[i](a),l=c.value}catch(t){return void r(t)}c.done?e(l):Promise.resolve(l).then(n,o)}function u(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function a(t){s(i,n,o,a,c,"next",t)}function c(t){s(i,n,o,a,c,"throw",t)}a(void 0)}))}}function d(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,f(n.key),n)}}function f(t){var e=function(t,e){if("object"!=c(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!=c(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==c(e)?e:e+""}function h(t,e){try{var r=t.querySelector(e);return r?r.textContent:void 0}catch(t){return}}function p(t){var e=t.querySelector("img");return e?e.src:void 0}n=window.document.querySelector("#abrir-carrinho"),o=window.document.querySelector("#carrinho"),i=window.document.querySelector("body"),n.addEventListener("click",(function(){o.style.display="block",i.style.overflowY="hidden",a.lU.escurecerTela()})),function(){var t=window.document.querySelector("#carrinho"),e=window.document.querySelector(".fa-xmark"),r=window.document.querySelector("body");e.addEventListener("click",(function(){r.style.overflow="auto",(0,a.lX)(t),a.lU.removerEscurecimentoTela()}))}();var y,v,m,w,g=function(){function t(e,r,n,o,i,a,c,l,s,u,d,f,h,p,y,v,m,w,g,b,x){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.containerProdutos=e,this.containerVasoCarrinho=r,this.imagemVasoCarrinho=n,this.containerTextoCarrinho=o,this.nomeLixo=i,this.paragrafoLixo=a,this.iconeLixo=c,this.containerPromoção=l,this.valorInicial=s,this.containerValorProduto=u,this.valorProduto=d,this.containerQuantidadesProdutos=f,this.adicionarQuantidades=h,this.diminuir=p,this.iconeMenos=y,this.divGenérica=v,this.quantidadeProduto=m,this.aumentar=w,this.iconeMais=g,this.valorQuantia=b,this.preçoItem=x}return e=t,r=[{key:"criaContainer",value:function(){var t=window.document.querySelector("#container-produtos");this.simplifica(this.containerProdutos,"container-produtos"),this.simplifica(this.containerVasoCarrinho,"container-vaso-carrinho"),this.simplifica(this.imagemVasoCarrinho,"imagem-vaso-carrinho"),this.simplifica(this.containerTextoCarrinho,"container-texto-carrinho"),this.simplifica(this.paragrafoLixo,"nome-produto"),this.simplifica(this.iconeLixo,["fa-regular","fa-trash-can","clicavel","icone-lixeira"]),this.simplifica(this.containerPromoção,"container-promoção-carrinho"),this.simplifica(this.valorInicial,"valor-incial"),this.simplifica(this.containerValorProduto,"container-valor-produto"),this.simplifica(this.valorProduto,"valor-produto"),this.simplifica(this.containerValorProduto,"container-valor-produto"),this.simplifica(this.valorProduto,"valor-produto"),this.simplifica(this.containerQuantidadesProdutos,"container-quantidade-produto"),this.simplifica(this.adicionarQuantidades,"adiconar-quantidades"),this.simplifica(this.diminuir,"diminuir"),this.simplifica(this.iconeMenos,["fa-solid","fa-minus","clicavel"]),this.simplifica(this.quantidadeProduto,"quantidade-produto"),this.simplifica(this.aumentar,"aumentar"),this.simplifica(this.iconeMais,["fa-solid","fa-plus","clicavel"]),this.simplifica(this.valorQuantia,"valor-quantia");var e=t.appendChild(this.containerProdutos),r=e.appendChild(this.containerVasoCarrinho).appendChild(this.imagemVasoCarrinho),n=e.appendChild(this.containerTextoCarrinho),o=n.appendChild(this.nomeLixo),i=o.appendChild(this.paragrafoLixo);o.appendChild(this.iconeLixo);var a=n.appendChild(this.containerPromoção).appendChild(this.valorInicial),c=n.appendChild(this.containerValorProduto).appendChild(this.valorProduto),l=n.appendChild(this.containerQuantidadesProdutos),s=l.appendChild(this.adicionarQuantidades),u=s.appendChild(this.diminuir);u.appendChild(this.iconeMenos);var d=s.appendChild(this.divGenérica).appendChild(this.quantidadeProduto),f=this.adicionarQuantidades.appendChild(this.aumentar);return f.appendChild(this.iconeMais),[r,i,a,c,u,d,f,l.appendChild(this.valorQuantia)]}},{key:"simplifica",value:function(t,e){Array.isArray(e)?e.forEach((function(e){t.classList.add(e)})):t.classList.add(e)}},{key:"adicionaImagem",value:(o=u(l().mark((function t(e){return l().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:try{e&&(this.criaContainer()[0].style.backgroundImage='url("'.concat(e,'")'))}catch(t){console.error(t)}case 1:case"end":return t.stop()}}),t,this)}))),function(t){return o.apply(this,arguments)})},{key:"adicionaTexto",value:(n=u(l().mark((function t(e,r,n){return l().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:try{void 0!==e&&(this.criaContainer()[r].textContent=n)}catch(t){console.error("Erro em adicionaNome:",t)}case 1:case"end":return t.stop()}}),t,this)}))),function(t,e,r){return n.apply(this,arguments)})},{key:"verificaQuantidade",value:function(){var e=this,r=this.iconeMenos,n=this.quantidadeProduto,o=this.iconeMais,i=1,a=this,c=function(){var r,n=e.valorQuantia,o=(r=a.preçoItem.slice(3,5),Number(r)*i);n.textContent="R$ ".concat(o,",00"),t.subtotal-=e.subtotalItem||0,e.subtotalItem=o,t.subtotal+=o;var c=window.document.querySelector(".preço-final"),l=window.document.querySelector("#preço-final-final");c.textContent="R$ ".concat(t.subtotal,",00"),l.textContent="R$ ".concat(t.subtotal,",00")},l=function(t,e){t.addEventListener("click",(function(){"+"===e?i++:"-"===e&&i>1&&i--,n.textContent=i,c()}))};n.textContent=i,l(o,"+"),l(r,"-"),c()}},{key:"removeItens",value:function(){var e=window.document.querySelectorAll(".icone-lixeira"),r=this.preçoItem.slice(3,5),n=t.subtotal-Number(r),o=window.document.querySelector(".preço-final"),i=window.document.querySelector("#preço-final-final");e.forEach((function(t){t.addEventListener("click",(function(){var e=t.closest(".container-produtos");e&&(e.remove(),o.textContent="R$ ".concat(n,",00"),i.textContent="R$ ".concat(n,",00"))}))}))}}],r&&d(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),e;var e,r,n,o}();function b(t){return window.document.createElement(t)}function x(){return E.apply(this,arguments)}function E(){return E=u(l().mark((function t(){var e,r;return l().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,new Promise((function(t,e){var r=document.querySelectorAll(".sexta-carrinho"),n=document.querySelectorAll(".produtos-plantas"),o=document.querySelectorAll(".fa-basket-shopping"),i=(0,a.uQ)(o,0);r.forEach((function(o,a){o.classList.contains("clicado")||o.addEventListener("click",(function(){o.classList.add("clicado"),o.style.backgroundColor="#47941a",i[a].style.color="white";var c=n[a].querySelector("h3").textContent;function l(t){return n[a].children[t]}Array.from(document.querySelectorAll(".produtos-plantas")).filter((function(t){return t.querySelector("h3").textContent===c&&t!==n[a]})).forEach((function(t){var e=t.querySelector(".fa-basket-shopping"),n=t.querySelector(".sexta-carrinho"),o=Array.from(r).indexOf(e.parentElement);if(-1!==o){var a=i[o];e.style.color="white",a.style.color="white",n.style.backgroundColor="#47941a",n.classList.add("clicado")}}));var s=h(l(2),"h3"),u=h(l(2),"p"),d=h(l(3),"del"),f=p(l(0));void 0!==d&&(s=h(l(3),"h3"),u=h(l(3),"p"),f=p(l(1))),void 0!==s&&void 0!==u&&void 0!==f?t([s,u,d,f]):e(new Error("Algumas informações necessárias estão faltando."))}))}))}));case 2:return e=t.sent,r=new g(b("div"),b("div"),b("div"),b("div"),b("div"),b("p"),b("i"),b("div"),b("del"),b("div"),b("p"),b("div"),b("div"),b("div"),b("i"),b("div"),b("p"),b("div"),b("i"),b("p"),e[1]),t.next=6,r.adicionaImagem(e[3]);case 6:return t.next=8,r.adicionaTexto(e[0],1,e[0]);case 8:return t.next=10,r.adicionaTexto(e[2],2,"De: ".concat(e[2]));case 10:return t.next=12,r.adicionaTexto(e[1],3,"Por: ".concat(e[1]));case 12:r.verificaQuantidade(e[0]),r.removeItens();case 14:case"end":return t.stop()}}),t)}))),E.apply(this,arguments)}y=g,(v=f(v="subtotal"))in y?Object.defineProperty(y,v,{value:0,enumerable:!0,configurable:!0,writable:!0}):y[v]=0,x(),m=window.document.querySelectorAll(".sexta-carrinho"),w=window.document.querySelector("#container-produtos"),m.forEach((function(t){t.addEventListener("click",(function(){x(),w.children.length>=4&&(w.style.overflowY="auto")}),{once:!0})})),function(){var t=window.document.querySelectorAll(".sexta-carrinho"),e=window.document.querySelector("#sem-conteudo"),r=window.document.querySelector("#status-compras");(0,a.lX)(r),t.forEach((function(t){t.addEventListener("click",(function(){(0,a.lX)(e),r.style.display="block"}))}))}()},537:(t,e,r)=>{var n,o,i,a,c,l,s;function u(t){t.style.display="none"}function d(t,e){var r=Array.from(t);return r.splice(e,1),r}r.d(e,{lU:()=>f,lX:()=>u,uQ:()=>d}),n=document.querySelectorAll(".container-abertura"),document.querySelectorAll(".abertura").forEach((function(t,e){t.addEventListener("click",(function(){var t=n[e].style.display;n.forEach((function(t){u(t)})),n[e].style.display="flex"===t?"none":"flex"}))})),o=document.querySelector("#titulo-carrossel"),new IntersectionObserver((function(t){t.forEach((function(t){t.isIntersecting?o.classList.add("slideAnimation"):o.classList.remove("slideAnimation")}))})).observe(o),function(){var t=window.document.querySelector("#populares"),e=window.document.querySelectorAll(".container-populares"),r=window.document.querySelector("#novidades"),n=window.document.querySelector("#container-novidades");u(n);var o=window.document.querySelector("#ofertas"),i=window.document.querySelector("#container-ofertas");u(i);var a=window.document.querySelector(".fa-angle-left"),c=window.document.querySelector(".fa-angle-right");t.addEventListener("click",(function(){e.forEach((function(t){t.style.display="flex"})),t.style.color="#518432",r.style.color="black",o.style.color="black",u(n),u(i),c.style.display="flex",a.style.display="flex"})),r.addEventListener("click",(function(){e.forEach((function(t){t.style.display="none"})),t.style.color="black",r.style.color="#518432",o.style.color="black",n.style.display="flex",u(i),u(c),u(a)})),o.addEventListener("click",(function(){e.forEach((function(t){t.style.display="none"})),t.style.color="black",r.style.color="black",o.style.color="#518432",u(n),i.style.display="flex",u(c),u(a)}))}(),i=window.document.querySelectorAll(".esquerda"),a=window.document.querySelector(".fa-angle-left"),c=window.document.querySelectorAll(".direita"),l=window.document.querySelector(".fa-angle-right"),s=window.document.querySelectorAll(".produtos-plantas"),c.forEach((function(t){u(t)})),l.addEventListener("click",(function(){c.forEach((function(t){t.style.display="block",s.forEach((function(t){t.style.animation="slideEsquerda 0.3s ease forwards"}))})),i.forEach((function(t){u(t)}))})),a.addEventListener("click",(function(){c.forEach((function(t){u(t)})),i.forEach((function(t){t.style.display="block",s.forEach((function(t){t.style.animation="slideDireita 0.3s ease forwards"}))}))}));var f=function(){var t;function e(){(t=document.createElement("div")).classList.add("overlay"),t.style.position="fixed",t.style.top="0",t.style.left="0",t.style.width="100%",t.style.height="100%",t.style.backgroundColor="rgba(0, 0, 0, 0.5)",t.style.zIndex="99",document.body.appendChild(t)}function r(){t.remove()}return{escurecerTela:e,abreMensagem:function(t,r){var n=window.document.querySelectorAll(t),o=window.document.querySelector(r);n.forEach((function(t){t.addEventListener("click",(function(){o.style.display="flex",o.style.position="fixed",e()}))}))},fechaMensagem:function(){var t=window.document.querySelectorAll(".icone-fechar"),e=window.document.querySelectorAll(".container-mensagem");t.forEach((function(t){t.addEventListener("click",(function(){e.forEach((function(t){t.style.display="none"})),r()}))}))},removerEscurecimentoTela:r}}();f.abreMensagem(".coração",".container-mensagem:first-child"),f.abreMensagem(".sexta-carrinho","body > aside:nth-child(7) > div"),f.fechaMensagem()}},e={};function r(n){var o=e[n];if(void 0!==o)return o.exports;var i=e[n]={exports:{}};return t[n](i,i.exports,r),i.exports}r.d=(t,e)=>{for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r(537),r(420)})();
//# sourceMappingURL=bundle.js.map
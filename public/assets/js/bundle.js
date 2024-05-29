/*! For license information please see bundle.js.LICENSE.txt */
(()=>{"use strict";var t={420:(t,e,n)=>{var o,r,i,a=n(537);function c(t){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},c(t)}function s(){s=function(){return e};var t,e={},n=Object.prototype,o=n.hasOwnProperty,r=Object.defineProperty||function(t,e,n){t[e]=n.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",l=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function d(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{d({},"")}catch(t){d=function(t,e,n){return t[e]=n}}function f(t,e,n,o){var i=e&&e.prototype instanceof g?e:g,a=Object.create(i.prototype),c=new T(o||[]);return r(a,"_invoke",{value:P(t,n,c)}),a}function h(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}e.wrap=f;var p="suspendedStart",m="suspendedYield",y="executing",v="completed",w={};function g(){}function b(){}function x(){}var E={};d(E,a,(function(){return this}));var L=Object.getPrototypeOf,S=L&&L(L(O([])));S&&S!==n&&o.call(S,a)&&(E=S);var q=x.prototype=g.prototype=Object.create(E);function C(t){["next","throw","return"].forEach((function(e){d(t,e,(function(t){return this._invoke(e,t)}))}))}function k(t,e){function n(r,i,a,s){var l=h(t[r],t,i);if("throw"!==l.type){var u=l.arg,d=u.value;return d&&"object"==c(d)&&o.call(d,"__await")?e.resolve(d.__await).then((function(t){n("next",t,a,s)}),(function(t){n("throw",t,a,s)})):e.resolve(d).then((function(t){u.value=t,a(u)}),(function(t){return n("throw",t,a,s)}))}s(l.arg)}var i;r(this,"_invoke",{value:function(t,o){function r(){return new e((function(e,r){n(t,o,e,r)}))}return i=i?i.then(r,r):r()}})}function P(e,n,o){var r=p;return function(i,a){if(r===y)throw Error("Generator is already running");if(r===v){if("throw"===i)throw a;return{value:t,done:!0}}for(o.method=i,o.arg=a;;){var c=o.delegate;if(c){var s=A(c,o);if(s){if(s===w)continue;return s}}if("next"===o.method)o.sent=o._sent=o.arg;else if("throw"===o.method){if(r===p)throw r=v,o.arg;o.dispatchException(o.arg)}else"return"===o.method&&o.abrupt("return",o.arg);r=y;var l=h(e,n,o);if("normal"===l.type){if(r=o.done?v:m,l.arg===w)continue;return{value:l.arg,done:o.done}}"throw"===l.type&&(r=v,o.method="throw",o.arg=l.arg)}}}function A(e,n){var o=n.method,r=e.iterator[o];if(r===t)return n.delegate=null,"throw"===o&&e.iterator.return&&(n.method="return",n.arg=t,A(e,n),"throw"===n.method)||"return"!==o&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+o+"' method")),w;var i=h(r,e.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,w;var a=i.arg;return a?a.done?(n[e.resultName]=a.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,w):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,w)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function I(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function T(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function O(e){if(e||""===e){var n=e[a];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,i=function n(){for(;++r<e.length;)if(o.call(e,r))return n.value=e[r],n.done=!1,n;return n.value=t,n.done=!0,n};return i.next=i}}throw new TypeError(c(e)+" is not iterable")}return b.prototype=x,r(q,"constructor",{value:x,configurable:!0}),r(x,"constructor",{value:b,configurable:!0}),b.displayName=d(x,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===b||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,x):(t.__proto__=x,d(t,u,"GeneratorFunction")),t.prototype=Object.create(q),t},e.awrap=function(t){return{__await:t}},C(k.prototype),d(k.prototype,l,(function(){return this})),e.AsyncIterator=k,e.async=function(t,n,o,r,i){void 0===i&&(i=Promise);var a=new k(f(t,n,o,r),i);return e.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},C(q),d(q,u,"Generator"),d(q,a,(function(){return this})),d(q,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),n=[];for(var o in e)n.push(o);return n.reverse(),function t(){for(;n.length;){var o=n.pop();if(o in e)return t.value=o,t.done=!1,t}return t.done=!0,t}},e.values=O,T.prototype={constructor:T,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(I),!e)for(var n in this)"t"===n.charAt(0)&&o.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function r(o,r){return c.type="throw",c.arg=e,n.next=o,r&&(n.method="next",n.arg=t),!!r}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var s=o.call(a,"catchLoc"),l=o.call(a,"finallyLoc");if(s&&l){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!l)throw Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&o.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var i=r;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,w):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),w},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),I(n),w}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var o=n.completion;if("throw"===o.type){var r=o.arg;I(n)}return r}}throw Error("illegal catch attempt")},delegateYield:function(e,n,o){return this.delegate={iterator:O(e),resultName:n,nextLoc:o},"next"===this.method&&(this.arg=t),w}},e}function l(t,e,n,o,r,i,a){try{var c=t[i](a),s=c.value}catch(t){return void n(t)}c.done?e(s):Promise.resolve(s).then(o,r)}function u(t){return function(){var e=this,n=arguments;return new Promise((function(o,r){var i=t.apply(e,n);function a(t){l(i,o,r,a,c,"next",t)}function c(t){l(i,o,r,a,c,"throw",t)}a(void 0)}))}}function d(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,f(o.key),o)}}function f(t){var e=function(t,e){if("object"!=c(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,"string");if("object"!=c(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==c(e)?e:e+""}function h(t,e){try{var n=t.querySelector(e);return n?n.textContent:void 0}catch(t){return}}function p(t){var e=t.querySelector("img");return e?e.src:void 0}o=window.document.querySelector("#abrir-carrinho"),r=window.document.querySelector("#carrinho"),i=window.document.querySelector("body"),o.addEventListener("click",(function(){i.style.overflowX="hidden",r.style.display="block",i.style.overflowY="hidden",a.lU.escurecerTela(),r.addEventListener("animationend",(function(){i.style.overflowX=""}),{once:!0})})),function(){var t=window.document.querySelector("#carrinho"),e=window.document.querySelector(".fa-xmark"),n=window.document.querySelector("body");e.addEventListener("click",(function(){n.style.overflow="auto",(0,a.lX)(t),a.lU.removerEscurecimentoTela()}))}();var m,y,v,w,g=function(){function t(e,n,o,r,i,a,c,s,l,u,d,f,h,p,m,y,v,w,g,b,x){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.containerProdutos=e,this.containerVasoCarrinho=n,this.imagemVasoCarrinho=o,this.containerTextoCarrinho=r,this.nomeLixo=i,this.paragrafoLixo=a,this.iconeLixo=c,this.containerPromoção=s,this.valorInicial=l,this.containerValorProduto=u,this.valorProduto=d,this.containerQuantidadesProdutos=f,this.adicionarQuantidades=h,this.diminuir=p,this.iconeMenos=m,this.divGenérica=y,this.quantidadeProduto=v,this.aumentar=w,this.iconeMais=g,this.valorQuantia=b,this.preçoItem=x}return e=t,n=[{key:"criaContainer",value:function(){var t=window.document.querySelector("#container-produtos");this.simplifica(this.containerProdutos,"container-produtos"),this.simplifica(this.containerVasoCarrinho,"container-vaso-carrinho"),this.simplifica(this.imagemVasoCarrinho,"imagem-vaso-carrinho"),this.simplifica(this.containerTextoCarrinho,"container-texto-carrinho"),this.simplifica(this.paragrafoLixo,"nome-produto"),this.simplifica(this.iconeLixo,["fa-regular","fa-trash-can","clicavel","icone-lixeira"]),this.simplifica(this.containerPromoção,"container-promoção-carrinho"),this.simplifica(this.valorInicial,"valor-incial"),this.simplifica(this.containerValorProduto,"container-valor-produto"),this.simplifica(this.valorProduto,"valor-produto"),this.simplifica(this.containerValorProduto,"container-valor-produto"),this.simplifica(this.valorProduto,"valor-produto"),this.simplifica(this.containerQuantidadesProdutos,"container-quantidade-produto"),this.simplifica(this.adicionarQuantidades,"adiconar-quantidades"),this.simplifica(this.diminuir,"diminuir"),this.simplifica(this.iconeMenos,["fa-solid","fa-minus","clicavel"]),this.simplifica(this.quantidadeProduto,"quantidade-produto"),this.simplifica(this.aumentar,"aumentar"),this.simplifica(this.iconeMais,["fa-solid","fa-plus","clicavel"]),this.simplifica(this.valorQuantia,"valor-quantia");var e=t.appendChild(this.containerProdutos),n=e.appendChild(this.containerVasoCarrinho).appendChild(this.imagemVasoCarrinho),o=e.appendChild(this.containerTextoCarrinho),r=o.appendChild(this.nomeLixo),i=r.appendChild(this.paragrafoLixo);r.appendChild(this.iconeLixo);var a=o.appendChild(this.containerPromoção).appendChild(this.valorInicial),c=o.appendChild(this.containerValorProduto).appendChild(this.valorProduto),s=o.appendChild(this.containerQuantidadesProdutos),l=s.appendChild(this.adicionarQuantidades),u=l.appendChild(this.diminuir);u.appendChild(this.iconeMenos);var d=l.appendChild(this.divGenérica).appendChild(this.quantidadeProduto),f=this.adicionarQuantidades.appendChild(this.aumentar);return f.appendChild(this.iconeMais),[n,i,a,c,u,d,f,s.appendChild(this.valorQuantia)]}},{key:"simplifica",value:function(t,e){Array.isArray(e)?e.forEach((function(e){t.classList.add(e)})):t.classList.add(e)}},{key:"adicionaImagem",value:(r=u(s().mark((function t(e){return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:try{e&&(this.criaContainer()[0].style.backgroundImage='url("'.concat(e,'")'))}catch(t){console.error(t)}case 1:case"end":return t.stop()}}),t,this)}))),function(t){return r.apply(this,arguments)})},{key:"adicionaTexto",value:(o=u(s().mark((function t(e,n,o){return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:try{void 0!==e&&(this.criaContainer()[n].textContent=o)}catch(t){console.error("Erro em adicionaNome:",t)}case 1:case"end":return t.stop()}}),t,this)}))),function(t,e,n){return o.apply(this,arguments)})},{key:"verificaQuantidade",value:function(){var e,n,o,r=this,i=this.iconeMenos,a=this.quantidadeProduto,c=this.iconeMais,s=1,l=this,u=function(){var t=l.preçoItem.slice(3,5);return Number(t)*s},d=function(){var e=r.valorQuantia,n=u();e.textContent="R$ ".concat(n,",00"),t.subtotal-=r.subtotalItem||0,r.subtotalItem=n,t.subtotal+=n;var o=window.document.querySelector(".preço-final"),i=window.document.querySelector("#preço-final-final");o.textContent="R$ ".concat(t.subtotal,",00"),i.textContent="R$ ".concat(t.subtotal,",00")},f=function(t,e){t.addEventListener("click",(function(){"+"===e?s++:"-"===e&&s>1&&s--,a.textContent=s,d()}))};a.textContent=s,f(c,"+"),f(i,"-"),d(),e=window.document.querySelectorAll(".icone-lixeira"),n=window.document.querySelector(".preço-final"),o=window.document.querySelector("#preço-final-final"),e.forEach((function(e,r){e.dataset.listenerAdded||(e.addEventListener("click",(function(){var r=e.closest(".container-produtos");r&&(t.subtotal-=u(),r.remove(),S(),n.textContent="R$ ".concat(t.subtotal,",00"),o.textContent="R$ ".concat(t.subtotal,",00"))})),e.dataset.listenerAdded="true")}))}},{key:"removerTodosItens",value:function(){var e=window.document.querySelector("#excluir-itens"),n=window.document.querySelector("#lixeira-excluir-itens");function o(e){e.addEventListener("click",(function(){var e=window.document.querySelector("#container-produtos").children;Array.from(e).forEach((function(e){e.remove(),S(),t.subtotal=0}))}))}o(e),o(n)}}],n&&d(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),e;var e,n,o,r}();function b(t){return window.document.createElement(t)}function x(){return E.apply(this,arguments)}function E(){return(E=u(s().mark((function t(){var e,n;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,new Promise((function(t,e){var n=document.querySelectorAll(".sexta-carrinho"),o=document.querySelectorAll(".produtos-plantas"),r=document.querySelectorAll(".fa-basket-shopping"),i=(0,a.uQ)(r,0);n.forEach((function(r,c){var s=function(){if(!r.classList.contains("clicado")){r.classList.add("clicado"),r.style.backgroundColor="#47941a",m=r,"rgb(71, 148, 26)"===(v=window.getComputedStyle(m).backgroundColor)&&((y=window.document.querySelector("body > aside:nth-child(7) > div")).style.display="flex",y.style.position="fixed",a.lU.escurecerTela()),console.log(v),i[c].style.color="white";var s=o[c].querySelector("h3").textContent;Array.from(document.querySelectorAll(".produtos-plantas")).filter((function(t){return t.querySelector("h3").textContent===s&&t!==o[c]})).forEach((function(t){var e=t.querySelector(".fa-basket-shopping"),o=t.querySelector(".sexta-carrinho"),r=Array.from(n).indexOf(e.parentElement);if(-1!==r){var a=i[r];e.style.color="white",a.style.color="white",o.style.backgroundColor="#47941a",o.classList.add("clicado")}}));var l=h(w(2),"h3"),u=h(w(2),"p"),d=h(w(3),"del"),f=p(w(0));void 0!==d&&(l=h(w(3),"h3"),u=h(w(3),"p"),f=p(w(1))),void 0!==l&&void 0!==u&&void 0!==f?t([l,u,d,f]):e(new Error("Algumas informações necessárias estão faltando"))}var m,y,v;function w(t){return o[c].children[t]}};r.removeEventListener("click",r._handleCarrinhoClick),r.addEventListener("click",s),r._handleCarrinhoClick=s}))}));case 2:return e=t.sent,n=new g(b("div"),b("div"),b("div"),b("div"),b("div"),b("p"),b("i"),b("div"),b("del"),b("div"),b("p"),b("div"),b("div"),b("div"),b("i"),b("div"),b("p"),b("div"),b("i"),b("p"),e[1]),t.next=6,n.adicionaImagem(e[3]);case 6:return t.next=8,n.adicionaTexto(e[0],1,e[0]);case 8:return t.next=10,n.adicionaTexto(e[2],2,"De: ".concat(e[2]));case 10:return t.next=12,n.adicionaTexto(e[1],3,"Por: ".concat(e[1]));case 12:n.verificaQuantidade(e[0]),S(),n.removerTodosItens();case 15:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function L(){if(window.innerWidth>=992&&window.innerWidth<=1999&&window.innerHeight<=672)return window.document.querySelector("#carrinho").style.overflowY="auto",!0}function S(){var t=window.document.querySelector("#sem-conteudo"),e=window.document.querySelector("#status-compras"),n=window.document.querySelector("#container-produtos");(0,a.lX)(e),n.children.length>=1?((0,a.lX)(t),e.style.display="block"):((0,a.lX)(e),t.style.display="flex")}m=g,(y=f(y="subtotal"))in m?Object.defineProperty(m,y,{value:0,enumerable:!0,configurable:!0,writable:!0}):m[y]=0,x(),v=window.document.querySelectorAll(".sexta-carrinho"),w=window.document.querySelector("#container-produtos"),v.forEach((function(t){t.addEventListener("click",(function(){x(),L(),w.children.length>=4&&!L()&&(w.style.overflowY="auto")}),{once:!0})}))},537:(t,e,n)=>{var o,r,i,a,c,s,l;function u(t){t.style.display="none"}function d(t,e){var n=Array.from(t);return n.splice(e,1),n}n.d(e,{lU:()=>y,lX:()=>u,uQ:()=>d}),o=document.querySelectorAll(".container-abertura"),document.querySelectorAll(".abertura").forEach((function(t,e){t.addEventListener("click",(function(){var t=o[e].style.display;o.forEach((function(t){u(t)})),o[e].style.display="flex"===t?"none":"flex"}))})),r=document.querySelector("#titulo-carrossel"),new IntersectionObserver((function(t){t.forEach((function(t){t.isIntersecting?r.classList.add("slideAnimation"):r.classList.remove("slideAnimation")}))})).observe(r),function(){var t=window.document.querySelector("#populares"),e=window.document.querySelectorAll(".container-populares"),n=window.document.querySelector("#novidades"),o=window.document.querySelector("#container-novidades");u(o);var r=window.document.querySelector("#ofertas"),i=window.document.querySelector("#container-ofertas");u(i);var a=window.document.querySelector(".fa-angle-left"),c=window.document.querySelector(".fa-angle-right");t.addEventListener("click",(function(){e.forEach((function(t){t.style.display="flex"})),t.style.color="#518432",n.style.color="black",r.style.color="black",u(o),u(i),c.style.display="flex",a.style.display="flex"})),n.addEventListener("click",(function(){e.forEach((function(t){t.style.display="none"})),t.style.color="black",n.style.color="#518432",r.style.color="black",o.style.display="flex",u(i),u(c),u(a)})),r.addEventListener("click",(function(){e.forEach((function(t){t.style.display="none"})),t.style.color="black",n.style.color="black",r.style.color="#518432",u(o),i.style.display="flex",u(c),u(a)}))}(),i=window.document.querySelectorAll(".esquerda"),a=window.document.querySelector(".fa-angle-left"),c=window.document.querySelectorAll(".direita"),s=window.document.querySelector(".fa-angle-right"),l=window.document.querySelectorAll("#seção-produtos .produtos-plantas"),c.forEach((function(t){u(t)})),s.addEventListener("click",(function(){c.forEach((function(t){t.style.display="block",l.forEach((function(t){t.style.animation="slideEsquerda 0.260s ease forwards"}))})),i.forEach((function(t){u(t)}))})),a.addEventListener("click",(function(){c.forEach((function(t){u(t)})),i.forEach((function(t){t.style.display="block",l.forEach((function(t){t.style.animation="slideDireita 0.260s ease forwards"}))}))}));var f,h,p,m,y=function(){var t;function e(){t||((t=document.createElement("div")).classList.add("overlay"),t.style.position="fixed",t.style.top="0",t.style.left="0",t.style.width="100%",t.style.height="100%",t.style.backgroundColor="rgba(0, 0, 0, 0.5)",t.style.zIndex="99",document.body.appendChild(t))}function n(){t&&(document.body.removeChild(t),t=null)}return{escurecerTela:e,abreMensagem:function(t,n){var o=window.document.querySelectorAll(t),r=window.document.querySelector(n);o.forEach((function(t){t.addEventListener("click",(function(){r.style.display="flex",r.style.position="fixed",e()}))}))},fechaMensagem:function(){var t=window.document.querySelectorAll(".icone-fechar"),e=window.document.querySelectorAll(".container-mensagem");t.forEach((function(t){t.addEventListener("click",(function(){e.forEach((function(t){t.style.display="none"})),n()}))}))},removerEscurecimentoTela:n}}();y.abreMensagem(".coração",".container-mensagem:first-child"),y.fechaMensagem(),f=document.querySelectorAll(".navegação-produtos"),h=document.querySelectorAll(".container-exibição-produtos"),p="#47941a",m="rgb(36, 35, 35)",h.forEach((function(t,e){t.style.display=0===e?"flex":"none"})),f.length>0&&(f[0].classList.add("ativo"),f[0].style.color=p),f.forEach((function(t,e){t.addEventListener("mouseenter",(function(){t.classList.contains("ativo")||(t.style.color="#518432")})),t.addEventListener("mouseleave",(function(){t.classList.contains("ativo")||(t.style.color=m)})),t.addEventListener("click",(function(){f.forEach((function(t){t.classList.remove("ativo"),t.style.color=m})),t.classList.add("ativo"),t.style.color=p,h.forEach((function(t,n){t.style.display=n===e?"flex":"none"}))}))})),function(){var t=["Carlos Oliveira","João Santos","Maria Silva"],e=["Curabitur vitae libero ac mauris facilisis commodo. Quisque in velit nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Fusce euismod, urna id facilisis fringilla, quam nisl bibendum mauris, sed ullamcorper tortor justo sit amet leo. ...","Aenean a tortor ut magna pharetra vehicula vel sit amet magna. Donec tincidunt lorem ut elit vehicula, non scelerisque justo cursus. Maecenas at justo justo. Nam sagittis, quam non sollicitudin consectetur, nunc metus vehicula lectus, in fermentum enim nunc nec metus. ...","Integer dignissim sapien et est volutpat, a consequat leo egestas. Sed nec orci ac libero ullamcorper mollis nec ut dui. Ut cursus sem vitae dolor auctor, a facilisis turpis placerat. Vivamus ut nibh eget quam blandit congue non eget felis. Donec sollicitudin justo id libero. ..."],n=["./src/assets/img/pessoas/pessoa3.jpg","./src/assets/img/pessoas/pessoa2.jpg","./src/assets/img/pessoas/pessoa1.jpg"],o=0;function r(r){o=r,document.getElementById("nome-recomendacao").innerText=t[r],document.getElementById("mensagem-recomendacao").innerText=e[r],document.getElementById("imagem-perfil").style.backgroundImage="url('".concat(n[r],"')"),document.querySelectorAll(".pontos").forEach((function(t,e){t.classList.toggle("ativo",e===o)}))}document.addEventListener("DOMContentLoaded",(function(){r(0),setInterval((function(){var e=(o+1)%t.length;document.getElementById("container-recomendações").classList.remove("show"),setTimeout((function(){r(e),document.getElementById("container-recomendações").classList.add("show")}),400)}),4e3)})),window.showRecommendation=r}()}},e={};function n(o){var r=e[o];if(void 0!==r)return r.exports;var i=e[o]={exports:{}};return t[o](i,i.exports,n),i.exports}n.d=(t,e)=>{for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n(537),n(420)})();
//# sourceMappingURL=bundle.js.map
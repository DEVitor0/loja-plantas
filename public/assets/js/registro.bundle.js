(()=>{function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(e,t){for(var a=0;a<t.length;a++){var i=t[a];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,r(i.key),i)}}function r(t){var r=function(t,r){if("object"!=e(t)||!t)return t;var a=t[Symbol.toPrimitive];if(void 0!==a){var i=a.call(t,"string");if("object"!=e(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==e(r)?r:r+""}var a=function(){return e=function e(t,r,a){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.formulario=t,this.emailInserido=r,this.senhaInserida=a,this.emailRegistrado=JSON.parse(localStorage.getItem("emailsRegistrados"))||[],this.senhasRegistradas=JSON.parse(localStorage.getItem("senhasRegistradas"))||[]},(r=[{key:"escutaFormulario",value:function(){var e=this,t=document.querySelector(this.formulario);t&&t.addEventListener("submit",(function(t){t.preventDefault(),e.verificaDados()}))}},{key:"mensagemErro",value:function(e){var t=document.querySelector(this.formulario);if(t){var r=t.querySelector(".mensagem-erro");r&&r.remove();var a=document.createElement("div");a.classList.add("mensagem-erro");var i=document.createElement("p");a.appendChild(i),t.appendChild(a),i.textContent=e}}},{key:"verificaDados",value:function(){var e=document.querySelector(this.emailInserido),t=document.querySelector(this.senhaInserida);if(e.value&&t.value){if(-1===e.value.indexOf("@")||-1===e.value.indexOf(".")?this.mensagemErro("Endereço de email incorreto"):window.location.href.includes("criar.html")&&(this.emailRegistrado.push(e.value),this.senhasRegistradas.push(t.value),localStorage.setItem("emailsRegistrados",JSON.stringify(this.emailRegistrado)),localStorage.setItem("senhasRegistradas",JSON.stringify(this.senhasRegistradas)),window.location.href="http://127.0.0.1:5500/index.html"),window.location.href.includes("login.html")){var r=this.emailRegistrado.indexOf(e.value);-1===r||this.senhasRegistradas[r]!==t.value?this.mensagemErro("E-mail ou senha incorretos. Tente novamente"):window.location.href="http://127.0.0.1:5500/index.html"}}else this.mensagemErro("Preencha todos os campos para enviar")}}])&&t(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),e;var e,r}();document.addEventListener("DOMContentLoaded",(function(){window.location.href.includes("criar.html")?new a("#formR","#emailR","#senhaR").escutaFormulario():new a("#formL","#emailL","#senhaL").escutaFormulario()}))})();
//# sourceMappingURL=registro.bundle.js.map
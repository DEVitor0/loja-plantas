(()=>{function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,r(n.key),n)}}function r(t){var r=function(t,r){if("object"!=e(t)||!t)return t;var o=t[Symbol.toPrimitive];if(void 0!==o){var n=o.call(t,"string");if("object"!=e(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==e(r)?r:r+""}new(function(){return e=function e(t,r,o){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:[];!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.formulario=t,this.emailInserido=r,this.emailRegistrado=i,this.senhaInserida=o,this.senhasRegistradas=n},(r=[{key:"escutaFormulario",value:function(){var e=this,t=window.document.querySelector(this.formulario);t&&t.addEventListener("submit",(function(t){t.preventDefault(),e.verificaEmail()}))}},{key:"mensagemErro",value:function(e){var t=window.document.querySelector(this.formulario);if(t){var r=t.querySelector(".mensagem-erro");r&&r.remove();var o=document.createElement("div");o.classList.add("mensagem-erro");var n=document.createElement("p");o.appendChild(n),t.appendChild(o),n.textContent=e}}},{key:"verificaEmail",value:function(){var e=window.document.querySelector(this.emailInserido),t=window.document.querySelector(this.senhaInserida);e.value&&t.value?(-1===e.value.indexOf("@")||-1===e.value.indexOf(".")?this.mensagemErro("Endereço de email incorreto"):"http://127.0.0.1:5500/src/assets/html/criar.html"===window.location.href&&(this.emailRegistrado.push(e.value),this.senhasRegistradas.push(t.value)),"http://127.0.0.1:5500/src/assets/html/login.html"===window.location.href&&-1===this.emailRegistrado.indexOf(e.value)&&this.mensagemErro("E-mail não encontrado! Verifique e tente novamente")):this.mensagemErro("Preencha todos os campos para enviar")}}])&&t(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),e;var e,r}())("#formR","#emailR","#senhaR").escutaFormulario()})();
//# sourceMappingURL=registro.bundle.js.map
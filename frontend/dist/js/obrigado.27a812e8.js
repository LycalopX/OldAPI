(function(){"use strict";var t={966:function(t,e,o){var n=o(130),i=o(768),r=o.p+"img/catavento.7c67d8e9.png";const a=(0,i.Fv)('<title>Abrigo de Idosos Helena Dornfeld - Agradecimento</title><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"><body><div id="app"><canvas id="confetti"></canvas><div class="container"><div class="logo"><img id="logo" src="'+r+'" alt="Logo Abrigo de Idosos Helena Dornfeld"></div><div class="thank-you"><h1>Obrigado por sua Contribuição!</h1><p>Sua generosa doação garante que nossos idosos recebam os medicamentos de que precisam. Estamos profundamente agradecidos por seu apoio inestimável.</p><div class="back-home"><a href="home.html"><i class="fas fa-arrow-left"></i> Voltar para a página inicial</a></div></div><div class="footer"><p>© 2024 Abrigo de Idosos Helena Dornfeld. Todos os direitos reservados.</p></div></div></div></body>',3);function s(t,e,o,n,i,r){return a}var d={name:"App",data(){return{mode:""}},mounted(){this.animateLogo(),this.dropConfetti()},methods:{animateLogo(){const t=document.getElementById("logo");let e=0,o=2;const n=()=>{e+=o,o*=.98,o<.1&&(o=0),t.style.transform=`rotate(${e}deg)`,o>0&&requestAnimationFrame(n)};n()},dropConfetti(){const t=document.getElementById("confetti"),e=t.getContext("2d");t.width=window.innerWidth,t.height=window.innerHeight;const o=["#ff0","#f00","#0f0","#00f","#f0f","#0ff"],n=300,i=[];class r{constructor(t,e,o){this.x=t,this.y=e,this.color=o,this.size=5*Math.random()+5,this.speed=3*Math.random()+2,this.angle=2*Math.random()*Math.PI}update(){this.y+=this.speed,this.x+=Math.sin(this.angle),this.y>t.height&&(this.y=0),this.x>t.width&&(this.x=0),this.x<0&&(this.x=t.width)}draw(){e.beginPath(),e.arc(this.x,this.y,this.size,0,2*Math.PI),e.fillStyle=this.color,e.fill()}}for(let s=0;s<n;s++){const e=Math.random()*t.width,n=Math.random()*t.height-t.height,a=o[Math.floor(Math.random()*o.length)];i.push(new r(e,n,a))}const a=()=>{e.clearRect(0,0,t.width,t.height),i.forEach((t=>{t.update(),t.draw()})),requestAnimationFrame(a)};a()}}},c=o(241);const h=(0,c.A)(d,[["render",s]]);var f=h;(0,n.Ef)(f).mount("#app")}},e={};function o(n){var i=e[n];if(void 0!==i)return i.exports;var r=e[n]={exports:{}};return t[n](r,r.exports,o),r.exports}o.m=t,function(){var t=[];o.O=function(e,n,i,r){if(!n){var a=1/0;for(h=0;h<t.length;h++){n=t[h][0],i=t[h][1],r=t[h][2];for(var s=!0,d=0;d<n.length;d++)(!1&r||a>=r)&&Object.keys(o.O).every((function(t){return o.O[t](n[d])}))?n.splice(d--,1):(s=!1,r<a&&(a=r));if(s){t.splice(h--,1);var c=i();void 0!==c&&(e=c)}}return e}r=r||0;for(var h=t.length;h>0&&t[h-1][2]>r;h--)t[h]=t[h-1];t[h]=[n,i,r]}}(),function(){o.d=function(t,e){for(var n in e)o.o(e,n)&&!o.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){o.p="/"}(),function(){var t={280:0};o.O.j=function(e){return 0===t[e]};var e=function(e,n){var i,r,a=n[0],s=n[1],d=n[2],c=0;if(a.some((function(e){return 0!==t[e]}))){for(i in s)o.o(s,i)&&(o.m[i]=s[i]);if(d)var h=d(o)}for(e&&e(n);c<a.length;c++)r=a[c],o.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return o.O(h)},n=self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=o.O(void 0,[504],(function(){return o(966)}));n=o.O(n)})();
//# sourceMappingURL=obrigado.27a812e8.js.map
import{S as b,i as g,s as A,e as v,b as m,H as d,h as p,k as h,q as k,l as f,m as u,r as w,n as o,G as _,K as S}from"./index.bd1827a9.js";function D(c){let e,s,n,l,t;return{c(){e=h("a"),s=h("span"),n=k("Scroll up"),this.h()},l(a){e=f(a,"A",{href:!0,id:!0,class:!0});var r=u(e);s=f(r,"SPAN",{class:!0});var i=u(s);n=w(i,"Scroll up"),i.forEach(p),r.forEach(p),this.h()},h(){o(s,"class","svelte-ngpaha"),o(e,"href","#"),o(e,"id","scrollUp"),o(e,"class","scroll-ctl scroll-up svelte-ngpaha")},m(a,r){m(a,e,r),_(e,s),_(s,n),l||(t=S(e,"click",c[3]),l=!0)},p:d,d(a){a&&p(e),l=!1,t()}}}function E(c){let e,s,n,l,t;return{c(){e=h("a"),s=h("span"),n=k("Scroll down"),this.h()},l(a){e=f(a,"A",{href:!0,id:!0,class:!0});var r=u(e);s=f(r,"SPAN",{class:!0});var i=u(s);n=w(i,"Scroll down"),i.forEach(p),r.forEach(p),this.h()},h(){o(s,"class","svelte-ngpaha"),o(e,"href","#"),o(e,"id","scrollDown"),o(e,"class","scroll-ctl svelte-ngpaha")},m(a,r){m(a,e,r),_(e,s),_(s,n),l||(t=S(e,"click",c[2]),l=!0)},p:d,d(a){a&&p(e),l=!1,t()}}}function $(c){let e;function s(t,a){return t[0]?D:E}let n=s(c),l=n(c);return{c(){l.c(),e=v()},l(t){l.l(t),e=v()},m(t,a){l.m(t,a),m(t,e,a)},p(t,[a]){n===(n=s(t))&&l?l.p(t,a):(l.d(1),l=n(t),l&&(l.c(),l.m(e.parentNode,e)))},i:d,o:d,d(t){l.d(t),t&&p(e)}}}function H(c,e,s){let n=!1;function l(r,i){r.preventDefault();let y=i==="down"?window.innerHeight:-window.innerHeight;window.scrollBy({left:0,top:y,behavior:"smooth"}),s(0,n=!n)}return[n,l,r=>{l(r,"down")},r=>{l(r,"up")}]}class q extends b{constructor(e){super(),g(this,e,H,$,A,{})}}export{q as S};

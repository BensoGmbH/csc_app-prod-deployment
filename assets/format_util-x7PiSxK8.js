import{c as i}from"./index-CmJDO84v.js";import{f}from"./calendar-T1TBvcTN.js";/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x=i("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k=i("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F=i("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D=i("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]),o=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",maximumFractionDigits:2}),d=new Intl.NumberFormat("en-US",{notation:"compact",style:"currency",currency:"USD",maximumFractionDigits:2}),p=new Intl.NumberFormat("en-US",{maximumFractionDigits:4});function l(t){const r=Math.abs(t);if(!Number.isFinite(r)||r===0||r<1)return 4;const n=Math.floor(Math.log10(r))+1;return Math.max(0,5-n)}function h(t){const r=l(t);return new Intl.NumberFormat("en-US",{style:"decimal",minimumFractionDigits:r,maximumFractionDigits:r}).format(t)}const b={usdt(t){return t==null?"—":`${o.format(t)} USDT`},currency(t,r){if(t==null)return"—";const n=r==null?void 0:r.toUpperCase();return n?`${o.format(t)} ${n}`:o.format(t)},currencyCompact(t,r){return t==null?"—":d.format(t)},currencyPlain(t){return t==null?"—":h(t)},price(t){return t==null?"—":h(t)},number(t){return t==null?"—":p.format(t)},exchangeLabel(t){if(!t)return"Exchange";const r=t.trim();return r?r.charAt(0).toUpperCase()+r.slice(1):"Exchange"},dateUtc(t){if(!t)return"—";try{return`${f(new Date(t),"MMM dd, yyyy HH:mm")} UTC`}catch{return"—"}},dateShort(t){if(!t)return"—";try{return f(new Date(t),"dd.MM.yyyy HH:mm")}catch{return"—"}},duration(t,r){if(!t)return"—";try{const n=new Date(t).getTime(),a=r?new Date(r).getTime():Date.now();if(!Number.isFinite(n)||!Number.isFinite(a))return"—";const y=Math.max(a-n,0),c=Math.round(y/1e3),m=Math.floor(c/3600),s=Math.floor(c%3600/60),u=c%60,e=[];return m>0&&e.push(`${m}h`),s>0&&e.push(`${s}m`),(u>0||e.length===0)&&e.push(`${u}s`),e.join(" ")}catch{return"—"}}};export{x as C,k as I,F as R,D as T,b as f};

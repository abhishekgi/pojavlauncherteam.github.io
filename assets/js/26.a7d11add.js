(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{304:function(e,t,n){"use strict";n.r(t);const h=["light","dark"];var i={name:"ThemeSwitcher",data:()=>({theme:""}),computed:{nextTheme(){const e=(h.indexOf(this.theme)+1)%h.length;return h[e]}},methods:{switchTheme(){const e=(h.indexOf(this.theme)+1)%h.length;window.__setPreferredTheme(h[e]),this.theme=h[e]}},async mounted(){void 0!==window.__theme&&(this.theme=window.__theme)}},o=n(13),s=Object(o.a)(i,(function(){var e=this,t=e._self._c;return t("a",{staticClass:"nav-link",attrs:{role:"button","aria-label":"Switch to "+e.nextTheme+" mode"},on:{click:function(t){return t.preventDefault(),e.switchTheme()}}},["dark"===e.theme?t("span",{key:"dark"},[e._v("Switch to light mode")]):"light"===e.theme?t("span",{key:"light"},[e._v("Switch to dark mode")]):t("span",{key:"light"},[e._v("Switch theme")])])}),[],!1,null,null,null);t.default=s.exports}}]);
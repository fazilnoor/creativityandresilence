import { c as create_ssr_component } from "./index.js";
const ScrollDown_svelte_svelte_type_style_lang = "";
const css = {
  code: ".scroll-ctl.svelte-ngpaha.svelte-ngpaha{position:absolute;color:hsl(var(--light-color));text-decoration:none;text-shadow:.2em -.125em .15em hsl(var(--dark-neutral)), 0 0 .125em hsl(var(--dark-neutral));top:21em;right:3.75em}@media screen and (max-width: 1024px){.scroll-ctl.svelte-ngpaha.svelte-ngpaha{right:.5em}}.scroll-ctl.svelte-ngpaha.svelte-ngpaha:not(.scroll-up){animation:1s ease-in-out infinite svelte-ngpaha-bounce}.scroll-ctl.scroll-up.svelte-ngpaha.svelte-ngpaha{top:initial;bottom:7em;text-shadow:-.0625em .0625em .125em hsl(var(--dark-neutral))}.scroll-ctl.svelte-ngpaha.svelte-ngpaha::after{display:inline-block;position:relative;content:'\\203A';font-size:4em;transform:rotate(90deg);transform-origin:center}.scroll-ctl.scroll-up.svelte-ngpaha.svelte-ngpaha::after{transform:rotate(-90deg);right:.15em}.scroll-ctl.svelte-ngpaha>span.svelte-ngpaha{display:block;position:absolute;text-indent:-999em}@keyframes svelte-ngpaha-bounce{from{transform:translateY(0)}to{transform:translateY(.125em)}}",
  map: null
};
const ScrollDown = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${`<a href="#" id="scrollDown" class="scroll-ctl svelte-ngpaha"><span class="svelte-ngpaha">Scroll down</span></a>`}`;
});
export {
  ScrollDown as S
};

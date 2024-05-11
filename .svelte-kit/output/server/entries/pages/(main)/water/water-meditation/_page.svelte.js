import { c as create_ssr_component, e as escape, v as validate_component } from "../../../../../chunks/index.js";
import { b as base } from "../../../../../chunks/paths.js";
import { J as JournalButton, a as Journal } from "../../../../../chunks/JournalButton.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".stagger.svelte-1ui0wr0 .nudge-up.svelte-1ui0wr0:nth-child(2){margin-top:-3.5em;margin-bottom:4em}@media screen and (orientation: portrait){.stagger.svelte-1ui0wr0 .nudge-up.svelte-1ui0wr0:nth-child(2){margin-top:0;margin-bottom:1em}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { journalData = {
    questions: [
      "How can you use water to soothe and heal yourself?",
      "When you are feeling the rise and fall of emotions like waves on the ocean, what then is that ocean that they fall back into?",
      "What unique part of you would you like to ripple out into the world a bit more?"
    ],
    title: "Water Meditation",
    bgColor: "hsl(180, 100%, 0%)",
    bgImg: `${base}/assets/water/journal-water-meditation-bg2.webp`,
    bgPosition: "0 0",
    bgSize: "auto 100%",
    bullets: "185, 100%, 50%"
  } } = $$props;
  let { jourButtonPos = {
    right: "5%",
    top: "10%",
    posType: "fixed",
    alpha: ".5",
    glow: "60,100%,100%",
    mobTop: "7%"
  } } = $$props;
  if ($$props.journalData === void 0 && $$bindings.journalData && journalData !== void 0)
    $$bindings.journalData(journalData);
  if ($$props.jourButtonPos === void 0 && $$bindings.jourButtonPos && jourButtonPos !== void 0)
    $$bindings.jourButtonPos(jourButtonPos);
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-1b35xu9_START -->${$$result.title = `<title>Water: Water Meditation</title>`, ""}<!-- HEAD_svelte-1b35xu9_END -->`, ""}
<main class="content-page" style="${"--grad-color: 180,25%,85%; --element-bg: linear-gradient(90deg, hsla(var(--grad-color),0), hsla(var(--grad-color),0.85) 15%, hsla(var(--grad-color),0.85) 75%, hsla(var(--grad-color),0)), linear-gradient(hsla(180, 50%, 50%, .3), hsla(180, 50%, 33%, .3)), linear-gradient(180deg, hsla(180, 100%, 100%, 0),hsla(180, 100%, 100%, .5) 40%,hsla(180, 100%, 100%, .5) 60%,hsla(180, 100%, 100%, 0)) 0 60%/ auto 60% fixed no-repeat, url(" + escape(base, true) + "/assets/water/water_dakini_bg7.webp) 66% 100%/175% auto fixed no-repeat; --element-mob-bg: linear-gradient(180deg, hsla(var(--grad-color), .3) 33%, hsla(var(--grad-color), .7)), url(" + escape(base, true) + "/assets/water/water_dakini_bg7.webp) 66% 100%/auto 175vh scroll repeat; --element-color: 211, 90%, 26%; --subtitle-color: 176, 100%, 33%; background-blend-mode: normal, luminosity, lighten, normal;"}">
  <section class="banner"><h2>Water Meditations</h2></section>
  <section class="introduction poem">${validate_component(JournalButton, "JournalButton").$$render($$result, Object.assign({}, jourButtonPos), {}, {})}
    <figure class="quotes" style="--max-width: 34em;"><blockquote class="stagger svelte-1ui0wr0"><p>Go sit by a flowing stream <br>
          Melt into<br><br>
          
             Clear colors<br> 
             Soothing sounds<br><br>
          
          Lose yourself for a time<br>
          Then return renewed
        </p>
        <p class="nudge-up svelte-1ui0wr0">Gently watch the raindrops <br>
Falling on clear pools <br><br>

See each drop circle out and out <br>
Let yourself be like the rain drop <br>
Circling out in the clear pool of your mind <br></p></blockquote>
      </figure>
    <hr>
    <p class="continue-links light">Meet the <a href="${escape(base, true) + "/water/voice-of-water"}">Voice of Water</a>, enjoy the <a href="${escape(base, true) + "/water/sharing-water"}">Visions of Water</a>, listen to the <a href="${escape(base, true) + "/water/podcast-flow"}">Flow Podcast</a> or explore more of the <a href="${escape(base, true) + "/water"}">Water Element</a>.</p></section></main>
${validate_component(Journal, "Journal").$$render($$result, Object.assign({}, journalData), {}, {})}`;
});
export {
  Page as default
};

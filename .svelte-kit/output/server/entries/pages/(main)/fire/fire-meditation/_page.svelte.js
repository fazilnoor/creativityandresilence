import { c as create_ssr_component, e as escape, v as validate_component } from "../../../../../chunks/index.js";
import { b as base } from "../../../../../chunks/paths.js";
import { J as JournalButton, a as Journal } from "../../../../../chunks/JournalButton.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { journalData = {
    questions: [
      "When you gaze into the fire, what does it evoke in you?",
      "When you are fearless, how does that serve you?",
      "What makes you feel alive and abundant with life energy?"
    ],
    title: "Fire Meditation",
    bgColor: "hsl(70, 100%, 0%)",
    bgImg: `${base}/assets/fire/journal-fire-meditation-bg2.webp`,
    bgPosition: "50% 0",
    bgSize: "auto 100%",
    bullets: "15, 100%, 60%"
  } } = $$props;
  let { jourButtonPos = {
    right: "15%",
    top: "50%",
    posType: "fixed",
    alpha: "1",
    glow: "190,50%,33%",
    mobTop: "8%"
  } } = $$props;
  if ($$props.journalData === void 0 && $$bindings.journalData && journalData !== void 0)
    $$bindings.journalData(journalData);
  if ($$props.jourButtonPos === void 0 && $$bindings.jourButtonPos && jourButtonPos !== void 0)
    $$bindings.jourButtonPos(jourButtonPos);
  return `${$$result.head += `<!-- HEAD_svelte-hf0mfv_START -->${$$result.title = `<title>Fire: Fire Meditation</title>`, ""}<!-- HEAD_svelte-hf0mfv_END -->`, ""}
<main class="content-page" style="${"--grad-color: 221, 97%, 33%; --element-bg: linear-gradient(90deg, hsla(var(--grad-color),.7), hsla(var(--grad-color),0) 15%, hsla(var(--grad-color),0) 85%, hsla(var(--grad-color),.7)), url(" + escape(base, true) + "/assets/fire/fire-meditation-bg.webp) 0 0/100% auto fixed repeat; --element-mob-bg: linear-gradient(hsla(var(--grad-color),.7),hsla(var(--grad-color),.7)), url(" + escape(base, true) + "/assets/fire/fire-meditation-bg.webp) 33% 0/auto 100vh scroll repeat; --desc-bg-color: hsla(45, 50%, 75%, .9);--desc-copy-color: var(--light-color); --element-color: 25, 100%, 90%; --subtitle-color: 15, 100%, 85%; --copy-color: var(--light-color); background-blend-mode: darken, normal; --cs1: 351, 86%, 53%; --cs2: 320, 100%, 66%;"}"><section class="banner"><h2>Fire Meditation</h2>
    <p class="subtitle shiftgrad"><span>What Lights Your Fire?</span></p>
      ${validate_component(JournalButton, "JournalButton").$$render($$result, Object.assign({}, jourButtonPos), {}, {})}
      <br></section>
  <section class="exercise"><figure class="quotes" style="--quote-color: 25, 100%, 90%; --max-width: 12em;"><blockquote><p class="stagger"><span>Look</span>
          <span>Into the fire, any fire</span>
          <span>See</span>
          <span>The life force, that is you</span>
          <span class="ind2">Burning</span>
          <span class="ind3">Fearlessly</span>
          <span class="ind4">Without limit</span></p></blockquote>
      <figcaption>—Alana Siegel</figcaption></figure>
<br><br><br>

<hr>
<p class="continue-links">Listen to the <a href="${escape(base, true) + "/fire/podcast-creativity"}">Creativity Podcast</a>, meet to the <a href="${escape(base, true) + "/fire/voice-of-fire"}">Voice of Fire</a>, enjoy the <a href="${escape(base, true) + "/fire/sharing-fire"}">Passion of Fire</a> or explore more of the <a href="${escape(base, true) + "/fire"}">Fire Element</a>.
</p></section></main>
${validate_component(Journal, "Journal").$$render($$result, Object.assign({}, journalData), {}, {})}`;
});
export {
  Page as default
};

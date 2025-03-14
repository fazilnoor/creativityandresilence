import { c as create_ssr_component, e as escape, v as validate_component } from "../../../../../chunks/index.js";
import { b as base } from "../../../../../chunks/paths.js";
import { J as JournalButton, a as Journal } from "../../../../../chunks/JournalButton.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { journalData = {
    questions: [
      "How has your sense of solidity changed from doing the practice, if at all?",
      "What makes you feel heavy and solid and what makes you feel light and open?",
      "What does the sky give to you?"
    ],
    title: "Sky Eating",
    bgColor: "hsl(180, 100%, 0%)",
    bgImg: `${base}/assets/space/journal-sky-eating-bg2.webp`,
    bgPosition: "0 0",
    bgSize: "100% auto",
    bullets: "240, 100%, 75%"
  } } = $$props;
  let { jourButtonPos = {
    right: "20%",
    top: "33%",
    posType: "fixed",
    alpha: ".5",
    glow: "45,75%,80%",
    mobTop: "7%"
  } } = $$props;
  if ($$props.journalData === void 0 && $$bindings.journalData && journalData !== void 0)
    $$bindings.journalData(journalData);
  if ($$props.jourButtonPos === void 0 && $$bindings.jourButtonPos && jourButtonPos !== void 0)
    $$bindings.jourButtonPos(jourButtonPos);
  return `${$$result.head += `<!-- HEAD_svelte-mle8m4_START -->${$$result.title = `<title>Space: Sky Eating</title>`, ""}<!-- HEAD_svelte-mle8m4_END -->`, ""}
<main class="content-page" style="${"--grad-color: 255, 75%, 90%; --element-bg: linear-gradient(90deg, hsla(var(--grad-color),0), hsla(var(--grad-color),0.85) 15%, hsla(var(--grad-color),0.85) 75%, hsla(var(--grad-color),0)) 0 0/41em auto no-repeat, url(" + escape(base, true) + "/assets/space/space-elephant-bg.webp) 0 66% /cover fixed no-repeat; --element-mob-bg: linear-gradient(90deg, hsla(var(--grad-color),0), hsla(var(--grad-color),0.85) 15%, hsla(var(--grad-color),0.85) 75%, hsla(var(--grad-color),0)), url(" + escape(base, true) + "/assets/space/space-elephant-bg.webp) 57% 0/auto 100vh scroll repeat; --element-color: var(--dark-color); --subtitle-color: 255, 90%,33%;"}"><section class="banner"><h2>Sky Eating <small>3:00</small></h2>
    <br>
    ${validate_component(JournalButton, "JournalButton").$$render($$result, Object.assign({}, jourButtonPos), {}, {})}</section>
  <section class="exercise"><p>For centuries, Tibetan Meditation Masters have used this profound morning meditation. A renowned Buddhist master Thinley Norbu Rinpoche gave this meditation to his students in Nepal. It brings a clarity and openness to the mind and body.</p>

<ol><li>Secretly go outside in the fresh clean air and while standing, look at the blue sky. Of course, the sky doesn’t necessarily have to be blue, but it is nice if it is. Do this first thing in the morning.</li>

  <li>Then, exhale vigorously, imagining that all negativity and concepts are expelled with your breath.</li>
  
  <li>Next, shake your body like a rag doll releasing absolutely everything. This dispels all negativity. You can do this three times or ten times – it doesn’t matter.
    After you do this, rest and relax your mind.
  </li>
  
  <li>Then in the sky before you, if you like, visualize countless buddhas with their wisdom bodies, wisdom speech and wisdom minds. Or you can imagine saints or other spiritual beings filling the sky. If you prefer, you can just imagine luminous blue light in the sky before you.</li>
  
  <li>Now all becomes like sky, very empty, vast and light.</li>
  
  <li>Then you take a deep breath and inhale this sky through your mouth.</li>
  
  <li>Now just relax. Don’t divide between the outer sky and the inner sky. Just purely remain and smoothly go about your day.</li></ol>
<hr>
<p class="continue-links light">Continue on with <a href="${escape(base, true) + "/space/making-more-mental-space"}">Making More Mental Space</a>, enjoy the <a href="${escape(base, true) + "/space/sharing-space"}">Beauty of Space</a>, try <a href="${escape(base, true) + "/space/space-meditation"}">Space Meditation</a> or explore more of the <a href="${escape(base, true) + "/space"}">Space Element</a>.
</p></section></main>
${validate_component(Journal, "Journal").$$render($$result, Object.assign({}, journalData), {}, {})}`;
});
export {
  Page as default
};

import { c as create_ssr_component, e as escape, v as validate_component } from "../../../../../chunks/index.js";
import { b as base } from "../../../../../chunks/paths.js";
import { J as JournalButton, a as Journal } from "../../../../../chunks/JournalButton.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { journalData = {
    questions: [
      "How do you find freedom in the midst of your day-to-day responsibilities?",
      "In relationships when you allow others to be who they are, without judging them, what happens?",
      "When you're feeling trapped what part of you is still free?"
    ],
    title: "Freedom Podcast",
    bgColor: "hsl(180, 100%, 0%)",
    bgImg: `${base}/assets/wind/journal-podcast-freedom2.webp`,
    bgPosition: "50% 0%",
    bgSize: "auto 100%",
    bullets: "120, 100%, 50%"
  } } = $$props;
  let { jourButtonPos = {
    right: "30%",
    top: "25%",
    posType: "fixed",
    alpha: ".25",
    glow: "25,70%,80%",
    mobTop: "7%"
  } } = $$props;
  if ($$props.journalData === void 0 && $$bindings.journalData && journalData !== void 0)
    $$bindings.journalData(journalData);
  if ($$props.jourButtonPos === void 0 && $$bindings.jourButtonPos && jourButtonPos !== void 0)
    $$bindings.jourButtonPos(jourButtonPos);
  return `${$$result.head += `<!-- HEAD_svelte-mu2am1_START -->${$$result.title = `<title>Wind: Podcast--Freedom</title>`, ""}<!-- HEAD_svelte-mu2am1_END -->`, ""}
<main class="content-page set-to-aspect4-3" style="${"--grad-color: 170, 0%, 100%; --element-bg: url(" + escape(base, true) + "/assets/wind/freedom-podcast-bg3.webp) 0 75%/100% auto fixed repeat; --element-mob-bg: linear-gradient(180deg,hsla(var(--grad-color), .125) 25%, hsla(var(--grad-color), .9)), url(" + escape(base, true) + "/assets/wind/freedom-podcast-bg3.webp) 79% 0/auto 115vh scroll repeat; --element-color: 170, 100%, 25%; --subtitle-color: 170, 100%, 33%; --cs1:330, 100%, 75%; --cs2:10, 100%, 75%; --bg-size-4-3: auto 100%; --bg-pos-4-3: 100% 0;"}">
  <section class="banner"><h2>Freedom Podcast</h2>
    <p class="subtitle shiftgrad"><span>What Makes You Feel Trapped?<br>
        What Makes You Feel Free?
    </span></p>
    <br>
      ${validate_component(JournalButton, "JournalButton").$$render($$result, Object.assign({}, jourButtonPos), {}, {})}</section>
  <section class="exercise"><div class="audio"><iframe width="100%" height="20" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1034950906&color=%23ffff00&inverse=true&auto_play=false&show_user=true"></iframe>
      <span class="runtime">22:25</span></div>
    <br>
    <p>As children, we experience freedom in our everyday seemingly ordinary actions. Gray and Lily Pinto discuss how we can often forget and limit true freedom in adulthood and how we can learn to view the world with the eyes of a free child once again.<br></p>
    <hr>
    <p class="continue-links">Listen to the sounds of the <a class="dark" href="${escape(base, true) + "/wind/music-chamber"}">Music Chamber</a>, enjoy the <a class="dark" href="${escape(base, true) + "/wind/sharing-wind"}">Freedom of Wind</a>, try <a class="dark" href="${escape(base, true) + "/wind/creating-new-pathways"}">Creating New Pathways</a>
      or explore more of the <a class="dark" href="${escape(base, true) + "/wind"}">Wind Element</a>.
    </p></section>
  <section class="creator-bio"><h3>About the Hosts</h3>
    <div class="flex-group"><img src="${escape(base, true) + "/assets/lilyandgraypinto.jpg"}" alt="Podcasting twins, Gary and Lily Pinto">
      <p>Gray Pinto is a student of Acting, Directing and Screenwriting and is committed to serving the world with his art. Lily Pinto is a songwriter and musician. She hopes to bring music that reminds us what love is, how it feels and how it changes everything.</p></div></section></main>
${validate_component(Journal, "Journal").$$render($$result, Object.assign({}, journalData), {}, {})}`;
});
export {
  Page as default
};

import { c as create_ssr_component, e as escape, v as validate_component } from "../../../../../chunks/index.js";
import { b as base } from "../../../../../chunks/paths.js";
import { J as JournalButton, a as Journal } from "../../../../../chunks/JournalButton.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { journalData = {
    questions: [
      "What were some worries in your past that have disappeared? What are some worries you have now that will most likely disappear in your future?",
      "When you take a bird's eye view of your self and the many things you hold onto, which one might you easily let go of and simply drop?",
      "If you open your palms to the sky and imagine releasing all your burdens into space, how does that affect you?"
    ],
    title: "Letting Go",
    bgColor: "hsl(70, 100%, 0%)",
    bgImg: `${base}/assets/space/journal-letting-go.webp`,
    bgPosition: "50% 0",
    bgSize: "cover",
    bullets: "240, 100%, 75%"
  } } = $$props;
  let { jourButtonPos = {
    right: "-10%",
    top: "150%",
    posType: "absolute",
    alpha: ".6",
    glow: "340,75%,90%",
    mobTop: "7%"
  } } = $$props;
  if ($$props.journalData === void 0 && $$bindings.journalData && journalData !== void 0)
    $$bindings.journalData(journalData);
  if ($$props.jourButtonPos === void 0 && $$bindings.jourButtonPos && jourButtonPos !== void 0)
    $$bindings.jourButtonPos(jourButtonPos);
  return `${$$result.head += `<!-- HEAD_svelte-17ts4is_START -->${$$result.title = `<title>Space: Letting Go</title>`, ""}<!-- HEAD_svelte-17ts4is_END -->`, ""}
<main class="content-page" style="${"--grad-color: 255, 75%, 90%; --element-bg: linear-gradient(90deg, hsla(var(--grad-color),0), hsla(var(--grad-color),0.85) 15%, hsla(var(--grad-color),0.85) 75%, hsla(var(--grad-color),0)) 0 0/41em auto no-repeat, url(" + escape(base, true) + "/assets/space/letting-go-bg.webp) 0 0 /cover fixed no-repeat; --element-mob-bg: linear-gradient(90deg, hsla(var(--grad-color), .7), hsla(var(--grad-color), .5)), url(" + escape(base, true) + "/assets/space/letting-go-bg.webp) 45% 0/auto 175vh scroll repeat; --element-color: 340, 95%, 30%; --subtitle-color: 340, 95%, 45%; --cs1: 40, 100%, 45%; --cs2:315, 100%, 45%;"}"><section class="banner"><h2>Letting Go</h2>
    <p class="subtitle shiftgrad"><span>First Aid For Emotional Burdens</span></p>
    ${validate_component(JournalButton, "JournalButton").$$render($$result, Object.assign({}, jourButtonPos), {}, {})}</section>
  <section class="exercise"><div class="audio"><iframe width="100%" height="20" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/965223145&color=%23ffff00&inverse=true&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
      <span class="runtime">3:59</span></div>
    <p><small>Audio presentation by Deepa Thakur.</small></p>

    <p>When thoughts and situations entangle us, we can become anxious, irritated and tense. Listen to this meditation and feel the ease of letting go. This audio meditation shows us how to let go as soon as we recognize and feel the need. The art of letting go is always possible.</p>
    <hr>
    <p class="continue-links light">Learn about the <a href="${escape(base, true) + "/space/dance-workshop"}">Dance Workshop</a>, enjoy the <a href="${escape(base, true) + "/space/sharing-space"}">Beauty of Space</a>, try <a href="${escape(base, true) + "/space/space-meditation"}">Space Meditation</a> or explore more of the <a href="${escape(base, true) + "/space"}">Space Element</a>.
    </p></section>
  <section class="creator-bio"><p>Deepa Thakur is the director of India&#39;s nonprofit organization The Khyentse Foundation. She leads international meditation programs throughout the year.</p></section></main>
${validate_component(Journal, "Journal").$$render($$result, Object.assign({}, journalData), {}, {})}`;
});
export {
  Page as default
};

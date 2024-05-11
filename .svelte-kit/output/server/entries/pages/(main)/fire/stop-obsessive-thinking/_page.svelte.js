import { c as create_ssr_component, e as escape, v as validate_component } from "../../../../../chunks/index.js";
import { b as base } from "../../../../../chunks/paths.js";
import { J as JournalButton, a as Journal } from "../../../../../chunks/JournalButton.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { journalData = {
    questions: [
      "What do you obsess about? Video games, politics, diets, neighbors?",
      "List 5 things you worry about and note whether any of them are no longer relevant and merely lingering from the past?",
      "What worries or obsessions are getting in the way of your productivity?"
    ],
    title: "Stop Obsessive Thinking",
    bgColor: "hsl(70, 100%, 0%)",
    bgImg: `${base}/assets/fire/journal-stop-obsessive-thinking-bg2.webp`,
    bgPosition: "50% 0",
    bgSize: "auto 100%",
    bullets: "15, 100%, 60%"
  } } = $$props;
  let { jourButtonPos = {
    right: "15%",
    top: "55%",
    posType: "fixed",
    alpha: ".25",
    glow: "60,100%,100%",
    mobTop: "20%"
  } } = $$props;
  if ($$props.journalData === void 0 && $$bindings.journalData && journalData !== void 0)
    $$bindings.journalData(journalData);
  if ($$props.jourButtonPos === void 0 && $$bindings.jourButtonPos && jourButtonPos !== void 0)
    $$bindings.jourButtonPos(jourButtonPos);
  return `${$$result.head += `<!-- HEAD_svelte-17ypz52_START -->${$$result.title = `<title>Fire: Stop Obsessive Thinking</title>`, ""}<!-- HEAD_svelte-17ypz52_END -->`, ""}
<main class="content-page center set-to-aspect4-3" style="${"--grad-color: 221, 97%, 33%; --element-bg: linear-gradient(90deg, hsla(var(--grad-color),.66), hsla(var(--grad-color),.8),hsla(var(--grad-color),.66)), url(" + escape(base, true) + "/assets/fire/stop-obsessive-thinking-bg.webp) 0 85%/100% auto fixed no-repeat; --element-mob-bg: linear-gradient(hsla(var(--grad-color), .5), hsla(var(--grad-color), .5)),url(" + escape(base, true) + "/assets/fire/stop-obsessive-thinking-bg.webp) 43% 0/auto 100vh scroll repeat; --desc-bg-color: hsla(45, 50%, 75%, .9);--desc-copy-color: var(--light-color); --element-color: 200, 100%, 80%; --subtitle-color: 200, 100%, 90%; --copy-color: var(--light-color); background-blend-mode: saturation, normal; --bg-size-4-3:100% auto; --bg-pos-4-3: 0 0;"}"><section class="banner"><h2>Stop Obsessive Thinking</h2>
    <p class="subtitle">Can&#39;t Get It Out Of Your Head?<br>
      Now There Is A Way!
    </p>
    ${validate_component(JournalButton, "JournalButton").$$render($$result, Object.assign({}, jourButtonPos), {}, {})}</section>
  <section class="exercise"><p>If you are obsessing or having repetitive thoughts about someone or something, try this method. It works immediately. The results can surprise you.</p>
    <div class="audio"><iframe width="100%" height="20" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/996577588&color=%23ffff00&auto_play=false&hide_related=false&show_comments=true&inverse=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
      <span class="runtime">1:38</span></div>
    <p><small>Audio presentation by Sandra Scales, Ph. D.</small></p>

    <div class="group" style="margin-bottom: 2em; margin-top: 2em; grid-template-columns: 1fr 2fr; gap: 1em;"><img src="${escape(base, true) + "/assets/fire/obsessing_exercise.gif"}" alt="" style="width: 100%;">

    <ol><li>Sit and settle yourself.</li>

      <li>Imagine the person or object that is bothering you is about 4 feet in front of you.</li>

      <li>Shrink that person or object to about 5 inches tall.</li>

      <li>Turn that image to black and white.</li>

      <li>Zoom the image far out into space.</li></ol></div>
      <p>If you experiment with shrinking and moving images into space that are bothering you, you will feel a great relief and breathe easier. You can use this exercise anytime no matter where you are or what you are doing.</p>
<hr>
<p class="continue-links">Enjoy the <a href="${escape(base, true) + "/fire/sharing-fire"}">Passion of Fire</a>, 
try the <a href="${escape(base, true) + "/fire/fire-meditation"}">Fire Meditation</a>,
learn about <a href="${escape(base, true) + "/fire/dissolving-anger"}">Dissolving Anger</a> or explore more of the <a href="${escape(base, true) + "/fire"}">Fire Element</a>.
</p></section></main>
${validate_component(Journal, "Journal").$$render($$result, Object.assign({}, journalData), {}, {})}`;
});
export {
  Page as default
};

import { c as create_ssr_component, e as escape, v as validate_component } from "../../../../../chunks/index.js";
import { b as base } from "../../../../../chunks/paths.js";
import { J as JournalButton, a as Journal } from "../../../../../chunks/JournalButton.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { journalData = {
    questions: [
      "When you get stuck, what helps you find your flow?",
      "When have you experienced the greatest flow in your life?",
      "When feeling ‘“in flow”, stop and ask yourself, “What feels different about this state?” Then note it down and reflect on it now and then."
    ],
    title: "Flow Podcast",
    bgColor: "hsl(180, 100%, 0%)",
    bgImg: `${base}/assets/water/journal-podcast-flow.jpg`,
    bgPosition: "0 0",
    bgSize: "cover",
    bullets: "185, 100%, 50%"
  } } = $$props;
  let { jourButtonPos = {
    right: "30%",
    top: "10%",
    posType: "fixed",
    alpha: ".7",
    glow: "60,100%,100%",
    mobTop: "15%"
  } } = $$props;
  if ($$props.journalData === void 0 && $$bindings.journalData && journalData !== void 0)
    $$bindings.journalData(journalData);
  if ($$props.jourButtonPos === void 0 && $$bindings.jourButtonPos && jourButtonPos !== void 0)
    $$bindings.jourButtonPos(jourButtonPos);
  return `${$$result.head += `<!-- HEAD_svelte-aiytg2_START -->${$$result.title = `<title>Water: Podcast--Flow</title>`, ""}<!-- HEAD_svelte-aiytg2_END -->`, ""}
<main class="content-page" style="${"--element-bg: linear-gradient(90deg, hsla(180,25%,85%,0), hsla(180,25%,85%,0.85) 15%, hsla(180,25%,85%,0.85) 75%, hsla(180,25%,85%,0)) 0 0/41em auto no-repeat, linear-gradient(hsla(180, 100%, 50%, .4), hsla(180, 100%, 33%, .4)) , url(" + escape(base, true) + "/assets/water/water_dakini_bg7.webp) 75% 100%/220% auto fixed no-repeat; --element-mob-bg: linear-gradient(180deg, hsla(180,25%,85%,0.3) 33%, hsla(180,25%,85%,.8)), url(" + escape(base, true) + "/assets/water/water_dakini_bg7.webp) 50% 50%/auto 200vh scroll repeat; --element-color: 211, 90%, 26%; --subtitle-color: 176, 100%, 33%; background-blend-mode: normal, hue, normal; --cs1: 193, 100%, 55%; --cs2: 300, 100%, 60%;"}">
  <section class="banner"><h2>Flow Podcast</h2>
    <p class="subtitle shiftgrad"><span>What Is Flow?<br>
        Do You Have It?<br>
        Does It Help You?
      </span></p>
    <br>
      ${validate_component(JournalButton, "JournalButton").$$render($$result, Object.assign({}, jourButtonPos), {}, {})}</section>
  <section class="exercise"><div class="audio"><iframe width="100%" height="20" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/982577275%3Fsecret_token%3Ds-s1t15TT3BPC&color=%23ffff00&inverse=true&auto_play=false&show_user=true"></iframe>
      <span class="runtime">19:06</span></div>
    <br>
    <p>These vivacious and creative twins share their discoveries about being in flow and out of flow. Gray offers a simple practice to develop some inner flow and flexibility.<br></p>
    <hr>
    <p class="continue-links light">Try <a href="${escape(base, true) + "/water/water-meditation"}">Water Meditation</a>, practice the <a href="${escape(base, true) + "/water/art-of-listening"}">Art of Listening</a>, enjoy the <a href="${escape(base, true) + "/water/sharing-water"}">Visions of Water</a> or explore more of the <a href="${escape(base, true) + "/water"}">Water Element</a>.</p></section>
  <section class="creator-bio"><h3>About the Hosts</h3>
    <div class="flex-group"><img src="${escape(base, true) + "/assets/lilyandgraypinto.jpg"}" alt="Podcasting twins, Gary and Lily Pinto">
      <p>Gray Pinto is a student of Acting, Directing and Screenwriting and is committed to serving the world with his art. Lily Pinto is a songwriter and musician. She hopes to bring music that reminds us what love is, how it feels and how it changes everything.</p></div></section></main>
${validate_component(Journal, "Journal").$$render($$result, Object.assign({}, journalData), {}, {})}`;
});
export {
  Page as default
};

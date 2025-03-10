import { c as create_ssr_component, e as escape, v as validate_component } from "../../../../../chunks/index.js";
import { b as base } from "../../../../../chunks/paths.js";
import { J as JournalButton, a as Journal } from "../../../../../chunks/JournalButton.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { journalData = {
    questions: [
      "Who's your boss, you or your inner critic?",
      "What makes you miserable?",
      "What's your favorite way to put yourself down?"
    ],
    title: "The Inner Critic",
    bgColor: "hsl(70, 100%, 0%)",
    bgImg: `${base}/assets/earth/journal-inner-critic.webp`,
    bgPosition: "0 66%",
    bgSize: "cover",
    bullets: "60, 100%, 50%"
  } } = $$props;
  let { jourButtonPos = {
    right: "2%",
    top: "55%",
    posType: "fixed",
    alpha: ".4",
    glow: "60,100%,100%",
    mobTop: "7%"
  } } = $$props;
  if ($$props.journalData === void 0 && $$bindings.journalData && journalData !== void 0)
    $$bindings.journalData(journalData);
  if ($$props.jourButtonPos === void 0 && $$bindings.jourButtonPos && jourButtonPos !== void 0)
    $$bindings.jourButtonPos(jourButtonPos);
  return `${$$result.head += `<!-- HEAD_svelte-2ikyay_START -->${$$result.title = `<title>Earth: The Inner Critic</title>`, ""}<!-- HEAD_svelte-2ikyay_END -->`, ""}
<main class="content-page" style="${"--element-bg: linear-gradient(90deg, hsla(45,75%,80%,0), hsla(45,75%,80%,0.85) 15%, hsla(45,75%,80%,0.85) 45%, hsla(45,75%,80%,0) 85%) 0 0/48em auto no-repeat, url(" + escape(base, true) + "/assets/earth/earth_10.jpg) 0 0/100% auto fixed repeat; --element-mob-bg: linear-gradient(hsla(45,75%,80%, .5),hsla(45,75%,80%, .5)), url(" + escape(base, true) + "/assets/earth/earth_10.jpg) 0 0/auto 100vh scroll repeat; --desc-bg-color: hsla(45, 50%, 75%, .9);--desc-copy-color: var(--dark-neutral); --element-color: 85, 90%, 26%; --subtitle-color: 85, 136%, 40%; --cs1: 265, 100%, 50%; --cs2: 175, 100%, 50%; --cs3: 360, 100%, 50%; --cs4: 25, 100%, 50%;"}">
  <section class="banner"><h2>The Inner Critic</h2>
    <p class="subtitle shiftgrad"><span>What’s Making You Miserable?</span></p></section>
  <section class="exercise">${validate_component(JournalButton, "JournalButton").$$render($$result, Object.assign({}, jourButtonPos), {}, {})}

      <figure class="quotes" style="--max-width: 18.5em;"><blockquote>Your task isn’t to search for love<br>
            Your task is to find and remove<br>
            All the barriers you have built against it<br></blockquote>
        <figcaption>—The Sufi mystic Rumi</figcaption></figure>
    <p>What’s the biggest barrier you’ve built against love, happiness or well-being? If you pay attention you might notice there is an incessant critical voice in your head. Does it give you any slack? You’re saying things to yourself you wouldn’t say to your worst enemy!</p>

      <p>You can listen and learn how to relate with this critical part of you in new, life-enhancing ways. Christine invites you to have some fun dismantling barriers that block your capacity for love, ease and joy.</p>
      <div class="audio"><iframe width="100%" height="20" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/967273027%3Fsecret_token%3Ds-F5zsjcXsxld&color=%23ffff00&inverse=true&auto_play=false&show_user=true"></iframe>
        <span class="runtime">11:36</span></div>
      <p><small>Audio presentation by Christine Longaker</small></p>

      <hr>
      <p class="continue-links light">Learn about <a href="${escape(base, true) + "/earth/quieting-inner-critic"}">Quieting the Inner Critic</a>, try <a href="${escape(base, true) + "/earth/self-hypnosis"}">Self Hypnosis</a>, practice some  <a href="${escape(base, true) + "/earth/kindness-to-self"}">Kindness to Self</a> or explore more of the <a href="${escape(base, true) + "/earth"}">Earth Element</a>.</p></section>
  <section class="creator-bio"><p>Christine Longaker is the author of <em>Facing Death and Finding Hope</em> which is translated into nine languages. She offers international training about resilience and self-compassion.</p></section></main>
${validate_component(Journal, "Journal").$$render($$result, Object.assign({}, journalData), {}, {})}`;
});
export {
  Page as default
};

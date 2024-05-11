import { c as create_ssr_component, e as escape, v as validate_component } from "../../../../../chunks/index.js";
import { b as base } from "../../../../../chunks/paths.js";
import { J as JournalButton, a as Journal } from "../../../../../chunks/JournalButton.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { journalData = {
    questions: [
      "If you sing along with one of these sing-along songs, how do you feel?",
      "What music uplifts your spirits?",
      "What songs from your past spark pleasant memories? If you sing or listen to one of your favorites, what memories come to mind?"
    ],
    title: "Music Chamber",
    bgColor: "hsl(70, 100%, 0%)",
    bgImg: `${base}/assets/wind/journal-wind-chamber.webp`,
    bgPosition: "50% 0%",
    bgSize: "auto 100%",
    bullets: "120, 100%, 50%"
  } } = $$props;
  let { jourButtonPos = {
    right: "1%",
    top: "82%",
    posType: "fixed",
    alpha: ".25",
    glow: "60,100%,75%",
    mobTop: "37%"
  } } = $$props;
  if ($$props.journalData === void 0 && $$bindings.journalData && journalData !== void 0)
    $$bindings.journalData(journalData);
  if ($$props.jourButtonPos === void 0 && $$bindings.jourButtonPos && jourButtonPos !== void 0)
    $$bindings.jourButtonPos(jourButtonPos);
  return `${$$result.head += `<!-- HEAD_svelte-9vd6e8_START -->${$$result.title = `<title>Wind: Music Chamber</title>`, ""}<!-- HEAD_svelte-9vd6e8_END -->`, ""}
<main class="content-page bleed no-pad" style="${"--grad-color: 240, 50%, 95%;--element-bg: linear-gradient(hsla(var(--grad-color),.6),hsla(var(--grad-color),.6)) 0 0/100% auto no-repeat, url(" + escape(base, true) + "/assets/wind/dragon.webp) -20% 50%/110% auto fixed no-repeat; --element-mob-bg: linear-gradient(hsla(var(--grad-color),.6),hsla(var(--grad-color),.6)) 0 0/100% auto no-repeat, url(" + escape(base, true) + "/assets/wind/dragon.webp) 66% 0/auto 100vh scroll repeat; --element-color:240, 50%, 50%; --subtitle-color:240, 50%, 55%; background-blend-mode: screen, normal;"}">
  <section class="video"><iframe class="video-player" src="https://vimeo.com/showcase/8083334/embed" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe></section>

  <section id="transcript" class="transcript-group"><div class="content-item"><h2>Music Chamber</h2>
        <p class="subtitle">Becoming Free Like the Wind</p>
        ${validate_component(JournalButton, "JournalButton").$$render($$result, Object.assign({}, jourButtonPos), {}, {})}<br>

        <p>The goal of this chamber is to share songs that uplift the spirit and stir up joy in our hearts. So please let loose, sing along and allow the music to move you! You can share your videos below.</p>
        <p>As long as there has been air to breathe, there has been music dancing on the breeze. The deep and incessant rumbling of drums has ushered armies into battle. The distant sounding of a bell has told time for those who care to count its chimes. A mother’s lilting voice has sung a weary infant back to sleep.</p>

        <p>Even the animal kingdom has contributed to this vast realm of music. The forests would be astonishingly quiet if no songbirds sang. Whales, the largest mammals on the planet, are known for their beautiful vocalisations, though they are rarely heard by human ears.</p>

        <p>Some psychologists believe that before the development of language, music was being made by the emerging pockets of humanity. Whatever the case, the histories of music and language are deeply intertwined. Yet where language so often fails to convey a particular feeling, a rich musical experience can bring one to tears without any words whatsoever. Music elevates the spirit and expresses emotion in its purest form.</p>

        <figure class="quotes" style="--max-width: 13em;"><blockquote>When I sing, <br>
            trouble can sit<br>
            right on my shoulder<br>
            and I don&#39;t even notice
          </blockquote>
          <figcaption>—Sarah Vaughan
          </figcaption></figure>

        <p>We invite you to share <a href="mailto:creativeresilience@khyentsefoundation.org">here</a>.</p>

        <p>Due to copyright laws all submissions must either be an original composition, or be at least 100 years old. All submissions must include the lyrics subtitled at the bottom so we can sing along. It&#39;s also nice to include a short introduction to make it personal for the viewers.</p></div>
      <div class="transcript-item goto-links"><h3 class="side-title subtitle">Explore Wind</h3>
        <ul class="goto-content-links"><li><a class="dark" href="${escape(base, true) + "/wind/inaction-to-action"}">Inaction to Action</a></li>
          <li><a class="dark" href="${escape(base, true) + "/wind/generosity-and-the-brain"}">Generosity and the Brain</a></li>
          <li><a class="dark" href="${escape(base, true) + "/wind/sharing-wind"}">Sharing the Freedom of Wind</a></li>
          <li><a class="dark" href="../">…and more</a></li></ul></div></section></main>
${validate_component(Journal, "Journal").$$render($$result, Object.assign({}, journalData), {}, {})}`;
});
export {
  Page as default
};

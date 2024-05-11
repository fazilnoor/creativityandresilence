import { c as create_ssr_component, e as escape, v as validate_component } from "../../../../../chunks/index.js";
import { b as base } from "../../../../../chunks/paths.js";
import { J as JournalButton, a as Journal } from "../../../../../chunks/JournalButton.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { journalData = {
    questions: [
      "Try committing some random acts of kindness such as: pay for someone else's coffee in line at Starbuck's; learn the names of the people you see every day (your door man, your fellow dog walkers, your waitress) and speak to them by name; clean up someone else's mess without shaming them; hide dollar bills in the supermarket shelves. After a day of these random acts, how do you feel?",
      "As a child, what did your family experience teach you about giving?",
      "How can you be more giving to those close to you?"
    ],
    title: "Generosity and the Brain",
    bgColor: "hsl(70, 100%, 0%)",
    bgImg: `${base}/assets/wind/journal-generosity-bg.webp`,
    bgPosition: "60% 30%",
    bgSize: "auto 100%",
    bullets: "120, 100%, 50%"
  } } = $$props;
  let { jourButtonPos = {
    right: "10%",
    top: "50%",
    posType: "fixed",
    alpha: ".25",
    glow: "355,75%,85%",
    mobTop: "20%"
  } } = $$props;
  if ($$props.journalData === void 0 && $$bindings.journalData && journalData !== void 0)
    $$bindings.journalData(journalData);
  if ($$props.jourButtonPos === void 0 && $$bindings.jourButtonPos && jourButtonPos !== void 0)
    $$bindings.jourButtonPos(jourButtonPos);
  return `${$$result.head += `<!-- HEAD_svelte-1dc95ns_START -->${$$result.title = `<title>Wind: Generosity and the Brain</title>`, ""}<!-- HEAD_svelte-1dc95ns_END -->`, ""}
<main class="content-page center" style="${"--grad-color: 170, 50%, 95%; --element-bg: linear-gradient(90deg, hsla(var(--grad-color),0),hsla(var(--grad-color),0.2) 10%, hsla(var(--grad-color),0.3) 20%,hsla(var(--grad-color),0.5) 50%, hsla(var(--grad-color),0.3) 90%, hsla(var(--grad-color),0) 100%) 0 0/100% auto no-repeat, url(" + escape(base, true) + "/assets/wind/wind-generosity-bg.webp) 80% 0/105% auto fixed repeat; --element-mob-bg: linear-gradient(180deg, hsla(var(--grad-color), .5) 33%, hsla(var(--grad-color), .8)), url(" + escape(base, true) + "/assets/wind/wind-generosity-bg.webp) 0 0/auto 100vh scroll repeat; --desc-bg-color: hsla(45, 50%, 75%, .9);--desc-copy-color: var(--light-color); --element-color: 335, 100%,55%; --subtitle-color: 335, 90%, 66%; background-blend-mode: lighten; --cs2: 320, 100%, 75%; --cs1: 280, 100%, 66%;"}">
  <section class="banner"><h2>Generosity and the Brain</h2>
    <p class="subtitle shiftgrad"><span>When Did You Last Feel the Gates of Heaven Open?</span></p></section>
  <section class="exercise">${validate_component(JournalButton, "JournalButton").$$render($$result, Object.assign({}, jourButtonPos), {}, {})}

      <figure class="quotes" style="--max-width: 16em;"><blockquote>When you give <br>
The gates of heaven open <br>
And blessings descend upon you.
        </blockquote>
        <figcaption>—Rabbi Menachen Schheerson</figcaption></figure>

<br>
    <p>The best way to activate positive-emotion circuits in the brain is through generosity, said Professor Davidson, who founded the Center for Investigating Healthy Minds at the University of Wisconsin, Madison. This is a really exciting neuroscientific finding, validating the pearls of wisdom in the contemplative tradition. The Dalai Lama frequently teaches that the best way for us to be happy is to be generous to others. Scientific evidence is in many ways bearing this out and showing how there are systematic changes in the brain that are associated with acts of generosity.</p>

    <p>Read more in the Atlantic article <a class="dark" href="https://www.theatlantic.com/health/archive/2015/07/dalai-lama-neuroscience-compassion/397706/">The Brains of the Buddhists</a>.</p>
<br>
    <h3>Joy And Gratefulness</h3>
    <figure class="quotes" style="--max-width: 16em;"><blockquote><p>Gratefulness is the Key to a happy life
          because if we are not grateful
          then no matter how much we have
          we will not be happy -
          because we will always want to have
          something else or something more.
        </p>

        <p>The root of joy is gratefulness…
          It is not joy that makes us grateful;
          it is gratitude that makes us joyful—
          everything is a gift.
        </p></blockquote>
      <figcaption>—Brother David Steindl-Rast</figcaption></figure>
<hr>
<p class="continue-links light">Learn about the <a href="${escape(base, true) + "/wind/poetry-workshop"}">Poetry Workshop</a>, 
try <a href="${escape(base, true) + "/wind/creating-new-pathways"}">Creating New Pathways</a>, meet the <a href="${escape(base, true) + "/wind/voice-of-wind"}">Voice of Wind</a> or explore more of the <a href="${escape(base, true) + "/wind"}">Wind Element</a>.
</p></section></main>
${validate_component(Journal, "Journal").$$render($$result, Object.assign({}, journalData), {}, {})}`;
});
export {
  Page as default
};

import { c as create_ssr_component, e as escape, v as validate_component } from "../../../../../chunks/index.js";
import { b as base } from "../../../../../chunks/paths.js";
import { J as JournalButton, a as Journal } from "../../../../../chunks/JournalButton.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { journalData = {
    questions: [
      "After having used self-hypnosis with one goal in mind for 7 consecutive days, what results do you find?",
      "What makes you feel safe?",
      "When you imagine in detail one of your goals being fully accomplished, how do you feel?"
    ],
    title: "Self Hypnosis",
    bgColor: "hsl(70, 100%, 0%)",
    bgImg: `${base}/assets/earth/journal-self-hypnosis.jpg`,
    bgPosition: "0 30%",
    bgSize: "cover",
    bullets: "60, 100%, 50%"
  } } = $$props;
  let { jourButtonPos = {
    right: "10%",
    top: "10%",
    posType: "fixed",
    alpha: ".3",
    glow: "60,33%,25%",
    mobTop: "6%"
  } } = $$props;
  if ($$props.journalData === void 0 && $$bindings.journalData && journalData !== void 0)
    $$bindings.journalData(journalData);
  if ($$props.jourButtonPos === void 0 && $$bindings.jourButtonPos && jourButtonPos !== void 0)
    $$bindings.jourButtonPos(jourButtonPos);
  return `${$$result.head += `<!-- HEAD_svelte-1xswie4_START -->${$$result.title = `<title>Earth: Self Hypnosis</title>`, ""}<!-- HEAD_svelte-1xswie4_END -->`, ""}
<main class="content-page center" style="${"--grad-color: 240, 10%, 80%; --element-bg: linear-gradient(90deg, hsla(var(--grad-color),0),hsla(var(--grad-color),0.2) 10%, hsla(var(--grad-color),0.4) 20%,hsla(var(--grad-color),0.6) 50%, hsla(var(--grad-color),0.4) 90%, hsla(var(--grad-color),0) 100%) 0 0/100% auto no-repeat, url(" + escape(base, true) + "/assets/earth/earth_dakini_section_overlay.png) 0 33%/cover fixed no-repeat; --element-mob-bg: linear-gradient(90deg, hsla(var(--grad-color), .1),hsla(var(--grad-color), .5) 25%,hsla(var(--grad-color), .5) 75%,hsla(var(--grad-color), .1) ), url(" + escape(base, true) + "/assets/earth/earth_dakini_section_overlay.png) 0 0/auto 100vh scroll repeat; --desc-bg-color: hsla(45, 50%, 75%, .9); --desc-copy-color: var(--light-color); --element-color: 50, 50%, 75%; --subtitle-color: 50, 60%, 90%; --cs1: 210, 100%, 75%; --cs2: 250, 100%, 80%;"}">
  <section class="banner"><h2>Self Hypnosis <small>4:00</small></h2>
    <p class="subtitle shiftgrad"><span>Accomplish New Goals</span></p></section>
  <section class="exercise">${validate_component(JournalButton, "JournalButton").$$render($$result, Object.assign({}, jourButtonPos), {}, {})}
    <div class="audio"><iframe width="100%" height="20" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1023317653%3Fsecret_token%3Ds-F5zsjcXsxld&color=%23ffff00&inverse=true&auto_play=false&show_user=true"></iframe>
      <span class="runtime">4:45</span></div>
    <p><small>Audio presentation by Sandra Scales, Ph. D.</small></p>
      <h3>Have You Ever Tried to Hypnotize Yourself?</h3>
      <p>Here is a brief method for self-hypnosis which can help you relax, accomplish new goals, change habits and increase performance. Learn with the audio or read below.
      </p>
      <h4>To Begin</h4>
      <p>Find one goal that is important and is not in the category of major life change. It is best to start small and get used to the process and then increase your goals.</p>

      <p>State your goal in the present tense while you see yourself accomplishing it. For example, if you want to dance everyday, you could say the following:</p>

      <div class="figure-text"><img src="${escape(base, true) + "/assets/earth/self_hypnosis.png"}" alt="Illustration of a seated woman visualizing herself dancing">
        <p class="larger element-color">“This is me, <br>
          I feel safe and protected. <br>
          I am dancing every day and enjoying myself, <br>
          and I feel good, deep inside.”</p></div>
      <p>Here are some more examples:</p>
      <ul><li>This is me, I feel safe and protected. I am speaking in front of a group, I am calm and confident and I feel good deep inside.</li>
        <li>This is me, I feel safe and protected. I am losing weight in a healthy way and I feel good deep inside.</li>
        <li>This is me, I feel safe and protected. I am exercising every day and enjoying myself and I feel good deep inside.</li></ul>
      <p>It is important to say out loud, “I feel safe and protected and I feel good deep inside.” Allow your words and feelings to flow into the unconscious mind. Doing so will open the unconscious mind to new suggestions.</p>

      <p>Repeat this affirmation out loud 3 to 21 times in a session, as you visualize yourself. Doing this for 21 days is optimum, but even 3 days can bring some success.</p>

      <p>Use all your senses. The more senses you are able to use, the stronger your affirmation will be. Don’t worry if you cannot see a picture of yourself or your goal. Just imagine the best you can.</p>

      <p>Use all your senses:</p>

      <ul><li>Auditory: Repeat out loud: I am dancing every day and enjoying myself and I feel good deep inside.</li>
        <li>Visual: See and imagine what you are saying to yourself (i.e. a picture in front of you dancing. Remember, we’re using dancing as an example here.).</li>
        <li>Kinesthetic: When you say “I feel good” feel that you’re accomplishing your goal and you feel good deep inside.</li></ul>
      <p>As you get used to the process it will become quite natural and you can continue with more significant goals.
      </p>
      <hr>
      <p class="continue-links">Try the <a href="${escape(base, true) + "/earth/grounding-meditation"}">Grounding Meditation</a>, find your <a href="${escape(base, true) + "/earth/path-to-the-heart"}">Path to the Heart</a>, learn about the <a href="${escape(base, true) + "/earth/art-workshop"}">Art Workshop</a> or explore more of the <a href="${escape(base, true) + "/earth"}">Earth Element</a>.
      </p></section></main>
${validate_component(Journal, "Journal").$$render($$result, Object.assign({}, journalData), {}, {})}`;
});
export {
  Page as default
};

import { c as create_ssr_component, e as escape, v as validate_component } from "../../../../../chunks/index.js";
import { b as base } from "../../../../../chunks/paths.js";
import { J as JournalButton, a as Journal } from "../../../../../chunks/JournalButton.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { journalData = {
    questions: [
      "Who in your life really listens to you and how does it make you feel?",
      "When you listen to yourself with an open mind, what do you learn?",
      "How could you create more time for listening to your loved ones?"
    ],
    title: "The Art of Listening",
    bgColor: "hsl(180, 100%, 0%)",
    bgImg: `${base}/assets/water/journal-art-of-listening.webp`,
    bgPosition: "50% 100%",
    bgSize: "100% auto",
    bullets: "185, 100%, 50%"
  } } = $$props;
  let { jourButtonPos = {
    right: "5%",
    top: "10%",
    posType: "fixed",
    alpha: ".7",
    glow: "60,50%,95%",
    mobTop: "57%"
  } } = $$props;
  if ($$props.journalData === void 0 && $$bindings.journalData && journalData !== void 0)
    $$bindings.journalData(journalData);
  if ($$props.jourButtonPos === void 0 && $$bindings.jourButtonPos && jourButtonPos !== void 0)
    $$bindings.jourButtonPos(jourButtonPos);
  return `${$$result.head += `<!-- HEAD_svelte-o8g1ry_START -->${$$result.title = `<title>Water: The Art of Listening</title>`, ""}<!-- HEAD_svelte-o8g1ry_END -->`, ""}
<main class="content-page" style="${"--grad-color: 180,25%,85%;--element-bg: linear-gradient(90deg, hsla(var(--grad-color), 0), hsla(var(--grad-color), 0.85) 15%, hsla(var(--grad-color), 0.85) 75%, hsla(var(--grad-color), 0)) 0 0/41em auto no-repeat, url(" + escape(base, true) + "/assets/water/water_dakini_bg7.webp) 75% 100%/200% auto fixed no-repeat; --element-mob-bg: linear-gradient(90deg, hsla(var(--grad-color), 0), hsla(var(--grad-color), 0.85) 15%, hsla(var(--grad-color), 0.85) 75%, hsla(var(--grad-color), 0)) 0 0/41em auto no-repeat, url(" + escape(base, true) + "/assets/water/water_dakini_bg7.webp) 50% 0/auto 100vh scroll repeat; --element-color: 211, 90%, 26%; --subtitle-color: 176, 100%, 33%; --cs1: 272, 90%, 50%;; --cs2: 156, 90%, 50%;"}">
    
    <section class="banner"><h2>The Art of Listening <br>is to Listen and Love</h2>
      <p class="subtitle shiftgrad"><span>Everyone&#39;s Talking but Who&#39;s Listening?</span></p>
      <br>
    
      ${validate_component(JournalButton, "JournalButton").$$render($$result, Object.assign({}, jourButtonPos), {}, {})}</section>
    <section class="intoduction contrast">

      <div class="audio"><iframe width="100%" height="20" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/967120612%3Fsecret_token%3Ds-F5zsjcXsxld&color=%23ffff00&inverse=true&auto_play=false&show_user=true"></iframe>
        <span class="runtime">3:00</span></div>
      <p><small>Audio presentation by therapist Deborah Dorje.</small></p>


        <figure class="quotes" style="--max-width: 21em;"><blockquote>Deep Listening simply means listening with compassion. Even if the other person is full of wrong perceptions, discrimination, blaming, judging and criticizing, you are still capable of sitting quietly and listening without interrupting, without reacting. Because you can know that if you listen like that, the other person will feel enormous relief. Remember that you are listening with only one purpose in mind: to give the other person a chance to express themselves.
          </blockquote>
          <figcaption>—The Venerable Thich Nhat Hanh
          </figcaption></figure>

      <h3>A Simple Guide to the Art of Listening
      </h3>
      <p class="subtitle">Love Listens</p>
      <p>A wise being once said happiness comes from giving to others. So to listen to another is a gift, offered freely with no judgment and complete acceptance. In order to develop emotional and mental resilience we need to know we are not facing difficult times alone. We need to feel connected and heard.</p>
      <div class="big-initial"><p><i>Listening</i> to the person, not the problem, with spacious awareness and calm compassionate attention.</p>
        <p><i>Inviting</i> the other to speak with only one thought in mind, to give space for the other to express themselves freely.</p>
        <p><i>Showing</i> acceptance of what is being said, with relaxed body language, expression and eye contact.</p>
        <p><i>To understand</i> that the other suffers as long as they have no one to listen and you, you are the person who can relieve that suffering.</p>
        <p><i>Empathy</i> not sympathy. Sympathy is looking at someone with understanding, but empathy is looking <em>with them</em>, seeing the view from where they are. Empathy comes from the heart.</p>
        <p><i>No need</i> to provide answers or rush to solutions. Compassionate listeners can affirm and accept whatever thoughts and feelings arise without the urge to fix the problem.</p>
        <p><i>Allowing</i> silence patiently. Knowing the difference between a thoughtful silence and a silence where someone doesn’t quite know how to begin.</p>
        <p><i>No need</i> to rush, just relax. Allow the emotions to become words that can be expressed.</p>
        <p><i>Discretion</i> and confidentiality are important in order to create a secure space for being heard.</p>
        <p><i>Listen</i> to understand, not to reply.</p>
        <p><i>Offering</i> a simple phrase such as &quot;Go on...&quot;, or &quot;And then...&quot; Works like magic.</p>
        <p><i>Valuing</i> the person, not the problem. Problems can sometimes seem insurmountable. A listener can’t take the problem away or offer well-meaning reassurance, but can simply be there with body and mind open and curious.</p>
        <p><i>Encouraging</i> and affirming, the listening space is creative, kind and full of possibilities.</p></div>
      <hr>
      <p class="continue-links light">Learn about <a href="${escape(base, true) + "/water/finding-flexibility"}">Finding Flexibility</a>, try <a href="${escape(base, true) + "/water/water-meditation"}">Water Meditation</a>, listen to the <a href="${escape(base, true) + "/water/podcast-resilience"}">Resilience Podcast</a> or explore more of the <a href="${escape(base, true) + "/water"}">Water Element</a>.</p></section>
    <section class="creator-bio"><p>Inspired and informed by the words of The Venerable Thich Nhat Hanh and the quiet dedication of the Samaritans UK</p></section></main>

  ${validate_component(Journal, "Journal").$$render($$result, Object.assign({}, journalData), {}, {})}`;
});
export {
  Page as default
};

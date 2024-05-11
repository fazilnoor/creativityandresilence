import { c as create_ssr_component, e as escape, v as validate_component } from "../../../../../chunks/index.js";
import { b as base } from "../../../../../chunks/paths.js";
import { J as JournalButton, a as Journal } from "../../../../../chunks/JournalButton.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { journalData = {
    questions: [
      "Have you ever found chaos to be a fertile ground for establishing a new way forward?",
      "What unmet personal needs of your own might chaos be covering up?",
      "How does order help you do your best--or does it?"
    ],
    title: "Changing Inaction to Action",
    bgColor: "hsl(70, 100%, 0%)",
    bgImg: `${base}/assets/wind/journal-inaction-to-action-bg2.webp`,
    bgPosition: "50% 0",
    bgSize: "auto 100%",
    bullets: "120, 100%, 50%"
  } } = $$props;
  let { jourButtonPos = {
    right: "12%",
    top: "23%",
    posType: "fixed",
    alpha: ".25",
    glow: "60,100%,95%",
    mobTop: "25%"
  } } = $$props;
  if ($$props.journalData === void 0 && $$bindings.journalData && journalData !== void 0)
    $$bindings.journalData(journalData);
  if ($$props.jourButtonPos === void 0 && $$bindings.jourButtonPos && jourButtonPos !== void 0)
    $$bindings.jourButtonPos(jourButtonPos);
  return `${$$result.head += `<!-- HEAD_svelte-8jxy3c_START -->${$$result.title = `<title>Wind: Changing Inaction to Action</title>`, ""}<!-- HEAD_svelte-8jxy3c_END -->`, ""}
<main class="content-page center" style="${"--grad-color: 170, 50%, 95%; --element-bg: linear-gradient(90deg, hsla(var(--grad-color),0),hsla(var(--grad-color),0.2) 10%, hsla(var(--grad-color),0.3) 20%,hsla(var(--grad-color),0.5) 50%, hsla(var(--grad-color),0.3) 90%, hsla(var(--grad-color),0) 100%) 0 0/100% auto no-repeat, url(" + escape(base, true) + "/assets/wind/wind-landscape.webp) 0 0/100% auto fixed repeat; --element-mob-bg: linear-gradient(180deg, hsla(var(--grad-color),0.2), hsla(var(--grad-color),0.5) 25%, hsla(var(--grad-color),0.9)), url(" + escape(base, true) + "/assets/wind/wind-landscape.webp) 72% 0/auto 100vh scroll repeat; --desc-bg-color: hsla(45, 50%, 75%, .9);--desc-copy-color: var(--light-color); --element-color: 319, 80%,33%; --subtitle-color: 319, 80%, 40%; background-blend-mode: lighten; --cs2: 310, 100%, 50%; --cs1: 360, 75%, 60%;"}">
  <section class="banner"><h2>Changing Inaction to Action</h2>
    <p class="subtitle shiftgrad"><span>Overwhelmed?<br>
        Let&#39;s Organize This Chaos
      </span></p></section>
  <section class="exercise">${validate_component(JournalButton, "JournalButton").$$render($$result, Object.assign({}, jourButtonPos), {}, {})}
      <p>During trying times, it is common to experience overwhelm and even become frozen and unable to act. All we do is think about what we should do, but we can&#39;t do it. The mind&#39;s connection to action seems to be lost.</p>

      <p>The following is a method which can be useful. Though a list is something we all have made hundreds of times before, this list has two other components that help create action. You may want to experiment with this.</p>
      
      <p>Listen to this method of changing inaction to action or read more below</p>
    <div class="audio"><iframe width="100%" height="20" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1023315184&color=%23ffff00&inverse=true&auto_play=false&show_user=true"></iframe>
      <span class="runtime">4:00</span></div>
    <br>
    <p>First make a list of 3 - 5 actions you would like to do in the next week or so. Encourage yourself by making the list items easy. Be creative, be silly and don&#39;t think big--think small. For example:</p>

<ol><li>Cook a favorite meal and enjoy it.</li>

  <li>Clean one drawer and be happy with it.</li>

  <li>Sort and donate clothes you don&#39;t need.</li>

  <li>Go for a walk and have an ice cream.</li>

  <li>Turn on music you love and dance.</li></ol>
<p>The trick to this list is that you pause after you&#39;ve checked off a list item and allow yourself to feel good about your accomplishment, even though it may have been a small thing. Don&#39;t make any task trite or demean yourself ever. Demeaning freezes one emotionally and causes inaction and procrastination.</p>

<p>You do not need to feel like doing what is on the list. As long as you begin, do one task, complete it and feel satisfied, you are changing an unconscious pattern. As you continue you will notice that when you change your focus and follow with action your emotional state begins to change as well. Here, with a very simple technique, you are recreating the cycle of thought connecting to action.</p>

<hr>
<p class="continue-links light">Continue with <a href="${escape(base, true) + "/wind/creating-new-pathways"}">Creating New Pathways</a>, 
listen to the <a href="${escape(base, true) + "/wind/podcast-freedom"}">Freedom Podcast</a>, learn about <a href="${escape(base, true) + "/wind/changing-your-mood"}">Changing Your Mood</a> or explore more of the <a href="${escape(base, true) + "/wind"}">Wind Element</a>.
</p></section></main>
${validate_component(Journal, "Journal").$$render($$result, Object.assign({}, journalData), {}, {})}`;
});
export {
  Page as default
};

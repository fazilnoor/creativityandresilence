import { c as create_ssr_component, e as escape, v as validate_component } from "../../../../../chunks/index.js";
import { b as base } from "../../../../../chunks/paths.js";
import { S as Slides } from "../../../../../chunks/Slides.js";
import { J as JournalButton, a as Journal } from "../../../../../chunks/JournalButton.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { journalData = {
    questions: [
      "What instantly puts you in a good mood?",
      "What are your worst moods?",
      "What concrete steps can you take to change an unwanted mood?"
    ],
    title: "Changing Your Mood",
    bgColor: "hsl(180, 100%, 0%)",
    bgImg: `${base}/assets/wind/journal-changing-your-mood-bg2.webp`,
    bgPosition: "50% 50%",
    bgSize: "auto 100%",
    bullets: "120, 100%, 50%"
  } } = $$props;
  let { jourButtonPos = {
    right: "-5em",
    top: "12em",
    posType: "absolute",
    alpha: ".25",
    glow: "250,70%, 50%",
    mobTop: "20%"
  } } = $$props;
  let { slideData = {
    slides: [
      {
        type: "slide",
        title: "<h2>Easy and Entertaining Ways<br>to Change Your Mood</h2>",
        desc: `<p>If you're depressed, sad, or anxious, try something new. Share your personal mood-shifting story here.</p><p>Please edit, spellcheck and keep under 150 words. Send to <a href="mailto:creativeresilience@khyentsefoundation.org">creativeresilience@khyentsefoundation.org</a>. We will post as many of the stories as possible.</p>`,
        slideMedia: "",
        slideMediaFallback: "",
        thumb: "",
        thumbFallback: "",
        alt: "",
        bgSettings: "radial-gradient(hsla(300, 100%, 7%, 7), hsla(300, 100%, 2%, .2)), hsl(255, 0%, 0%)",
        copyColor: "var(--light-color)",
        fontWeight: "300"
      },
      {
        type: "slide",
        title: "<h2>Pity-Party</h2>",
        desc: '<p>When I am really feeling sorry for myself and having a "pity-party"  I have to move quickly to not get caught, so I snap into action and think of what I can do for someone else who needs cheering up. My favorite action for this is to find something of mine that I really love and think who would like it. Then I put it in a priority mail box and mail it off to them. This changes my mood every time and brings me immediate joy. The art of forgetting myself and thinking of  someone else never fails me.</p><p><small>—Rita</small></p>',
        slideMedia: "",
        slideMediaFallback: "",
        thumb: "",
        thumbFallback: "",
        alt: "",
        bgSettings: "radial-gradient(hsla(300, 100%, 7%, 7), hsla(300, 100%, 2%, .2)), hsl(255, 0%, 0%)",
        copyColor: "var(--light-color)",
        fontWeight: "300"
      },
      {
        type: "slide",
        title: "<h2>Blowing Bubbles</h2>",
        desc: "<p>When I lived in Australia, though I felt quite connected to the land, I personally felt isolated and alone. One day I was completely depressed, I forced myself to go out and for some unknown odd reason, I bought bubbles. I walked out to the beach and as I sent the bubbles across the water, I noticed the rainbows in them and thought how magical they were. As I watched them float away and out into space, when some bubbles popped my mind seemed to pop with them and open. As I watched the rest dance away into the sky, I just let everything in my mind float away with them and remembered how every thing changes.</p><p><small>—Yvonne</small></p>",
        slideMedia: "",
        slideMediaFallback: "",
        thumb: "",
        thumbFallback: "",
        alt: "",
        bgSettings: "radial-gradient(hsla(300, 100%, 7%, 7), hsla(300, 100%, 2%, .2)), hsl(255, 0%, 0%)",
        copyColor: "var(--light-color)",
        fontWeight: "300"
      },
      {
        type: "slide",
        title: "<h2>Salty Buttered Tea</h2>",
        desc: `<p>About 30 years ago I first visited Paro, Bhutan. One afternoon, my host and I house-hopped to visit some of his friends. After three or four houses, it became increasingly difficult for me to keep drinking the buttered tea we were being served, even if it was just a gesture to taste some to show appreciation.  The buttered tea was creamy with yak butter and salty, quite unlike the English tea served with milk and sugar I was used to.  My host, a very wise man, noticed my predicament and suggested, "Think of it as cream soup.."</p><p>At the next visit, not only did I enjoy the soup, it was not even creamy and salty enough.</p><p>How powerful was this trick of changing one's own perception! What a profound teaching! It totally changed my life.</p><p><small>—Florence</small></p>`,
        slideMedia: "",
        slideMediaFallback: "",
        thumb: "",
        thumbFallback: "",
        alt: "",
        bgSettings: "radial-gradient(hsla(300, 100%, 7%, 7), hsla(300, 100%, 2%, .2)), hsl(255, 0%, 0%)",
        copyColor: "var(--light-color)",
        fontWeight: "300"
      },
      {
        type: "slide",
        title: "<h2>Power of a Smile</h2>",
        desc: "<p>When I’m deep in my inner darkness, here is a method I use as an antidote. I go out walking and allow myself to make eye contact with someone—and  smile, not just an upward arc of a few muscles of the corner of my mouth, but a full face smile. There is no need to converse. I keep my eyes wide open and by raising my eyebrows,  my unhappy eyes are transformed as I  smile with a genuine expressions of openness. A weight is lifted by this simple avenue of human connection. Though I may not be offered a smile in return, sometimes when someone smiles back, it is truly a gift, a circle completed. Then there is a little light to show the way.</p><p><small>—Stefan</small></p>",
        slideMedia: "",
        slideMediaFallback: "",
        thumb: "",
        thumbFallback: "",
        alt: "",
        bgSettings: "radial-gradient(hsla(300, 100%, 7%, 7), hsla(300, 100%, 2%, .2)), hsl(255, 0%, 0%)",
        copyColor: "var(--light-color)",
        fontWeight: "300"
      },
      {
        type: "slide",
        title: "<h2>The Power of Words</h2>",
        desc: "<p>When I'm feeling alone, I read the words of my favorite poets. Their words resonate with my soul, creating a connection with me. Connection means everything to me and takes away my aloneness. For me, words have immense power. And beautiful words have the power to change the way I see and the way I feel.</p><p><small>—Julie</small></p>",
        slideMedia: "",
        slideMediaFallback: "",
        thumb: "",
        thumbFallback: "",
        alt: "",
        bgSettings: "radial-gradient(hsla(300, 100%, 7%, 7), hsla(300, 100%, 2%, .2)), hsl(255, 0%, 0%)",
        copyColor: "var(--light-color)",
        fontWeight: "300"
      },
      {
        type: "slide",
        title: "<h2>Other Wind Pages</h2>",
        desc: '<p><a href="../inaction-to-action">Inaction to Action</a><br><a href="../generosity-and-the-brain">Generosity and the Brain</a><br><a href="../creating-new-pathways">Creating New Pathways</a><br><a href="../">Return to Wind</a></p>',
        slideMedia: "",
        slideMediaFallback: "",
        thumb: "",
        thumbFallback: "",
        alt: "",
        bgSettings: "radial-gradient(hsla(300, 100%, 7%, 7), hsla(300, 100%, 2%, .2)), hsl(255, 0%, 0%)",
        copyColor: "var(--light-color)",
        fontWeight: "300"
      }
    ]
  } } = $$props;
  slideData.slides.length;
  if ($$props.journalData === void 0 && $$bindings.journalData && journalData !== void 0)
    $$bindings.journalData(journalData);
  if ($$props.jourButtonPos === void 0 && $$bindings.jourButtonPos && jourButtonPos !== void 0)
    $$bindings.jourButtonPos(jourButtonPos);
  if ($$props.slideData === void 0 && $$bindings.slideData && slideData !== void 0)
    $$bindings.slideData(slideData);
  return `${$$result.head += `<!-- HEAD_svelte-19zfawi_START -->${$$result.title = `<title>Wind: Changing Your Mood</title>`, ""}<!-- HEAD_svelte-19zfawi_END -->`, ""}
<main class="content-page bleed shorten" style="${"--grad-color:240, 100%, 95%; --element-bg: linear-gradient(90deg, hsla(var(--grad-color), 0), hsla(var(--grad-color), 0) 5%, hsla(var(--grad-color), 0) 50%, hsla(var(--grad-color), 0) 75%), url(" + escape(base, true) + "/assets/wind/changing-mood-bg2.webp) 0% 0%/100% auto repeat fixed;--element-mob-bg: linear-gradient(180deg, hsla(var(--grad-color), 0) 33%, hsla(var(--grad-color), .9)), url(" + escape(base, true) + "/assets/wind/changing-mood-bg2.webp) 0 0/auto 120vh repeat scroll; --element-color:240, 50%, 50%; --subtitle-color:240, 50%, 60%; --cs1: 80, 100%, 60%; --cs2: 40, 100%, 60%;"}"><section class="exercise top-layer"><h2>Easy Ways to Change Your Mood</h2>
    <p class="subtitle shiftgrad"><span>If You&#39;re Depressed, Sad, Or Anxious,
        Try Something New
    </span></p>
      <p>Share your personal mood-shifting story here.</p>
      <p>Please edit, spellcheck and keep under 150 words. Send to <a href="mailto:creativeresilience@khyentsefoundation.org" class="dark">creativeresilience@khyentsefoundation.org</a>. <br>We will post as many of the stories as possible.</p>
      ${validate_component(JournalButton, "JournalButton").$$render($$result, Object.assign({}, jourButtonPos), {}, {})}
      <br><br></section>
  ${validate_component(Slides, "Slides").$$render($$result, Object.assign({}, slideData), {}, {})}
  <section class="exercise"></section></main>
${validate_component(Journal, "Journal").$$render($$result, Object.assign({}, journalData), {}, {})}`;
});
export {
  Page as default
};

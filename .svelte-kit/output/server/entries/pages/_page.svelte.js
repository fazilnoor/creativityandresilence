import { c as create_ssr_component, e as escape } from "../../chunks/index.js";
import { b as base } from "../../chunks/paths.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-1fxwdp8_START -->${$$result.title = `<title>Welcome to Creative Resilience</title>`, ""}<!-- HEAD_svelte-1fxwdp8_END -->`, ""}
<main class="home no-pad"><div class="bg-image" id="bgImage"></div>
  <canvas id="smokeCursor"></canvas>
  <section class="intro" id="scene1"><p class="welcome">Welcome to</p>
    <h2 class="intro-title"><span class="regular">Creative</span><br><span class="ital"><span class="initial">R</span>esilience</span></h2>
    <p><span class="wipe-in">This website offers a toolkit to support happiness, mental wellbeing and resilience during stressful and emotionally challenging times. </span></p>
    <p><span class="wipe-in">Here you will meet the five elements, earth, water, wind, fire and space. Through the lens of these elements, you will find uplifting meditations, psychological exercises, interactive sharing and other mindful ways to enhance your daily life. This is a habitat for joyful experiences and learning.</span></p>

    <p class="enter-site"><a href="#" class="cta-enter" id="enterButton">Enter the experience</a></p></section>
  <section class="mandala-wrap" id="scene2"><div class="mandala"><a href="space" class="space"><div class="circle"><h3><span>Space</span></h3></div></a>
      <a href="earth" class="earth"><div class="circle"><h3><span>Earth</span></h3></div></a>
      <a href="wind" class="wind"><div class="circle"><h3><span>Wind</span></h3></div></a>
      <a href="fire" class="fire"><div class="circle"><h3><span>Fire</span></h3></div></a>
      <a href="water" class="water"><div class="circle"><h3><span>Water</span></h3></div></a></div>
    <div class="mandala-circles" hidden><div class="space"><div class="circle"></div></div>
      <div class="earth"><div class="circle"></div></div>
      <div class="wind"><div class="circle"></div></div>
      <div class="fire"><div class="circle"></div></div>
      <div class="water"><div class="circle"></div></div></div></section>
  <a href="#ambient" id="audioCtl" class="sound-ctl stopped"></a>
  <audio loop id="ambient"><source src="${escape(base, true) + "/assets/might-amp-magic-138999.mp3"}" type="audio/mpeg"></audio></main>`;
});
export {
  Page as default
};

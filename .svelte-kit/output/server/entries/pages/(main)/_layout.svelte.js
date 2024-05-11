import { c as create_ssr_component, b as subscribe, d as each, f as add_attribute, e as escape, v as validate_component } from "../../../chunks/index.js";
import { b as base } from "../../../chunks/paths.js";
import { p as page } from "../../../chunks/stores.js";
const NavBar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  const navItems = [
    {
      target: "#space-menu",
      path: "space",
      name: "Space"
    },
    {
      target: "#wind-menu",
      path: "wind",
      name: "Wind"
    },
    {
      target: "#water-menu",
      path: "water",
      name: "Water"
    },
    {
      target: "#earth-menu",
      path: "earth",
      name: "Earth"
    },
    {
      target: "#fire-menu",
      path: "fire",
      name: "Fire"
    },
    { target: "#all-menu", name: "All Content" }
  ];
  let location;
  location = $page.url.pathname;
  $$unsubscribe_page();
  return `<nav class="main-nav" id="topNav"><ul id="topMenu">${each(navItems, (item) => {
    return `<li><a${add_attribute("href", item.target, 0)}${add_attribute("data-path", item.path ? item.path : "", 0)} class="${"nav-link " + escape(location.includes(item.path) ? "located" : "", true)}">${escape(item.name)}</a>
      </li>`;
  })}</ul></nav>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let year = (/* @__PURE__ */ new Date()).getFullYear();
  return `


<header class="masthead"><div class="site-name"><a href="${escape(base, true) + "/"}"><img src="${escape(base, true) + "/assets/cr-wordmark.svg"}" alt="Creative Resilience homepage" class="logo"></a></div>
  ${validate_component(NavBar, "NavBar").$$render($$result, {}, {}, {})}</header>
  ${slots.default ? slots.default({}) : ``}


<footer class="site-footer"><section class="group"><div class="item category"><a href="${escape(base, true) + "/"}"><img src="${escape(base, true) + "/assets/cr-wordmark.svg"}" alt="Creative Resilience homepage" class="footer-logo"></a></div>
    <div class="item category"><h3 class="subtitle">About Us</h3>
      <ul><li><a href="${escape(base, true) + "/about/#aboutInstructors"}">The Instructors</a></li>
        <li><a href="${escape(base, true) + "/about/#aboutArtists"}">About the Artists</a></li>
        <li><a href="${escape(base, true) + "/about"}">The Project</a></li></ul></div>
    <div class="item category"><h3 class="subtitle">About the Site
      </h3>
      <ul><li><a href="${escape(base, true) + "/faqs"}">How to use this site</a></li>
        <li><a href="${escape(base, true) + "/meet-the-guardians"}">More about the Guardians</a></li>
        <li><a href="${escape(base, true) + "/journals"}">Journaling/Explore your Experience</a></li></ul></div>

    <div class="item category"><h3 class="subtitle">The Elements</h3>
      <ul><li><a class="menuClose" href="${escape(base, true) + "/space"}">Space</a></li>
        <li><a class="menuClose" href="${escape(base, true) + "/wind"}">Wind</a></li>
        <li><a class="menuClose" href="${escape(base, true) + "/water"}">Water</a></li>
        <li><a class="menuClose" href="${escape(base, true) + "/earth"}">Earth</a></li>
        <li><a class="menuClose" href="${escape(base, true) + "/fire"}">Fire</a></li></ul></div>
    <div class="item category"><h3 class="subtitle">Connections</h3>
      <p><a href="mailto:creativeresilience@khyentsefoundation.org">Contact Us</a></p>
      <ul class="social-media"><li><a target="_blank" href="https://www.instagram.com/creativityandresilience/" class="social"><span class="icon"><img src="${escape(base, true) + "/assets/icons/instagram.svg"}" alt="Follow on Instagram"></span>Instagram</a></li>
        </ul></div></section>
  <div class="group site-notes"><p class="copyright item">© ${escape(year)} Khyentse Foundation
    </p>
    <ul class="item legal-links"><li><a href="${escape(base, true) + "/privacy-policy"}">Privacy</a></li>
      <li><a href="${escape(base, true) + "/legal-disclaimers"}">Disclaimers</a></li></ul></div></footer>
<section id="water-menu" class="menu-panel"><div class="menus"><a href="#" class="menuClose closeCta" hidden tabindex="-1"><span>Close Menu</span></a>
    
    <div class="category"><p class="menu-header" data-menu="waterPsych">Psychological Exercises</p>
      <div id="waterPsych"><ul><li><a class="menuClose" href="${escape(base, true) + "/water/art-of-listening"}">Art of Listening</a></li>
          <li><a class="menuClose" href="${escape(base, true) + "/water/finding-flexibility"}">Finding Flexibility</a></li></ul></div></div>
    <div class="category"><p class="menu-header" data-menu="waterMed">Meditations</p>
      <div id="waterMed"><ul><li><a class="menuClose" href="${escape(base, true) + "/water/water-meditation"}">Water Meditation</a></li></ul></div></div>
    <div class="category"><p class="menu-header" data-menu="waterPod">Podcasts</p>
      <div id="waterPod"><ul><li><a class="menuClose" href="${escape(base, true) + "/water/podcast-resilience"}">Resilience Podcast</a></li>
          <li><a class="menuClose" href="${escape(base, true) + "/water/podcast-flow"}">Flow Podcast</a></li></ul></div></div>
    <div class="category"><p class="menu-header" data-menu="waterShare">Sharing</p>
      <div id="waterShare"><ul><li><a class="menuClose" href="${escape(base, true) + "/water/sharing-water"}">Sharing Visions of Water</a></li></ul></div></div>
    <div class="category center"><ul><li><a class="menuClose" href="${escape(base, true) + "/water/voice-of-water"}">Voice of Water</a></li>
        <li><a href="${escape(base, true) + "/water"}" class="circle"><img class="menuClose" src="${escape(base, true) + "/assets/water-mandala.webp"}" alt=""></a></li>
        <li><a class="menuClose" href="${escape(base, true) + "/water"}">Go to Water</a></li></ul></div></div></section>
<section id="earth-menu" class="menu-panel"><div class="menus"><a href="#" class="menuClose closeCta"><span>Close Menu</span></a>
    <div class="category"><p class="menu-header" data-menu="earthPsych">Psychological Exercises</p>
      <div id="earthPsych"><ul><li><a class="menuClose" href="${escape(base, true) + "/earth/kindness-to-self"}">Kindness to Self</a></li>
          <li><a class="menuClose" href="${escape(base, true) + "/earth/path-to-the-heart"}">Path to the Heart</a></li>
          <li><a class="menuClose" href="${escape(base, true) + "/earth/quieting-inner-critic"}">Quieting Inner Critics</a></li>
          <li><a class="menuClose" href="${escape(base, true) + "/earth/the-inner-critic"}">The Inner Critic</a></li>
          <li><a class="menuClose" href="${escape(base, true) + "/earth/self-hypnosis"}">Self Hypnosis</a></li></ul></div></div>
    <div class="category"><p class="menu-header" data-menu="earthMed">Meditations</p>
      <div id="earthMed"><ul><li><a class="menuClose" href="${escape(base, true) + "/earth/grounding-meditation"}">Grounding Meditation</a></li></ul></div></div>
    <div class="category"><p class="menu-header" data-menu="earthClasses">Classes</p>
      <div id="earthClasses"><ul><li><a class="menuClose" href="${escape(base, true) + "/earth/fresh-mind-cooking"}">Fresh Mind Cooking</a></li>
          <li><a class="menuClose" href="${escape(base, true) + "/earth/art-workshop"}">Art Workshop</a></li></ul></div></div>
    <div class="category"><p class="menu-header" data-menu="earthShare">Sharing</p>
      <div id="earthShare"><ul><li><a class="menuClose" href="${escape(base, true) + "/earth/sharing-earth"}">Sharing the Beauty of Earth</a></li></ul></div></div>
    <div class="category center"><ul><li><a class="menuClose" href="${escape(base, true) + "/earth/voice-of-earth"}">Voice of Earth</a></li>
        <li><a href="${escape(base, true) + "/earth"}" class="circle"><img class="menuClose" src="${escape(base, true) + "/assets/earth-mandala.webp"}" alt=""></a></li>
        <li><a class="menuClose" href="${escape(base, true) + "/earth"}">Go to Earth</a></li></ul></div></div></section>
<section id="wind-menu" class="menu-panel"><div class="menus"><a href="#" class="menuClose closeCta"><span>Close Menu</span></a>
    <div class="category"><p class="menu-header" data-menu="windPsych">Psychological Exercises</p>
      <div id="windPsych"><ul><li><a class="menuClose" href="${escape(base, true) + "/wind/inaction-to-action"}">Inaction to Action</a></li>
          <li><a class="menuClose" href="${escape(base, true) + "/wind/creating-new-pathways"}">Creating New Pathways</a></li>
          <li><a class="menuClose" href="${escape(base, true) + "/wind/generosity-and-the-brain"}">Generosity and the Brain</a></li></ul></div></div>
    <div class="category"><p class="menu-header" data-menu="windClasses">Classes</p>
      <div id="windClasses"><ul><li><a class="menuClose" href="${escape(base, true) + "/wind/poetry-workshop"}">Poetry Workshop</a></li></ul></div></div>
    <div class="category"><p class="menu-header" data-menu="windPod">Podcasts</p>
      <div id="windPod"><ul><li><a class="menuClose" href="${escape(base, true) + "/wind/podcast-freedom"}">Freedom Podcast</a></li></ul></div></div>
    <div class="category"><p class="menu-header" data-menu="windShare">Sharing</p>
      <div id="windShare"><ul><li><a class="menuClose" href="${escape(base, true) + "/wind/music-chamber"}">Music Chamber</a></li>
          <li><a class="menuClose" href="${escape(base, true) + "/wind/changing-your-mood"}">Changing Your Mood</a></li>
          <li><a class="menuClose" href="${escape(base, true) + "/wind/sharing-wind"}">Sharing the Freedom of Wind</a></li></ul></div></div>
    <div class="category center"><ul><li><a class="menuClose" href="${escape(base, true) + "/wind/voice-of-wind"}">Voice of Wind</a></li>
        <li><a href="${escape(base, true) + "/wind"}" class="circle"><img class="menuClose" src="${escape(base, true) + "/assets/wind-mandala.webp"}" alt=""></a></li>
        <li><a class="menuClose" href="${escape(base, true) + "/wind"}">Go to Wind</a></li></ul></div></div></section>
<section id="fire-menu" class="menu-panel"><div class="menus"><a href="#" class="menuClose closeCta"><span>Close Menu</span></a>
    <div class="category"><p class="menu-header" data-menu="firePsych">Psychological Exercises</p>
      <div id="firePsych"><ul><li><a class="menuClose" href="${escape(base, true) + "/fire/dissolving-anger"}">Dissolving Anger</a></li>
          <li><a class="menuClose" href="${escape(base, true) + "/fire/stop-obsessive-thinking"}">Stop Obsessive Thinking</a></li></ul></div></div>
    <div class="category"><p class="menu-header" data-menu="fireMed">Meditations</p>
      <div id="fireMed"><ul><li><a class="menuClose" href="${escape(base, true) + "/fire/fire-meditation"}">Fire Meditation</a></li></ul></div></div>
    <div class="category"><p class="menu-header" data-menu="firePod">Podcasts</p>
      <div id="firePod"><ul><li><a class="menuClose" href="${escape(base, true) + "/fire/podcast-creativity"}">Creativity Podcast</a></li></ul></div></div>
    <div class="category"><p class="menu-header" data-menu="fireShare">Sharing</p>
      <div id="fireShare"><ul><li><a class="menuClose" href="${escape(base, true) + "/fire/sharing-fire"}">Sharing the Passion of Fire</a></li></ul></div></div>
    <div class="category center"><ul><li><a class="menuClose" href="${escape(base, true) + "/fire/voice-of-fire"}">Voice of Fire</a></li>
        <li><a href="${escape(base, true) + "/fire"}" class="circle"><img class="menuClose" src="${escape(base, true) + "/assets/fire-mandala.webp"}" alt=""></a></li>
        <li><a class="menuClose" href="${escape(base, true) + "/fire"}">Go to Fire</a></li></ul></div></div></section>

<section id="space-menu" class="menu-panel"><div class="menus"><a href="#" class="menuClose closeCta"><span>Close Menu</span></a>
    <div class="category"><p class="menu-header" data-menu="spacePsych">Psychological Exercises</p>
      <div id="spacePsych"><ul><li><a class="menuClose" href="${escape(base, true) + "/space/making-more-mental-space"}">Making More Mental Space</a></li>
          <li><a class="menuClose" href="${escape(base, true) + "/space/letting-go"}">Letting Go</a></li></ul></div></div>
    <div class="category"><p class="menu-header" data-menu="spaceMed">Meditations</p>
      <div id="spaceMed"><ul><li><a class="menuClose" href="${escape(base, true) + "/space/space-meditation"}">Space Meditation</a></li>
          <li><a class="menuClose" href="${escape(base, true) + "/space/sky-eating"}">Sky Eating</a></li>
          <li><a class="menuClose" href="${escape(base, true) + "/space/present-moment-meditation"}">Present Moment Meditation</a></li></ul></div></div>
    <div class="category"><p class="menu-header" data-menu="spaceClasses">Classes</p>
      <div id="spaceClasses"><ul><li><a class="menuClose" href="${escape(base, true) + "/space/dance-workshop"}">Dance Workshop</a></li></ul></div></div>
    <div class="category"><p class="menu-header" data-menu="spaceShare">Sharing</p>
      <div id="spaceShare"><ul><li><a class="menuClose" href="${escape(base, true) + "/space/sharing-space"}">Sharing the Beauty of Space</a></li></ul></div></div>
    <div class="category center"><ul><li><a class="menuClose" href="${escape(base, true) + "/space/voice-of-space"}">Voice of Space</a></li>
        <li><a href="${escape(base, true) + "/space"}" class="circle"><img class="menuClose" src="${escape(base, true) + "/assets/space-mandala.webp"}" alt=""></a></li>
        <li><a class="menuClose" href="${escape(base, true) + "/space"}">Go to Space</a></li></ul></div></div></section>
<section id="all-menu" class="menu-panel"><div class="menus"><a href="" class="menuClose closeCta"><span>Close Menu</span></a>
    <div class="category"><p class="menu-header" data-menu="allPsych">Psychological Exercises</p>
      <div id="allPsych"><ul><li><a class="menuClose" href="${escape(base, true) + "/space/making-more-mental-space"}">Making More Mental Space</a></li>
          <li><a class="menuClose" href="${escape(base, true) + "/space/letting-go"}">Letting Go</a></li>
          <li><a class="menuClose" href="${escape(base, true) + "/water/art-of-listening"}">Art of Listening</a></li>
          <li><a class="menuClose" href="${escape(base, true) + "/water/finding-flexibility"}">Finding Flexibility</a></li>
          <li><a class="menuClose" href="${escape(base, true) + "/earth/kindness-to-self"}">Kindness to Self</a></li>
          <li><a class="menuClose" href="${escape(base, true) + "/earth/path-to-the-heart"}">Path to the Heart</a></li>
          <li><a class="menuClose" href="${escape(base, true) + "/earth/quieting-inner-critic"}">Quieting Inner Critics</a></li>
          <li><a class="menuClose" href="${escape(base, true) + "/earth/the-inner-critic"}">The Inner Critic</a></li>
          <li><a class="menuClose" href="${escape(base, true) + "/earth/self-hypnosis"}">Self Hypnosis</a></li>
          <li><a class="menuClose" href="${escape(base, true) + "/fire/dissolving-anger"}">Dissolving Anger</a></li>
          <li><a class="menuClose" href="${escape(base, true) + "/fire/stop-obsessive-thinking"}">Stop Obsessive Thinking</a></li>
          <li><a class="menuClose" href="${escape(base, true) + "/wind/inaction-to-action"}">Inaction to Action</a></li>
          <li><a class="menuClose" href="${escape(base, true) + "/wind/creating-new-pathways"}">Creating New Pathways</a></li>
          <li><a class="menuClose" href="${escape(base, true) + "/wind/generosity-and-the-brain"}">Generosity and the Brain</a></li></ul></div></div>
    <div class="category"><p class="menu-header" data-menu="allMed">Meditations</p>
      <div id="allMed"><ul><li><a class="menuClose" href="${escape(base, true) + "/space/space-meditation"}">Space Meditation</a></li>
          <li><a class="menuClose" href="${escape(base, true) + "/space/sky-eating"}">Sky Eating</a></li>
          <li><a class="menuClose" href="${escape(base, true) + "/space/present-moment-meditation"}">Present Moment Meditation</a></li>
          <li><a class="menuClose" href="${escape(base, true) + "/water/water-meditation"}">Water Meditation</a></li>
          <li><a class="menuClose" href="${escape(base, true) + "/earth/grounding-meditation"}">Grounding Meditation</a></li>
          <li><a class="menuClose" href="${escape(base, true) + "/fire/fire-meditation"}">Fire Meditation</a></li></ul></div></div>
    <div class="category"><p class="menu-header" data-menu="allClasses">Classes</p>
      <div id="allClasses"><ul><li><a class="menuClose" href="${escape(base, true) + "/space/dance-workshop"}">Dance Workshop</a></li>
          <li><a class="menuClose" href="${escape(base, true) + "/earth/fresh-mind-cooking"}">Fresh Mind Cooking</a></li>
          <li><a class="menuClose" href="${escape(base, true) + "/earth/art-workshop"}">Art Workshop</a></li>
          <li><a class="menuClose" href="${escape(base, true) + "/wind/poetry-workshop"}">Poetry Workshop</a></li></ul></div>
      <p class="menu-header" data-menu="allJournals">Journals</p>
      <div id="allJournals"><ul><li><a href="${escape(base, true) + "/journals"}" class="menuClose">Explore Your Experience</a></li></ul></div></div>
    <div class="category"><p class="menu-header" data-menu="allPod">Podcasts</p>
      <div id="allPod"><ul><li><a class="menuClose" href="${escape(base, true) + "/water/podcast-resilience"}">Resilience Podcast</a></li>
          <li><a class="menuClose" href="${escape(base, true) + "/water/podcast-flow"}">Flow Podcast</a></li>
          <li><a class="menuClose" href="${escape(base, true) + "/fire/podcast-creativity"}">Creativity Podcast</a></li>
          <li><a class="menuClose" href="${escape(base, true) + "/wind/podcast-freedom"}">Freedom Podcast</a></li></ul></div>
      <p class="menu-header" data-menu="allJournals">About</p>
      <div id="allAbout"><ul><li><a href="${escape(base, true) + "/about"}" class="menuClose">The Project</a></li>
          <li><a class="menuClose" href="${escape(base, true) + "/meet-the-guardians"}">Meet the Guardians</a></li></ul></div></div>
    <div class="category"><p class="menu-header" data-menu="allShare">Sharing</p>
      <div id="allShare"><ul><li><a class="menuClose" href="${escape(base, true) + "/space/sharing-space"}">Sharing the Beauty of Space</a></li>
          <li><a class="menuClose" href="${escape(base, true) + "/water/sharing-water"}">Sharing Visions of Water</a></li>
          <li><a class="menuClose" href="${escape(base, true) + "/earth/sharing-earth"}">Sharing the Beauty of Earth</a></li>
          <li><a class="menuClose" href="${escape(base, true) + "/fire/sharing-fire"}">Sharing the Passion of Fire</a></li>
          <li><a class="menuClose" href="${escape(base, true) + "/wind/sharing-wind"}">Sharing the Freedom of Wind</a></li>
          <li><a class="menuClose" href="${escape(base, true) + "/wind/music-chamber"}">Music Chamber</a></li>
          <li><a class="menuClose" href="${escape(base, true) + "/wind/changing-your-mood"}">Changing Your Mood</a></li></ul></div></div></div></section>`;
});
export {
  Layout as default
};
